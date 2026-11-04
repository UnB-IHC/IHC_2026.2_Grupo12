<div class="hero-banner">
  <span class="hero-badge">Etapa 7 de 7 • Checklist Interativo</span>
  <h1>Etapa 7 — Usabilidade: As 10 Heurísticas de Jakob Nielsen</h1>
  <p>Inspeção completa das 10 Heurísticas de Usabilidade de Nielsen: feedback de status, linguagem natural, controle do usuário, consistência, prevenção de erros e documentação.</p>
</div>

<div id="checklist-dashboard-mount" data-stage="etapa7" data-stage-num="7"></div>

<div class="stage-tools-box">
  <div class="stage-tools-header">
    <span>🛠️ <strong>Ferramentas de Apoio para esta Etapa</strong> (clique para ver como usar na seção de Ferramentas):</span>
  </div>
  <div class="stage-tools-grid">
    <a class="stage-tool-pill" href="../ferramentas.md#devtools">
      <strong>🛠️ Inspeção Heurística Guiada</strong>
      <span>Análise visual e interativa dos fluxos do sistema</span>
    </a>
    <a class="stage-tool-pill" href="../ferramentas.md#teclado">
      <strong>⌨️ Teste de Atalhos e Fluxos</strong>
      <span>Verificação de aceleradores (Ctrl+Z, ESC) e saídas de emergência</span>
    </a>
  </div>
</div>

## Critérios de Avaliação — Etapa 7

### 1. Visibilidade do Status do Sistema

- [ ] O sistema mantém o usuário sempre informado sobre o que está acontecendo por meio de feedback claro, visual e em tempo razoável (ex.: barras de progresso, indicadores de "Carregando..." ou "Processando...").
- [ ] Nenhuma ação importante é executada em segundo plano sem avisar o usuário sobre o estado atual ou a conclusão da tarefa.

### 2. Correspondência entre o Sistema e o Mundo Real

- [ ] A interface utiliza palavras, frases e conceitos familiares ao usuário (linguagem simples e natural), evitando jargões técnicos, termos internos orientados ao sistema ou siglas sem explicação.
- [ ] Ícones, metáforas visuais (ex.: pasta, lixeira, carrinho) e a ordem de apresentação das informações seguem convenções lógicas do mundo real e do contexto da aplicação.

### 3. Controle e Liberdade do Usuário

- [ ] O sistema oferece "saídas de emergência" claramente visíveis para que o usuário saia de estados indesejados sem precisar passar por fluxos longos (ex.: botões claros de "Cancelar", "Fechar" ou "Voltar").
- [ ] Há suporte fácil para desfazer (`Ctrl+Z` / botão "Desfazer") e refazer ações acidentais.

### 4. Consistência e Padrões

- [ ] Manter consistência visual e funcional entre todas as páginas do sistema (mesmo padrão de tipografia, cores, cabeçalhos, formulários, ícones e posicionamento de menus).
- [ ] Palavras, ícones ou botões diferentes não são usados para representar a mesma ação, e a interface segue as convenções conhecidas da plataforma web/mobile.

### 5. Prevenção de Erros

- [ ] O design previne que falhas ocorram antes da ação (ex.: desabilitar botões indevidos, usar máscaras de entrada em campos de CPF/data, limitar opções inválidas).
- [ ] O sistema exige confirmação explícita ("Deseja mesmo apagar? Confirmar / Cancelar") e apresenta um resumo dos dados antes de executar ações críticas, irreversíveis ou transações.

### 6. Reconhecimento em vez de Memorização

- [ ] Objetos, ações, filtros e opções ficam visíveis ou facilmente recuperáveis na interface, evitando que o usuário precise memorizar dados de uma tela para outra.
- [ ] Campos de busca e formulários oferecem recursos como histórico recente, sugestões, menus drop-down ou preenchimento automático (auto-fill), além de instruções de uso visíveis quando necessário.

### 7. Eficiência e Flexibilidade de Uso

- [ ] A interface atende de forma eficiente tanto usuários novatos (com fluxos guiados e intuitivos) quanto usuários experientes.
- [ ] Oferece aceleradores, atalhos de teclado (ex.: `Ctrl+C`, `Ctrl+V`), filtros avançados e permite personalizar ou repetir ações frequentes com agilidade.

### 8. Estética e Design Minimalista

- [ ] A interface foca no essencial ("menos é mais") e não contém informações irrelevantes ou raramente necessárias que sobrecarreguem a leitura.
- [ ] Elementos visuais (cores, ícones, fontes) não competem com a informação principal, mantendo uma hierarquia visual clara e bom uso de espaço em branco (respiro).

### 9. Recuperação Diante de Erros (Ajudar a Reconhecer, Diagnosticar e Recuperar-se)

- [ ] Mensagens de erro são expressas em linguagem clara e amigável (sem códigos técnicos ou de banco de dados), indicando com precisão visual qual campo ou etapa apresentou problema.
- [ ] A mensagem explica exatamente o motivo do problema e oferece uma solução prática ou botão construtivo para resolver na hora (ex.: "Tentar novamente", "Recuperar senha").

### 10. Ajuda e Documentação

- [ ] O sistema disponibiliza recursos de suporte e ajuda (FAQ, Central de Ajuda, chat ou botão `?`) facilmente localizáveis a qualquer momento.
- [ ] A documentação de ajuda é pesquisável, contextualizada à página atual e apresenta passos concretos e curtos focados na tarefa do usuário.

<div class="next-stage-box finish-box">
  <div class="next-stage-info">
    <span class="next-stage-badge">Avaliação Finalizada • 7 de 7 Etapas</span>
    <h3>Parabéns! Você chegou ao final do Checklist</h3>
    <p>Todas as 7 etapas (WCAG + Heurísticas de Nielsen) estão consolidadas no <strong>Índice de Aprovação do Site</strong> no topo da página. Agora você pode revisar qualquer etapa pelo menu lateral ou exportar o relatório completo em PDF.</p>
  </div>
  <div class="next-stage-actions">
    <a class="step-nav-btn secondary" href="etapa6.html">← Voltar para Etapa 6: Conteúdo e Multimídia</a>
    <button type="button" class="step-nav-btn primary" onclick="window.exportChecklistPDF && window.exportChecklistPDF()">📄 Exportar Relatório Completo em PDF</button>
    <button type="button" class="step-nav-btn danger-btn" onclick="window.resetFullEvaluation && window.resetFullEvaluation(true)">🔄 Reiniciar Teste (Avaliar Outro Site)</button>
  </div>
</div>
