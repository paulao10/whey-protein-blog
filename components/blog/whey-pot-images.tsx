import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WheyPotImageProps {
  productName: string;
  imageUrl: string;
  altText: string;
  className?: string;
}

export function WheyPotImage({ 
  productName, 
  imageUrl, 
  altText, 
  className = "" 
}: WheyPotImageProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{productName}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex justify-center">
        <div className="w-48 h-64 flex items-center justify-center p-4">
          <img
            src={imageUrl}
            alt={altText}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function WheyPotGrid() {
  const wheyProducts = [
    {
      name: "Whey Protein Concentrado",
      image: "/images/whey-pots/placeholders/wpc.svg",
      alt: "Pote de Whey Protein Concentrado"
    },
    {
      name: "Whey Protein Isolado",
      image: "/images/whey-pots/placeholders/wpi.svg",
      alt: "Pote de Whey Protein Isolado"
    },
    {
      name: "Whey Protein Hidrolisado",
      image: "/images/whey-pots/placeholders/wph.svg",
      alt: "Pote de Whey Protein Hidrolisado"
    },
    {
      name: "Blend de Whey",
      image: "/images/whey-pots/placeholders/blend.svg",
      alt: "Pote de Blend de Whey Protein"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      {wheyProducts.map((product, index) => (
        <WheyPotImage
          key={index}
          productName={product.name}
          imageUrl={product.image}
          altText={product.alt}
        />
      ))}
    </div>
  );
}