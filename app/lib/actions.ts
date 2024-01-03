'use server';

import { prisma } from "./data";
import { URLSearchParams } from "url";

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    }

    formData.en

    const queryString = new URLSearchParams(new FormData(formData)).toString();

    console.log(rawFormData);    
    prisma.invoices.create({
        data: {
            amount: rawFormData.amount,

        }
    })
}