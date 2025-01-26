import express from "express";
import {Item} from "../model/Item";
import {getAllItems, ItemAdd, ItemDelete, ItemUpdate} from "../controller/ItemController";

const router = express.Router();

router.post("/add", async(req, res) => {
    console.log(req.body);
    const item:Item = req.body;

    try {
        const addedItem = await ItemAdd(item);
        res.json(addedItem);
    }catch (err){
        console.log("Item adding error",err);
        res.status(400).send("error adding items");
    }
})

router.put("/update/:ItemID",async (req,res)=>{
    const ItemId:number =+ req.params.ItemID;
    const item:Item = req.body;

    try {
        const updatedItem = await ItemUpdate(ItemId,item);
        if (updatedItem){
            res.json(updatedItem);
        }else {
            res.status(404).json({ error: "Item not found" });
        }

    }catch (err){
        console.log("error updating item",err);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get("/get",async (req,res)=>{
    try {
        const items = await getAllItems();
        res.json(items);
    }catch (err){
        console.log("error deleting item",err);
    }
})

router.delete("/delete/:ItemID", async (req, res) => {
    const ItemID: number = parseInt(req.params.ItemID, 10);

    try {
        const deletedItem = await ItemDelete(ItemID);
        if (deletedItem) {
            res.json(deletedItem);
        } else {
            res.status(404).json({ error: "Item not found" });
        }
    } catch (err) {
        console.error("Error deleting item:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
export default router;