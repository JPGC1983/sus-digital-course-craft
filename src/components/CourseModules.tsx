import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Settings, 
  Network, 
  Database, 
  Video, 
  Shield 
} from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Fundamentos da Saúde Digital",
    description: "Conceito de Saúde Digital, histórico e evolução no contexto global e nacional, Estratégia de Saúde Digital para o Brasil",
    icon: Brain,
    duration: "2h",
    topics: ["Conceitos básicos", "Evolução histórica", "Estratégias nacionais"]
  },
  {
    id: 2,
    title: "O SUS e a Transformação Digital",
    description: "Como o SUS se organiza, políticas públicas digitais voltadas à saúde, a importância da saúde digital no SUS",
    icon: Settings,
    duration: "2.5h",
    topics: ["Organização do SUS", "Políticas digitais", "Transformação digital"]
  },
  {
    id: 3,
    title: "Interoperabilidade em Saúde",
    description: "O que é interoperabilidade em saúde, padrões HL7, FHIR e CDA, integração entre sistemas de informação",
    icon: Network,
    duration: "3h",
    topics: ["Padrões HL7", "FHIR", "Integração de sistemas"]
  },
  {
    id: 4,
    title: "Rede Nacional de Dados em Saúde (RNDS)",
    description: "O que é a RNDS, objetivos, arquitetura e funcionamento, casos de uso: vacinação, exames, receitas digitais",
    icon: Database,
    duration: "3.5h",
    topics: ["Arquitetura RNDS", "Integração", "Casos práticos"]
  },
  {
    id: 5,
    title: "Telessaúde e Teleconsultoria",
    description: "Conceitos e regulamentações, diferença entre teleconsultoria, telemedicina, teleducação, plataformas e boas práticas",
    icon: Video,
    duration: "2.5h",
    topics: ["Telemedicina", "Teleconsultoria", "Regulamentações"]
  },
  {
    id: 6,
    title: "Desafios e Oportunidades na Saúde Digital",
    description: "Privacidade, segurança da informação e LGPD, capacitação de profissionais, tendências futuras: IA, IoT e saúde preditiva",
    icon: Shield,
    duration: "2h",
    topics: ["LGPD", "Segurança", "Tendências futuras"]
  }
];

const CourseModules = () => {
  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Módulos do Curso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conteúdo estruturado para levar você do básico ao avançado em Saúde Digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Card key={module.id} className="group hover:shadow-card transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {module.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Módulo {module.id}: {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {module.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Principais tópicos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {module.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
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

export default CourseModules;