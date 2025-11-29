"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ARViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  glbModel: string;
  productName: string;
}

export function ARViewer({ open, onOpenChange, glbModel, productName }: ARViewerProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      // Check if model-viewer is already loaded
      if (customElements.get("model-viewer")) {
        setScriptLoaded(true);
        return;
      }

      // Dynamically load model-viewer script
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
      script.async = true;

      script.onload = () => {
        setScriptLoaded(true);
        setError(null);
      };

      script.onerror = () => {
        setError("Failed to load AR viewer. Please check your internet connection.");
      };

      if (!document.querySelector('script[src*="model-viewer"]')) {
        document.head.appendChild(script);
      } else {
        // Script already exists, wait a bit for it to load
        setTimeout(() => {
          if (customElements.get("model-viewer")) {
            setScriptLoaded(true);
          }
        }, 500);
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full h-[90vh] p-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle>Try {productName} in AR</DialogTitle>
          <DialogDescription>
            View this product in Augmented Reality. Use the AR button to place it in your space.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 relative w-full min-h-[500px] bg-gradient-to-br from-muted/50 to-muted rounded-lg overflow-hidden m-6">
          {error ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <p className="text-destructive mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>Reload Page</Button>
            </div>
          ) : !scriptLoaded ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading AR viewer...</p>
              </div>
            </div>
          ) : (
            <model-viewer
              src={glbModel}
              alt={productName}
              ar
              ar-modes="webxr scene-viewer quick-look"
              environment-image="neutral"
              auto-rotate
              camera-controls
              touch-action="pan-y"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
              }}
              ios-src={glbModel}
              xr-environment
              loading="eager"
            >
              <div
                slot="ar-button"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "12px 24px",
                  backgroundColor: "#fc7f03",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  zIndex: 10,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                View in AR
              </div>
            </model-viewer>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

