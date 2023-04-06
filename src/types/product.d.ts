declare interface Product {
  title: string;
  productImgSrc: string;
  details: string;
  price: number;
}

declare interface Winners extends Product {
    ticketNumber: string,
    announcedOn: Date,
}

export { Product, Winners };