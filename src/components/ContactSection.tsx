import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Itt implementálhatod az üzenet küldési logikát
    toast({
      title: "Üzenet elküldve!",
      description: "Köszönöm az érdeklődést, hamarosan válaszolok.",
    });
    
    // Form reset
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-soft">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="slide-in-left inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="slide-in-right text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kapcsolat
          </h2>
          
          <p className="fade-in-up text-lg text-muted-foreground max-w-2xl mx-auto">
            Érdekel egy egyedi megrendelés vagy kérdésed van a munkáimmal kapcsolatban? 
            Vedd fel velem a kapcsolatot!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="slide-in-left space-y-8">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  Művészeti szolgáltatások
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  • Egyedi portré készítés<br />
                  • Tájképek és természet ábrázolás<br />
                  • Különleges alkalmakra készült művek<br />
                  • Művészeti oktatás és workshopok
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="fade-in-up stagger-1 flex items-center gap-4">
                <div className="w-12 h-12 bg-artist-blue rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">email@email.com</p>
                </div>
              </div>

              <div className="fade-in-up stagger-2 flex items-center gap-4">
                <div className="w-12 h-12 bg-artist-turquoise rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Telefon</h3>
                  <p className="text-muted-foreground">+36 XX XXX XXXX</p>
                </div>
              </div>

              <div className="fade-in-up stagger-3 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Műterem</h3>
                  <p className="text-muted-foreground">Budapest, Magyarország</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <Card className="border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Üzenet küldése</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="fade-in-up stagger-1">
                      <Input
                        name="name"
                        placeholder="Teljes név"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="fade-in-up stagger-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email cím"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="fade-in-up stagger-3">
                    <Input
                      name="subject"
                      placeholder="Tárgy"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="fade-in-up stagger-4">
                    <Textarea
                      name="message"
                      placeholder="Üzenet..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-white font-medium h-12 rounded-full"
                  >
                    Üzenet küldése
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;