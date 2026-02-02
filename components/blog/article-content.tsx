import React from "react"
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/articles";
import { getRelatedArticles, categories } from "@/lib/articles";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";

interface ArticleContentProps {
  article: Article;
  children: React.ReactNode;
}

export function ArticleContent({ article, children }: ArticleContentProps) {
  const relatedArticles = getRelatedArticles(article);
  const category = categories.find((c) => c.slug === article.category);

  return (
    <article className="max-w-none">
      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            {category?.name || "Artigo"}
          </Badge>
          <span className="text-muted-foreground text-sm flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime} min de leitura
          </span>
          <span className="text-muted-foreground text-sm flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Atualizado em {new Date(article.updatedAt).toLocaleDateString("pt-BR")}
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight text-balance">
          {article.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Table of Contents Hint */}
      <Card className="mb-8 bg-secondary/50 border-border">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span>
              Conteudo revisado por especialistas em nutricao esportiva. 
              Ultima atualizacao: {new Date(article.updatedAt).toLocaleDateString("pt-BR")}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2 prose-ul:my-4 prose-ol:my-4 prose-li:my-1">
        {children}
      </div>

      {/* Tags */}
      <div className="mt-10 pt-8 border-t border-border">
        <h4 className="font-semibold text-foreground mb-3">Tags:</h4>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-border text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Artigos Relacionados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/artigo/${related.slug}`}
                className="group p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {related.title}
                </h4>
                <span className="text-primary text-sm flex items-center gap-1">
                  Ler mais <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
