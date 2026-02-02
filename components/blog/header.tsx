"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/articles";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-primary">
              <span className="text-primary-foreground font-bold text-lg">WP</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-foreground text-lg">Whey Protein</span>
              <span className="text-primary font-semibold text-lg"> Brasil</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </Link>
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.slug}
                href={`/categoria/${category.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Search className="w-5 h-5" />
              <span className="sr-only">Buscar</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categoria/${category.slug}`}
                  className="px-4 py-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
