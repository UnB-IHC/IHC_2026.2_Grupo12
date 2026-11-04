<div class="hero-banner">
  <span class="hero-badge">Etapa 2 de 7 • Checklist Interativo</span>
  <h1>Etapa 2 — Estrutura, Semântica e Compatibilidade (HTML / ARIA)</h1>
  <p>Verificação das tags semânticas do HTML, declaração de idioma, hierarquia de cabeçalhos (H1-H6), leitura do DOM e notificações para leitores de tela.</p>
</div>

<div id="checklist-dashboard-mount" data-stage="etapa2" data-stage-num="2"></div>

<div class="stage-tools-box">
  <div class="stage-tools-header">
    <span>🛠️ <strong>Ferramentas de Apoio para esta Etapa</strong> (clique para ver como usar na seção de Ferramentas):</span>
  </div>
  <div class="stage-tools-grid">
    <a class="stage-tool-pill" href="../ferramentas.md#devtools">
      <strong>🛠️ Browser DevTools (DOM)</strong>
      <span>Inspeção de tags &lt;title&gt;, lang, &lt;header&gt;, &lt;main&gt; e DOM</span>
    </a>
    <a class="stage-tool-pill" href="../ferramentas.md#axe-wave">
      <strong>🧩 WAVE & Axe DevTools</strong>
      <span>Validação automática de semântica HTML e atributos ARIA</span>
    </a>
    <a class="stage-tool-pill" href="../ferramentas.md#leitores-de-tela">
      <strong>🔊 Leitores de Tela (NVDA)</strong>
      <span>Teste de anúncios de role, estado e aria-live</span>
    </a>
  </div>
</div>

## Critérios de Avaliação — Etapa 2

- [ ] **(Nível A)** A página possui título na tag `<title>` que descreve claramente seu tópico ou finalidade.
- [ ] **(Nível A)** O idioma principal da página está declarado programaticamente no código (ex.: `<html lang="pt-BR">`).
- [ ] **(Nível AA)** Palavras, citações ou trechos em língua estrangeira possuem marcação de idioma própria no código (ex.: `lang="en"`).
- [ ] **(Nível A)** Usar tags HTML semânticas nativas para seu propósito correto (`<button>` e `<a>` para ações, `<label>` e `<fieldset>` em formulários, `<th>` associado às células de tabelas).
- [ ] **(Nível A)** Estruturar regiões principais (`<header>`, `<main>`, `<footer>`, `<nav>`) sem repetição indevida e manter hierarquia lógica de cabeçalhos (`H1` único por página, `H2` a `H6` em ordem sequencial, sem pular níveis).
- [ ] **(Nível AA)** Títulos, cabeçalhos e rótulos de campos devem descrever claramente o assunto ou a função do conteúdo que acompanham.
- [ ] **(Nível A)** A ordem de leitura e apresentação dos elementos no código (DOM) é lógica e preserva o significado, cuidando para que `display: none` ou `visibility: hidden` não escondam conteúdos necessários para leitores de tela.
- [ ] **(Nível A)** Não utilizar CSS para inserir conteúdo informativo na página.
- [ ] **(Nível A)** Nome e Função (Role) de todos os componentes de interface são identificados por tecnologias assistivas, e mudanças de estado (ex.: botão expandido/recolhido) são notificadas em tempo real ao leitor de tela.
- [ ] **(Nível A)** O nome acessível de cada botão e controle deve conter o texto visível na tela, para que quem usa comando de voz consiga acioná-lo pelo nome que vê.
- [ ] **(Nível AA)** Mensagens de status (ex.: "carregando", "salvo com sucesso", "item adicionado") são anunciadas automaticamente pelo leitor de tela (`aria-live` / `role="status"`) sem roubar o foco do usuário.

<div class="next-stage-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Próximo Passo • Etapa 3 de 7</span>
    <h3>Concluiu a verificação desta etapa?</h3>
    <p>Todas as marcações feitas acima já foram <strong>salvas automaticamente</strong> no Índice de Aprovação do Site. Avance para a próxima etapa no botão abaixo ou pelo menu lateral esquerdo para continuar a avaliação sem perder seu progresso.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="etapa1.html">← Voltar para Etapa 1: Escopo e Conformidade</a>
    <a class="step-nav-btn primary" href="etapa3.html">Avançar para Etapa 3: Navegação e Teclado →</a>
  </div>
</div>
