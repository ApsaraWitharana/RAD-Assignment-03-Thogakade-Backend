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

export async function CustomerUpdate(CustomerId:number,customer:Customer){
    try {
        const updateCustomer = await prisma.customer.update({
            where:{Email:customer.Email},
            data:{
                Name:customer.Name,
                Address:customer.Address
            }
        })
        console.log("Customer update:",updateCustomer);
        return updateCustomer;
    }catch (err){
        console.log("error updating customer",err);
    }
}

export async function getAllCustomers(){
    try {
        return await prisma.customer.findMany();
    }catch (err){
        console.log("error getting customers from prisma data",err);
    }
}