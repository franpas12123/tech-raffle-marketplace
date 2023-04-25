declare interface Product {
  name: string;
  productImgSrc?: string;
  description: string;
  price: number;
  stock: number;
  category?: Category;
}

declare interface Winners extends Product {
  ticketNumber: string,
  announcedOn: Date,
}

declare interface Category {
  name: string;
}

export { Product, Winners, Category };