<div class="hero-banner">
  <span class="hero-badge">Ferramenta 5 de 6 • Guia Prático de Inspeção</span>
  <h1>5. Protocolo de Teste de Navegação por Teclado e Foco</h1>
  <p>Roteiro manual estruturado para percorrer a página sem o mouse, avaliando a ordem lógica de tabulação, visibilidade do foco (<code>:focus-visible</code>), ausência de armadilhas de teclado e controle de janelas modais.</p>
</div>

<div class="stage-tools-box">
  <div class="stage-tools-header">
    <span>📌 <strong>Etapas do Checklist em que esta ferramenta é utilizada:</strong></span>
  </div>
  <div class="stage-tools-grid">
    <a class="stage-tool-pill" href="../checklist/etapa1.html">
      <strong>Etapa 1 • Blueprint e Visão Geral</strong>
      <span>Fluxo contínuo da jornada ponta a ponta e não-interferência de pop-ups/banners</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa3.html">
      <strong>Etapa 3 • Navegação, Teclado e Foco</strong>
      <span>Operabilidade 100% por teclado, Skip Link, ordem do Tab, foco visível e modais</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa5.html">
      <strong>Etapa 5 • Formulários e Tempo</strong>
      <span>Preenchimento de login/formulários, foco em mensagens de erro e sem envio surpresa</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa7.html">
      <strong>Etapa 7 • Heurísticas de Nielsen</strong>
      <span>Saídas de emergência com ESC, desfazer (Ctrl+Z) e aceleradores de teclado</span>
    </a>
  </div>
</div>

## Como Executar o Teste (Roteiro Passo a Passo)

<div class="tool-section-card">
  <h3>1. Mapa de Teclas do Protocolo de Inspeção</h3>
  <ul>
    <li><strong><code>Tab</code>:</strong> Avança para o próximo elemento interativo (links, botões, campos de formulário, controles customizados).</li>
    <li><strong><code>Shift + Tab</code>:</strong> Volta para o elemento interativo anterior (essencial para testar se o foco não ficou preso).</li>
    <li><strong><code>Enter</code>:</strong> Ativa links (<code>&lt;a&gt;</code>), botões (<code>&lt;button&gt;</code>) e submete formulários.</li>
    <li><strong><code>Espaço (Space)</code>:</strong> Ativa botões, marca/desmarca <em>checkboxes</em> e abre caixas de seleção (<code>&lt;select&gt;</code>).</li>
    <li><strong><code>Setas (↑ ↓ ← →)</code>:</strong> Move a seleção dentro de grupos de botões de rádio (<code>radio</code>), abas (<code>role="tab"</code>), menus drop-down e sliders.</li>
    <li><strong><code>ESC (Escape)</code>:</strong> Fecha janelas modais, menus abertos, <em>tooltips</em> e cancela sobreposições sem precisar clicar com o mouse.</li>
  </ul>
</div>

<div class="tool-section-card">
  <h3>2. Sequência de Verificação na Página</h3>
  <ol>
    <li><strong>Teste do primeiro Tab (Skip Link):</strong> Recarregue a página, clique na barra de endereço do navegador e pressione <code>Tab</code> uma única vez. Verifique se surge um botão/link visível do tipo <em>"Pular para o conteúdo principal"</em> e se pressionar <code>Enter</code> leva o foco direto para o <code>&lt;main&gt;</code>.</li>
    <li><strong>Percorra a página do topo ao rodapé:</strong> Continue pressionando <code>Tab</code> e observe se um contorno nítido acompanha cada item focado na mesma sequência visual (da esquerda para a direita, de cima para baixo).</li>
    <li><strong>Teste de menus, tooltips e modais:</strong>
      <ul>
        <li>Abra um submenu ou janela modal usando <code>Enter</code> ou <code>Espaço</code>.</li>
        <li>Dentro do modal aberto, pressione <code>Tab</code> várias vezes: o foco deve circular <strong>apenas dentro do modal</strong> (não pode escapar para os links escurecidos no fundo da página).</li>
        <li>Pressione <code>ESC</code>: o modal deve fechar imediatamente e devolver o foco para o botão que o abriu.</li>
      </ul>
    </li>
    <li><strong>Teste de formulários (Etapa 5):</strong> Navegue pelos inputs apenas com <code>Tab</code>, tente colar uma senha (<code>Ctrl + V</code>) e envie o formulário vazio com <code>Enter</code> para ver se o foco vai até o erro.</li>
  </ol>
</div>

---

## Como Analisar os Resultados

<div class="tool-details-grid">
  <div class="tool-detail-box">
    <h3>✅ O que indica Aprovação no Checklist</h3>
    <ul>
      <li><strong>100% Operável:</strong> Toda ação que um usuário faz com o mouse (abrir menu, filtrar busca, fechar banner de cookies, enviar formulário) também funciona apenas pelo teclado.</li>
      <li><strong>Foco Sempre Visível e Desobstruído:</strong> Em nenhum momento você "perde de vista" onde o cursor do teclado está, e cabeçalhos fixos (<em>sticky headers</em>) ou banners de cookies não cobrem o item focado.</li>
      <li><strong>Sem Mudança Surpresa de Contexto:</strong> Apenas passar com o <code>Tab</code> sobre um campo ou selecionar um item de um <code>&lt;select&gt;</code> não recarrega a página nem envia o formulário sem um botão de confirmação.</li>
    </ul>
  </div>

  <div class="tool-detail-box">
    <h3>❌ Sinais de Falha / Reprovação</h3>
    <ul>
      <li><strong>Foco Invisível (<code>outline: none</code>):</strong> Você aperta <code>Tab</code> várias vezes e não aparece nenhuma borda ou destaque nos botões focados.</li>
      <li><strong>Armadilha de Teclado (Keyboard Trap):</strong> O foco entra em um carrossel, calendário, mapa ou widget de chat e não sai mais nem com <code>Tab</code>, nem com <code>Shift + Tab</code>, nem com <code>ESC</code>.</li>
      <li><strong>Elementos Pulados:</strong> Botões ou cards clicáveis na tela que o <code>Tab</code> simplesmente ignora (porque foram feitos com <code>&lt;div&gt;</code> sem <code>tabindex</code>).</li>
    </ul>
  </div>
</div>

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Próxima Ferramenta • 6 de 6</span>
    <h3>Avançar para Leitores de Tela</h3>
    <p>Confira como testar os anúncios em voz alta usando o <strong>NVDA</strong> (Windows), <strong>VoiceOver</strong> (macOS/iOS) ou <strong>Orca</strong> (Linux).</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="contraste.html">← Anterior: 4. WebAIM & CCA</a>
    <a class="step-nav-btn primary" href="leitores_de_tela.html">Próxima: 6. Leitores de Tela →</a>
  </div>
</div>
