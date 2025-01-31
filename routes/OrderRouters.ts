import express from "express";
import {addOrder} from "../controller/OrderController";

const router = express.Router()

router.post('/place-order',async (req,res)=>{

const order =req.body
    try {
        const savedOrder = await addOrder(req,res)
        res.send(savedOrder);
    }catch (err){
      res.status(400).send('failed to save')
      console.log(err);
    }
})

export default router;