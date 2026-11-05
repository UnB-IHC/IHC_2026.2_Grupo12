<div class="hero-banner">
  <span class="hero-badge">Ferramenta 2 de 6 • Guia Prático de Inspeção</span>
  <h1>2. Avaliadores Automatizados (WAVE & Axe DevTools)</h1>
  <p>Extensões de navegador que varrem o código da página em segundos para detectar automaticamente ausência de atributos <code>alt</code>, falhas de hierarquia de cabeçalhos (<code>H1–H6</code>), campos sem <code>&lt;label&gt;</code> e erros de WAI-ARIA.</p>
</div>

<div class="stage-tools-box">
  <div class="stage-tools-header">
    <span>📌 <strong>Etapas do Checklist em que esta ferramenta é utilizada:</strong></span>
  </div>
  <div class="stage-tools-grid">
    <a class="stage-tool-pill" href="../checklist/etapa2.html">
      <strong>Etapa 2 • Estrutura e Semântica</strong>
      <span>Hierarquia lógica de H1 a H6, regiões HTML5 (&lt;main&gt;, &lt;nav&gt;) e atributos ARIA válidos</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa5.html">
      <strong>Etapa 5 • Formulários e Tempo</strong>
      <span>Campos de entrada sem &lt;label&gt; vinculado, fieldsets e identificação de erros</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa6.html">
      <strong>Etapa 6 • Conteúdo e Multimídia</strong>
      <span>Imagens sem atributo alt, botões/links vazios e termos vagos ("clique aqui")</span>
    </a>
  </div>
</div>

## Como Instalar e Usar na Prática

<div class="tool-section-card">
  <h3>1. Usando a extensão WAVE Evaluation Tool (WebAIM)</h3>
  <ol>
    <li>Instale a extensão oficial <strong>WAVE Evaluation Tool</strong> na loja do Chrome, Firefox ou Edge.</li>
    <li>Abra a página que deseja avaliar e clique no ícone do <strong>WAVE</strong> na barra de extensões (ou use o atalho <code>Ctrl + Shift + U</code>).</li>
    <li>Navegue pelas abas do painel lateral esquerdo do WAVE:
      <ul>
        <li><strong>Summary / Details:</strong> Mostra o total de erros críticos (ícones vermelhos) e alertas (ícones amarelos) diretamente sobre os elementos da página.</li>
        <li><strong>Structure:</strong> Exibe um mapa visual de todas as regiões (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>) e a árvore exata de cabeçalhos (<code>H1</code>, <code>H2</code>, <code>H3</code>...), ideal para a <strong>Etapa 2</strong>.</li>
        <li><strong>Contrast:</strong> Lista todos os textos da página que reprovaram no cálculo automático de contraste AA e AAA.</li>
      </ul>
    </li>
    <li>Dica: Desmarque a chave <strong>Styles</strong> no topo do painel WAVE para visualizar a página em modo puramente linear (sem CSS) e verificar se a ordem de leitura do DOM faz sentido.</li>
  </ol>
  <div class="tool-links-row">
    <a class="tool-ext-link" href="https://wave.webaim.org/extension/" target="_blank" rel="noopener">🔗 Instalar Extensão WAVE (WebAIM)</a>
  </div>
</div>

<div class="tool-section-card">
  <h3>2. Usando a extensão Axe DevTools (Deque)</h3>
  <ol>
    <li>Instale a extensão gratuita <strong>axe DevTools - Web Accessibility Testing</strong> no navegador.</li>
    <li>Na página avaliada, pressione <code>F12</code> para abrir o DevTools e clique na aba <strong>axe DevTools</strong> na barra superior.</li>
    <li>Clique no botão azul <strong>Scan ALL of my page</strong> para executar a auditoria completa baseada nas regras da WCAG 2.1 / 2.2.</li>
    <li>Na lista de ocorrências encontrada pelo Axe:
      <ul>
        <li>Clique em <strong>Highlight</strong> para destacar com uma borda tracejada exatamente qual botão, imagem ou input da tela causou o erro.</li>
        <li>Clique em <strong>Inspect</strong> para pular direto para a linha do HTML no painel <em>Elements</em>.</li>
        <li>Leia o bloco <em>"How to Fix"</em> para ver qual atributo HTML ou ARIA está faltando.</li>
      </ul>
    </li>
  </ol>
  <div class="tool-links-row">
    <a class="tool-ext-link" href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener">🔗 Instalar Extensão Axe DevTools</a>
  </div>
</div>

---

## Como Analisar os Resultados

<div class="tool-details-grid">
  <div class="tool-detail-box">
    <h3>🔍 Interpretando as cores do WAVE</h3>
    <ul>
      <li><strong>🔴 Errors (Vermelho):</strong> Violações diretas da WCAG (ex.: <em>Missing alternative text</em>, <em>Missing form label</em>, <em>Empty button</em>, <em>Empty link</em>). Se houver ícones vermelhos, o critério correspondente no Checklist deve ser <strong>reprovado</strong>.</li>
      <li><strong>🟡 Alerts (Amarelo):</strong> Elementos suspeitos que exigem conferência humana (ex.: <em>Skipped heading level</em> quando pula de <code>H1</code> para <code>H3</code>, <em>Suspicious link text</em> como "saiba mais", ou <em>Redundant title text</em>).</li>
      <li><strong>🟢 Features (Verde) & 🟣 ARIA (Roxo):</strong> Indicam que recursos de acessibilidade (<code>alt</code>, <code>&lt;label&gt;</code>, <code>aria-label</code>) estão presentes, mas você ainda deve ler se o texto faz sentido.</li>
    </ul>
  </div>

  <div class="tool-detail-box">
    <h3>⚠️ Cuidado com Falsos Positivos e Limitações</h3>
    <ul>
      <li><strong>0 Erros Automáticos ≠ 100% Acessível:</strong> Ferramentas automáticas detectam se o atributo <code>alt</code> existe, mas não sabem se está escrito <code>alt="img_001.jpg"</code> (que reprova na Etapa 6). Sempre confira o texto exibido pelo WAVE.</li>
      <li><strong>Estados ocultos e Modais:</strong> Nem o WAVE nem o Axe avaliam modais fechados ou mensagens de erro que ainda não apareceram. <strong>Abra o modal ou provoque o erro no formulário antes de rodar o scan!</strong></li>
      <li><strong>Severidade no Axe:</strong> Priorize corrigir e reprovar no Checklist qualquer item classificado como <em>Critical</em> ou <em>Serious</em> pelo Axe DevTools.</li>
    </ul>
  </div>
</div>

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Próxima Ferramenta • 3 de 6</span>
    <h3>Avançar para Google Lighthouse</h3>
    <p>Aprenda a gerar relatórios panorâmicos de Acessibilidade e Boas Práticas diretamente pelo navegador com o <strong>Google Lighthouse</strong>.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="devtools.html">← Anterior: 1. Browser DevTools</a>
    <a class="step-nav-btn primary" href="lighthouse.html">Próxima: 3. Google Lighthouse →</a>
  </div>
</div>
