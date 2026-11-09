<div class="hero-banner">
  <span class="hero-badge">Avaliação • Metodologias</span>
  <h1>Metodologias Utilizadas</h1>
  <p>Combinamos inspeção manual, ferramentas automáticas e testes de interação para avaliar as etapas de design, formulários e conteúdo do site da Apple Brasil.</p>
</div>

## Visão geral

Cada etapa foi avaliada com o checklist, mantendo a ordem original dos critérios e registrando o nível WCAG (A, AA ou AAA). Os resultados foram classificados como **atendido**, **pendente** (não atende ou ainda sem comprovação) ou **não se aplica**.

## Etapa 4 — Design, Cores, Contraste e Responsividade

<div class="tool-section-card">
  <div class="tool-header">
    <span class="tool-icon">🎨</span>
    <div><h2>Inspeção manual assistida por ferramentas</h2></div>
  </div>
  <p class="tool-desc">Coleta feita em <strong>08/11/2026</strong> no navegador Opera, em desktop, sobre a página inicial, o fluxo de compra do iPhone Duo e a página de recursos de acessibilidade.</p>
  <div class="tool-details-grid">
    <div class="tool-detail-box">
      <h3>Ferramentas</h3>
      <ul>
        <li><strong>DevTools</strong> (Elements, Styles, Computed) para inspecionar HTML e CSS.</li>
        <li><strong>WAVE (WebAIM)</strong> para localizar baixo contraste e medir a razão entre cores.</li>
        <li><strong>WCAG Tester</strong> para o teste de espaçamento de texto (1.4.12).</li>
        <li><strong>Emulação de dispositivo</strong> em 320 × 698 e 698 × 320 pixels CSS.</li>
        <li>Capturas de tela como evidência.</li>
      </ul>
    </div>
    <div class="tool-detail-box">
      <h3>Procedimentos</h3>
      <ul>
        <li>Zoom do navegador a 200%.</li>
        <li>Refluxo em largura de 320 px e troca entre retrato e paisagem.</li>
        <li>CEP inválido para observar o aviso de erro (cor, ícone e texto).</li>
        <li>Verificação no DOM se os textos do banner são HTML real, e não imagem.</li>
        <li>Medição de contraste de texto com o WAVE.</li>
      </ul>
    </div>
  </div>
</div>

!!! note "Critérios de decisão"
    - **Falha medida em amostra:** há medição ou teste específico que reprova o elemento observado.
    - **Evidência favorável em amostra:** nada de errado foi encontrado no trecho testado, sem garantia para o site todo.
    - **Parcial ou inconclusivo:** faltam medições ou verificações para decidir.

## Etapa 5 — Formulários, Previsibilidade, Segurança e Limites de Tempo

<div class="tool-section-card">
  <div class="tool-header">
    <span class="tool-icon">📝</span>
    <div><h2>Testes empíricos de navegação e de sessão</h2></div>
  </div>
  <p class="tool-desc">Análise dos formulários de busca, checkout e login (Apple ID), combinando inspeção de código com simulações de uso.</p>
  <div class="tool-details-grid">
    <div class="tool-detail-box">
      <h3>DevTools (aba Elements)</h3>
      <ul>
        <li>Validação de atributos como <code>aria-label</code> e <code>autocomplete</code>.</li>
        <li>Conferência de marcações de biometria (<code>webauthn</code>).</li>
      </ul>
    </div>
    <div class="tool-detail-box">
      <h3>Leitor de tela e teclado</h3>
      <ul>
        <li>TalkBack no Android 15 e navegação por teclado.</li>
        <li>Verificação de foco, feedback não visual e mudanças inesperadas de contexto.</li>
      </ul>
    </div>
    <div class="tool-detail-box">
      <h3>Sessão e carga cognitiva</h3>
      <ul>
        <li>Erros propositais de CEP e CPF e falhas de login.</li>
        <li>Inatividade prolongada na etapa de pagamento.</li>
        <li>Colagem de senha, alternativas ao CAPTCHA e persistência da sacola.</li>
      </ul>
    </div>
  </div>
</div>

## Etapa 6 — Conteúdo Textual, Imagens, Áudio, Vídeo e Animações

Os critérios desta etapa cobrem texto alternativo, nomes de botões e links, texto em imagens, legendas e transcrições, áudio automático, animações e conteúdo que pisca. Eles foram verificados por inspeção das páginas e registrados no checklist.

## Limitações do método

- A amostra cobre regiões e estados específicos, e não todo o domínio.
- Ferramentas automáticas detectam só parte dos problemas; ausência de alerta não garante acessibilidade.
- Não houve teste completo com outros navegadores, leitores de tela ou aparelhos físicos na Etapa 4.

Para conhecer as ferramentas em detalhe, veja a seção [Ferramentas](../ferramentas/devtools.md).

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Próxima página</span>
    <h3>Resultado da Análise</h3>
    <p>Veja os índices de aprovação e os principais achados.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="index.html">Visão geral</a>
    <a class="step-nav-btn primary" href="resultados.html">Continuar →</a>
  </div>
</div>
