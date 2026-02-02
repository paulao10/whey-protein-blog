import { Header } from "@/components/blog/header";
import { Footer } from "@/components/blog/footer";
import { ArticleCard } from "@/components/blog/article-card";
import { Sidebar } from "@/components/blog/sidebar";
import { categories, getArticlesByCategory } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return { title: "Categoria nao encontrada" };
  }

  return {
    title: `${category.name} | Whey Protein Brasil`,
    description: category.description,
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Header da Categoria */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            {category.name}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {category.description}
          </p>
          <p className="text-primary font-semibold mt-4">
            {categoryArticles.length} artigos disponiveis
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Articles Grid */}
            <div className="lg:col-span-2">
              {categoryArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Nenhum artigo encontrado nesta categoria.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
