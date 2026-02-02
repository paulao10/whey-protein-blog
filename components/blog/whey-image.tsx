import Image from "next/image";

interface WheyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function WheyImage({ 
  src, 
  alt, 
  width = 400, 
  height = 400, 
  className = "",
  priority = false
}: WheyImageProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        priority={priority}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/placeholder.jpg';
        }}
      />
    </div>
  );
}