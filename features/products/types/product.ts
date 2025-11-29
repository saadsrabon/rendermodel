export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;

  glbModel: string; // Path to GLB file
  category?: string;
}

