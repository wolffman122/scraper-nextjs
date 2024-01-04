'use server';

import { raw } from "@prisma/client/runtime/library";
import { prisma } from "./data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function createBrand(formData: FormData) {
    const rawFormData = {
        name: formData.get('name') as string,
        website: formData.get('website') as string
    }

    await prisma.brands.create({
        data: {
            name: rawFormData.name,
            website: rawFormData.website
        },
    });
}

export async function updateBrand(id: string, formData: FormData) {
    const rawFormData = {
        name: formData.get('name') as string,
        website: formData.get('website') as string,
    }

    console.log('UpdateBrandbyId', rawFormData);

    await prisma.brands.update({
        where: {
            id: id
        },
        data: {
            name: rawFormData.name,
            website: rawFormData.website
        }
    });

    revalidatePath('/dashboard/brands');
    redirect('/dashboard/brands');
}