import {PrismaClient} from "@prisma/client";
import {Customer} from "../model/Customer";

const prisma = new PrismaClient();

export async function CustomerAdd(customer:Customer){

    try {
        const newCustomer =await prisma.customer.create({
            data:{
                Name:customer.Name,
                Address:customer.Address,
                Email:customer.Email,
            }
        })

        console.log("Customer added:",newCustomer);
        return newCustomer;
    }catch (err){
        console.log('Error adding customer',err);
    }
}