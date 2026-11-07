<div class="hero-banner">
  <span class="hero-badge">Tema 2 de 5 • Acessibilidade W3C</span>
  <h1>Acessibilidade e WCAG</h1>
  <p>Acessibilidade digital é garantir que pessoas com diferentes capacidades, dispositivos e contextos consigam perceber, operar e compreender o conteúdo da web.</p>
</div>

## O que é a WCAG

A **WCAG** (*Web Content Accessibility Guidelines*) é o conjunto de diretrizes da W3C/WAI para tornar conteúdos web acessíveis. Cada diretriz tem **critérios de sucesso** testáveis, o que permite transformá-las em itens de checklist. Neste projeto usamos como base a versão **2.2**.

## Os quatro princípios (POUR)

<div class="card-grid">
  <div class="info-card">
    <span class="card-icon">👁️</span>
    <h3>Perceptível</h3>
    <p>A informação precisa ser apresentada de modo que o usuário consiga percebê-la. Ex.: texto alternativo em imagens, legendas em vídeos e contraste adequado.</p>
    <span class="placeholder-tag">Perceivable</span>
  </div>

  <div class="info-card">
    <span class="card-icon">⌨️</span>
    <h3>Operável</h3>
    <p>Todos os componentes devem poder ser usados, inclusive só com teclado. Ex.: foco visível, ordem lógica de navegação e tempo suficiente para tarefas.</p>
    <span class="placeholder-tag">Operable</span>
  </div>

  <div class="info-card">
    <span class="card-icon">🧠</span>
    <h3>Compreensível</h3>
    <p>Conteúdo e operação devem ser claros e previsíveis. Ex.: idioma da página definido, rótulos claros em formulários e mensagens de erro úteis.</p>
    <span class="placeholder-tag">Understandable</span>
  </div>

  <div class="info-card">
    <span class="card-icon">🧱</span>
    <h3>Robusto</h3>
    <p>O conteúdo deve funcionar com diferentes tecnologias assistivas e navegadores. Ex.: HTML semântico e uso correto de ARIA.</p>
    <span class="placeholder-tag">Robust</span>
  </div>
</div>

## Níveis de conformidade

<span class="wcag-badge wcag-a">A</span> **Nível mínimo.** Barreiras mais graves; sem ele, parte dos usuários fica totalmente excluída.

<span class="wcag-badge wcag-aa">AA</span> **Nível intermediário.** É o alvo da maioria das leis e políticas, incluindo normas brasileiras. Exige, por exemplo, contraste mínimo de 4,5:1 para texto comum.

<span class="wcag-badge wcag-aaa">AAA</span> **Nível mais alto.** Nem sempre é possível atingir em todo o conteúdo; a W3C o recomenda como meta em partes específicas.

!!! tip "Como usamos isso no checklist"
    Cada item das Etapas 1 a 6 mostra o nível WCAG correspondente. O painel de aprovação compara os itens marcados com a meta escolhida (A, AA ou AAA).

## Tecnologias assistivas

Pessoas com deficiência visual, motora, auditiva ou cognitiva usam recursos como leitores de tela, navegação por teclado, ampliadores e comandos de voz. Veja como testar esses recursos em [Ferramentas](../ferramentas/devtools.md).

## Acessibilidade beneficia todos

Legendas ajudam em ambientes barulhentos, bom contraste ajuda sob sol forte e navegação por teclado ajuda quem está com o mouse quebrado. O que remove barreiras para alguns melhora a experiência de todos.

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Próximo tema</span>
    <h3>10 Heurísticas de Nielsen</h3>
    <p>Do acesso para todos à usabilidade geral: as regras de ouro para inspecionar interfaces.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="usabilidade_ux.html">← Anterior</a>
    <a class="step-nav-btn primary" href="heuristicas_nielsen.html">Continuar →</a>
  </div>
</div>
