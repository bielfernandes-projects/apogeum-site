import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { agencyData } from "@/data/agency";
import { Code2, Zap, TrendingUp } from "lucide-react";

const iconMap = {
  Code2: Code2,
  Zap: Zap,
  TrendingUp: TrendingUp,
};

export function Diferenciais() {
  return (
    <section id="diferenciais" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Por que não usamos{" "}
            <span className="text-primary">templates genéricos</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada site é uma obra exclusiva, construída do zero com tecnologia de ponta
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {agencyData.diferenciais.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Card key={item.title} className="group hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
