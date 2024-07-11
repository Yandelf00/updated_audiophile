import { create } from "zustand";


type itemInCart = {
    miniImage : string
    name : string
    price : number
    amount : number
}

type useItemsCartProps = {
    item : itemInCart[]

}