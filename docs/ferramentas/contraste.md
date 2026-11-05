<div class="hero-banner">
  <span class="hero-badge">Ferramenta 4 de 6 • Guia Prático de Inspeção</span>
  <h1>4. Verificadores de Contraste e Cores (WebAIM & CCA)</h1>
  <p>Aferição exata da razão de luminosidade entre textos, ícones, bordas de componentes e planos de fundo para validar os índices mínimos de <strong>3:1</strong>, <strong>4,5:1 (AA)</strong> e <strong>7:1 (AAA)</strong>, além de simulação de daltonismo.</p>
</div>

<div class="stage-tools-box">
  <div class="stage-tools-header">
    <span>📌 <strong>Etapas do Checklist em que esta ferramenta é utilizada:</strong></span>
  </div>
  <div class="stage-tools-grid">
    <a class="stage-tool-pill" href="../checklist/etapa4.html">
      <strong>Etapa 4 • Design, Cores e Contraste</strong>
      <span>Taxas de contraste AA (4,5:1) e AAA (7:1), componentes de interface (3:1) e independência de cor</span>
    </a>
  </div>
</div>

## Como Usar na Prática (Passo a Passo)

<div class="tool-section-card">
  <h3>1. Medindo cores sólidas no WebAIM Contrast Checker</h3>
  <ol>
    <li>Inspecione o texto ou botão no navegador (<code>Ctrl + Shift + C</code>) e copie o código hexadecimal (ex.: <code>#4F46E5</code>) da propriedade <code>color</code> (Foreground) e <code>background-color</code> (Background).</li>
    <li>Acesse o site do <strong>WebAIM Contrast Checker</strong> e cole os dois códigos nos campos <strong>Foreground Color</strong> e <strong>Background Color</strong>.</li>
    <li>Use o controle deslizante de luminosidade (<em>Lightness</em>) caso queira descobrir rapidamente qual tom mais escuro ou mais claro passaria no nível AA ou AAA.</li>
  </ol>
  <div class="tool-links-row">
    <a class="tool-ext-link" href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener">🔗 Abrir WebAIM Contrast Checker</a>
  </div>
</div>

<div class="tool-section-card">
  <h3>2. Medindo fundos com degradê, imagens ou ícones com o CCA</h3>
  <ol>
    <li>Quando o texto está sobre um <strong>banner fotográfico, fundo com degradê (gradient) ou transparência</strong>, avaliadores automáticos costumam errar. Nesses casos, use o aplicativo <strong>Colour Contrast Analyser (CCA)</strong> ou o conta-gotas do DevTools.</li>
    <li>Clique no ícone de <strong>Conta-gotas (Eyedropper)</strong> de <em>Foreground</em> e selecione um pixel central da letra ou do ícone informativo.</li>
    <li>Clique no Conta-gotas de <em>Background</em> e selecione a <strong>região mais desfavorável</strong> (o ponto mais claro do degradê se a letra for branca, ou o ponto mais escuro se a letra for preta).</li>
    <li>Repita o procedimento para medir a borda de campos <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code> e ícones contra a cor de fundo da página.</li>
  </ol>
  <div class="tool-links-row">
    <a class="tool-ext-link" href="https://www.tpgi.com/color-contrast-checker/" target="_blank" rel="noopener">🔗 Download Colour Contrast Analyser (CCA)</a>
  </div>
</div>

<div class="tool-section-card">
  <h3>3. Simulando Daltonismo e Independência de Cor (Etapa 4)</h3>
  <ol>
    <li>Abra o DevTools (<code>F12</code>), pressione <code>Ctrl + Shift + P</code> e digite <strong>Show Rendering</strong> para abrir a aba <em>Rendering</em>.</li>
    <li>Role até a opção <strong>Emulate vision deficiencies (Emular deficiências visuais)</strong>.</li>
    <li>Alterne entre <strong>Protanopia</strong>, <strong>Deuteranopia</strong>, <strong>Tritanopia</strong> e <strong>Achromatopsia</strong> (visão em tons de cinza).</li>
    <li>Verifique se links no meio de textos, mensagens de erro em formulários e status continuam identificáveis por <strong>sublinhado, ícone ou texto</strong>, sem depender apenas da cor vermelha ou verde.</li>
  </ol>
</div>

---

## Como Analisar os Resultados (Tabela de Referência WCAG)

<div class="tool-details-grid">
  <div class="tool-detail-box">
    <h3>📏 Índices Mínimos Exigidos</h3>
    <ul>
      <li><strong>Texto Normal (&lt; 18pt ou &lt; 24px):</strong>
        <ul>
          <li>Aprovado em <strong>Nível AA</strong> se a razão for <strong>≥ 4,5 : 1</strong>.</li>
          <li>Aprovado em <strong>Nível AAA</strong> se a razão for <strong>≥ 7,0 : 1</strong>.</li>
        </ul>
      </li>
      <li><strong>Texto Grande (≥ 18pt / 24px normal, ou ≥ 14pt / 18,6px em negrito):</strong>
        <ul>
          <li>Aprovado em <strong>Nível AA</strong> se a razão for <strong>≥ 3,0 : 1</strong>.</li>
          <li>Aprovado em <strong>Nível AAA</strong> se a razão for <strong>≥ 4,5 : 1</strong>.</li>
        </ul>
      </li>
      <li><strong>Componentes de UI e Gráficos (Nível AA):</strong> Bordas de inputs, checkboxes, foco e ícones que transmitem informação precisam atingir pelo menos <strong>3,0 : 1</strong> contra o fundo adjacente.</li>
    </ul>
  </div>

  <div class="tool-detail-box">
    <h3>ℹ️ Exceções Oficiais da WCAG (Não Reprovam!)</h3>
    <ul>
      <li><strong>Logotipos e Marcas:</strong> Textos que fazem parte de um logotipo ou nome de marca oficial são isentos de limite mínimo de contraste.</li>
      <li><strong>Componentes Inativos (Disabled):</strong> Botões ou campos claramente desabilitados (<code>disabled</code>) com os quais o usuário não pode interagir no momento são isentos.</li>
      <li><strong>Elementos Puramente Decorativos:</strong> Imagens ou grafismos de fundo que não trazem informação nem têm função clicável não precisam atingir 3:1.</li>
    </ul>
  </div>
</div>

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Próxima Ferramenta • 5 de 6</span>
    <h3>Avançar para Protocolo de Navegação por Teclado</h3>
    <p>Aprenda o roteiro prático para testar toda a interface usando apenas as teclas <code>Tab</code>, <code>Shift + Tab</code>, <code>Enter</code>, <code>Espaço</code>, <code>Setas</code> e <code>ESC</code>.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="lighthouse.html">← Anterior: 3. Google Lighthouse</a>
    <a class="step-nav-btn primary" href="teclado.html">Próxima: 5. Navegação por Teclado →</a>
  </div>
</div>
