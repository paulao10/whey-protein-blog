# Guia para Adicionar Imagens Reais de Whey Protein

## 📁 Estrutura de Pastas Criada:
```
/public/
  └── whey-images/
      ├── whey-logo.png          # Logo do cabeçalho
      ├── whey-logo-footer.png   # Logo do rodapé
      ├── whey-hero.png          # Imagem hero da página principal
      └── (outras imagens de whey)
```

## 🖼️ Onde Adicionar Imagens:

### 1. **Logo do Site (Header)**
- Arquivo: `/public/whey-images/whey-logo.png`
- Dimensões recomendadas: 100x100px
- Formato: PNG com fundo transparente

### 2. **Logo do Rodapé**
- Arquivo: `/public/whey-images/whey-logo-footer.png`
- Dimensões recomendadas: 100x100px
- Formato: PNG com fundo transparente

### 3. **Imagem Hero da Página Principal**
- Arquivo: `/public/whey-images/whey-hero.png`
- Dimensões recomendadas: 200x200px
- Formato: PNG ou JPG

## 📝 Como Obter Imagens Reais:

### Opções Gratuitas:
1. **Unsplash** - https://unsplash.com/s/photos/whey-protein
2. **Pexels** - https://www.pexels.com/search/whey%20protein/
3. **Pixabay** - https://pixabay.com/images/search/whey%20protein/

### Opções Pagas (Qualidade Profissional):
1. **Shutterstock** - https://www.shutterstock.com/search/whey-protein
2. **Adobe Stock** - https://stock.adobe.com/search?k=whey+protein
3. **Getty Images** - https://www.gettyimages.com/photos/whey-protein

## 🎯 Sugestões de Imagens para Adicionar:

### Conteúdo dos Artigos:
- Fotos de diferentes tipos de whey (concentrado, isolado, hidrolisado)
- Imagens de pessoas consumindo whey protein
- Fotos de embalagens de marcas populares
- Imagens de treinos e musculação
- Gráficos e infográficos sobre nutrição

### Categorias Específicas:
- **Para iniciantes**: Imagens amigáveis e explicativas
- **Para avançados**: Imagens técnicas e profissionais
- **Mulheres**: Imagens de mulheres usando whey
- **Idosos**: Imagens apropriadas para terceira idade

## 🔧 Componente Reutilizável Criado:

Use o componente `WheyImage` para adicionar imagens consistentemente:

```tsx
import { WheyImage } from "@/components/blog/whey-image";

<WheyImage 
  src="/whey-images/nome-da-imagem.png"
  alt="Descrição da imagem"
  width={400}
  height={400}
  className="minha-classe-customizada"
/>
```

## 📱 Dicas de Otimização:

1. **Compressão**: Use ferramentas como TinyPNG para reduzir tamanho
2. **Formatos**: Prefira WebP quando possível
3. **Dimensões**: Use tamanhos apropriados para cada contexto
4. **Lazy Loading**: Já configurado no componente

## ✅ Checklist:

- [ ] Adicionar logo do cabeçalho
- [ ] Adicionar logo do rodapé  
- [ ] Adicionar imagem hero
- [ ] Adicionar imagens para artigos principais
- [ ] Otimizar todas as imagens
- [ ] Testar carregamento em diferentes dispositivos

As imagens atuais mostrarão placeholders enquanto você não adicionar os arquivos reais.