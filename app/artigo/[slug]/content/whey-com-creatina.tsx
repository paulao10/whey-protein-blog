import Link from "next/link";

export function WheyComCreatinaContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead text-xl text-muted-foreground leading-relaxed">
        <strong>Whey Protein e Creatina</strong> são os dois suplementos mais estudados e eficazes para ganho de massa 
        muscular e performance. Mas será que podem ser combinados? A resposta é sim, e a combinação pode potencializar 
        seus resultados. Neste artigo, você vai aprender como usar os dois juntos de forma estratégica.
      </p>

      <h2>Por Que Combinar Whey e Creatina?</h2>
      
      <p>
        Cada suplemento atua por mecanismos diferentes e complementares:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-card border border-border p-5 rounded-lg">
          <h4 className="font-bold text-primary mb-3">Whey Protein</h4>
          <ul className="text-sm space-y-2">
            <li>Fornece aminoácidos para construção muscular</li>
            <li>Estimula síntese proteica via leucina</li>
            <li>Acelera recuperação pós-treino</li>
            <li>Ajuda a atingir meta proteica diária</li>
          </ul>
        </div>
        
        <div className="bg-card border border-border p-5 rounded-lg">
          <h4 className="font-bold text-primary mb-3">Creatina</h4>
          <ul className="text-sm space-y-2">
            <li>Aumenta força e potência muscular</li>
            <li>Melhora performance em exercícios intensos</li>
            <li>Aumenta volume celular muscular</li>
            <li>Acelera ressíntese de ATP</li>
          </ul>
        </div>
      </div>

      <p>
        <strong>Juntos, eles criam um efeito sinérgico:</strong> a creatina permite treinos mais intensos e 
        volumosos, enquanto o Whey fornece o substrato para a síntese proteica estimulada por esse treino mais pesado.
      </p>

      <h2>O Que a Ciência Diz Sobre a Combinação?</h2>
      
      <p>
        Diversos estudos demonstram que a combinação de proteína e creatina supera o uso isolado de cada um:
      </p>

      <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
        <p className="font-semibold text-foreground mb-2">Evidências Científicas:</p>
        <ul className="text-muted-foreground space-y-2">
          <li>Estudo de Cribb et al. (2007): Combinação resultou em <strong>maior ganho de massa magra</strong> 
          comparado a proteína ou creatina isoladas</li>
          <li>Meta-análise de Chilibeck et al. (2017): Creatina + proteína = <strong>ganhos superiores de força</strong> em idosos</li>
          <li>Pesquisa de Burke et al. (2001): A combinação aumentou <strong>armazenamento de creatina muscular</strong></li>
        </ul>
      </div>

      <h2>Como Tomar Whey e Creatina Juntos</h2>

      <h3>Opção 1: No Mesmo Shake (Mais Prático)</h3>
      
      <p>
        Você pode misturar ambos no mesmo shake sem problemas. Não há interação negativa entre eles.
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <h4 className="font-bold mb-3">Receita do Shake Completo:</h4>
        <ul className="space-y-2">
          <li>1 scoop de <Link href="/artigo/whey-concentrado-vale-a-pena" className="text-primary hover:underline">
          Whey Concentrado</Link> ou <Link href="/artigo/whey-isolado-guia-completo" className="text-primary hover:underline">
          Isolado</Link> (25-30g)</li>
          <li>3-5g de Creatina Monohidratada</li>
          <li>300ml de água ou leite</li>
          <li>Opcional: 1 banana para carboidratos</li>
        </ul>
      </div>

      <h3>Opção 2: Em Momentos Separados</h3>
      
      <p>
        Se preferir, pode tomar separadamente. A creatina não precisa ser tomada em horário específico 
        — o importante é a consistência diária.
      </p>

      <ul className="space-y-2">
        <li><strong>Whey:</strong> Pós-treino ou conforme sua estratégia de 
        <Link href="/artigo/melhor-horario-tomar-whey" className="text-primary hover:underline"> timing</Link></li>
        <li><strong>Creatina:</strong> Qualquer momento do dia, de preferência com uma refeição</li>
      </ul>

      <h2>Dosagem Recomendada</h2>
      
      <div className="overflow-x-auto my-8">
        <table className="min-w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-3 text-left">Suplemento</th>
              <th className="border border-border p-3 text-left">Dose Diária</th>
              <th className="border border-border p-3 text-left">Observação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-medium">Whey Protein</td>
              <td className="border border-border p-3">25-50g (1-2 scoops)</td>
              <td className="border border-border p-3">Complementar a dieta para atingir 1,6-2,2g/kg</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-border p-3 font-medium">Creatina</td>
              <td className="border border-border p-3">3-5g por dia</td>
              <td className="border border-border p-3">Dose de manutenção (fase de carga é opcional)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Para calcular sua dose ideal de Whey, leia 
        <Link href="/artigo/quanto-whey-tomar-por-dia" className="text-primary hover:underline"> quanto Whey tomar por dia</Link>.
      </p>

      <h2>Precisa Fazer Fase de Carga da Creatina?</h2>
      
      <p>
        A fase de carga (20g/dia por 5-7 dias) acelera a saturação muscular, mas <strong>não é obrigatória</strong>. 
        Você pode simplesmente tomar 3-5g por dia desde o início — a saturação completa ocorre em 3-4 semanas.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-card border border-border p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Com Fase de Carga</h4>
          <p className="text-sm text-muted-foreground">
            Semana 1: 20g/dia (4x 5g) → Depois: 3-5g/dia
          </p>
          <p className="text-sm mt-2">Vantagem: Resultados mais rápidos</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Sem Fase de Carga</h4>
          <p className="text-sm text-muted-foreground">
            Desde o início: 3-5g/dia consistentemente
          </p>
          <p className="text-sm mt-2">Vantagem: Mais econômico, menos desconforto</p>
        </div>
      </div>

      <h2>Melhor Horário Para Tomar a Combinação</h2>
      
      <p>
        Estudos mostram que o <strong>pós-treino é ligeiramente superior</strong> para ambos os suplementos, 
        mas a diferença é pequena. O mais importante é a consistência.
      </p>

      <h3>Em Dias de Treino</h3>
      <ul className="space-y-2">
        <li><strong>Pós-treino (ideal):</strong> Whey + Creatina juntos no shake</li>
        <li><strong>Alternativa:</strong> Whey pós-treino, Creatina com almoço</li>
      </ul>

      <h3>Em Dias de Descanso</h3>
      <ul className="space-y-2">
        <li><strong>Creatina:</strong> Com qualquer refeição (café, almoço ou jantar)</li>
        <li><strong>Whey:</strong> Se precisar complementar proteína — manhã ou lanche</li>
      </ul>

      <h2>Benefícios da Combinação</h2>
      
      <ul className="space-y-3">
        <li>
          <strong>Maior ganho de massa muscular:</strong> Síntese proteica otimizada com substrato adequado
        </li>
        <li>
          <strong>Aumento de força:</strong> Mais capacidade de treino = mais estímulo = mais ganhos
        </li>
        <li>
          <strong>Recuperação acelerada:</strong> Menos dor muscular e retorno mais rápido ao treino
        </li>
        <li>
          <strong>Melhor composição corporal:</strong> Ganho de massa magra sem aumento proporcional de gordura
        </li>
        <li>
          <strong>Performance em treinos de alta intensidade:</strong> Mais repetições e séries com qualidade
        </li>
      </ul>

      <p>
        Veja todos os <Link href="/artigo/beneficios-whey-protein" className="text-primary hover:underline">
        benefícios do Whey Protein</Link> em detalhes.
      </p>

      <h2>Efeitos Colaterais e Cuidados</h2>
      
      <h3>Possíveis Efeitos da Creatina</h3>
      <ul className="space-y-2">
        <li><strong>Retenção hídrica:</strong> Aumento de 1-2kg de peso (água intramuscular, não gordura)</li>
        <li><strong>Desconforto digestivo:</strong> Raro, geralmente na fase de carga com doses altas</li>
      </ul>

      <h3>Possíveis Efeitos do Whey</h3>
      <ul className="space-y-2">
        <li><strong>Problemas digestivos:</strong> Em pessoas com intolerância à lactose (use 
        <Link href="/artigo/whey-isolado-guia-completo" className="text-primary hover:underline"> Whey Isolado</Link>)</li>
        <li><strong>Gases e inchaço:</strong> Podem indicar dose excessiva ou má qualidade do produto</li>
      </ul>

      <p>
        Para mais informações, leia sobre 
        <Link href="/artigo/whey-e-problemas-digestivos" className="text-primary hover:underline"> Whey e problemas digestivos</Link>.
      </p>

      <h2>Outras Combinações com Whey</h2>
      
      <p>
        Além da creatina, outros suplementos podem ser combinados com Whey:
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <h4 className="font-bold mb-3">Combinações Populares:</h4>
        <ul className="space-y-2">
          <li><strong>Whey + Creatina + Dextrose:</strong> Pós-treino para máxima recuperação</li>
          <li><strong>Whey + Aveia:</strong> Café da manhã completo</li>
          <li><strong>Whey + Pasta de amendoim:</strong> Shake mais calórico para bulking</li>
          <li><strong>Whey + Banana + Gelo:</strong> Smoothie refrescante pós-treino</li>
        </ul>
      </div>

      <p>
        Descubra mais ideias em <Link href="/artigo/receitas-com-whey-protein" className="text-primary hover:underline">
        receitas com Whey Protein</Link>.
      </p>

      <h2>Para Quem é Indicada Esta Combinação?</h2>
      
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Ideal Para:</h4>
          <ul className="text-sm space-y-1">
            <li>Praticantes de musculação</li>
            <li>Quem busca ganho de massa</li>
            <li>Atletas de força e potência</li>
            <li>Pessoas acima de 18 anos saudáveis</li>
          </ul>
        </div>
        <div className="bg-destructive/10 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Precauções Para:</h4>
          <ul className="text-sm space-y-1">
            <li>Pessoas com problemas renais</li>
            <li>Menores de 18 anos (consultar médico)</li>
            <li>Gestantes e lactantes</li>
            <li>Pessoas com doenças hepáticas</li>
          </ul>
        </div>
      </div>

      <h2>Perguntas Frequentes (FAQ)</h2>
      
      <div className="space-y-6 my-8">
        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Creatina e Whey competem pela absorção?</h3>
          <p className="text-muted-foreground">
            Não. Eles são absorvidos por vias diferentes e podem ser tomados juntos sem problemas. 
            Na verdade, a proteína pode até ajudar na captação de creatina pelo músculo.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Preciso ciclar a creatina?</h3>
          <p className="text-muted-foreground">
            Não há necessidade de ciclar creatina. Estudos de longo prazo (até 5 anos) não mostram 
            efeitos negativos do uso contínuo em pessoas saudáveis.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">A creatina causa queda de cabelo?</h3>
          <p className="text-muted-foreground">
            Não há evidência científica sólida ligando creatina à calvície. Um único estudo sugeriu 
            aumento de DHT, mas não foi replicado e não demonstrou queda de cabelo real.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Posso tomar com suco ou refrigerante?</h3>
          <p className="text-muted-foreground">
            Pode, mas água ou leite são preferíveis. Bebidas muito ácidas podem degradar levemente 
            a creatina, mas não de forma significativa.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Quanto tempo leva para ver resultados?</h3>
          <p className="text-muted-foreground">
            Os efeitos da creatina (força e volume) são perceptíveis em 2-4 semanas. Para ganho de 
            massa muscular visível com a combinação, espere 8-12 semanas de uso consistente com treino adequado.
          </p>
        </div>
      </div>
    </article>
  );
}
