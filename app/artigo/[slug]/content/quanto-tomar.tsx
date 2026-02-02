import Link from "next/link";

export function QuantoTomarContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead text-xl text-muted-foreground leading-relaxed">
        Determinar <strong>quanto Whey Protein tomar por dia</strong> é fundamental para otimizar seus resultados sem 
        desperdiçar dinheiro. A dose ideal varia conforme seu peso, nível de atividade, objetivo e quantidade de 
        proteína que já consome na alimentação. Neste guia, você vai aprender a calcular sua necessidade proteica 
        e a quantidade correta de suplementação.
      </p>

      <h2>Entendendo a Necessidade Proteica Diária</h2>
      
      <p>
        Antes de definir quanto Whey tomar, é essencial saber sua <strong>necessidade total de proteína</strong>. 
        As recomendações variam conforme a literatura científica:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="min-w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-3 text-left">Perfil</th>
              <th className="border border-border p-3 text-left">Proteína/kg/dia</th>
              <th className="border border-border p-3 text-left">Exemplo (80kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-medium">Sedentário</td>
              <td className="border border-border p-3">0,8 - 1,0g/kg</td>
              <td className="border border-border p-3">64 - 80g</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-border p-3 font-medium">Praticante recreativo</td>
              <td className="border border-border p-3">1,2 - 1,6g/kg</td>
              <td className="border border-border p-3">96 - 128g</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium">Hipertrofia/Musculação</td>
              <td className="border border-border p-3">1,6 - 2,2g/kg</td>
              <td className="border border-border p-3">128 - 176g</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-border p-3 font-medium">Atleta de alta performance</td>
              <td className="border border-border p-3">2,0 - 2,4g/kg</td>
              <td className="border border-border p-3">160 - 192g</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium">Cutting/Dieta restritiva</td>
              <td className="border border-border p-3">2,2 - 2,8g/kg</td>
              <td className="border border-border p-3">176 - 224g</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Compreenda os <Link href="/artigo/beneficios-whey-protein" className="text-primary hover:underline">
        benefícios do Whey Protein</Link> para entender por que atingir essa meta é importante.
      </p>

      <h2>Calculadora: Quanto de Whey Você Precisa</h2>
      
      <p>
        Use esta fórmula simples para calcular sua necessidade de suplementação:
      </p>

      <div className="bg-primary/10 border-l-4 border-primary p-6 my-6">
        <h4 className="font-bold mb-3">Fórmula:</h4>
        <p className="text-lg mb-4">
          <strong>Whey necessário = Proteína total necessária - Proteína da alimentação</strong>
        </p>
        <div className="bg-background p-4 rounded-lg">
          <p className="font-semibold mb-2">Exemplo prático:</p>
          <ul className="space-y-1 text-sm">
            <li>Peso: 80kg | Objetivo: Hipertrofia | Meta: 1,8g/kg = <strong>144g de proteína/dia</strong></li>
            <li>Proteína da alimentação: ~100g (estimativa comum)</li>
            <li>Necessidade de Whey: 144 - 100 = <strong>44g de Whey</strong> (cerca de 1,5 scoops)</li>
          </ul>
        </div>
      </div>

      <h2>Dose Por Refeição: Existe um Limite?</h2>
      
      <p>
        Existe um mito de que o corpo só absorve 30g de proteína por refeição. A verdade é mais complexa:
      </p>

      <ul className="space-y-2">
        <li><strong>Absorção:</strong> O corpo absorve praticamente toda proteína ingerida, apenas leva mais tempo</li>
        <li><strong>Síntese proteica:</strong> A resposta anabólica máxima ocorre com 0,4-0,55g/kg por refeição</li>
        <li><strong>Na prática:</strong> Para a maioria, 25-40g de proteína por dose é o ideal</li>
      </ul>

      <div className="bg-muted p-6 rounded-lg my-6">
        <h4 className="font-bold mb-3">Dose Ideal Por Peso Corporal:</h4>
        <ul className="space-y-2">
          <li><strong>50-60kg:</strong> 20-25g por dose (cerca de 1 scoop)</li>
          <li><strong>70-80kg:</strong> 25-35g por dose (1-1,5 scoops)</li>
          <li><strong>90-100kg:</strong> 35-45g por dose (1,5-2 scoops)</li>
          <li><strong>100kg+:</strong> 40-50g por dose (2 scoops)</li>
        </ul>
      </div>

      <h2>Quantas Doses Por Dia?</h2>
      
      <p>
        A frequência depende de quanto você precisa suplementar:
      </p>

      <h3>1 dose por dia (25-30g)</h3>
      <p>
        Suficiente para a maioria das pessoas que já consomem proteína adequada nas refeições. 
        Tome preferencialmente no pós-treino ou pela manhã.
      </p>

      <h3>2 doses por dia (50-60g)</h3>
      <p>
        Indicado para quem tem dificuldade de atingir a meta proteica apenas com alimentação, 
        atletas em fase de hipertrofia intensa ou pessoas em dietas restritivas.
      </p>

      <h3>3 doses por dia (75-90g)</h3>
      <p>
        Raramente necessário. Geralmente indica que a alimentação está deficiente em proteína e 
        seria melhor ajustar a dieta. Pode ser útil temporariamente em fases muito específicas.
      </p>

      <p>
        Saiba mais sobre os melhores momentos para consumir em 
        <Link href="/artigo/melhor-horario-tomar-whey" className="text-primary hover:underline"> melhor horário para tomar Whey</Link>.
      </p>

      <h2>Dosagem Por Objetivo</h2>

      <h3>Para Ganho de Massa Muscular</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <h4 className="font-bold text-primary mb-2">Recomendação:</h4>
        <ul className="space-y-1">
          <li><strong>Meta proteica:</strong> 1,6-2,2g/kg de peso corporal</li>
          <li><strong>Whey:</strong> 1-2 doses por dia (complementando a dieta)</li>
          <li><strong>Foco:</strong> Distribuir proteína ao longo do dia (4-5 refeições)</li>
        </ul>
      </div>

      <h3>Para Emagrecimento</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <h4 className="font-bold text-primary mb-2">Recomendação:</h4>
        <ul className="space-y-1">
          <li><strong>Meta proteica:</strong> 2,0-2,8g/kg para preservar massa magra</li>
          <li><strong>Whey:</strong> 1-2 doses por dia (aumenta saciedade)</li>
          <li><strong>Tipo ideal:</strong> <Link href="/artigo/whey-isolado-guia-completo" className="text-primary hover:underline">
            Isolado</Link> (menos calorias)</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-3">
          Leia mais em <Link href="/artigo/whey-para-emagrecer" className="text-primary hover:underline">
          Whey para Emagrecer</Link>.
        </p>
      </div>

      <h3>Para Iniciantes</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <h4 className="font-bold text-primary mb-2">Recomendação:</h4>
        <ul className="space-y-1">
          <li><strong>Comece com:</strong> 1 dose por dia (25-30g)</li>
          <li><strong>Observe:</strong> Digestão, resultados e necessidade</li>
          <li><strong>Ajuste:</strong> Aumente gradualmente se necessário</li>
        </ul>
      </div>

      <h3>Para Idosos</h3>
      
      <div className="bg-card border border-border p-5 rounded-lg my-4">
        <h4 className="font-bold text-primary mb-2">Recomendação:</h4>
        <ul className="space-y-1">
          <li><strong>Meta proteica:</strong> 1,2-1,6g/kg (prevenção de sarcopenia)</li>
          <li><strong>Whey:</strong> 1-2 doses por dia (mais fácil que mastigar carnes)</li>
          <li><strong>Foco:</strong> Doses maiores por refeição (resposta anabólica reduzida)</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-3">
          Veja mais em <Link href="/artigo/whey-protein-para-idosos" className="text-primary hover:underline">
          Whey Protein para Idosos</Link>.
        </p>
      </div>

      <h2>Sinais de Que Você Está Tomando Muito</h2>
      
      <ul className="space-y-2">
        <li><strong>Problemas digestivos:</strong> Gases, inchaço, desconforto abdominal frequentes</li>
        <li><strong>Ganho de gordura:</strong> O excesso calórico de qualquer fonte engorda</li>
        <li><strong>Desperdício financeiro:</strong> Proteína excedente é eliminada ou convertida em energia</li>
        <li><strong>Urina muito concentrada:</strong> Pode indicar sobrecarga renal (em casos extremos)</li>
      </ul>

      <p>
        Se você tem problemas digestivos, confira 
        <Link href="/artigo/whey-e-problemas-digestivos" className="text-primary hover:underline"> Whey e problemas digestivos</Link>.
      </p>

      <h2>Sinais de Que Você Precisa de Mais</h2>
      
      <ul className="space-y-2">
        <li><strong>Recuperação lenta:</strong> Dor muscular prolongada após treinos</li>
        <li><strong>Estagnação:</strong> Parou de ganhar força ou massa mesmo treinando</li>
        <li><strong>Perda de massa:</strong> Músculos diminuindo durante dieta</li>
        <li><strong>Fome constante:</strong> Proteína ajuda na saciedade</li>
      </ul>

      <h2>Mitos Sobre Dosagem</h2>

      <h3>Mito: "Mais proteína = mais músculo"</h3>
      <p>
        Existe um limite para a síntese proteica. Acima de 2,2g/kg, os benefícios são mínimos para 
        a maioria das pessoas. O excesso vira energia ou é eliminado.
      </p>

      <h3>Mito: "Tenho que tomar 2 scoops por shake"</h3>
      <p>
        A dose padrão de 1 scoop (25-30g) é suficiente para a maioria. Aumentar só faz sentido 
        se você for muito pesado ou tiver necessidades específicas.
      </p>

      <h3>Mito: "Em dias sem treino não precisa de Whey"</h3>
      <p>
        A recuperação e síntese muscular acontecem principalmente no descanso. Mantenha a 
        proteína adequada mesmo em dias off.
      </p>

      <h2>Como Medir Corretamente</h2>
      
      <p>
        Os scoops que vêm nos potes nem sempre são precisos. Para dosagem exata:
      </p>

      <ul className="space-y-2">
        <li><strong>Use balança de cozinha:</strong> Mais preciso que scoop</li>
        <li><strong>Confira o scoop:</strong> Nem todos têm 30g — verifique no rótulo</li>
        <li><strong>Nível, não montanha:</strong> Raspe o scoop para dose correta</li>
      </ul>

      <h2>Ajustando a Dose ao Longo do Tempo</h2>
      
      <p>
        Sua necessidade de Whey pode mudar conforme:
      </p>

      <ul className="space-y-2">
        <li>Alteração no peso corporal</li>
        <li>Mudança de objetivo (bulking para cutting)</li>
        <li>Aumento da proteína na dieta</li>
        <li>Intensidade do treinamento</li>
      </ul>

      <p>
        Reavalie sua dosagem a cada 2-3 meses ou quando houver mudança significativa no treino ou dieta.
      </p>

      <h2>Perguntas Frequentes (FAQ)</h2>
      
      <div className="space-y-6 my-8">
        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Posso tomar mais de 2 scoops de uma vez?</h3>
          <p className="text-muted-foreground">
            Pode, mas não é ideal. Doses acima de 40-50g de uma vez não otimizam a síntese proteica. 
            Melhor dividir em duas ocasiões.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">1 scoop por dia é suficiente?</h3>
          <p className="text-muted-foreground">
            Para muitas pessoas sim, especialmente se a alimentação já é rica em proteína. 
            Calcule sua necessidade total e veja se 1 scoop complementa adequadamente.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Quanto de Whey para ganhar massa sem treinar?</h3>
          <p className="text-muted-foreground">
            Sem treino, você não precisa de tanta proteína. Foque em 1-1,2g/kg e não espere ganho 
            muscular significativo apenas com suplementação.
          </p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-semibold text-lg mb-2">Mulheres devem tomar menos Whey?</h3>
          <p className="text-muted-foreground">
            A necessidade é proporcional ao peso, não ao sexo. Uma mulher de 60kg que treina precisa 
            de cerca de 96-132g de proteína/dia, assim como um homem do mesmo peso.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Tomar muito Whey faz mal aos rins?</h3>
          <p className="text-muted-foreground">
            Para pessoas saudáveis, não há evidência de dano renal com alta proteína. Porém, quem já 
            tem problemas renais deve consultar um médico antes de suplementar.
          </p>
        </div>
      </div>
    </article>
  );
}
