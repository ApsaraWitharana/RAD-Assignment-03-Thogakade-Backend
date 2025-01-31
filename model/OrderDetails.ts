export class OrderDetails{
    OrderDetailsId:number
    OrderId:number
    ItemId:number
    Quantity:number
    Price:number


    constructor(OrderDetailsId: number, OrderId: number, ItemId: number, Quantity: number, Price: number) {
        this.OrderDetailsId = OrderDetailsId;
        this.OrderId = OrderId;
        this.ItemId = ItemId;
        this.Quantity = Quantity;
        this.Price = Price;
    }
}