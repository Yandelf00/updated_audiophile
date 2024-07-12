import { create } from "zustand";


type itemInCart = {
    miniImage : string|undefined
    name : string|undefined
    price : number|undefined
    amount : number
}

type useItemsCartProps = {
    item : itemInCart[]
    addItem : (miniImage:string|undefined, name:string|undefined, price:number|undefined, amount:number)=>void
    deleteAllItems:()=>void
}

export const useItemsCart = create<useItemsCartProps>((set, get)=>({
    item : [],
    addItem : (miniImage, name, price, amount)=>{
        const prevItem = get().item;
        const itemIndex = prevItem.findIndex(item => item.name === name);

        if (itemIndex > -1) {
        const newItem = [...prevItem];
        newItem[itemIndex] = {
            ...newItem[itemIndex],
            amount: newItem[itemIndex].amount + amount,
        };
        set({ item: newItem });
        } else {
        const newItem = { miniImage, name, price, amount };
        set({ item: [...prevItem, newItem] });
            
    }},
    deleteAllItems : ()=>{set({item : []})}
}))
