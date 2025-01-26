import { Item } from "../model/Item";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ItemAdd(item: Item) {
    try {
        const newItem = await prisma.item.create({
            data: {
                Name: item.Name,
                Quantity: item.Quantity,
                Price: item.Price,
            },
        });
        console.log("Item added:", newItem);
        return newItem;
    } catch (err) {
        console.error("Error adding item:", err);
    }
}

export async function ItemUpdate(ItemId: number, item: Item) {
    try {
        const updateItem = await prisma.item.update({
            where: { ItemID: ItemId },
            data: {
                Name: item.Name,
                Quantity: item.Quantity,
                Price: item.Price,
            },
        });
        console.log("Item updated:", updateItem);
        return updateItem;
    } catch (err) {
        console.error("Error updating item:", err);
    }
}

export async function getAllItems(){
    try {
        return await prisma.item.findMany();
    }catch (err){
        console.log("error getting item from prisma data",err);
    }
}


export async function ItemDelete(ItemId:number){
    try {
        const deleteItem = await prisma.item.delete({
            where:{ItemID:ItemId}
        });
        console.log('Item deleted:',ItemId);
        return deleteItem;
    }catch (err){
        console.log("error deleting item",err);
    }
}