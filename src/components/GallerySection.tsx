import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface GallerySectionProps {
  id: string;
  title: string;
  description: string;
  color: 'watercolor' | 'acrylic' | 'oil' | 'pencil';
}

const GallerySection = ({ id, title, description, color }: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder képek - ezeket cserélheted ki valódi képekre
  const placeholderImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `${title} Mű ${i + 1}`,
    description: `Gyönyörű ${title.toLowerCase()} alkotás`,
    imageUrl: `https://picsum.photos/400/300?random=${id}-${i}`
  }));

  const colorVariants = {
    watercolor: 'from-artist-blue to-primary',
    acrylic: 'from-primary to-artist-turquoise',
    oil: 'from-artist-turquoise to-artist-blue',
    pencil: 'from-muted to-primary'
  };

  return (
    <section id={id} className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`slide-in-left inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${colorVariants[color]} mb-6`}>
            <span className="text-2xl text-white font-bold">{title.charAt(0)}</span>
          </div>
          
          <h2 className="slide-in-right text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          
          <p className="fade-in-up text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderImages.map((image, index) => (
            <Card 
              key={image.id} 
              className={`fade-in-up stagger-${Math.min(index % 4 + 1, 4)} group hover-lift cursor-pointer border-0 shadow-soft hover:shadow-medium overflow-hidden`}
              onClick={() => setSelectedImage(image.id)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 fade-in-up stagger-4">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            További munkák betöltése
          </Button>
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={placeholderImages.find(img => img.id === selectedImage)?.imageUrl}
                alt="Nagyított kép"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;