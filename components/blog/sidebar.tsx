import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, articles } from "@/lib/articles";
import { TrendingUp, BookOpen, Tag } from "lucide-react";

export function Sidebar() {
  const popularArticles = articles.slice(0, 5);
  const allTags = [...new Set(articles.flatMap((a) => a.tags))].slice(0, 12);

  return (
    <aside className="space-y-6">
      {/* Categorias */}
      <Card className="border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2 text-foreground">
            <BookOpen className="w-5 h-5 text-primary" />
            Categorias
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/categoria/${category.slug}`}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </span>
                  <Badge variant="secondary" className="bg-secondary text-muted-foreground">
                    {articles.filter((a) => a.category === category.slug).length}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Artigos Populares */}
      <Card className="border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2 text-foreground">
            <TrendingUp className="w-5 h-5 text-primary" />
            Mais Lidos
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-3">
            {popularArticles.map((article, index) => (
              <li key={article.slug}>
                <Link
                  href={`/artigo/${article.slug}`}
                  className="flex gap-3 group"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card className="border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2 text-foreground">
            <Tag className="w-5 h-5 text-primary" />
            Tags Populares
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors border-border text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Newsletter */}
      <Card className="bg-primary text-primary-foreground border-0">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Receba Novidades</h3>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Dicas exclusivas sobre suplementação e treino direto no seu email.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-3 py-2 rounded-lg text-foreground text-sm bg-background"
            />
            <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
              Assinar
            </button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
