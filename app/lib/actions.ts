'use server';

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { amazonScraper } from "./scrapers/amazon";

const prisma = new PrismaClient();

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

  revalidatePath('/dashboard/brands');
  redirect('/dashboard/brands');
}

export async function createModel(formData: FormData) {
  const rawFormData = {
    brandId: formData.get('brandId') as string,
    link: formData.get('link') as string,
  };

  const scrapedData = await amazonScraper(rawFormData.link);

  console.log('Create Model', scrapedData.modelNumber, scrapedData.scraperCode, scrapedData.size, scrapedData.cacheSize    );
    
  await prisma.models.create({
    data: {
      brandsId: rawFormData.brandId,
      modelNumber: scrapedData.modelNumber,
      size: scrapedData.size,
      cacheSize: scrapedData.cacheSize,
      link: rawFormData.link,
      scraperCode: scrapedData.scraperCode
    }
  });

  revalidatePath('/dashboard/models');
  redirect('/dashboard/models');
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

export async function deleteBrand(id: string) {
  await prisma.brands.delete({
    where: {
      id: id
    }
  });

  revalidatePath('/dashboard/brands');
}

export async function updateModel(id: string, formData: FormData) {
  const rawFormData = {
    modelNumber: formData.get('modelNumber') as string,
    size: formData.get('size') as string,
    link: formData.get('link') as string,
    scraperCode: formData.get('scraperCode') as string,
    brandId: formData.get('brandId') as string
  }

  await prisma.models.update({
    where: {
      id: id
    },
    data: {
      modelNumber: rawFormData.modelNumber,
      size: rawFormData.size,
      link: rawFormData.link,
      scraperCode: rawFormData.scraperCode,
      brandsId: rawFormData.brandId
    }
  });

  revalidatePath('/dashboard/models');
  redirect('/dashboard/models');
}

export async function deleteModel(id: string) {
  await prisma.models.delete({
    where: {
      id: id
    }
  });

  revalidatePath('/dashboard/brands');
}