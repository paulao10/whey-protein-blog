import Link from "next/link";

export function WheyEmagrecerContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead text-xl text-muted-foreground leading-relaxed">
        Muita gente acredita que <strong>Whey Protein é apenas para quem quer ganhar massa</strong>, mas a verdade é que 
        ele pode ser um grande aliado no emagrecimento. A proteína aumenta a saciedade, preserva massa muscular durante 
        dietas e acelera o metabolismo. Descubra como usar o Whey estrategicamente para perder peso de forma saudável.
      </p>

      <h2>Por Que Proteína Ajuda a Emagrecer?</h2>
      
      <p>
        A proteína tem características únicas que favorecem a perda de peso:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-card border border-border p-5 rounded-lg">
          <h4 className="font-bold text-primary mb-3">Efeito Térmico</h4>
          <p className="text-sm text-muted-foreground">
            O corpo gasta mais energia para digerir proteína (20-30% das calorias) comparado a carboidratos (5-10%) 
            e gorduras (0-3%). Isso significa que você "queima" calorias apenas ao processar o nutriente.
          </p>
        </div>
        
        <div className="bg-card border border-border p-5 rounded-lg">
          <h4 className="font-bold text-primary mb-3">Saciedade Prolongada</h4>
          <p className="text-sm text-muted-foreground">
            A proteína regula hormônios de fome (grelina) e saciedade (leptina, GLP-1), fazendo você se sentir 
            satisfeito por mais tempo e reduzindo a vontade de comer.
          </p>
        </div>
        
        <div className="bg-card border border-border p-5 rounded-lg">
          <h4 className="font-bold text-primary mb-3">Preservação Muscular</h4>
          <p className="text-sm text-muted-foreground">
            Em déficit calórico, o corpo pode usar músculo como energia. Alta proteína minimiza isso, 
            garantindo que você perca gordura, não massa magra.
          </p>
        </div>
        
        <div className="bg-card border border-border p-5 rounded-lg">
          <h4 className="font-bold text-primary mb-3">Metabolismo Ativo</h4>
          <p className="text-sm text-muted-foreground">
            Músculos consomem mais energia em repouso. Preservando massa magra, você mantém seu metabolismo 
            acelerado mesmo perdendo peso.
          </p>
        </div>
      </div>

      <h2>Qual Whey Escolher Para Emagrecer?</h2>
      
      <p>
        Para quem busca emagrecimento, o <Link href="/artigo/whey-isolado-guia-completo" className="text-primary hover:underline">
        Whey Isolado</Link> é a melhor escolha por ter:
      </p>

      <ul className="space-y-2">
        <li>Maior concentração de proteína (90%+)</li>
        <li>Menos carboidratos e gorduras</li>
        <li>Menos calorias por dose</li>
        <li>Baixíssima lactose</li>
      </ul>

      <div className="overflow-x-auto my-8">
        <table className="min-w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-3 text-left">Tipo</th>
              <th className="border border-border p-3 text-left">Proteína</th>
              <th className="border border-border p-3 text-left">Calorias/dose</th>
              <th className="border border-border p-3 text-left">Indicação</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-primary/5">
              <td className="border border-border p-3 font-medium">Isolado</td>
              <td className="border border-border p-3">90-95%</td>
              <td className="border border-border p-3">~100-110 kcal</td>
              <td className="border border-border p-3 text-primary font-semibold">Ideal para emagrecer</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium">Concentrado</td>
              <td className="border border-border p-3">70-80%</td>
              <td className="border border-border p-3">~120-130 kcal</td>
              <td className="border border-border p-3">Alternativa econômica</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-border p-3 font-medium">Hidrolisado</td>
              <td className="border border-border p-3">80-90%</td>
              <td className="border border-border p-3">~110-120 kcal</td>
              <td className="border border-border p-3">Absorção ultra-rápida</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        O <Link href="/artigo/whey-concentrado-vale-a-pena" className="text-primary hover:underline">
        Whey Concentrado</Link> também funciona se o orçamento for apertado — a diferença calórica é pequena.
      </p>

      <h2>Quanto de Whey Tomar Para Emagrecer?</h2>
      
      <p>
        Durante dietas de emagrecimento, a necessidade de proteína é <strong>maior do que em fases de manutenção</strong> 
        para preservar a massa muscular. A recomendação é:
      </p>

      <div className="bg-primary/10 border-l-4 border-primary p-6 my-6">
        <h4 className="font-bold mb-3">Meta Proteica em Dieta:</h4>
        <p className="text-lg mb-2"><strong>2,0 a 2,8g de proteína por kg de peso corporal</strong></p>
        <p className="text-sm text-muted-foreground">
          Exemplo: Uma pessoa de 70kg deveria consumir 140-196g de proteína por dia durante o cutting.
        </p>
      </div>

      <p>
        O Whey entra para complementar quando a alimentação não atinge essa meta. Geralmente <strong>1-2 scoops por dia</strong> 
        são suficientes. Veja mais detalhes em 
        <Link href="/artigo/quanto-whey-tomar-por-dia" className="text-primary hover:underline"> quanto Whey tomar por dia</Link>.
      </p>

      <h2>Melhores Horários Para Tomar Whey no Emagrecimento</h2>

      <h3>1. No Café da Manhã</h3>
      <p>
        Começar o dia com proteína ajuda a controlar a fome ao longo da manhã e evita picos de glicemia 
        que levam à compulsão alimentar.
      </p>

      <h3>2. Como Lanche (Tarde ou Manhã)</h3>
      <p>
        Substituir lanches calóricos por um shake de Whey reduz calorias totais enquanto mantém a saciedade. 
        Um shake com 25g de proteína tem apenas ~110 kcal.
      </p>

      <h3>3. Pós-Treino</h3>
      <p>
        Fundamental para recuperação e preservação muscular, especialmente se você treina em déficit calórico.
      </p>

      <h3>4. À Noite (Ceia)</h3>
      <p>
        Se bater fome à noite, um shake leve é melhor que atacar a geladeira. Use com água para menos calorias.
      </p>

      <p>
        Mais estratégias em <Link href="/artigo/melhor-horario-tomar-whey" className="text-primary hover:underline">
        melhor horário para tomar Whey</Link>.
      </p>

      <h2>Estratégias Práticas Para Usar Whey no Emagrecimento</h2>

      <h3>Substituir Refeições? Cuidado!</h3>
      <p>
        O Whey <strong>não deve substituir refeições completas</strong> regularmente. Ele é um suplemento, não um 
        substituto de alimentação. Use para complementar a dieta, não como base dela.
      </p>

      <h3>Receitas de Baixa Caloria</h3>
      <p>
        Prepare shakes com água ou leite desnatado. Adicione gelo para volume. Evite adicionar frutas muito 
        calóricas, pasta de amendoim ou mel se o objetivo é controle calórico rigoroso.
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <h4 className="font-bold mb-3">Shake Magro (~120 kcal):</h4>
        <ul className="space-y-1">
          <li>1 scoop de Whey Isolado</li>
          <li>200ml de água gelada</li>
          <li>Gelo a gosto</li>
          <li>Opcional: 50g de morango (~15 kcal)</li>
        </ul>
      </div>

      <p>
        Veja mais ideias em <Link href="/artigo/receitas-com-whey-protein" className="text-primary hover:underline">
        receitas com Whey Protein</Link>.
      </p>

      <h2>Whey Queima Gordura?</h2>
      
      <p>
        <strong>Não diretamente.</strong> Nenhum suplemento "queima gordura" magicamente. O que o Whey faz é:
      </p>

      <ul className="space-y-2">
        <li>Facilitar o déficit calórico através da saciedade</li>
        <li>Preservar músculo para manter metabolismo ativo</li>
        <li>Fornecer proteína de qualidade com poucas calorias</li>
      </ul>

      <p>
        A perda de gordura acontece pelo <strong>déficit calórico</strong> — gastar mais do que consome. 
        O Whey é uma ferramenta que facilita esse processo.
      </p>

      <h2>Erros Comuns Ao Usar Whey Para Emagrecer</h2>

      <h3>Erro 1: Achar que Whey Emagrece Sozinho</h3>
      <p>
        Sem dieta adequada e exercícios, o Whey é apenas calorias extras. Ele é uma ferramenta, não uma solução mágica.
      </p>

      <h3>Erro 2: Exagerar na Quantidade</h3>
      <p>
        Mais proteína não significa mais emagrecimento. O excesso se converte em energia e pode até ser armazenado 
        como gordura se você estiver em superávit calórico.
      </p>

      <h3>Erro 3: Preparar Shakes Muito Calóricos</h3>
      <p>
        Adicionar banana, pasta de amendoim, leite integral e mel transforma um shake de 110 kcal em um de 400+ kcal. 
        Cuidado com os "extras".
      </p>

      <h3>Erro 4: Ignorar Proteína da Alimentação</h3>
      <p>
        O Whey complementa, não substitui. Priorize fontes alimentares como frango, peixe, ovos e depois use o Whey 
        para fechar a conta.
      </p>

      <h2>Whey + Exercício: A Combinação Vencedora</h2>
      
      <p>
        Para resultados de emagrecimento, combine o Whey com:
      </p>

      <ul className="space-y-3">
        <li>
          <strong>Treino de força:</strong> Essencial para preservar e construir músculo durante a dieta
        </li>
        <li>
          <strong>Cardio moderado:</strong> Aumenta o gasto calórico sem comprometer a recuperação
        </li>
        <li>
          <strong>NEAT elevado:</strong> Movimente-se mais no dia a dia (escadas, caminhadas, etc.)
        </li>
      </ul>

      <p>
        Considere combinar com <Link href="/artigo/whey-com-creatina" className="text-primary hover:underline">
        creatina</Link> para manter força nos treinos mesmo em déficit calórico.
      </p>

      <h2>Expectativas Realistas</h2>
      
      <p>
        Com dieta adequada, treino consistente e uso correto de Whey, espere:
      </p>

      <ul className="space-y-2">
        <li><strong>Perda de peso saudável:</strong> 0,5 a 1kg por semana</li>
        <li><strong>Preservação muscular:</strong> Mínima perda de força</li>
        <li><strong>Menor fome:</strong> Especialmente entre refeições</li>
        <li><strong>Melhor composição corporal:</strong> Menos gordura, mais definição</li>
      </ul>

      <h2>Perguntas Frequentes (FAQ)</h2>
      
      <div className="space-y-6 my-8">
        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Whey engorda?</h3>
          <p className="text-muted-foreground">
            Só se consumido em excesso dentro de um superávit calórico. Usado corretamente em uma dieta 
            equilibrada, o Whey ajuda no emagrecimento, não engorda.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Posso tomar Whey sem fazer exercício?</h3>
          <p className="text-muted-foreground">
            Pode, mas os benefícios são reduzidos. O exercício potencializa a síntese proteica e o 
            efeito de preservação muscular. Sem treino, o Whey serve apenas como fonte de proteína.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Mulheres podem tomar Whey?</h3>
          <p className="text-muted-foreground">
            Com certeza! Não há diferença de gênero. O Whey ajuda mulheres a preservar massa magra, 
            definir o corpo e controlar a fome. Não causa "inchaço" ou aparência masculina.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Whey com água ou leite para emagrecer?</h3>
          <p className="text-muted-foreground">
            Para menor caloria, use água. Se quiser mais cremosidade sem muitas calorias extras, 
            use leite desnatado. A diferença é de 50-80 kcal.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Qual o melhor: Whey ou termogênico?</h3>
          <p className="text-muted-foreground">
            São diferentes. O Whey fornece proteína e saciedade. Termogênicos têm pouca evidência 
            científica de eficácia. Priorize o Whey e não espere milagres de termogênicos.
          </p>
        </div>
      </div>
    </article>
  );
}
