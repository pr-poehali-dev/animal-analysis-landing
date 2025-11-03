import { Card, CardContent } from "@/components/ui/card";

const FounderSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Об основателе</h2>
        <Card className="border-2 shadow-xl">
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img 
                src="https://cdn.poehali.dev/files/11131544-96c7-4453-8f71-dfab16bd7365.jpg" 
                alt="Мещеряков Дмитрий Георгиевич" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl border-4 border-primary/20"
              />
              <div className="flex-1 text-left md:text-left text-center">
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">Мещеряков Дмитрий Георгиевич</h3>
                <p className="text-base md:text-lg text-primary font-semibold mb-4">Врач, основатель Смарт <span className="text-primary">Лаб</span></p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Практикующий врач с 10+ летним опытом работы. Совместно с командой ветеринарных специалистов создал Смарт Лаб, чтобы сделать расшифровку анализов доступной каждому владельцу питомца. Верю, что понимание здоровья своего животного — ключ к его долгой и счастливой жизни.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FounderSection;