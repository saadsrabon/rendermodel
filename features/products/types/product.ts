export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string; // Optional product image
  glbModel: string; // Path to GLB file
  category?: string;
}


