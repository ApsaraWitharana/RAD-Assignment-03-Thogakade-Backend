import express from "express";
import {Customer} from "../model/Customer";
import {CustomerAdd, CustomerDelete, CustomerUpdate, getAllCustomers} from "../controller/CustomerController";
import e from "express";

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
         if (updatedCustomer){
             res.json(updatedCustomer);
         }else {
             res.status(404).json({ error: "Customer not found" });
         }

     }catch (err){
         console.log("error updating customer",err);
         res.status(500).json({ error: "Internal server error" });

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

router.delete("/delete/:Email", async (req, res) => {
    const Email:string = req.params.Email;
    try {
        const deletedCustomer = await CustomerDelete(Email);
        if (deletedCustomer){
            res.json(deletedCustomer);
        }else {
            res.status(404).json({ error: "Customer not found" });
        }

    }catch (err){
        console.log('error deleting customer',err);
        res.status(500).json({ error: "Internal server error" });

    }
})
export default router;