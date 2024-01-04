'use server';

import { prisma } from "./data";
import { URLSearchParams } from "url";

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerId: formData.get('customerId') as string,
        amount: formData.get('amount') as string,
        status: formData.get('status') as 'pending' | 'paid'
    }

    console.log(rawFormData);    
    await prisma.invoices.create({
        data: {
            customerId: rawFormData.customerId,
            amount: +rawFormData.amount,
            status: rawFormData.status

        }
    })
}

export async function createCustomer(formData: FormData) {
    const rawFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        image_url: formData.get('image_url') as string
    };

    console.log(rawFormData);
    const post = await prisma.customers.create({
        data: {
            name: rawFormData.name,
            email: rawFormData.email,
            image_url: rawFormData.image_url
        },
    });
    console.log(post);    
}