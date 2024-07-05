import { create } from "zustand";

type useCartProps = {
    isOpen : boolean;
    onOpen : ()=>void;
    onClose : ()=>void;
}

export const useCart = create<useCartProps>((set)=>({
    isOpen:false,
    onOpen : ()=>{set({isOpen : true})},
    onClose : ()=>{set({isOpen : false})}
}))