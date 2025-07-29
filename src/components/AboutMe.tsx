import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Palette, Brush, Award } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-soft">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="slide-in-left inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
            <Palette className="w-8 h-8 text-white" />
          </div>

          <h2 className="slide-in-right text-4xl md:text-5xl font-bold text-foreground mb-4">
            Rólam
          </h2>

          <p className="fade-in-up text-lg text-muted-foreground max-w-2xl mx-auto">
            Ismerj meg közelebbről és fedezd fel a művészetem mögött rejlő
            történetet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="slide-in-left space-y-6">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Bemutatkozás</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Üdvözöllek az oldalamon! Révfalvi Péter vagyok,
                  professzionális művész Budapestről. Már több mint 10 éve
                  foglalkozom festészettel, és célom, hogy a mindennapok
                  szépségét megörökítsem a képeimen keresztül.
                </p>
              </CardContent>
            </Card>
            {/*
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Művészeti filozófiám</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hiszek abban, hogy a művészetnek képesnek kell lenni
                  megérinteni a lélek legmélyebb rétegeit. Minden alkotásom
                  mögött egy egyedi történet és érzés áll, amelyet a technikám
                  segítségével próbálok érzékeltetni.
                </p>
              </CardContent>
            </Card>
            */}
          </div>
          <div className="slide-in-right space-y-6">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Művészeti filozófiám</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hiszek abban, hogy a művészetnek képesnek kell lenni
                  megérinteni a lélek legmélyebb rétegeit. Minden alkotásom
                  mögött egy egyedi történet és érzés áll, amelyet a technikám
                  segítségével próbálok érzékeltetni.
                </p>
              </CardContent>
            </Card>
            {/*
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Brush className="w-5 h-5 text-white" />
                  </div>
                  Képzettség
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      Magyar Képzőművészeti Egyetem - Festőművész MA (2015)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      Moholy-Nagy Művészeti Egyetem - Képzőművész BA (2012)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  Díjak és kiállítások
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      Fiatal Képzőművészek Stúdiója - Év művésze (2020)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Budapest Art Fair - Közönségdíj (2018)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Egyéni kiállítás a Kogart Múzeumban (2021)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
