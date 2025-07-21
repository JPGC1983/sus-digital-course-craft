import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Users, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: Stethoscope,
    title: "Profissionais da Saúde",
    description: "Médicos, enfermeiros, técnicos e outros profissionais que desejam se atualizar sobre tecnologias digitais aplicadas à saúde",
    benefits: [
      "Melhore a qualidade do atendimento",
      "Otimize processos clínicos",
      "Integre sistemas de saúde"
    ]
  },
  {
    icon: Users,
    title: "Gestores Públicos",
    description: "Gestores de saúde pública interessados em implementar e gerenciar soluções digitais no SUS",
    benefits: [
      "Tome decisões baseadas em dados",
      "Implemente políticas digitais",
      "Gerencie recursos eficientemente"
    ]
  },
  {
    icon: GraduationCap,
    title: "Estudantes",
    description: "Estudantes de graduação e pós-graduação em saúde, TI ou áreas relacionadas que buscam conhecimento especializado",
    benefits: [
      "Prepare-se para o mercado",
      "Desenvolva competências digitais",
      "Entenda o futuro da saúde"
    ]
  }
];

const CourseTargetAudience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Para Quem é Este Curso?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conteúdo desenvolvido especialmente para diferentes perfis profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {audience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Você vai conseguir:</h4>
                    <ul className="space-y-2">
                      {audience.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseTargetAudience;