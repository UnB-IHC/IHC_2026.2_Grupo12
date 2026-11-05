<div class="hero-banner">
  <span class="hero-badge">Ferramenta 1 de 6 • Guia Prático de Inspeção</span>
  <h1>1. Browser DevTools (DOM, Semântica e Responsividade)</h1>
  <p>Uso do Inspecionar Elemento nativo dos navegadores (Chrome, Firefox e Edge) para auditar tags HTML semânticas, árvore de acessibilidade, área mínima de clique (24×24 px / 44×44 px) e refluxo responsivo em 320 px.</p>
</div>

<div class="stage-tools-box">
  <div class="stage-tools-header">
    <span>📌 <strong>Etapas do Checklist em que esta ferramenta é utilizada:</strong></span>
  </div>
  <div class="stage-tools-grid">
    <a class="stage-tool-pill" href="../checklist/etapa2.html">
      <strong>Etapa 2 • Estrutura e Semântica</strong>
      <span>Tags &lt;title&gt;, lang, landmarks (&lt;main&gt;, &lt;nav&gt;), ordem do DOM e Accessibility Tree</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa3.html">
      <strong>Etapa 3 • Navegação e Teclado</strong>
      <span>Estilos :focus-visible e medição da área de clique (24×24 px e 44×44 px)</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa4.html">
      <strong>Etapa 4 • Design e Contraste</strong>
      <span>Teste de Refluxo em 320 px, orientação de tela, zoom 200% e espaçamento de texto</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa5.html">
      <strong>Etapa 5 • Formulários e Tempo</strong>
      <span>Associação de &lt;label for="..."&gt; e atributos autocomplete em inputs</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa7.html">
      <strong>Etapa 7 • Heurísticas de Nielsen</strong>
      <span>Inspeção visual de consistência de padrões, feedbacks e prevenção de erros</span>
    </a>
  </div>
</div>

## Como Usar na Prática (Passo a Passo)

<div class="tool-section-card">
  <h3>1. Inspecionar a Semântica HTML e o Idioma (Etapa 2 e Etapa 5)</h3>
  <ol>
    <li>Abra a página avaliada no navegador e pressione <code>F12</code> ou <code>Ctrl + Shift + I</code> (<code>Cmd + Opt + I</code> no Mac) para abrir o <strong>DevTools</strong> na aba <strong>Elements</strong> (ou <em>Inspetor</em> no Firefox).</li>
    <li>No topo da árvore HTML, verifique se a tag <code>&lt;html&gt;</code> possui o atributo de idioma declarado (ex.: <code>&lt;html lang="pt-BR"&gt;</code>) e expanda <code>&lt;head&gt;</code> para checar se <code>&lt;title&gt;</code> descreve claramente a página.</li>
    <li>Pressione <code>Ctrl + Shift + C</code> (seletor de elementos) e clique sobre menus, cabeçalhos, botões e campos de formulário na tela:
      <ul>
        <li>Verifique se regiões principais usam tags semânticas (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>) em vez de apenas <code>&lt;div&gt;</code> genéricas.</li>
        <li>Em formulários, confira se cada <code>&lt;input&gt;</code> possui um <code>&lt;label for="id_do_input"&gt;</code> vinculado e o atributo <code>autocomplete</code> adequado (ex.: <code>autocomplete="email"</code>).</li>
      </ul>
    </li>
  </ol>
</div>

<div class="tool-section-card">
  <h3>2. Consultar a Árvore de Acessibilidade — Accessibility Tree (Etapa 2)</h3>
  <ol>
    <li>Com um botão, ícone ou componente selecionado na aba <strong>Elements</strong>, olhe para o painel lateral direito (onde ficam <em>Styles / Computed</em>) e abra a sub-aba <strong>Accessibility</strong> (Acessibilidade).</li>
    <li>Ative a opção <strong>Enable full-page accessibility tree</strong> (ícone de bonequinho de acessibilidade no canto superior da árvore do DOM) para visualizar exatamente como o navegador entrega a página aos leitores de tela.</li>
    <li>Inspecione as propriedades <strong>Computed Properties</strong> do elemento selecionado:
      <ul>
        <li><strong>Name (Nome acessível):</strong> O texto que será lido em voz alta.</li>
        <li><strong>Role (Função):</strong> Deve ser <code>button</code>, <code>link</code>, <code>textbox</code>, <code>dialog</code>, etc. (nunca <code>generic</code> em um item clicável).</li>
        <li><strong>States (Estados):</strong> Verifique se propriedades como <code>aria-expanded="true/false"</code> mudam quando você clica no componente.</li>
      </ul>
    </li>
  </ol>
</div>

<div class="tool-section-card">
  <h3>3. Medir Área Mínima de Clique e Estado de Foco (Etapa 3)</h3>
  <ol>
    <li>Ative o seletor de inspeção (<code>Ctrl + Shift + C</code>) e passe o mouse sobre botões, ícones de fechar, links de paginação e controles pequenos.</li>
    <li>Observe o <em>tooltip</em> que aparece acima do elemento selecionado (ex.: <code>button.btn-icon • 36 × 36 px</code>) ou consulte o diagrama de caixa na aba <strong>Computed</strong>.</li>
    <li>Para testar o estilo de foco sem precisar usar o Tab repetidamente, selecione o botão no DOM, clique no botão <strong><code>:hov</code></strong> (no painel <em>Styles</em>) e marque as caixas <strong><code>:focus</code></strong> e <strong><code>:focus-visible</code></strong>.</li>
  </ol>
</div>

<div class="tool-section-card">
  <h3>4. Testar Refluxo em 320 px e Zoom de 200% (Etapa 4)</h3>
  <ol>
    <li>Com o DevTools aberto, pressione <code>Ctrl + Shift + M</code> para ativar a <strong>Barra de Dispositivos (Device Toolbar)</strong>.</li>
    <li>Mude o modo para <strong>Responsive</strong> e digite <code>320</code> na largura (ex.: <code>320 × 640</code>) para simular o critério de Refluxo da WCAG 2.2.</li>
    <li>Clique no ícone de <strong>Girar tela (Rotate)</strong> na barra superior do simulador para alternar entre modo Retrato (vertical) e Paisagem (horizontal).</li>
    <li>Saia do modo mobile e use <code>Ctrl + "+"</code> no navegador até atingir <strong>200% de zoom</strong> na página desktop.</li>
  </ol>
</div>

---

## Como Analisar os Resultados

<div class="tool-details-grid">
  <div class="tool-detail-box">
    <h3>✅ O que indica Aprovação no Checklist</h3>
    <ul>
      <li><strong>Semântica e Accessibility Tree:</strong> Todo controle interativo possui <em>Name</em> preenchido e <em>Role</em> semântica correta (ex.: <code>button</code> ou <code>link</code>), sem elementos importantes ocultos indevidamente.</li>
      <li><strong>Tamanho do Alvo (Etapa 3):</strong> Os controles medem pelo menos <strong>24×24 CSS pixels</strong> (aprovado para Nível AA) ou <strong>44×44 CSS pixels</strong> (aprovado para Nível AAA).</li>
      <li><strong>Refluxo 320 px e Zoom 200% (Etapa 4):</strong> O conteúdo se reorganiza em uma única coluna vertical, sem barra de rolagem horizontal, sem textos sobrepostos e sem esconder menus essenciais.</li>
    </ul>
  </div>

  <div class="tool-detail-box">
    <h3>❌ Sinais de Falha / Reprovação</h3>
    <ul>
      <li><strong>Falsos botões:</strong> Elementos feitos com <code>&lt;div onclick="..."&gt;</code> ou <code>&lt;span&gt;</code> que aparecem na <em>Accessibility Tree</em> como <code>generic</code> e sem <code>tabindex="0"</code>.</li>
      <li><strong>Botões de ícone mudos:</strong> Um botão apenas com ícone de lupa ou "X" cujo <em>Computed Name</em> na aba <em>Accessibility</em> aparece vazio (<code>""</code>).</li>
      <li><strong>Quebra no Zoom/320 px:</strong> Caixas de texto que cortam frases com <code>overflow: hidden</code>, botões que saem para fora da tela ou exigência de rolar na horizontal para ler parágrafos.</li>
    </ul>
  </div>
</div>

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Próxima Ferramenta • 2 de 6</span>
    <h3>Avançar para Avaliadores Automatizados</h3>
    <p>Veja como complementar a inspeção manual do DOM usando as extensões <strong>WAVE</strong> e <strong>Axe DevTools</strong> para encontrar falhas de código automaticamente.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn primary" href="axe_wave.html">Próxima: 2. WAVE & Axe DevTools →</a>
  </div>
</div>
