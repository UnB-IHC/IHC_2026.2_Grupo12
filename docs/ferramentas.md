<div class="hero-banner">
  <span class="hero-badge">Guia Prático de Inspeção • IHC</span>
  <h1>Ferramentas de Avaliação de Acessibilidade e Usabilidade</h1>
  <p>Nesta seção serão apresentadas as ferramentas de apoio utilizadas pelo Grupo 12 para testar e validar na prática os critérios técnicos de cada etapa do Checklist WCAG e Heurísticas de Nielsen.</p>
</div>

## Como esta página será estruturada

> **Nota de Estrutura:** Cada card abaixo representa o tutorial prático de uma ferramenta que a equipe documentará (como instalar, como executar no navegador e como interpretar os resultados). Ao longo das **Etapas 1 a 7 do Checklist**, há caixas de referência rápida apontando diretamente para estas ferramentas.

---

<div class="tool-section-card" id="devtools">
  <div class="tool-header">
    <span class="tool-icon">🛠️</span>
    <div>
      <h2>1. Inspeção de Código, DOM e Responsividade (Browser DevTools)</h2>
      <span class="tool-stages-ref">Utilizada nas Etapas: 2, 3, 4 e 5</span>
    </div>
  </div>
  <p>Explicação passo a passo de como utilizar o <strong>Inspecionar Elemento (DevTools)</strong> do Google Chrome / Firefox para verificar tags semânticas (<code>&lt;title&gt;</code>, <code>lang</code>, <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;label&gt;</code>), árvore de acessibilidade (Accessibility Tree), área mínima de clique (24x24px / 44x44px) e teste de Refluxo em 320px com zoom de 200%.</p>
</div>

<div class="tool-section-card" id="axe-wave">
  <div class="tool-header">
    <span class="tool-icon">🧩</span>
    <div>
      <h2>2. Avaliadores Automatizados (WAVE & Axe DevTools)</h2>
      <span class="tool-stages-ref">Utilizada nas Etapas: 2, 5 e 6</span>
    </div>
  </div>
  <p>Tutorial de instalação e uso das extensões <strong>WAVE Evaluation Tool</strong> e <strong>Axe DevTools</strong> para detectar automaticamente ausência de textos alternativos (<code>alt</code>), erros de hierarquia de cabeçalhos (<code>H1-H6</code>), campos de formulário sem rótulo e atributos WAI-ARIA inválidos.</p>
</div>

<div class="tool-section-card" id="lighthouse">
  <div class="tool-header">
    <span class="tool-icon">🚀</span>
    <div>
      <h2>3. Auditoria Geral com Google Lighthouse</h2>
      <span class="tool-stages-ref">Utilizada nas Etapas: 1, 2 e 6</span>
    </div>
  </div>
  <p>Guia de como gerar relatórios automatizados de Acessibilidade e Boas Práticas pelo <strong>Google Lighthouse</strong> integrado ao navegador para obter um diagnóstico inicial das páginas que compõem o escopo da avaliação.</p>
</div>

<div class="tool-section-card" id="contraste">
  <div class="tool-header">
    <span class="tool-icon">🎨</span>
    <div>
      <h2>4. Verificadores de Contraste e Cores (WebAIM & CCA)</h2>
      <span class="tool-stages-ref">Utilizada na Etapa: 4</span>
    </div>
  </div>
  <p>Como aferir a razão de contraste entre texto, ícones, bordas de componentes e plano de fundo utilizando o <strong>WebAIM Contrast Checker</strong> e o <strong>Colour Contrast Analyser (CCA)</strong> para validar os índices mínimos de <strong>3:1</strong>, <strong>4,5:1 (AA)</strong> e <strong>7:1 (AAA)</strong>, além de simuladores de daltonismo.</p>
</div>

<div class="tool-section-card" id="teclado">
  <div class="tool-header">
    <span class="tool-icon">⌨️</span>
    <div>
      <h2>5. Protocolo de Teste de Navegação por Teclado e Foco</h2>
      <span class="tool-stages-ref">Utilizada nas Etapas: 1, 3 e 5</span>
    </div>
  </div>
  <p>Roteiro prático para testar a página usando exclusivamente as teclas <code>Tab</code>, <code>Shift + Tab</code>, <code>Enter</code>, <code>Espaço</code>, <code>Setas</code> e <code>ESC</code>, verificando a ordem lógica de foco, visibilidade do contorno (<code>:focus-visible</code>), ausência de armadilhas de teclado e funcionamento de modais.</p>
</div>

<div class="tool-section-card" id="leitores-de-tela">
  <div class="tool-header">
    <span class="tool-icon">🔊</span>
    <div>
      <h2>6. Leitores de Tela (NVDA / VoiceOver / Orca)</h2>
      <span class="tool-stages-ref">Utilizada nas Etapas: 2, 5 e 6</span>
    </div>
  </div>
  <p>Instruções básicas para ativar e navegar com leitores de tela para validar se alertas dinâmicos (<code>aria-live</code>), mensagens de erro em formulários, botões com ícones e descrições de imagens são anunciados de forma compreensível.</p>
</div>
