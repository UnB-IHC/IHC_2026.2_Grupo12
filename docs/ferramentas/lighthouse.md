<div class="hero-banner">
  <span class="hero-badge">Ferramenta 3 de 6 • Guia Prático de Inspeção</span>
  <h1>3. Auditoria Geral com Google Lighthouse</h1>
  <p>Ferramenta nativa do Google Chrome e Edge para gerar um diagnóstico automatizado de Acessibilidade e Boas Práticas nas páginas que compõem o escopo da avaliação.</p>
</div>

<div class="stage-tools-box">
  <div class="stage-tools-header">
    <span>📌 <strong>Etapas do Checklist em que esta ferramenta é utilizada:</strong></span>
  </div>
  <div class="stage-tools-grid">
    <a class="stage-tool-pill" href="../checklist/etapa1.html">
      <strong>Etapa 1 • Blueprint e Visão Geral</strong>
      <span>Diagnóstico inicial das páginas e telas que formam a jornada principal do site</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa2.html">
      <strong>Etapa 2 • Estrutura e Semântica</strong>
      <span>Verificação automática de &lt;title&gt;, [lang], papéis ARIA e listas semânticas</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa6.html">
      <strong>Etapa 6 • Conteúdo e Multimídia</strong>
      <span>Auditoria de nomes acessíveis em links/botões, atributos alt e legendas &lt;track&gt;</span>
    </a>
  </div>
</div>

## Como Executar o Lighthouse (Passo a Passo)

<div class="tool-section-card">
  <h3>1. Configurando e rodando a auditoria no navegador</h3>
  <ol>
    <li>Dica importante: Abra a página que será avaliada em uma <strong>Janela Anônima</strong> (<code>Ctrl + Shift + N</code>) para evitar que extensões de terceiros interfiram na página.</li>
    <li>Pressione <code>F12</code> para abrir o DevTools e clique na aba <strong>Lighthouse</strong> no menu superior.</li>
    <li>Configure os parâmetros do relatório:
      <ul>
        <li><strong>Mode (Modo):</strong> Selecione <em>Navigation (Default)</em> para avaliar o carregamento completo da página, ou <em>Snapshot</em> para avaliar a tela no estado atual (ex.: após abrir um modal ou preencher um formulário).</li>
        <li><strong>Device (Dispositivo):</strong> Execute primeiro em <strong>Mobile</strong> e depois em <strong>Desktop</strong> para comparar o comportamento responsivo.</li>
        <li><strong>Categories (Categorias):</strong> Marque <strong>Acessibilidade (Accessibility)</strong> e <strong>Práticas recomendadas (Best Practices)</strong>.</li>
      </ul>
    </li>
    <li>Clique em <strong>Analyze page load</strong> e aguarde alguns segundos até o relatório ser gerado.</li>
  </ol>
  <div class="tool-links-row">
    <a class="tool-ext-link" href="https://pagespeed.web.dev/" target="_blank" rel="noopener">🔗 Alternativa Web: Google PageSpeed Insights</a>
  </div>
</div>

---

## Como Analisar os Resultados

<div class="tool-details-grid">
  <div class="tool-detail-box">
    <h3>📊 Entendendo a Nota (0 a 100) e Seções</h3>
    <ul>
      <li><strong>🔴 0 a 49 (Ruim):</strong> Falhas graves de estrutura (falta de rótulos, botões sem nome, contraste crítico ou bloqueio de zoom).</li>
      <li><strong>🟠 50 a 89 (Precisa melhorar):</strong> Parte das tags está correta, mas ainda há elementos interativos ou imagens fora do padrão WCAG.</li>
      <li><strong>🟢 90 a 100 (Bom):</strong> Aprovado nos testes automatizados de código, mas <strong>ainda exige os testes manuais</strong> (navegação por teclado, fluxo lógico e leitor de tela).</li>
      <li><strong>Additional items to manually check:</strong> Expanda esta seção do relatório para lembrar quais critérios o Lighthouse não consegue julgar sozinho.</li>
    </ul>
  </div>

  <div class="tool-detail-box">
    <h3>🎯 Principais falhas que impactam nosso Checklist</h3>
    <ul>
      <li><strong><code>[user-scalable="no"]</code> ou <code>[maximum-scale]</code> menor que 5:</strong> Reprova diretamente na <strong>Etapa 1</strong> (Compatibilidade) e <strong>Etapa 4</strong> (Zoom de 200%), pois impede que pessoas com baixa visão ampliem a tela no celular.</li>
      <li><strong><em>Buttons do not have an accessible name</em> / <em>Links do not have a discernible name</em>:</strong> Reprova na <strong>Etapa 2</strong> (Nome e Role) e <strong>Etapa 6</strong> (Botões com ícones e clareza de links).</li>
      <li><strong><em>Heading elements are not in a sequentially-descending order</em>:</strong> Reprova na <strong>Etapa 2</strong> (hierarquia sequencial <code>H1–H6</code> sem pular níveis).</li>
    </ul>
  </div>
</div>

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Próxima Ferramenta • 4 de 6</span>
    <h3>Avançar para Verificadores de Contraste e Cores</h3>
    <p>Veja como medir com exatidão as taxas de contraste de <strong>3:1</strong>, <strong>4,5:1 (AA)</strong> e <strong>7:1 (AAA)</strong> usando o <strong>WebAIM Contrast Checker</strong> e o <strong>CCA</strong>.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="axe_wave.html">← Anterior: 2. WAVE & Axe DevTools</a>
    <a class="step-nav-btn primary" href="contraste.html">Próxima: 4. WebAIM & CCA (Contraste) →</a>
  </div>
</div>
