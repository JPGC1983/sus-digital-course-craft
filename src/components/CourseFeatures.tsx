import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  FileText, 
  ClipboardCheck, 
  BookOpen, 
  Award, 
  Clock 
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Vídeos Explicativos",
    description: "Vídeos curtos e objetivos para cada módulo com explicações claras e didáticas"
  },
  {
    icon: FileText,
    title: "Infográficos",
    description: "Material visual com fluxos da RNDS, pirâmide de telessaúde e outros diagramas explicativos"
  },
  {
    icon: ClipboardCheck,
    title: "Quiz Interativo",
    description: "Avaliação por módulo para testar seus conhecimentos e consolidar o aprendizado"
  },
  {
    icon: BookOpen,
    title: "Estudos de Caso",
    description: "Exemplos práticos de integração com a RNDS e implementação de telessaúde"
  },
  {
    icon: Award,
    title: "Certificado",
    description: "Certificado de conclusão reconhecido para comprovar suas competências"
  },
  {
    icon: Clock,
    title: "Flexibilidade",
    description: "Estude no seu ritmo, quando e onde quiser, com acesso por 2 semanas"
  }
];

const CourseFeatures = () => {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Recursos do Curso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Metodologia completa com diversos recursos para potencializar seu aprendizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;