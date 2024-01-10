"use server";
import { sql } from '@vercel/postgres';
import {
  InvoiceForm,
  User,
} from './definitions';
import { formatCurrency } from './utils';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query"
    }
  ]
});

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    //const data = await sql<Revenue>`SELECT * FROM revenue`;

    const data = prisma.revenue.findMany();

    // console.log('Data fetch completed after 3 seconds.');

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const invoices = await prisma.invoices.findMany({
      include: {
        customer: true
      },
    });

    invoices.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
    const trimedInvoices = invoices.slice(invoices.length - 5, invoices.length);
    const reducedInvoices = trimedInvoices.map(invoice => {
      return {
        id: invoice.id.toString(),
        name: invoice.customer.name,
        image_url: invoice.customer.image_url,
        email: invoice.customer.email,
        amount: formatCurrency(invoice.amount),
      }
    });

    return reducedInvoices;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await prisma.invoices.findMany({
      include: {
        customer: {}
      },
      orderBy: {
        date: "desc"
      }
    });

    const invoices = data.map((invoice) => {
      if (invoice.customer.name.includes(query)
        || invoice.customer.email.includes(query)
        || invoice.amount == +query
        || invoice.date.toString().includes(query)
        || invoice.status.includes(query)) {
        return {
          id: invoice.id,
          amount: invoice.amount,
          date: invoice.date,
          status: invoice.status,
          name: invoice.customer.name,
          email: invoice.customer.email,
          image_url: invoice.customer.image_url,
        }
      }
    });

    return invoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchFilteredModels(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await prisma.models.findMany({
      include: {
        brands: {}
      },
      orderBy: {
        size: "asc"
      }
    });

    const models = data.map((model) => {
      if (model.brands?.name.includes(query)
        || model.brands?.website.includes(query)
        || model.link.includes(query)
        || model.modelNumber.includes(query)
        || model.scraperCode.includes(query)
        || model.size.includes(query)) {
        return {
          id: model.id,
          brandName: model.brands?.name,
          link: model.link,
          modelNumber: model.modelNumber,
          scraperCode: model.scraperCode,
          size: model.size,
          cacheSize: model.cacheSize
        }
      }
    });

    return models;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch models.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchModels() {
  try {
    const brands = prisma.models.findMany({
      orderBy: [
        {
          modelNumber: 'asc',
          size: 'asc'
        }
      ]
    })

    return brands;
  }
  catch (err) {
    console.error('Datbase Error:', err);
    throw new Error('Failed to fetch all models');
  }
}

export async function fetchModelById(id: string) {
  try {
    // const data = await sql<InvoiceForm>`
    //   SELECT
    //     invoices.id,
    //     invoices.customer_id,
    //     invoices.amount,
    //     invoices.status
    //   FROM invoices
    //   WHERE invoices.id = ${id};
    // `;

    const data = await prisma.models.findFirst({
      select: {
        id: true,
        modelNumber: true,
        size: true,
        link: true,
        scraperCode: true,
        brandsId: true,
      },
      where: {
        id: id
      }
    });

    return data;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch model.');
  }
}

export async function fetchModelsByBrandId(brandId: string) {
  const models = await prisma.models.findMany({
    where: {
      brandsId: brandId
    },
    orderBy: {
      size: 'asc'
    }
  })

  return models;
}

export async function fetchCustomers() {
  try {
    const customers = prisma.customers.findMany({
      orderBy: [
        {
          name: 'asc',
        },
      ],
    });


    return customers;
  }
  catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await prisma.customers.findMany({
      include: {
        invoices: {}
      }
    });

    const customers = data.map((customer) => {
      let total_pending = 0;
      let total_paid = 0;
      customer.invoices.forEach(i => (i.status == 'paid') ? (total_paid += i.amount) : (total_pending += i.amount))

      return {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        image_url: customer.image_url,
        total_invoices: customer.invoices.length,
        total_pending: formatCurrency(total_pending),
        total_paid: formatCurrency(total_paid)
      };
    });

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function fetchBrands() {
  try {
    const brands = prisma.brands.findMany({
      orderBy: [
        {
          name: 'asc',
        }
      ]
    })

    return brands;
  }
  catch (err) {
    console.error('Datbase Error:', err);
    throw new Error('Failed to fetch all brands');
  }
}

export async function fetchBrandById(id: string) {
  const data = await prisma.brands.findFirst({
    where: {
      id: id
    }
  });

  const brand = {
    id: data?.id as string,
    name: data?.name as string,
    website: data?.website as string,
  }

  console.log('fetchBrandById', brand);
  return brand;
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getModelsIncludingPriceHistory() {
  try {
    const models = await prisma.models.findMany({
      include: {
        priceHistory: true
      }
    });

    const priceHistory = models.map((model) => {
      let avgPrice = 0.0;
      model.priceHistory.forEach((ph) => {
        avgPrice += ph.price;
      })

      avgPrice /= model.priceHistory.length;
      if (Number.isNaN(avgPrice))
        avgPrice = 0;

      return {
        modelId: model.id,
        modelNumber: model.modelNumber,
        size: model.size,
        avgPrice: avgPrice,
        priceHistoryLength: model.priceHistory ? model.priceHistory.length : 0
      };
    });

    return priceHistory;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to get models including price history.');
  }
}

export async function getPriceHistory(id: string) {
  try {
    console.log('getPriceHistory', id);
    const priceHistory = await prisma.priceHistory.findMany({
      where: {
        modelId: id
      }
    });

    console.log('Price History', priceHistory.length)

    return priceHistory;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to get price history.');
  }
}