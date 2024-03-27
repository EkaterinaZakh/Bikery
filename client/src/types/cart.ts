export type CartType = {
    // id: number,
    userId: number,
    productId: number,
}

export type CartTypeState = {
    cart: CartType[];
}