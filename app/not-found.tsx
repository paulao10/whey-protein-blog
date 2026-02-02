import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/blog/header";
import { Footer } from "@/components/blog/footer";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-primary text-4xl font-bold">404</span>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">
            Pagina nao encontrada
          </h1>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Desculpe, a pagina que voce esta procurando nao existe ou foi movida. 
            Que tal explorar nossos artigos sobre Whey Protein?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Ir para Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/artigo/whey-protein-guia-completo">
                <Search className="w-4 h-4 mr-2" />
                Guia Completo
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="font-semibold text-foreground mb-4">
              Artigos populares
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/artigo/tipos-de-whey-protein"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tipos de Whey Protein: Qual escolher?
                </Link>
              </li>
              <li>
                <Link
                  href="/artigo/como-tomar-whey-protein"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Como tomar Whey Protein corretamente
                </Link>
              </li>
              <li>
                <Link
                  href="/artigo/melhores-whey-protein-brasil"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Melhores Whey Protein do Brasil
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
