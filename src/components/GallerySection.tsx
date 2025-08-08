// components/GallerySection.tsx
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Painting {
  id: number;
  title: string;
  description: string;
  technique: string;
  image_url: string;
  created_at: string;
}

interface GallerySectionProps {
  id: string;
  title: string;
  description: string;
  color: "watercolor" | "acrylic" | "oil" | "pencil";
}

const GallerySection = ({
  id,
  title,
  description,
  color,
}: GallerySectionProps) => {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(
    null
  );

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/paintings/?technique=${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPaintings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        console.error("Error fetching paintings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPaintings();
  }, [id]);

  const colorVariants = {
    watercolor: "from-blue-400 to-blue-600",
    acrylic: "from-purple-500 to-pink-500",
    oil: "from-yellow-500 to-orange-500",
    pencil: "from-gray-400 to-gray-600",
  };

  if (loading) {
    return (
      <section id={id} className="py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <p>Képek betöltése...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id={id} className="py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center text-red-500">
          <p>Hiba történt a képek betöltése közben: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${colorVariants[color]} mb-6`}
          >
            <span className="text-2xl text-white font-bold">
              {title.charAt(0)}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <Card
              key={painting.id}
              className="group hover-lift cursor-pointer border-0 shadow-soft hover:shadow-medium overflow-hidden"
              onClick={() => setSelectedPainting(painting)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={painting.image_url}
                    alt={painting.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {painting.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {painting.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for selected painting */}
        {selectedPainting && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedPainting(null)}
          >
            <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {selectedPainting.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {selectedPainting.description}
                </p>
              </div>
              <img
                src={selectedPainting.image_url}
                alt={selectedPainting.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
