
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images?: string[];
  category?: string;
  brand?: string;
  rating?: number;
  stock?: number;
}

export interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
