// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type BrandField = {
  id: string;
  name: string;
}

export type BrandForm = {
  id: string
  name: string;
  website: string;
}

export type ModelField = {
  id: string;
  modelNumber: string;
  size: string
}

export type ModelForm = {
  id: string,
  modelNumber: string,
  size: string,
  link: string,
  scraperCode: string,
  brandId: string
}

export interface Model {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  modelNumber: string;
  size: number;
  cacheSize: number;
  link: string;
  scraperCode: string;
  brandsId: string | null;
};

export type ModelsWithPH = ({
  priceHistory: {
      id: string;
      createdAt: Date;
      price: number;
      modelId: string;
  }[];
} & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  modelNumber: string;
  size: number;
  cacheSize: number;
  link: string;
  scraperCode: string;
  brandsId: string | null;
});

export interface WDAmazonData {
  modelNumber: string;
  size: string;
  cacheSize: string;
  scraperCode: string;
}