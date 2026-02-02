import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/articles";
import { categories } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const category = categories.find((c) => c.slug === article.category);

  if (featured) {
    return (
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow border-border">
        <Link href={`/artigo/${article.slug}`}>
          <div className="bg-primary/10 h-48 flex items-center justify-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-3xl font-bold">WP</span>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                {category?.name || "Artigo"}
              </Badge>
              <span className="text-muted-foreground text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime} min
              </span>
            </div>
            <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-balance">
              {article.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.updatedAt).toLocaleDateString("pt-BR")}
              </span>
              <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Ler mais <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden group hover:shadow-md transition-shadow border-border">
      <Link href={`/artigo/${article.slug}`}>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs border-primary/30 text-primary">
              {category?.name || "Artigo"}
            </Badge>
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime} min
            </span>
          </div>
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
