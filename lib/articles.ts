import { images } from "./images";

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
  updatedAt: string;
  featured?: boolean;
  relatedArticles: string[];
  image?: string;
}

export const categories = [
  { name: 'Guias Completos', slug: 'guias', description: 'Artigos completos e detalhados sobre Whey Protein' },
  { name: 'Tipos de Whey', slug: 'tipos', description: 'Conheça os diferentes tipos de Whey Protein' },
  { name: 'Como Usar', slug: 'como-usar', description: 'Dicas práticas de como tomar Whey Protein' },
  { name: 'Público-Alvo', slug: 'publico', description: 'Whey Protein para diferentes perfis' },
  { name: 'Comparativos', slug: 'comparativos', description: 'Comparações e análises de produtos' },
];

export const articles: Article[] = [
  // ARTIGOS PILARES (3)
  {
    slug: 'whey-protein-guia-completo',
    title: 'Whey Protein: O Guia Completo para Iniciantes e Avançados',
    metaTitle: 'Whey Protein: Guia Completo 2026 | Tudo que Você Precisa Saber',
    metaDescription: 'Guia definitivo sobre Whey Protein: o que é, tipos, benefícios, como tomar, melhores horários e marcas. Informações baseadas em ciência para resultados reais.',
    excerpt: 'Descubra tudo sobre a proteína do soro do leite: desde a ciência por trás do suplemento até as melhores práticas de uso para maximizar seus resultados.',
    category: 'guias',
    tags: ['whey protein', 'proteína', 'suplementação', 'guia completo'],
    readTime: 15,
    publishedAt: '2026-01-15',
    updatedAt: '2026-01-28',
    featured: true,
    relatedArticles: ['tipos-de-whey-protein', 'beneficios-whey-protein', 'como-tomar-whey-protein'],
    image: images.wheyScoop
  },
  {
    slug: 'tipos-de-whey-protein',
    title: 'Tipos de Whey Protein: Concentrado, Isolado e Hidrolisado - Qual Escolher?',
    metaTitle: 'Tipos de Whey Protein: Concentrado vs Isolado vs Hidrolisado [2026]',
    metaDescription: 'Entenda as diferenças entre Whey Concentrado, Isolado e Hidrolisado. Descubra qual tipo é ideal para seu objetivo: hipertrofia, emagrecimento ou saúde.',
    excerpt: 'Conheça as características, vantagens e desvantagens de cada tipo de Whey Protein e faça a escolha certa para seus objetivos.',
    category: 'tipos',
    tags: ['whey concentrado', 'whey isolado', 'whey hidrolisado', 'tipos de whey'],
    readTime: 12,
    publishedAt: '2026-01-14',
    updatedAt: '2026-01-27',
    featured: true,
    relatedArticles: ['whey-protein-guia-completo', 'whey-isolado-vale-a-pena', 'whey-concentrado-iniciantes'],
    image: images.wheyIsolado
  },
  {
    slug: 'beneficios-whey-protein',
    title: 'Os 12 Benefícios Comprovados do Whey Protein para Saúde e Performance',
    metaTitle: '12 Benefícios do Whey Protein Comprovados pela Ciência [2026]',
    metaDescription: 'Conheça os benefícios científicos do Whey Protein: ganho muscular, recuperação, imunidade, emagrecimento e muito mais. Estudos e evidências atualizadas.',
    excerpt: 'Descubra os benefícios comprovados cientificamente do Whey Protein e entenda por que este é o suplemento mais popular do mundo.',
    category: 'guias',
    tags: ['benefícios', 'whey protein', 'saúde', 'performance', 'ciência'],
    readTime: 10,
    publishedAt: '2026-01-13',
    updatedAt: '2026-01-26',
    featured: true,
    relatedArticles: ['whey-protein-guia-completo', 'whey-protein-emagrecimento', 'whey-protein-massa-muscular'],
    image: images.muscleBuilding
  },

  // ARTIGOS SOBRE TIPOS (4)
  {
    slug: 'whey-isolado-vale-a-pena',
    title: 'Whey Isolado Vale a Pena? Análise Completa de Custo-Benefício',
    metaTitle: 'Whey Isolado Vale a Pena? Custo-Benefício e Quando Usar [2026]',
    metaDescription: 'Análise detalhada do Whey Protein Isolado: quando vale o investimento, para quem é indicado e comparação com outras opções do mercado.',
    excerpt: 'Saiba quando o Whey Isolado é a melhor escolha e quando você pode economizar optando por outras versões.',
    category: 'tipos',
    tags: ['whey isolado', 'custo-benefício', 'análise'],
    readTime: 8,
    publishedAt: '2026-01-12',
    updatedAt: '2026-01-25',
    relatedArticles: ['tipos-de-whey-protein', 'whey-concentrado-iniciantes', 'whey-protein-intolerancia-lactose'],
    image: images.wheyIsolado
  },
  {
    slug: 'whey-concentrado-iniciantes',
    title: 'Whey Concentrado: Por Que é a Melhor Opção para Iniciantes',
    metaTitle: 'Whey Concentrado para Iniciantes: Guia Completo [2026]',
    metaDescription: 'Descubra por que o Whey Protein Concentrado é ideal para quem está começando. Benefícios, como escolher e dicas de uso para maximizar resultados.',
    excerpt: 'O Whey Concentrado oferece excelente custo-benefício e é perfeito para quem está começando na suplementação.',
    category: 'tipos',
    tags: ['whey concentrado', 'iniciantes', 'custo-benefício'],
    readTime: 7,
    publishedAt: '2026-01-11',
    updatedAt: '2026-01-24',
    relatedArticles: ['tipos-de-whey-protein', 'whey-protein-guia-completo', 'como-tomar-whey-protein'],
    image: images.wheyConcentrado
  },
  {
    slug: 'whey-hidrolisado-quando-usar',
    title: 'Whey Hidrolisado: Quando Usar e Para Quem é Indicado',
    metaTitle: 'Whey Hidrolisado: Indicações, Benefícios e Quando Vale a Pena [2026]',
    metaDescription: 'Entenda o Whey Hidrolisado: absorção ultrarrápida, indicações específicas e se realmente vale o investimento para seus objetivos.',
    excerpt: 'O Whey Hidrolisado é o mais rápido, mas também o mais caro. Descubra quando ele realmente faz diferença.',
    category: 'tipos',
    tags: ['whey hidrolisado', 'absorção rápida', 'pós-treino'],
    readTime: 8,
    publishedAt: '2026-01-10',
    updatedAt: '2026-01-23',
    relatedArticles: ['tipos-de-whey-protein', 'whey-isolado-vale-a-pena', 'melhor-horario-tomar-whey'],
    image: images.wheyHidrolisado
  },
  {
    slug: 'whey-protein-3w-o-que-e',
    title: 'Whey 3W: O Que É e Como Funciona essa Combinação de Proteínas',
    metaTitle: 'Whey 3W: O Que É, Como Funciona e Vale a Pena? [2026]',
    metaDescription: 'Entenda o Whey 3W: combinação de concentrado, isolado e hidrolisado. Descubra os benefícios, desvantagens e se vale a pena para você.',
    excerpt: 'O Whey 3W combina três tipos de proteína em um só produto. Conheça as vantagens e desvantagens dessa opção.',
    category: 'tipos',
    tags: ['whey 3w', 'blend proteico', 'tipos de whey'],
    readTime: 7,
    publishedAt: '2026-01-09',
    updatedAt: '2026-01-22',
    relatedArticles: ['tipos-de-whey-protein', 'whey-concentrado-iniciantes', 'whey-isolado-vale-a-pena'],
    image: images.wheyBlend
  },

  // ARTIGOS SOBRE USO E TIMING (4)
  {
    slug: 'como-tomar-whey-protein',
    title: 'Como Tomar Whey Protein: Dosagem, Preparo e Dicas Práticas',
    metaTitle: 'Como Tomar Whey Protein Corretamente: Guia Prático [2026]',
    metaDescription: 'Aprenda a tomar Whey Protein da forma correta: dosagem ideal, como preparar, com água ou leite, e receitas práticas para o dia a dia.',
    excerpt: 'Guia prático completo sobre como preparar e consumir Whey Protein para obter os melhores resultados.',
    category: 'como-usar',
    tags: ['como tomar', 'dosagem', 'preparo', 'dicas'],
    readTime: 9,
    publishedAt: '2026-01-08',
    updatedAt: '2026-01-21',
    relatedArticles: ['whey-protein-guia-completo', 'melhor-horario-tomar-whey', 'whey-com-agua-ou-leite'],
    image: images.proteinShake
  },
  {
    slug: 'melhor-horario-tomar-whey',
    title: 'Melhor Horário para Tomar Whey Protein: Manhã, Pré ou Pós-Treino?',
    metaTitle: 'Melhor Horário para Tomar Whey: Pré, Pós-Treino ou Qualquer Hora? [2026]',
    metaDescription: 'Descubra o melhor horário para tomar Whey Protein baseado em ciência. Entenda a janela anabólica e como otimizar sua suplementação.',
    excerpt: 'A ciência explica qual é o melhor momento para consumir Whey Protein e maximizar a síntese proteica.',
    category: 'como-usar',
    tags: ['horário', 'timing', 'pós-treino', 'janela anabólica'],
    readTime: 8,
    publishedAt: '2026-01-07',
    updatedAt: '2026-01-20',
    relatedArticles: ['como-tomar-whey-protein', 'whey-protein-guia-completo', 'whey-protein-massa-muscular'],
    image: images.wheyScoop
  },
  {
    slug: 'whey-com-agua-ou-leite',
    title: 'Whey com Água ou Leite? Qual a Melhor Opção para Você',
    metaTitle: 'Whey com Água ou Leite: Qual Escolher para Seus Objetivos? [2026]',
    metaDescription: 'Whey com água ou leite? Descubra as diferenças em absorção, calorias e resultados. Saiba qual opção é melhor para hipertrofia ou emagrecimento.',
    excerpt: 'Entenda as diferenças entre tomar Whey com água ou leite e escolha a opção ideal para seus objetivos.',
    category: 'como-usar',
    tags: ['água', 'leite', 'preparo', 'absorção'],
    readTime: 6,
    publishedAt: '2026-01-06',
    updatedAt: '2026-01-19',
    relatedArticles: ['como-tomar-whey-protein', 'whey-protein-emagrecimento', 'whey-protein-massa-muscular']
  },
  {
    slug: 'quanto-whey-protein-por-dia',
    title: 'Quanto Whey Protein Tomar por Dia? Calculando sua Dosagem Ideal',
    metaTitle: 'Quanto Whey Tomar por Dia: Calculadora de Dosagem [2026]',
    metaDescription: 'Aprenda a calcular a quantidade ideal de Whey Protein por dia baseado no seu peso, objetivo e nível de atividade física.',
    excerpt: 'Descubra a quantidade exata de Whey Protein que você precisa consumir diariamente para atingir seus objetivos.',
    category: 'como-usar',
    tags: ['dosagem', 'quantidade', 'cálculo', 'proteína diária'],
    readTime: 7,
    publishedAt: '2026-01-05',
    updatedAt: '2026-01-18',
    relatedArticles: ['como-tomar-whey-protein', 'whey-protein-guia-completo', 'beneficios-whey-protein']
  },

  // ARTIGOS PARA PÚBLICOS ESPECÍFICOS (5)
  {
    slug: 'whey-protein-mulheres',
    title: 'Whey Protein para Mulheres: Mitos, Verdades e Benefícios',
    metaTitle: 'Whey Protein para Mulheres: Engorda? Deixa Musculosa? [2026]',
    metaDescription: 'Whey Protein para mulheres: desvende os mitos! Descubra os benefícios reais, como usar para emagrecer ou tonificar e qual tipo escolher.',
    excerpt: 'Descubra a verdade sobre Whey Protein para mulheres e como ele pode ajudar a alcançar seus objetivos fitness.',
    category: 'publico',
    tags: ['mulheres', 'feminino', 'mitos', 'emagrecimento feminino'],
    readTime: 9,
    publishedAt: '2026-01-04',
    updatedAt: '2026-01-17',
    relatedArticles: ['whey-protein-emagrecimento', 'beneficios-whey-protein', 'como-tomar-whey-protein'],
    image: images.womenFitness
  },
  {
    slug: 'whey-protein-idosos',
    title: 'Whey Protein para Idosos: Benefícios para Massa Muscular e Saúde',
    metaTitle: 'Whey Protein para Idosos: Benefícios e Cuidados [2026]',
    metaDescription: 'Whey Protein para idosos: como prevenir sarcopenia, manter massa muscular e melhorar a qualidade de vida na terceira idade.',
    excerpt: 'Saiba como o Whey Protein pode ajudar idosos a manter a massa muscular e melhorar a qualidade de vida.',
    category: 'publico',
    tags: ['idosos', 'terceira idade', 'sarcopenia', 'saúde'],
    readTime: 8,
    publishedAt: '2026-01-03',
    updatedAt: '2026-01-16',
    relatedArticles: ['beneficios-whey-protein', 'whey-protein-guia-completo', 'quanto-whey-protein-por-dia'],
    image: images.seniorFitness
  },
  {
    slug: 'whey-protein-emagrecimento',
    title: 'Whey Protein para Emagrecer: Como Usar para Perder Gordura',
    metaTitle: 'Whey Protein para Emagrecer: Funciona? Como Usar? [2026]',
    metaDescription: 'Descubra como usar Whey Protein para emagrecer: aumenta saciedade, preserva massa magra e acelera o metabolismo. Estratégias comprovadas.',
    excerpt: 'Aprenda como o Whey Protein pode ser um aliado poderoso no processo de emagrecimento e definição muscular.',
    category: 'publico',
    tags: ['emagrecimento', 'perda de gordura', 'dieta', 'definição'],
    readTime: 10,
    publishedAt: '2026-01-02',
    updatedAt: '2026-01-15',
    relatedArticles: ['beneficios-whey-protein', 'whey-com-agua-ou-leite', 'whey-isolado-vale-a-pena'],
    image: images.weightLoss
  },
  {
    slug: 'whey-protein-massa-muscular',
    title: 'Whey Protein para Ganhar Massa Muscular: Estratégias que Funcionam',
    metaTitle: 'Whey Protein para Massa Muscular: Guia de Hipertrofia [2026]',
    metaDescription: 'Maximize o ganho de massa muscular com Whey Protein: dosagem, timing, combinações e estratégias avançadas para hipertrofia.',
    excerpt: 'Descubra as melhores estratégias para usar Whey Protein e maximizar seus ganhos de massa muscular.',
    category: 'publico',
    tags: ['massa muscular', 'hipertrofia', 'ganho muscular', 'treino'],
    readTime: 11,
    publishedAt: '2026-01-01',
    updatedAt: '2026-01-14',
    relatedArticles: ['beneficios-whey-protein', 'melhor-horario-tomar-whey', 'quanto-whey-protein-por-dia']
  },
  {
    slug: 'whey-protein-intolerancia-lactose',
    title: 'Whey Protein e Intolerância à Lactose: Opções Seguras para Você',
    metaTitle: 'Whey Protein para Intolerantes à Lactose: Guia Completo [2026]',
    metaDescription: 'Tem intolerância à lactose? Descubra quais tipos de Whey Protein são seguros, alternativas sem lactose e como suplementar sem desconforto.',
    excerpt: 'Conheça as opções de Whey Protein seguras para quem tem intolerância à lactose e alternativas eficazes.',
    category: 'publico',
    tags: ['intolerância lactose', 'lactose', 'whey isolado', 'alternativas'],
    readTime: 7,
    publishedAt: '2025-12-30',
    updatedAt: '2026-01-13',
    relatedArticles: ['whey-isolado-vale-a-pena', 'tipos-de-whey-protein', 'whey-protein-guia-completo']
  },

  // ARTIGOS COMERCIAIS E REVIEWS (4)
  {
    slug: 'melhores-whey-protein-brasil',
    title: 'Os 10 Melhores Whey Protein do Brasil em 2026: Ranking Atualizado',
    metaTitle: 'Melhores Whey Protein 2026: Top 10 Marcas do Brasil [Ranking]',
    metaDescription: 'Ranking dos melhores Whey Protein disponíveis no Brasil em 2026. Análise de qualidade, custo-benefício e reputação das principais marcas.',
    excerpt: 'Conheça os melhores Whey Protein disponíveis no mercado brasileiro com análises detalhadas de cada marca.',
    category: 'comparativos',
    tags: ['melhores marcas', 'ranking', 'análise', 'brasil'],
    readTime: 14,
    publishedAt: '2025-12-28',
    updatedAt: '2026-01-12',
    relatedArticles: ['whey-protein-guia-completo', 'tipos-de-whey-protein', 'whey-isolado-vale-a-pena']
  },
  {
    slug: 'whey-protein-nacional-vs-importado',
    title: 'Whey Protein Nacional vs Importado: Qual a Melhor Escolha?',
    metaTitle: 'Whey Nacional vs Importado: Comparativo Completo [2026]',
    metaDescription: 'Comparação entre Whey Protein nacional e importado: qualidade, preço, regulamentação e qual oferece melhor custo-benefício no Brasil.',
    excerpt: 'Descubra as diferenças reais entre Whey Protein nacional e importado e faça a escolha certa para seu bolso.',
    category: 'comparativos',
    tags: ['nacional', 'importado', 'comparativo', 'custo-benefício'],
    readTime: 9,
    publishedAt: '2025-12-26',
    updatedAt: '2026-01-11',
    relatedArticles: ['melhores-whey-protein-brasil', 'tipos-de-whey-protein', 'whey-protein-guia-completo']
  },
  {
    slug: 'whey-protein-barato-bom',
    title: 'Whey Protein Bom e Barato: Como Encontrar Qualidade com Economia',
    metaTitle: 'Whey Protein Bom e Barato: Guia de Economia [2026]',
    metaDescription: 'Aprenda a encontrar Whey Protein de qualidade sem gastar muito. Dicas para identificar bons produtos, melhores épocas para comprar e onde economizar.',
    excerpt: 'Descubra como encontrar Whey Protein de qualidade com preço acessível sem cair em armadilhas.',
    category: 'comparativos',
    tags: ['barato', 'economia', 'custo-benefício', 'qualidade'],
    readTime: 8,
    publishedAt: '2025-12-24',
    updatedAt: '2026-01-10',
    relatedArticles: ['whey-concentrado-iniciantes', 'melhores-whey-protein-brasil', 'whey-protein-nacional-vs-importado']
  },
  {
    slug: 'whey-protein-efeitos-colaterais',
    title: 'Whey Protein Faz Mal? Efeitos Colaterais e Contraindicações',
    metaTitle: 'Whey Protein Faz Mal? Efeitos Colaterais e Mitos [2026]',
    metaDescription: 'Whey Protein faz mal para os rins? Causa espinhas? Conheça os reais efeitos colaterais, contraindicações e mitos sobre a proteína do soro do leite.',
    excerpt: 'Entenda os reais riscos e efeitos colaterais do Whey Protein e desvende os mitos mais comuns.',
    category: 'guias',
    tags: ['efeitos colaterais', 'contraindicações', 'segurança', 'mitos'],
    readTime: 9,
    publishedAt: '2025-12-22',
    updatedAt: '2026-01-09',
    relatedArticles: ['whey-protein-guia-completo', 'beneficios-whey-protein', 'whey-protein-intolerancia-lactose']
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(article => article.category === categorySlug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedArticles
    .map(slug => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined);
}
