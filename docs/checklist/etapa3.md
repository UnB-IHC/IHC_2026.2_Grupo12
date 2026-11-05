<div class="hero-banner">
  <span class="hero-badge">Etapa 3 de 7 • Checklist Interativo</span>
  <h1>Etapa 3 — Navegação, Teclado, Foco e Interação</h1>
  <p>Avaliação da operabilidade por teclado, visibilidade do foco, ausência de armadilhas, modais acessíveis, área mínima de clique e alternativas para gestos.</p>
</div>

<div id="checklist-dashboard-mount" data-stage="etapa3" data-stage-num="3"></div>

<div class="stage-tools-box">
  <div class="stage-tools-header">
    <span>🛠️ <strong>Ferramentas de Apoio para esta Etapa</strong> (clique para ver como usar na seção de Ferramentas):</span>
  </div>
  <div class="stage-tools-grid">
    <a class="stage-tool-pill" href="../ferramentas/teclado.html">
      <strong>⌨️ Protocolo de Teste por Teclado</strong>
      <span>Navegação via Tab, Shift+Tab, Enter, Setas e ESC</span>
    </a>
    <a class="stage-tool-pill" href="../ferramentas/devtools.html">
      <strong>🛠️ Browser DevTools</strong>
      <span>Inspeção de :focus-visible e medição de área de clique (24x24px / 44x44px)</span>
    </a>
  </div>
</div>

## Critérios de Avaliação — Etapa 3

- [ ] **(Nível A)** Toda a funcionalidade do site é 100% operável por teclado (exceto funções que dependam do traço contínuo do movimento, como desenho à mão livre).
- [ ] **(Nível AAA)** Absolutamente todas as funcionalidades da página são operáveis por teclado, sem exceções e sem exigir tempo específico para pressionar as teclas.
- [ ] **(Nível A)** Não existem "armadilhas de teclado" (o foco nunca fica preso em um componente sem que o usuário consiga sair usando apenas Tab, setas ou ESC).
- [ ] **(Nível A)** O primeiro item interativo da página é um link de atalho para pular blocos repetidos (como o menu) e ir direto ao conteúdo principal.
- [ ] **(Nível A)** A ordem de navegação do foco (Tab) é sequencial, lógica e previsível.
- [ ] **(Nível AA)** O indicador de foco do teclado deve estar sempre visível ao navegar pelos elementos interativos (`:focus-visible`).
- [ ] **(Nível AA)** Um elemento com foco do teclado não pode ficar totalmente coberto por outro conteúdo, como cabeçalhos fixos, banners ou janelas sobrepostas.
- [ ] **(Nível AAA)** O indicador de foco engloba visualmente toda a área do componente focado (minimum bounding box) com alto destaque.
- [ ] **(Nível AA)** Conteúdos exibidos ao passar o mouse (hover) ou focar (tooltips, submenus) podem ser fechados com ESC sem mover o foco/cursor, permitem passar o mouse sobre eles sem sumir e permanecem visíveis até o usuário fechar ou tirar o foco.
- [ ] **(Nível A)** Modais (janelas sobrepostas) não abrem automaticamente nem um dentro do outro, mantêm o foco restrito a eles enquanto abertos e podem ser facilmente fechados por botão visível ou tecla ESC.
- [ ] **(Nível A)** Não há atalhos de teclado de uma única tecla (letra, número ou símbolo sem Ctrl/Alt), a menos que possam ser desativados, remapeados ou só funcionem quando o componente estiver em foco.
- [ ] **(Nível AA)** Existe mais de um caminho para encontrar uma página dentro do site (ex.: menu de navegação + campo de busca ou mapa do site).
- [ ] **(Nível AA)** A área mínima de clique ou toque de botões e controles é de pelo menos 24x24 CSS pixels.
- [ ] **(Nível AAA)** A área mínima de clique ou toque de botões e controles é de pelo menos 44x44 CSS pixels (48x48 px recomendado).
- [ ] **(Nível A)** Alternativa para gestos na tela: funções que usam movimento de pinça (dois dedos) ou deslizar na tela (como dar zoom em mapas ou girar carrosséis) possuem botões simples que funcionam com apenas um clique ou toque.
- [ ] **(Nível AA)** Funções que exigem arrastar (sliders, reordenação, mapas) devem ter alternativa que funcione com um clique ou toque simples.
- [ ] **(Nível A)** Cancelamento de clique/toque: a ação de um botão só é disparada quando o usuário solta o clique do mouse ou tira o dedo da tela, permitindo desistir da ação se arrastar para fora do botão antes de soltar.
- [ ] **(Nível A)** Ações por movimento do aparelho: nenhuma função depende apenas de sacudir ou inclinar o celular/tablet; sempre existe um botão na tela para fazer a mesma ação e opção para desativar o sensor de movimento.
- [ ] **(Nível AAA)** O site aceita diferentes formas de controle ao mesmo tempo (teclado, mouse, toque na tela e voz), sem travar uma quando a outra é usada.

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Próximo Passo • Etapa 4 de 7</span>
    <h3>Concluiu a verificação desta etapa?</h3>
    <p>Todas as marcações feitas acima já foram <strong>salvas automaticamente</strong> no Índice de Aprovação do Site. Avance para a próxima etapa no botão abaixo ou pelo menu lateral esquerdo para continuar a avaliação sem perder seu progresso.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="etapa2.html">← Voltar para Etapa 2: Estrutura e Semântica</a>
    <a class="step-nav-btn primary" href="etapa4.html">Avançar para Etapa 4: Design e Contraste →</a>
  </div>
</div>
