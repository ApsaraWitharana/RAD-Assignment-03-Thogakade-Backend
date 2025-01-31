export class Order{
    OrderID   :   number
    CustomerID  : number
    OrderDate  :  string


    constructor(OrderID: number, CustomerID: number, OrderDate: string) {
        this.OrderID = OrderID;
        this.CustomerID = CustomerID;
        this.OrderDate = OrderDate;
    }
}

export class Item{
    ItemID:number
    Name:string
    Quantity:number
    Price:number


    constructor(ItemID: number, Name: string, Quantity: number, Price: number) {
        this.ItemID = ItemID;
        this.Name = Name;
        this.Quantity = Quantity;
        this.Price = Price;
    }
}

import {name} from "express";

export class Customer {
    CustomerID:number;
    Name: string;
    Address: string;
    Email: string;


    constructor(CustomerID: number, Name: string, Address: string, Email: string) {
        this.CustomerID = CustomerID;
        this.Name = Name;
        this.Address = Address;
        this.Email = Email;
    }
}