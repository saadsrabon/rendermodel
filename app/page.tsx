import { ProductGrid } from "@/features/products/components/product-grid";
import { Product } from "@/features/products/types/product";

// Sample products - replace with your actual products and GLB files
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Modern T-Shirt",
    description: "A sleek and comfortable t-shirt perfect for any space.",
    price: 299.99,
   
    glbModel: "/models/t-shirt.glb",
    category: "Tshirt",
  },
  {
    id: "2",
    name: "Designer T-Shirt",
    description: "      `Elegant designer lamp with adjustable brightness.",
    price: 149.99,
 
    glbModel: "/models/tshirt.glb",
    category: "Lighting",
  },
  {
    id: "3",
    name: "Coffee Table",
    description: "Minimalist coffee table with premium wood finish.",
    price: 399.99,
   
    glbModel: "/models/cyberpunk_suit.glb",
    category: "Furniture",
  },
  {
    id: "4",
    name: "Vase Set",
    description: "Beautiful ceramic vase set for home decoration.",
    price: 79.99,
   
    glbModel: "fggf",
    category: "Decor",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">3D Model Store</h1>
          <p className="text-muted-foreground">
            Browse our collection and try products in Augmented Reality
          </p>
        </div>
        <ProductGrid products={sampleProducts} />
      </div>
    </main>
  );
}

