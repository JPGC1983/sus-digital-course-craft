import { Separator } from "@/components/ui/separator";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const CourseFooter = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sobre o Curso */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Saúde Digital no SUS
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore interoperabilidade, RNDS e telessaúde neste curso prático 
              para profissionais da saúde, gestores públicos e estudantes. Conecte-se ao futuro do SUS!
            </p>
          </div>

          {/* Desenvolvido por */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Desenvolvido por
            </h3>
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">
                NÚCLEO DE SAÚDE DIGITAL-NSDIGI
              </div>
              <div className="text-xs text-muted-foreground">
                SES-MG
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@nsdigi.org.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(31) 3916-0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Belo Horizonte, Minas Gerais</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Links Úteis
            </h3>
            <div className="space-y-2 text-sm">
              <a 
                href="https://datasus.saude.gov.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                DATASUS
              </a>
              <a 
                href="https://meususdigital.saude.gov.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                MEUSUS
              </a>
              <a 
                href="https://saude.gov.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Ministério da Saúde
              </a>
              <a 
                href="https://rnds.saude.gov.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                RNDS
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/1630385c-42bc-4838-8bdb-c930bbda830a.png" 
              alt="SES-MG Logo" 
              className="h-8 w-auto"
            />
            <span>© 2025 Núcleo de Saúde Digital - NSDIGI. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/bc067030-afb8-4a8c-aebb-f6797fd28ea2.png" 
              alt="Governo de Minas - Saúde" 
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CourseFooter;