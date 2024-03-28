export interface Product {
  id: Number;
  ref: Number;
  desc: String;
  brand: String;
  img: String;
  inStock: boolean;
  category?: String;
  price: Number;
  createdAt?: Date;
}
