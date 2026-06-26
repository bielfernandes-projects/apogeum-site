import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { agencyData } from "@/data/agency";
import { Code2, Zap, TrendingUp } from "lucide-react";

const iconMap = {
  Code2: Code2,
  Zap: Zap,
  TrendingUp: TrendingUp,
};

export function Diferenciais() {
  const items = agencyData.diferenciais;

  return (
    <section id="diferenciais" className="px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Por que não usamos{" "}
            <span className="text-primary">templates genéricos</span>?
          </h2>
        </div>

        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.title}
                className="snap-center shrink-0 w-[80vw]"
              >
                <Card className="h-full group hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="p-5 pb-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isFirst = i === 0;
            return (
              <div
                key={item.title}
                className={isFirst ? "col-span-2" : ""}
              >
                <Card
                  className={`h-full group transition-all duration-300 ${
                    isFirst
                      ? "border-primary/20 hover:border-primary/50"
                      : "hover:border-primary/30"
                  }`}
                >
                  <CardHeader className="p-5 pb-0">
                    <div
                      className={`rounded-lg bg-primary/10 flex items-center justify-center mb-2 ${
                        isFirst ? "w-14 h-14" : "w-12 h-12"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className={`text-primary ${
                            isFirst ? "w-7 h-7" : "w-6 h-6"
                          }`}
                        />
                      )}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <p
                      className={`text-muted-foreground leading-relaxed ${
                        isFirst ? "text-base max-w-xl" : "text-sm"
                      }`}
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}