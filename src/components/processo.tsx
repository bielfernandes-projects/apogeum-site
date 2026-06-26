import { agencyData } from "@/data/agency";
import { cn } from "@/lib/utils";

export function Processo() {
  const steps = agencyData.process;

  return (
    <section id="processo" className="px-6 py-16 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Como <span className="text-primary">funciona</span>
          </h2>
        </div>

        <div className="relative">
          {steps.map((item, index) => (
            <div key={item.step} className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-primary/20 my-2" />
                )}
              </div>

              <div className={cn("pb-12", index === steps.length - 1 && "pb-0")}>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}