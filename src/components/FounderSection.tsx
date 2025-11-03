import { Card, CardContent } from "@/components/ui/card";

const FounderSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Об основателе</h2>
        <Card className="border-2 shadow-xl">
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl font-heading font-bold text-white shadow-lg">
                ДМ
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-heading font-bold mb-2">Мещеряков Дмитрий Георгиевич</h3>
                <p className="text-lg text-primary font-semibold mb-4">Ветеринарный врач, основатель СмартЛаб</p>
                <p className="text-muted-foreground leading-relaxed">
                  Практикующий ветеринарный специалист с 10+ летним опытом работы. Создал СмартЛаб, чтобы сделать расшифровку анализов доступной каждому владельцу питомца. Верю, что понимание здоровья своего животного — ключ к его долгой и счастливой жизни.
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
