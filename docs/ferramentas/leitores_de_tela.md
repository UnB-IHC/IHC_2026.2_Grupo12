<div class="hero-banner">
  <span class="hero-badge">Ferramenta 6 de 6 • Guia Prático de Inspeção</span>
  <h1>6. Leitores de Tela (NVDA / VoiceOver / Orca)</h1>
  <p>Guia prático para ativar e operar leitores de tela, validando se cabeçalhos, regiões, descrições de imagens (<code>alt</code>), botões com ícones e mensagens dinâmicas (<code>aria-live</code>) são anunciados de forma clara.</p>
</div>

<div class="stage-tools-box">
  <div class="stage-tools-header">
    <span>📌 <strong>Etapas do Checklist em que esta ferramenta é utilizada:</strong></span>
  </div>
  <div class="stage-tools-grid">
    <a class="stage-tool-pill" href="../checklist/etapa2.html">
      <strong>Etapa 2 • Estrutura, Semântica e ARIA</strong>
      <span>Pronúncia do idioma, anúncio de Role/Estado e notificações automáticas aria-live</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa5.html">
      <strong>Etapa 5 • Formulários e Tempo</strong>
      <span>Leitura de rótulos (&lt;label&gt;), campos obrigatórios e mensagens de erro ao enviar</span>
    </a>
    <a class="stage-tool-pill" href="../checklist/etapa6.html">
      <strong>Etapa 6 • Conteúdo e Multimídia</strong>
      <span>Qualidade descritiva do texto alternativo (alt), botões com ícones e clareza de links</span>
    </a>
  </div>
</div>

## Como Ativar e Usar na Prática

<div class="tool-section-card">
  <h3>1. Ativando o Leitor de Tela no seu Sistema Operacional</h3>
  <ul>
    <li><strong>Windows — NVDA (Recomendado e Gratuito):</strong> Baixe no site da NV Access. Pressione <code>Ctrl + Alt + N</code> para iniciar ou fechar. Dica: clique com o botão direito no ícone do NVDA na bandeja do sistema → <em>Ferramentas (Tools)</em> → <strong>Visualizador de Fala (Speech Viewer)</strong> para ler em uma janelinha de texto tudo o que o leitor está falando!</li>
    <li><strong>Linux (Ubuntu / GNOME) — Orca:</strong> Já vem instalado nativamente. Pressione <code>Super (Tecla Windows) + Alt + S</code> para ligar ou desligar.</li>
    <li><strong>macOS — VoiceOver:</strong> Pressione <code>Cmd + F5</code> para ligar ou desligar, e use <code>Ctrl + Option + U</code> para abrir o <strong>Rotor</strong> (que lista todos os cabeçalhos, links e controles da página).</li>
  </ul>
  <div class="tool-links-row">
    <a class="tool-ext-link" href="https://www.nvaccess.org/download/" target="_blank" rel="noopener">🔗 Download Oficial NVDA (Windows)</a>
  </div>
</div>

<div class="tool-section-card">
  <h3>2. Atalhos Essenciais de Inspeção (NVDA / Orca)</h3>
  <ul>
    <li><strong><code>Ctrl</code> (sozinho):</strong> Silencia a fala imediatamente quando o leitor estiver lendo um texto longo.</li>
    <li><strong><code>Insert + F7</code> (no NVDA):</strong> Abre a <strong>Lista de Elementos</strong> da página (permite ver todos os Links, Cabeçalhos, Campos de Formulário e Regiões reunidos em uma janela para checar se fazem sentido fora de contexto).</li>
    <li><strong>Tecla <code>H</code> / <code>Shift + H</code>:</strong> Pula diretamente de cabeçalho em cabeçalho (<code>H1</code> → <code>H2</code> → <code>H3</code>).</li>
    <li><strong>Tecla <code>D</code>:</strong> Pula entre as regiões principais da página (<em>banner/header</em>, <em>navegação</em>, <em>principal/main</em>, <em>rodapé</em>).</li>
    <li><strong>Tecla <code>G</code>:</strong> Pula de imagem em imagem (gráfico) para ouvir o texto alternativo (<code>alt</code>) de cada uma.</li>
    <li><strong>Tecla <code>F</code>:</strong> Pula entre os campos de formulário para ouvir se o <code>&lt;label&gt;</code> é anunciado corretamente.</li>
  </ul>
</div>

---

## Como Analisar os Resultados

<div class="tool-details-grid">
  <div class="tool-detail-box">
    <h3>✅ O que indica Aprovação no Checklist</h3>
    <ul>
      <li><strong>Idioma e Pronúncia (Etapa 2):</strong> O leitor pronuncia o texto com sotaque em português (graças ao <code>lang="pt-BR"</code>) e muda a entonação em trechos marcados com <code>lang="en"</code>.</li>
      <li><strong>Botões e Controles (Etapa 2 e 6):</strong> Ao focar um botão apenas com ícone de lupa, o leitor anuncia a ação clara (ex.: <em>"Buscar, botão"</em>) e informa mudanças de estado (<em>"Menu, botão, recolhido"</em> → <em>"expandido"</em>).</li>
      <li><strong>Imagens e Status (Etapa 2 e 6):</strong> Imagens informativas têm descrição objetiva (sem começar com "imagem de..."), imagens decorativas (<code>alt=""</code>) são ignoradas sem poluir a leitura, e avisos como <em>"Salvo com sucesso"</em> são lidos automaticamente (<code>aria-live</code>).</li>
    </ul>
  </div>

  <div class="tool-detail-box">
    <h3>❌ Sinais de Falha / Reprovação</h3>
    <ul>
      <li><strong>Anúncios vazios ou nomes de arquivo:</strong> O leitor diz apenas <em>"Botão"</em>, <em>"Link"</em> ou lê o caminho do arquivo (ex.: <em>"Gráfico banner_final_v2.png"</em> ou um hash gigante de URL).</li>
      <li><strong>Links fora de contexto (Etapa 6):</strong> Ao abrir a lista de links (<code>Insert + F7</code>), aparecem dezenas de itens idênticos chamados apenas <em>"Clique aqui"</em> ou <em>"Saiba mais"</em>, sem indicar para onde levam.</li>
      <li><strong>Erros silenciosos (Etapa 5):</strong> Você envia um formulário com erro, uma mensagem vermelha surge na tela, mas o leitor de tela permanece em total silêncio.</li>
    </ul>
  </div>
</div>

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Pronto para Avaliar • Checklist Interativo</span>
    <h3>Iniciar a inspeção prática no Checklist</h3>
    <p>Você concluiu o guia das 6 ferramentas! Acesse agora a <strong>Etapa 1 do Checklist</strong> para preencher os dados do site avaliado e registrar os resultados.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="teclado.html">← Anterior: 5. Navegação por Teclado</a>
    <a class="step-nav-btn primary" href="../checklist/etapa1.html">Ir para Etapa 1 do Checklist →</a>
  </div>
</div>
