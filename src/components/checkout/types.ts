export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: string;
  selected?: boolean;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description?: string;
  icons?: string[];
  selected?: boolean;
}

export interface OrderSummaryProps {
  products: Product[];
  subtotal: string;
  shipping: string;
  taxes: string;
  total: string;
}
