"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ARViewer } from "./ar-viewer";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [arOpen, setArOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative w-full h-64 bg-muted">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-center text-muted-foreground p-4">
              <div>
                <p className="text-sm font-medium">3D Model</p>
                <p className="text-xs mt-2">Click "Try" to view in AR</p>
              </div>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setArOpen(true)}
          >
            Try
          </Button>
          <Button variant="default" className="flex-1">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>

      <ARViewer
        open={arOpen}
        onOpenChange={setArOpen}
        glbModel={product.glbModel}
        productName={product.name}
      />
    </>
  );
}


