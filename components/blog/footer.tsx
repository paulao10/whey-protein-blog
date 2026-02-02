import Link from "next/link";
import { categories } from "@/lib/articles";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-primary">
                <span className="text-primary-foreground font-bold text-lg">WP</span>
              </div>
              <div>
                <span className="font-bold text-background text-lg">Whey Protein</span>
                <span className="text-primary font-semibold text-lg"> Brasil</span>
              </div>
            </Link>
            <p className="text-background/70 max-w-md leading-relaxed">
              Seu portal completo sobre Whey Protein e suplementação esportiva. 
              Informações baseadas em ciência para você alcançar seus objetivos 
              de forma segura e eficiente.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-bold text-background mb-4">Categorias</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/categoria/${category.slug}`}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="font-bold text-background mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/artigo/whey-protein-guia-completo"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Guia Completo
                </Link>
              </li>
              <li>
                <Link
                  href="/artigo/tipos-de-whey-protein"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Tipos de Whey
                </Link>
              </li>
              <li>
                <Link
                  href="/artigo/melhores-whey-protein-brasil"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Melhores Marcas
                </Link>
              </li>
              <li>
                <Link
                  href="/artigo/como-tomar-whey-protein"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Como Tomar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              2026 Whey Protein Brasil. Todos os direitos reservados.
            </p>
            <p className="text-background/60 text-sm">
              As informações deste site não substituem orientação médica ou nutricional profissional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
