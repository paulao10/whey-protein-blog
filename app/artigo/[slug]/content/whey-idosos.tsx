import Link from "next/link";

export function WheyIdososContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead text-xl text-muted-foreground leading-relaxed">
        O <strong>Whey Protein para idosos</strong> pode ser um dos suplementos mais importantes para manter qualidade 
        de vida na terceira idade. A perda muscular relacionada à idade (sarcopenia) é uma das principais causas de 
        quedas, fraturas e perda de independência. Entenda como a proteína pode ajudar a combater esse processo.
      </p>

      <h2>O Que é Sarcopenia e Por Que Devemos Nos Preocupar?</h2>
      
      <p>
        A sarcopenia é a perda progressiva de massa e força muscular que ocorre naturalmente com o envelhecimento. 
        A partir dos 30 anos, perdemos cerca de <strong>3-8% de massa muscular por década</strong>, acelerando após os 60.
      </p>

      <div className="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
        <p className="font-semibold text-foreground mb-2">Consequências da Sarcopenia:</p>
        <ul className="text-muted-foreground space-y-1">
          <li>Maior risco de quedas e fraturas</li>
          <li>Perda de mobilidade e independência</li>
          <li>Dificuldade em atividades diárias (levantar, carregar objetos)</li>
          <li>Metabolismo mais lento (tendência ao ganho de gordura)</li>
          <li>Piora da qualidade de vida geral</li>
        </ul>
      </div>

      <p>
        A boa notícia é que a sarcopenia pode ser combatida com <strong>proteína adequada + exercício de resistência</strong>. 
        E o Whey é uma forma eficiente de garantir essa proteína.
      </p>

      <h2>Por Que Idosos Precisam de Mais Proteína?</h2>
      
      <p>
        Contrariando o que muitos pensam, idosos precisam de <strong>mais proteína que adultos jovens</strong>, não menos. 
        Os motivos são:
      </p>

      <ul className="space-y-3">
        <li>
          <strong>Resistência anabólica:</strong> Os músculos de idosos respondem menos eficientemente à proteína, 
          necessitando de doses maiores para estimular a síntese proteica.
        </li>
        <li>
          <strong>Menor apetite:</strong> Muitos idosos comem menos, especialmente proteínas que exigem mastigação.
        </li>
        <li>
          <strong>Absorção reduzida:</strong> O trato digestivo pode ser menos eficiente na absorção de nutrientes.
        </li>
        <li>
          <strong>Doenças crônicas:</strong> Condições de saúde podem aumentar a demanda proteica.
        </li>
      </ul>

      <h2>Quanto de Proteína Idosos Precisam?</h2>
      
      <p>
        As recomendações atualizadas para idosos são significativamente maiores que as tradicionais:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="min-w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-3 text-left">Situação</th>
              <th className="border border-border p-3 text-left">Proteína/kg/dia</th>
              <th className="border border-border p-3 text-left">Exemplo (70kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-medium">Idoso saudável sedentário</td>
              <td className="border border-border p-3">1,0-1,2g/kg</td>
              <td className="border border-border p-3">70-84g/dia</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-border p-3 font-medium">Idoso ativo (exercício regular)</td>
              <td className="border border-border p-3">1,2-1,5g/kg</td>
              <td className="border border-border p-3">84-105g/dia</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium">Idoso com sarcopenia</td>
              <td className="border border-border p-3">1,5-2,0g/kg</td>
              <td className="border border-border p-3">105-140g/dia</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-border p-3 font-medium">Idoso doente/hospitalizado</td>
              <td className="border border-border p-3">1,5-2,0g/kg</td>
              <td className="border border-border p-3">105-140g/dia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        O Whey pode fornecer 25-50g dessa meta diária de forma prática e fácil de consumir.
      </p>

      <h2>Por Que o Whey é Ideal Para Idosos?</h2>

      <h3>1. Facilidade de Consumo</h3>
      <p>
        Problemas dentários, dificuldade de mastigação e menor apetite tornam carnes menos atraentes. 
        Um shake de Whey é fácil de preparar e consumir, mesmo quando não há vontade de comer.
      </p>

      <h3>2. Alta Qualidade Proteica</h3>
      <p>
        O Whey tem o maior valor biológico entre as proteínas, com todos os aminoácidos essenciais 
        em proporções ideais. É especialmente rico em leucina, crucial para estimular a síntese muscular.
      </p>

      <h3>3. Absorção Rápida</h3>
      <p>
        A rápida absorção do Whey ajuda a superar a resistência anabólica dos músculos envelhecidos.
      </p>

      <h3>4. Rico em Leucina</h3>
      <p>
        A leucina é o "gatilho" da síntese proteica. Idosos precisam de mais leucina por dose 
        (cerca de 3g vs 2g para jovens) para ativar a mesma resposta anabólica.
      </p>

      <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
        <p className="font-semibold text-foreground mb-2">Dose de Leucina Ideal:</p>
        <p className="text-muted-foreground">
          Idosos devem consumir aproximadamente <strong>3g de leucina por refeição</strong> para maximizar 
          a síntese proteica. Um scoop de Whey de qualidade fornece cerca de 2,5-3g.
        </p>
      </div>

      <h2>Qual Tipo de Whey Escolher?</h2>
      
      <p>
        Para idosos, considere:
      </p>

      <ul className="space-y-3">
        <li>
          <strong><Link href="/artigo/whey-isolado-guia-completo" className="text-primary hover:underline">
          Whey Isolado</Link>:</strong> Melhor opção se houver sensibilidade digestiva ou intolerância à lactose 
          (comum em idosos).
        </li>
        <li>
          <strong><Link href="/artigo/whey-concentrado-vale-a-pena" className="text-primary hover:underline">
          Whey Concentrado</Link>:</strong> Boa opção se não houver problemas digestivos — mais econômico.
        </li>
        <li>
          <strong><Link href="/artigo/whey-hidrolisado-vale-a-pena" className="text-primary hover:underline">
          Whey Hidrolisado</Link>:</strong> Indicado para idosos com sérias dificuldades de digestão.
        </li>
      </ul>

      <p>
        Leia sobre <Link href="/artigo/whey-e-problemas-digestivos" className="text-primary hover:underline">
        Whey e problemas digestivos</Link> se houver preocupações gastrointestinais.
      </p>

      <h2>Como Usar Whey na Terceira Idade</h2>

      <h3>Dosagem Recomendada</h3>
      <p>
        Para idosos, doses maiores por refeição são mais eficazes devido à resistência anabólica:
      </p>

      <ul className="space-y-2">
        <li><strong>Mínimo eficaz:</strong> 25-30g de proteína por dose</li>
        <li><strong>Ideal:</strong> 35-40g por dose (especialmente no pós-exercício ou café da manhã)</li>
        <li><strong>Frequência:</strong> 1-2 vezes ao dia, conforme necessidade</li>
      </ul>

      <h3>Melhores Horários</h3>
      <ul className="space-y-2">
        <li><strong>Café da manhã:</strong> Começar o dia com proteína interrompe o catabolismo noturno</li>
        <li><strong>Pós-exercício:</strong> Fundamental para quem faz atividade física</li>
        <li><strong>Antes de dormir:</strong> Pode ajudar na recuperação noturna</li>
      </ul>

      <p>
        Mais detalhes em <Link href="/artigo/melhor-horario-tomar-whey" className="text-primary hover:underline">
        melhor horário para tomar Whey</Link>.
      </p>

      <h2>Whey + Exercício: A Combinação Essencial</h2>
      
      <p>
        O Whey sozinho ajuda, mas os benefícios são <strong>muito maiores quando combinados com exercício de resistência</strong> 
        (musculação adaptada para idosos).
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <h4 className="font-bold mb-3">Evidências Científicas:</h4>
        <ul className="space-y-2">
          <li>Estudo PROT-AGE: Suplementação proteica + exercício reduz perda muscular em até 50%</li>
          <li>Meta-análise 2018: Proteína + treino = ganho de massa magra mesmo acima de 70 anos</li>
          <li>Revisão Cochrane: Combinação reduz risco de quedas em 30%</li>
        </ul>
      </div>

      <p>
        Mesmo exercícios simples como caminhada, hidroginástica ou musculação leve, quando combinados 
        com proteína adequada, fazem grande diferença.
      </p>

      <h2>Cuidados Especiais</h2>

      <h3>Problemas Renais</h3>
      <p>
        Idosos com doença renal devem consultar um médico antes de aumentar a proteína. 
        Em rins saudáveis, a alta proteína é segura, mas com função renal comprometida, 
        pode ser necessário ajustar a quantidade.
      </p>

      <h3>Medicamentos</h3>
      <p>
        O Whey não interage com a maioria dos medicamentos, mas sempre informe seu médico 
        sobre qualquer suplemento que esteja usando.
      </p>

      <h3>Diabetes</h3>
      <p>
        Idosos diabéticos devem escolher Whey sem açúcar adicionado. O 
        <Link href="/artigo/whey-isolado-guia-completo" className="text-primary hover:underline"> Whey Isolado</Link> 
        é ideal por ter pouquíssimo carboidrato.
      </p>

      <h2>Formas Práticas de Consumir</h2>
      
      <p>
        Nem sempre o shake tradicional é a melhor opção para idosos. Alternativas:
      </p>

      <ul className="space-y-2">
        <li><strong>Mingau proteico:</strong> Aveia cozida + Whey (adicionar depois de esfriar)</li>
        <li><strong>Vitamina de frutas:</strong> Leite + Whey + banana + morango</li>
        <li><strong>Iogurte turbinado:</strong> Iogurte natural + 1 scoop de Whey</li>
        <li><strong>Pudim proteico:</strong> Whey + gelatina sem açúcar (receita fria)</li>
      </ul>

      <p>
        Veja mais ideias em <Link href="/artigo/receitas-com-whey-protein" className="text-primary hover:underline">
        receitas com Whey Protein</Link>.
      </p>

      <h2>Whey vs Outras Fontes de Proteína Para Idosos</h2>
      
      <div className="overflow-x-auto my-8">
        <table className="min-w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-3 text-left">Fonte</th>
              <th className="border border-border p-3 text-left">Vantagem</th>
              <th className="border border-border p-3 text-left">Desvantagem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-medium">Whey Protein</td>
              <td className="border border-border p-3">Fácil consumo, alta leucina, rápida absorção</td>
              <td className="border border-border p-3">Custo, pode não ser aceito culturalmente</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-border p-3 font-medium">Carne/Frango</td>
              <td className="border border-border p-3">Alimento completo, familiar</td>
              <td className="border border-border p-3">Exige mastigação, preparo demorado</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium">Ovos</td>
              <td className="border border-border p-3">Econômico, versátil</td>
              <td className="border border-border p-3">Menos leucina por porção</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-border p-3 font-medium">Leite/Derivados</td>
              <td className="border border-border p-3">Cálcio, familiar</td>
              <td className="border border-border p-3">Lactose pode causar problemas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>O Que Dizem as Sociedades Médicas</h2>
      
      <p>
        Diversas organizações de saúde recomendam aumento de proteína para idosos:
      </p>

      <ul className="space-y-2">
        <li><strong>ESPEN (Sociedade Europeia de Nutrição):</strong> 1,0-1,2g/kg para idosos saudáveis</li>
        <li><strong>PROT-AGE Study Group:</strong> 1,0-1,5g/kg, com doses de 25-30g por refeição</li>
        <li><strong>BRASPEN (Sociedade Brasileira):</strong> Reforça importância da proteína de alto valor biológico</li>
      </ul>

      <h2>Perguntas Frequentes (FAQ)</h2>
      
      <div className="space-y-6 my-8">
        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Whey é seguro para idosos?</h3>
          <p className="text-muted-foreground">
            Sim, para idosos saudáveis sem problemas renais, o Whey é seguro e altamente recomendado. 
            Sempre consulte um médico se houver condições de saúde específicas.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">A partir de qual idade devo me preocupar com proteína?</h3>
          <p className="text-muted-foreground">
            A perda muscular começa aos 30, mas acelera após 50-60 anos. A partir dos 50, 
            é importante monitorar e aumentar gradualmente a ingestão proteica.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Meu pai/mãe não gosta de shake. O que fazer?</h3>
          <p className="text-muted-foreground">
            Use em preparações como mingau, vitaminas, iogurte ou pudim. O sabor do Whey pode ser 
            disfarçado em diversas receitas que já fazem parte do hábito alimentar.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">O plano de saúde cobre Whey?</h3>
          <p className="text-muted-foreground">
            Geralmente não, mas em casos de desnutrição ou sarcopenia grave com prescrição médica, 
            alguns suplementos podem ser cobertos. Verifique com seu plano.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Whey substitui medicamentos para sarcopenia?</h3>
          <p className="text-muted-foreground">
            Não substitui tratamento médico, mas é parte fundamental da estratégia nutricional 
            contra a sarcopenia, junto com exercício físico adequado.
          </p>
        </div>
      </div>
    </article>
  );
}
