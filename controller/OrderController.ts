// controllers/OrderController.ts
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const addOrder = async (req: Request, res: Response) => {
    const { CustomerID, orderDetails } = req.body;

    try {
        const newOrder = await prisma.order.create({
            data: {
                CustomerID,
                orderDetails: {
                    create: orderDetails.map((detail: any) => ({
                        ItemID: detail.ItemID,
                        Quantity: detail.Quantity,
                        Price: detail.Price,
                    })),
                },
            },
            include: {
                orderDetails: true,
            },
        });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create order', details: error });
    }
};
