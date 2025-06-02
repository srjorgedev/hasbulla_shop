import { atom } from "nanostores";

export const isCartOpen = atom(false);
export const cartItems = atom<{ id: string; quantity: number }[]>([]);