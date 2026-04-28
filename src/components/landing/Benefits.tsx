import {
  Brain,
  HeartPulse,
  Moon,
  Users,
  Wrench,
  Sun,
} from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Reduzir crises e sintomas físicos",
    text: "Diminua palpitações, falta de ar, tensão muscular e outros sinais que a ansiedade gera no corpo.",
  },
  {
    icon: Brain,
    title: "Compreender gatilhos e padrões",
    text: "Identifique pensamentos automáticos e padrões mentais que alimentam o ciclo da ansiedade.",
  },
  {
    icon: Moon,
    title: "Recuperar a qualidade do sono",
    text: "Aprenda técnicas para acalmar a mente à noite e voltar a ter um descanso reparador.",
  },
  {
    icon: Users,
    title: "Melhorar suas relações",
    text: "Comunique-se com mais clareza e estabeleça vínculos pessoais e profissionais saudáveis.",
  },
  {
    icon: Wrench,
    title: "Ferramentas práticas para o dia a dia",
    text: "Desenvolva habilidades concretas da TCC para usar em qualquer momento de sobrecarga.",
  },
  {
    icon: Sun,
    title: "Resgatar autoconfiança e bem-estar",
    text: "Volte a sentir prazer nas atividades cotidianas e a confiar nas suas próprias capacidades.",
  },
];

export const Benefits = () => {
  return (
    <section
      id="beneficios"
      className="py-20 md:py-32 bg-gradient-deep text-primary-foreground relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-3xl"
      />

      <div className="container-soft relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-gold-light font-medium">
            Benefícios do tratamento
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
            O que muda quando você{" "}
            <span className="italic text-gradient-gold">cuida da ansiedade</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/80 leading-relaxed">
            A ansiedade, quando não tratada, afeta o sono, a saúde física, as
            relações e a forma como nos enxergamos. A Terapia
            Cognitivo-Comportamental é uma das abordagens mais eficazes do
            mundo para esse cuidado: ela une compreensão emocional e técnicas
            práticas, ajudando você a transformar a relação com seus
            pensamentos e voltar a viver com mais leveza.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-7 hover:bg-primary-foreground/10 hover:border-gold/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-primary-foreground">
                {title}
              </h3>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
