# 3D Model E-Commerce Site

A modern e-commerce frontend with Augmented Reality (AR) support for viewing 3D products. Built with Next.js, TypeScript, Tailwind CSS, and shadcn UI components.

## Features

- 🛍️ **Product Catalog**: Browse products with beautiful card layouts
- 🥽 **AR Support**: Try products in Augmented Reality using WebXR
- 🎨 **Modern UI**: Dark theme with orange primary color (#fc7f03)
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Add your GLB files to the `public/models/` directory:
   - Place your `.glb` files in `public/models/`
   - Update the product data in `app/page.tsx` to reference your GLB files

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with dark theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page with products
├── components/
│   └── ui/                # shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── dialog.tsx
├── features/
│   └── products/          # Product feature (feature-first architecture)
│       ├── components/
│       │   ├── ar-viewer.tsx    # AR viewer component
│       │   ├── product-card.tsx # Product card component
│       │   └── product-grid.tsx # Product grid layout
│       └── types/
│           └── product.ts       # Product type definitions
├── lib/
│   └── utils.ts          # Utility functions
└── public/
    └── models/           # Place your GLB files here
```

## Adding Products

Edit `app/page.tsx` to add your products. Each product needs:

- `id`: Unique identifier
- `name`: Product name
- `description`: Product description
- `price`: Product price
- `image`: Product image URL (or local path)
- `glbModel`: Path to GLB file in `public/models/` (e.g., `/models/chair.glb`)

Example:
```typescript
{
  id: "1",
  name: "My Product",
  description: "Product description",
  price: 99.99,
  image: "/images/product.jpg",
  glbModel: "/models/product.glb",
}
```

## AR Features

The AR viewer uses [model-viewer](https://modelviewer.dev/) which supports:

- **WebXR**: For AR on supported browsers/devices
- **Scene Viewer**: For Android devices
- **Quick Look**: For iOS devices

### AR Requirements

- **Mobile**: Works best on mobile devices with AR support
- **Desktop**: Some browsers support WebXR (Chrome, Edge)
- **HTTPS**: AR features require HTTPS (or localhost for development)

## Customization

### Theme Colors

Edit `app/globals.css` to customize theme colors. The primary color is set to `#fc7f03` (orange).

### Fonts

The project is configured to use "Tiro Bangla" for Bangla text. Font configuration is in `app/globals.css`.

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **shadcn UI**: UI components
- **model-viewer**: 3D model and AR viewer
- **Radix UI**: Accessible component primitives

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers with AR support

## License

MIT

