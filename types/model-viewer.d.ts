declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.AllHTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        ar?: boolean;
        "ar-modes"?: string;
        "environment-image"?: string;
        "auto-rotate"?: boolean;
        "camera-controls"?: boolean;
        "ios-src"?: string;
        "xr-environment"?: boolean;
        loading?: "auto" | "lazy" | "eager";
        "touch-action"?: string;
      },
      HTMLElement
    >;
  }
}

