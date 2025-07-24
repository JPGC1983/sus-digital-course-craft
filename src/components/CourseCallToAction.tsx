import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Domine os fundamentos da Saúde Digital no SUS",
  "Aprenda sobre interoperabilidade e padrões FHIR",
  "Entenda como funciona a RNDS na prática",
  "Implemente soluções de Telessaúde e Teleconsultoria"
];

const CourseCallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-background/95 backdrop-blur-sm">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Conecte-se à saúde digital e mergulhe no futuro do SUS!
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Faça parte da revolução digital no Brasil! Integre a evolução do SUS e aprenda sobre saúde digital.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="bg-accent/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Duração do curso</h3>
                  <div className="text-2xl font-bold text-foreground">10-15 horas</div>
                  <div className="text-sm text-muted-foreground mt-1">Pode ser concluído em até 2 semanas</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 py-6 group">
                    Inscrever-se Agora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Baixar Programa
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  * Material complementar inclui PDFs e links para portais oficiais do MS, DATASUS e ConecteSUS
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CourseCallToAction;