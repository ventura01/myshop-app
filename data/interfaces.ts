export interface Product {
  id: string;
  ref: number;
  desc: string;
  brand: string;
  img: string;
  inStock: boolean;
  category?: string;
  price: number;
  createdAt?: Date;
}[];
