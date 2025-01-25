import express from "express";
import {Customer} from "../model/Customer";
import {CustomerAdd, CustomerUpdate, getAllCustomers} from "../controller/CustomerController";

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

router.put("/update/:CustomerID",async(req, res) => {
     const CustomerId:number =+ req.params.CustomerID;
     const customer:Customer = req.body;

     try {
         const updatedCustomer = await CustomerUpdate(CustomerId,customer);
         res.json(updatedCustomer);
     }catch (err){
         console.log("error updating customer",err);
     }
})
router.get("/get", async(req, res) => {

    try{
        const customers = await getAllCustomers();
        res.json(customers);
    }catch (err){
        console.log("error getting customers",err);
    }

})
export default router;