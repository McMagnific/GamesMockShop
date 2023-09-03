export interface Cart {
    customerId: number;
    gameId: number;
    quantity: number;

}

export interface CartItem {
    id:number;
    customerId: number;
    gameId: number;
    quantity: number;

}