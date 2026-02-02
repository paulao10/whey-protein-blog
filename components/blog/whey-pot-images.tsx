import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WheyPotImageProps {
  productName: string;
  imageUrl: string;
  altText: string;
  description?: string;
  badge?: string;
  className?: string;
}

export function WheyPotImage({ 
  productName, 
  imageUrl, 
  altText,
  description,
  badge,
  className = "" 
}: WheyPotImageProps) {
  return (
    <Card className={`overflow-hidden group hover:shadow-lg transition-all duration-300 border-border ${className}`}>
      <CardContent className="p-0">
        <div className="relative aspect-square bg-secondary/50 flex items-center justify-center overflow-hidden">
          {badge && (
            <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
              {badge}
            </Badge>
          )}
          <Image
            src={imageUrl}
            alt={altText}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-foreground text-lg mb-1">{productName}</h3>
          {description && (
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function WheyPotGrid() {
  const wheyProducts = [
    {
      name: "Whey Concentrado",
      image: "/images/whey-pots/whey-concentrado.jpg",
      alt: "Pote de Whey Protein Concentrado",
      description: "80% de proteina, boa relacao custo-beneficio",
      badge: "Popular"
    },
    {
      name: "Whey Isolado",
      image: "/images/whey-pots/whey-isolado.jpg",
      alt: "Pote de Whey Protein Isolado",
      description: "90%+ de proteina, baixo em lactose",
      badge: "Premium"
    },
    {
      name: "Whey Hidrolisado",
      image: "/images/whey-pots/whey-hidrolisado.jpg",
      alt: "Pote de Whey Protein Hidrolisado",
      description: "Absorcao ultra-rapida, pre-digerido",
      badge: "Pro"
    },
    {
      name: "Blend de Whey",
      image: "/images/whey-pots/whey-blend.jpg",
      alt: "Pote de Blend de Whey Protein",
      description: "Combinacao de varios tipos de whey",
      badge: "Versatil"
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
          description={product.description}
          badge={product.badge}
        />
      ))}
    </div>
  );
}
