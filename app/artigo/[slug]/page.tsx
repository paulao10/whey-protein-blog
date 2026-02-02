import React from "react"
import { Header } from "@/components/blog/header";
import { Footer } from "@/components/blog/footer";
import { Sidebar } from "@/components/blog/sidebar";
import { ArticleContent } from "@/components/blog/article-content";
import { articles, getArticleBySlug, categories } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

// Import all article content components
import { GuiaCompletoContent } from "./content/guia-completo";
import { TiposDeWheyContent } from "./content/tipos-de-whey";
import { BeneficiosContent } from "./content/beneficios";
import { WheyIsoladoContent } from "./content/whey-isolado";
import { WheyConcentradoContent } from "./content/whey-concentrado";
import { WheyHidrolisadoContent } from "./content/whey-hidrolisado";
import { Whey3WContent } from "./content/whey-3w";
import { ComoTomarContent } from "./content/como-tomar";
import { MelhorHorarioContent } from "./content/melhor-horario";
import { AguaOuLeiteContent } from "./content/agua-ou-leite";
import { QuantoTomarContent } from "./content/quanto-tomar";
import { MulheresContent } from "./content/mulheres";
import { IdososContent } from "./content/idosos";
import { EmagrecimentoContent } from "./content/emagrecimento";
import { MassaMuscularContent } from "./content/massa-muscular";
import { IntoleranciaContent } from "./content/intolerancia";
import { MelhoresMarcasContent } from "./content/melhores-marcas";
import { NacionalVsImportadoContent } from "./content/nacional-vs-importado";
import { BomEBaratoContent } from "./content/bom-e-barato";
import { EfeitosColateraisContent } from "./content/efeitos-colaterais";
import { IsoladoVsConcentradoContent } from "./content/isolado-vs-concentrado";
import { ComoEscolherContent } from "./content/como-escolher";
import { WheyComCreatinaContent } from "./content/whey-com-creatina";
import { ReceitasContent } from "./content/receitas";
import { WheyEmagrecerContent } from "./content/whey-emagrecer";
import { WheyMulheresContent } from "./content/whey-mulheres";
import { WheyIdososContent } from "./content/whey-idosos";
import { WheyIniciantesContent } from "./content/whey-iniciantes";
import { WheyDiabeticosContent } from "./content/whey-diabeticos";
import { WheyBaratoContent } from "./content/whey-barato";
import { WheyVsCreatinaContent } from "./content/whey-vs-creatina";
import { AlternativasVeganasContent } from "./content/alternativas-veganas";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const contentComponents: Record<string, React.ComponentType> = {
  // Main articles matching lib/articles.ts slugs
  "whey-protein-guia-completo": GuiaCompletoContent,
  "tipos-de-whey-protein": TiposDeWheyContent,
  "beneficios-whey-protein": BeneficiosContent,
  "whey-isolado-vale-a-pena": WheyIsoladoContent,
  "whey-concentrado-iniciantes": WheyConcentradoContent,
  "whey-hidrolisado-quando-usar": WheyHidrolisadoContent,
  "whey-protein-3w-o-que-e": Whey3WContent,
  "como-tomar-whey-protein": ComoTomarContent,
  "melhor-horario-tomar-whey": MelhorHorarioContent,
  "whey-com-agua-ou-leite": AguaOuLeiteContent,
  "quanto-whey-protein-por-dia": QuantoTomarContent,
  "whey-protein-mulheres": WheyMulheresContent,
  "whey-protein-idosos": WheyIdososContent,
  "whey-protein-emagrecimento": WheyEmagrecerContent,
  "whey-protein-massa-muscular": MassaMuscularContent,
  "whey-protein-intolerancia-lactose": IntoleranciaContent,
  "melhores-whey-protein-brasil": MelhoresMarcasContent,
  "whey-protein-nacional-vs-importado": NacionalVsImportadoContent,
  "whey-protein-barato-bom": WheyBaratoContent,
  "whey-protein-efeitos-colaterais": EfeitosColateraisContent,
  // Fallback mappings for alternate slugs
  "isolado-vs-concentrado": IsoladoVsConcentradoContent,
  "como-escolher": ComoEscolherContent,
  "whey-com-creatina": WheyComCreatinaContent,
  "receitas": ReceitasContent,
  "whey-emagrecer": WheyEmagrecerContent,
  "whey-mulheres": MulheresContent,
  "whey-idosos": IdososContent,
  "whey-iniciantes": WheyIniciantesContent,
  "whey-diabeticos": WheyDiabeticosContent,
  "whey-barato": BomEBaratoContent,
  "whey-vs-creatina": WheyVsCreatinaContent,
  "alternativas-veganas": AlternativasVeganasContent,
  "emagrecimento": EmagrecimentoContent,
  "massa-muscular": MassaMuscularContent,
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artigo nao encontrado" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags.join(", "),
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      locale: "pt_BR",
    },
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const ContentComponent = contentComponents[slug];
  const category = categories.find((c) => c.slug === article.category);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              href={`/categoria/${article.category}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {category?.name}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium line-clamp-1">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Article */}
            <div className="lg:col-span-2">
              <ArticleContent article={article}>
                {ContentComponent ? <ContentComponent /> : <p>Conteudo em desenvolvimento.</p>}
              </ArticleContent>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
