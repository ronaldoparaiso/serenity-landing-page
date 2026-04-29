// Edite as informações deste arquivo para personalizar a landing page.

export const siteConfig = {
  name: "Fabio Moura",
  role: "Psicólogo",
  crp: "CRP 00/00000",
  specialty: "Terapia Cognitivo-Comportamental · Foco em Ansiedade",
  city: "Atendimento 100% online",

  // Vídeo do YouTube — cole o ID do vídeo (parte depois do v=)
  youtubeId: "dQw4w9WgXcQ",

  // Link do checkout externo (Hotmart, Kiwify, Stripe, etc.)
  checkoutUrl: "https://exemplo.com/checkout",

  // Contato
  whatsapp: "5500000000000", // formato internacional, sem + nem espaços
  whatsappDisplay: "(00) 00000-0000",
  email: "contato@fabiomoura.com.br",
  phone: "(00) 0000-0000",

  // Redes sociais
  instagram: "https://instagram.com/seuusuario",
  facebook: "https://facebook.com/seuusuario",
  linkedin: "https://linkedin.com/in/seuusuario",
};

export const sessionOffer = {
  bullets: [
    "60 Minutos",
    "Sigilo Absoluto",
    "Zero Julgamentos",
    "Chamada de Vídeo Online",
    "Sem Precisar sair de casa",
  ],
  oldPrice: "R$ 299,00",
  price: "R$ 147,00",
};

export const testimonials = [
  {
    name: "Mariana S.",
    text: "As sessões com o Fabio mudaram minha relação com a ansiedade. Hoje consigo identificar gatilhos e lidar com eles de forma muito mais leve.",
    role: "Paciente · 8 meses de acompanhamento",
  },
  {
    name: "Rafael T.",
    text: "Profissional atencioso, técnico e humano. A abordagem TCC me deu ferramentas práticas que uso todos os dias.",
    role: "Paciente · 1 ano de acompanhamento",
  },
  {
    name: "Camila A.",
    text: "Consegui voltar a dormir bem e retomar minha vida social. Recomendo de olhos fechados o trabalho do Fabio.",
    role: "Paciente · 6 meses de acompanhamento",
  },
  {
    name: "Lucas M.",
    text: "O atendimento online é muito confortável e o Fabio cria um ambiente de confiança desde a primeira sessão.",
    role: "Paciente · 4 meses de acompanhamento",
  },
  {
    name: "Patrícia R.",
    text: "Aprendi a respirar, pausar e responder em vez de reagir. As crises de ansiedade reduziram drasticamente em poucas semanas.",
    role: "Paciente · 5 meses de acompanhamento",
  },
  {
    name: "André F.",
    text: "Cheguei sem esperança e saí com um caminho concreto. O Fabio me ajudou a recuperar foco no trabalho e qualidade no sono.",
    role: "Paciente · 7 meses de acompanhamento",
  },
];

// Bloco "Confiança / Sobre" — biografia completa abaixo do contador
export const trustBio = {
  label: "CONFIANÇA",
  count: "+1200 atendimentos realizados!",
  name: "Fabio Moura",
  // Imagem opcional — deixe vazio para esconder
  photoUrl: "",
  paragraphs: [
    "Fabio Moura é Psicólogo Clínico especializado em Terapia Cognitivo-Comportamental, com foco em descobrir e resolver as causas raízes da insegurança e ansiedade, com mais de 1.200 atendimentos realizados de forma 100% online pelo Brasil e pelo mundo.",
    "Com uma trajetória marcada pela investigação profunda da mente humana, Fabio desenvolveu uma metodologia estratégica que utiliza uma combinação de TCC e técnicas práticas para identificar, em poucas sessões, os bloqueios que paralisam a capacidade de pessoas altamente competentes. Sua abordagem é reconhecida por ir direto à raiz do problema, transformando insegurança e ansiedade em poder de decisão.",
    "A autoridade de Fabio não vem apenas dos livros, mas de sua própria transformação. Após anos perdendo oportunidades e vivendo sob o peso da autocobrança e do medo do julgamento, ele utilizou a TCC para reprogramar a própria mente, alcançando resultados expressivos em sua vida profissional, financeira e nas relações. Hoje, dedica sua expertise técnica e experiência clínica para garantir que a competência de seus pacientes finalmente se traduza em resultados reais, eliminando o ciclo de insegurança que trava o sucesso.",
  ],
  closingTop: "Tudo pensado para a sua total comodidade, privacidade e segurança:",
  closingBottom: "atendimento online sem sair de casa!",
  ctaText: "Quero agendar agora",
  ctaNote: "Agendamento em até 24h",
  ctaItalic:
    "Se você chegou até aqui, não foi por acaso. Pode ter sido o sinal que você estava esperando.",
};

export const plans = [
  {
    name: "Sessão Avulsa",
    price: "R$ 180",
    duration: "50 minutos",
    description: "Ideal para conhecer o trabalho ou momentos pontuais.",
    features: ["Atendimento online por vídeo", "Sigilo profissional garantido", "Material de apoio incluso"],
    highlight: false,
    cta: "Agendar sessão",
  },
  {
    name: "Pacote Mensal",
    price: "R$ 640",
    priceNote: "4 sessões · economia de R$ 80",
    duration: "1 sessão por semana",
    description: "Acompanhamento contínuo para resultados consistentes.",
    features: [
      "4 sessões de 50 minutos",
      "Acesso por WhatsApp entre sessões",
      "Plano terapêutico personalizado",
      "Exercícios e materiais TCC",
    ],
    highlight: true,
    badge: "Mais escolhido",
    cta: "Quero este plano",
  },
  {
    name: "Pacote Trimestral",
    price: "R$ 1.800",
    priceNote: "12 sessões · economia de R$ 360",
    duration: "3 meses de acompanhamento",
    description: "Transformação profunda com o melhor custo-benefício.",
    features: [
      "12 sessões de 50 minutos",
      "Acesso prioritário por WhatsApp",
      "Plano terapêutico completo",
      "Acompanhamento de evolução",
    ],
    highlight: false,
    cta: "Começar transformação",
  },
];
