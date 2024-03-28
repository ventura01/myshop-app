export interface Product {
  map(arg0: (product: any) => import("react").JSX.Element): import("react").ReactNode;
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
