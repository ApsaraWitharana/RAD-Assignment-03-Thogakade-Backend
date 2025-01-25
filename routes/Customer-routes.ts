import express from "express";
import {Customer} from "../model/Customer";
import {CustomerAdd} from "../controller/CustomerController";

const router = express.Router();

router.post("/add", async(req, res) => {
    console.log(req.body);
    const customer:Customer = req.body;
    try {
        const addedCustomer = await CustomerAdd(customer);
        res.json(addedCustomer);
    }catch (err){
    console.log("Customer adding error",err);
    res.status(400).send("error adding customer");
    }
})

export default router;