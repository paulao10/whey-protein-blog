import Link from "next/link";

export function ReceitasContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead text-xl text-muted-foreground leading-relaxed">
        Cansou do shake tradicional de <strong>Whey Protein</strong>? Existem dezenas de maneiras deliciosas de incluir 
        esse suplemento na sua alimentação. Das receitas mais simples às mais elaboradas, você vai descobrir como 
        transformar seu Whey em refeições saborosas que facilitam bater a meta de proteína sem monotonia.
      </p>

      <h2>Dicas Importantes Antes de Cozinhar com Whey</h2>
      
      <ul className="space-y-2">
        <li><strong>Temperatura:</strong> O Whey pode ser aquecido sem perder propriedades, mas altas temperaturas 
        podem alterar textura e sabor</li>
        <li><strong>Adição:</strong> Em receitas quentes, adicione o Whey por último e em fogo baixo</li>
        <li><strong>Proporção:</strong> Não substitua toda a farinha por Whey — use no máximo 30-50%</li>
        <li><strong>Sabores:</strong> Use Whey de sabor neutro para receitas salgadas e o saborizado para doces</li>
      </ul>

      <p>
        Entenda os <Link href="/artigo/beneficios-whey-protein" className="text-primary hover:underline">
        benefícios do Whey Protein</Link> para saber por que vale a pena incluí-lo em diversas refeições.
      </p>

      <h2>Café da Manhã Proteico</h2>

      <h3>1. Panqueca de Whey</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~25g proteína</span>
          <span className="text-muted-foreground text-sm">15 minutos</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>1 scoop de Whey (sabor baunilha ou chocolate)</li>
          <li>1 ovo inteiro</li>
          <li>1 banana madura amassada</li>
          <li>2 colheres de aveia</li>
          <li>Pitada de canela</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Misture todos os ingredientes até formar uma massa homogênea. Aqueça uma frigideira antiaderente 
          em fogo médio-baixo. Despeje porções da massa e cozinhe até formar bolhas na superfície. 
          Vire e cozinhe o outro lado. Sirva com frutas ou mel.
        </p>
      </div>

      <h3>2. Mingau Proteico de Aveia</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~30g proteína</span>
          <span className="text-muted-foreground text-sm">10 minutos</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>4 colheres de aveia em flocos</li>
          <li>1 scoop de Whey (qualquer sabor)</li>
          <li>200ml de leite (ou água)</li>
          <li>1 colher de pasta de amendoim</li>
          <li>Frutas a gosto</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Cozinhe a aveia no leite até engrossar. Retire do fogo e deixe esfriar levemente. 
          Adicione o Whey e misture bem. Complete com pasta de amendoim e frutas. 
          O segredo é adicionar o Whey quando não estiver mais muito quente.
        </p>
      </div>

      <h3>3. Overnight Oats Proteico</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~28g proteína</span>
          <span className="text-muted-foreground text-sm">5 min + geladeira</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>4 colheres de aveia</li>
          <li>1 scoop de Whey</li>
          <li>150ml de leite</li>
          <li>1 colher de chia</li>
          <li>Morango ou banana</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Misture todos os ingredientes em um pote com tampa. Leve à geladeira por pelo menos 6 horas 
          (ou de um dia para o outro). De manhã, adicione frutas frescas e consuma gelado.
        </p>
      </div>

      <h2>Lanches e Snacks</h2>

      <h3>4. Brownie Proteico de Micro-ondas</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~24g proteína</span>
          <span className="text-muted-foreground text-sm">3 minutos</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>1 scoop de Whey de chocolate</li>
          <li>2 colheres de cacau em pó</li>
          <li>1 ovo</li>
          <li>2 colheres de leite</li>
          <li>1 colher de óleo de coco (opcional)</li>
          <li>Adoçante a gosto</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Misture todos os ingredientes em uma caneca grande. Leve ao micro-ondas por 1 minuto e 30 segundos. 
          Verifique se está firme; se necessário, adicione mais 15-20 segundos. Deixe esfriar antes de consumir.
        </p>
      </div>

      <h3>5. Bolachas Proteicas</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~5g proteína/unid</span>
          <span className="text-muted-foreground text-sm">25 minutos</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes (rende ~10 unidades):</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>2 scoops de Whey</li>
          <li>1 xícara de aveia</li>
          <li>2 colheres de pasta de amendoim</li>
          <li>1 ovo</li>
          <li>Gotas de chocolate (opcional)</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Misture todos os ingredientes até formar uma massa. Faça bolinhas e achate levemente em uma 
          assadeira com papel manteiga. Asse a 180°C por 12-15 minutos. Deixe esfriar na assadeira.
        </p>
      </div>

      <h3>6. Mousse de Chocolate Proteico</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~26g proteína</span>
          <span className="text-muted-foreground text-sm">10 min + geladeira</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>1 scoop de Whey de chocolate</li>
          <li>100g de iogurte grego natural</li>
          <li>2 colheres de cacau em pó</li>
          <li>Adoçante a gosto</li>
          <li>50ml de leite</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Bata todos os ingredientes no liquidificador ou mixer. Despeje em taças e leve à geladeira 
          por pelo menos 2 horas. Decore com frutas ou cacau polvilhado.
        </p>
      </div>

      <h2>Shakes e Smoothies</h2>

      <h3>7. Shake Pós-Treino Completo</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~35g proteína</span>
          <span className="text-muted-foreground text-sm">5 minutos</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>1 scoop de <Link href="/artigo/whey-isolado-guia-completo" className="text-primary hover:underline">
          Whey Isolado</Link></li>
          <li>1 banana</li>
          <li>1 colher de aveia</li>
          <li>1 colher de pasta de amendoim</li>
          <li>300ml de leite</li>
          <li>Gelo a gosto</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Bata tudo no liquidificador até ficar homogêneo e cremoso. Perfeito para 
          <Link href="/artigo/melhor-horario-tomar-whey" className="text-primary hover:underline"> o pós-treino</Link>.
        </p>
      </div>

      <h3>8. Smoothie Verde Proteico</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~28g proteína</span>
          <span className="text-muted-foreground text-sm">5 minutos</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>1 scoop de Whey (baunilha ou natural)</li>
          <li>1 xícara de espinafre</li>
          <li>1 banana congelada</li>
          <li>1/2 abacate</li>
          <li>250ml de água de coco</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Bata todos os ingredientes até ficar cremoso. A banana congelada dá textura de sorvete. 
          Ideal para quem busca <Link href="/artigo/whey-para-emagrecer" className="text-primary hover:underline">
          emagrecer</Link> — nutritivo e saciante.
        </p>
      </div>

      <h3>9. Shake de Morango Cremoso</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~30g proteína</span>
          <span className="text-muted-foreground text-sm">5 minutos</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>1 scoop de Whey de morango</li>
          <li>100g de morango congelado</li>
          <li>100g de iogurte natural</li>
          <li>150ml de leite</li>
          <li>Gelo</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Bata tudo no liquidificador até ficar cremoso e homogêneo. O iogurte adiciona probióticos 
          e deixa a textura mais encorpada.
        </p>
      </div>

      <h2>Sobremesas</h2>

      <h3>10. Sorvete Proteico</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~24g proteína</span>
          <span className="text-muted-foreground text-sm">10 min + congelador</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>2 bananas congeladas</li>
          <li>1 scoop de Whey (sabor a escolha)</li>
          <li>2 colheres de leite</li>
          <li>Toppings: nibs de cacau, granola, frutas</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Bata as bananas congeladas no processador até virar um creme. Adicione o Whey e o leite, 
          batendo novamente. Sirva imediatamente ou leve ao congelador por 30 minutos para textura firme.
        </p>
      </div>

      <h3>11. Pudim de Whey</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">~28g proteína</span>
          <span className="text-muted-foreground text-sm">15 min + geladeira</span>
        </div>
        <h4 className="font-semibold mb-2">Ingredientes:</h4>
        <ul className="text-sm space-y-1 mb-4">
          <li>1 scoop de Whey de baunilha</li>
          <li>300ml de leite</li>
          <li>1 sachê de gelatina sem sabor</li>
          <li>Adoçante a gosto</li>
          <li>Essência de baunilha</li>
        </ul>
        <h4 className="font-semibold mb-2">Modo de Preparo:</h4>
        <p className="text-sm text-muted-foreground">
          Hidrate a gelatina conforme instruções da embalagem. Aqueça o leite (sem ferver) e dissolva 
          a gelatina. Deixe esfriar. Adicione o Whey e bata. Despeje em forminhas e leve à geladeira por 4 horas.
        </p>
      </div>

      <h2>Dicas de Conservação</h2>
      
      <ul className="space-y-2">
        <li>Receitas prontas com Whey duram 2-3 dias na geladeira</li>
        <li>Não congele shakes já prontos — a textura muda</li>
        <li>Bolachas e brownies podem ser congelados por até 1 mês</li>
        <li>Overnight oats duram até 3 dias na geladeira</li>
      </ul>

      <h2>Qual Whey Usar nas Receitas?</h2>
      
      <p>
        Todos os tipos funcionam, mas cada um tem características:
      </p>

      <ul className="space-y-2">
        <li><strong><Link href="/artigo/whey-concentrado-vale-a-pena" className="text-primary hover:underline">
        Concentrado</Link>:</strong> Sabor mais cremoso, ideal para receitas que vão ao forno</li>
        <li><strong><Link href="/artigo/whey-isolado-guia-completo" className="text-primary hover:underline">
        Isolado</Link>:</strong> Textura mais leve, melhor para shakes e receitas sem aquecimento</li>
        <li><strong><Link href="/artigo/whey-hidrolisado-vale-a-pena" className="text-primary hover:underline">
        Hidrolisado</Link>:</strong> Sabor mais amargo, melhor disfarçar em receitas com chocolate</li>
      </ul>

      <h2>Perguntas Frequentes (FAQ)</h2>
      
      <div className="space-y-6 my-8">
        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">O Whey perde proteína ao ser aquecido?</h3>
          <p className="text-muted-foreground">
            Não. O aquecimento desnatura a proteína (muda a estrutura), mas os aminoácidos permanecem 
            disponíveis. É o mesmo que acontece quando você cozinha um ovo.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Posso substituir farinha por Whey em qualquer receita?</h3>
          <p className="text-muted-foreground">
            Não totalmente. O Whey não tem glúten, então substitua no máximo 30-50% da farinha. 
            Receitas específicas para Whey funcionam melhor.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Por que minhas receitas ficam secas?</h3>
          <p className="text-muted-foreground">
            O Whey absorve muito líquido. Adicione mais leite, ovos ou pasta de amendoim. 
            Também evite assar por tempo excessivo.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Qual sabor de Whey é mais versátil?</h3>
          <p className="text-muted-foreground">
            Baunilha e neutro são os mais versáteis — funcionam em receitas doces e podem ser usados 
            em algumas salgadas. Chocolate é ótimo para sobremesas específicas.
          </p>
        </div>
      </div>
    </article>
  );
}
