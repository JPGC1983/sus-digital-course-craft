import { Button } from "@/components/ui/button";
import { Play, Users, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-saude-digital.jpg";

const CourseHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-medical-light via-background to-accent">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Play className="w-4 h-4" />
                Curso Online
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Saúde Digital no{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  SUS
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Interoperabilidade, RNDS e Telessaúde para profissionais da saúde, 
                gestores públicos e estudantes.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Profissionais & Estudantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>10-15 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Certificado incluso</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Ver Conteúdo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Profissionais da saúde usando tecnologia digital"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-card border">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Módulos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;