import { Header } from "@/components/blog/header";
import { Footer } from "@/components/blog/footer";
import { ArticleCard } from "@/components/blog/article-card";
import { Sidebar } from "@/components/blog/sidebar";
import { Button } from "@/components/ui/button";
import { articles, getFeaturedArticles, categories } from "@/lib/articles";
import { images } from "@/lib/images";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = articles.slice(3, 9);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-foreground text-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold mb-4 block">
              Guia Completo de Suplementacao
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
              Tudo sobre Whey Protein: Ciencia, Pratica e Resultados Reais
            </h1>
            <p className="text-background/80 text-lg mb-8 leading-relaxed max-w-2xl">
              O portal mais completo sobre proteina do soro do leite. Informacoes 
              baseadas em evidencias cientificas para voce tomar as melhores decisoes 
              sobre suplementacao.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/artigo/whey-protein-guia-completo">
                  Comecar pelo Guia Completo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 bg-transparent">
                <Link href="/artigo/tipos-de-whey-protein">
                  Conhecer os Tipos de Whey
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Artigos em Destaque
              </h2>
              <p className="text-muted-foreground">
                Os conteudos mais completos e atualizados sobre Whey Protein
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Artigos Recentes
                </h2>
                <p className="text-muted-foreground">
                  Novos conteudos para voce se manter atualizado
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/categoria/guias">
                    Ver Todos os Artigos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Whey Types Section */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Conheca os Tipos de Whey Protein
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada tipo de Whey Protein tem caracteristicas unicas. Descubra qual e o ideal para voce.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Whey Concentrado", image: images.wheyConcentrado, badge: "Popular", desc: "80% de proteina, otimo custo-beneficio", link: "/artigo/whey-concentrado-iniciantes" },
              { name: "Whey Isolado", image: images.wheyIsolado, badge: "Premium", desc: "90%+ de proteina, baixo em lactose", link: "/artigo/whey-isolado-vale-a-pena" },
              { name: "Whey Hidrolisado", image: images.wheyHidrolisado, badge: "Pro", desc: "Absorcao ultra-rapida, pre-digerido", link: "/artigo/whey-hidrolisado-quando-usar" },
              { name: "Whey 3W (Blend)", image: images.wheyBlend, badge: "Versatil", desc: "Combinacao equilibrada de tipos", link: "/artigo/whey-protein-3w-o-que-e" },
            ].map((type) => (
              <Link
                key={type.name}
                href={type.link}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                      {type.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{type.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Explore por Categoria
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Encontre exatamente o que voce precisa navegando por nossas categorias
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => {
              const count = articles.filter((a) => a.category === category.slug).length;
              return (
                <Link
                  key={category.slug}
                  href={`/categoria/${category.slug}`}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="text-primary font-semibold text-sm">
                    {count} artigos
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold mb-4 block">
                Por que confiar em nosso conteudo?
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Informacoes Baseadas em Ciencia
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossos artigos sao escritos e revisados por especialistas em nutricao 
                esportiva. Cada informacao e embasada em estudos cientificos e fontes 
                confiaveis para garantir que voce tenha acesso ao melhor conteudo.
              </p>
              <ul className="space-y-4">
                {[
                  "Conteudo revisado por nutricionistas",
                  "Referencias cientificas em cada artigo",
                  "Atualizacoes constantes com novas pesquisas",
                  "Linguagem acessivel sem perder a precisao",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={images.heroWhey}
                alt="Atleta tomando shake de proteina apos treino"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Comece sua jornada
                </h3>
                <p className="text-white/80 mb-6">
                  Leia nosso guia completo e entenda tudo sobre Whey Protein
                </p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/artigo/whey-protein-guia-completo">
                    Acessar Guia Completo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
