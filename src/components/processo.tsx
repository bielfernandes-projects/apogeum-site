import { agencyData } from "@/data/agency";

export function Processo() {
  return (
    <section id="processo" className="px-6 py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Como <span className="text-primary">funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Um processo simples e transparente até o lançamento do seu site
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {agencyData.process.map((item, index) => (
            <div
              key={item.step}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start"
            >
              <div className="flex-shrink-0 relative">
                <span className="text-7xl md:text-9xl font-extrabold text-primary/10 select-none leading-none">
                  {item.step}
                </span>
              </div>
              <div className="flex-1 pt-4 md:pt-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
              {index < agencyData.process.length - 1 && (
                <div className="absolute left-8 md:left-16 top-20 bottom-0 w-px bg-border hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
