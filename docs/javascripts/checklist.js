// Catálogo completo das 7 Etapas (103 critérios) para cálculo global e exportação em PDF
const CHECKLIST_CATALOG = [{"num": 1, "slug": "etapa1", "short": "Etapa 1: Escopo e Conformidade", "title": "Etapa 1 — Escopo e Requisitos de Conformidade", "items": [{"id": "etapa1-0", "category": "SCOPE", "subsection": "", "text": "Definir quais páginas, telas, rotas ou URLs fazem parte da avaliação (incluindo áreas logadas e subdomínios)."}, {"id": "etapa1-1", "category": "SCOPE", "subsection": "", "text": "Registrar a versão da WCAG utilizada como referência (ex.: WCAG 2.2) e o nível de conformidade buscado ou atingido (A, AA ou AAA)."}, {"id": "etapa1-2", "category": "SCOPE", "subsection": "", "text": "Listar as tecnologias utilizadas no projeto (HTML, CSS, JavaScript, WAI-ARIA, frameworks) e os navegadores, dispositivos e leitores de tela usados nos testes."}, {"id": "etapa1-3", "category": "SCOPE", "subsection": "", "text": "Garantir que o nível de conformidade escolhido (A, AA ou AAA) seja atendido integralmente em páginas completas, sem aprovar partes isoladas."}, {"id": "etapa1-4", "category": "SCOPE", "subsection": "", "text": "Em fluxos de múltiplas etapas (ex.: cadastro, checkout ou agendamento), garantir que todas as telas do processo sejam acessíveis do início ao fim."}, {"id": "etapa1-5", "category": "SCOPE", "subsection": "", "text": "Garantir que elementos ou tecnologias adicionais não bloqueiem o acesso ao restante da página, não prendam o foco do teclado nem gerem áudios ou flashes incontroláveis."}]}, {"num": 2, "slug": "etapa2", "short": "Etapa 2: Estrutura e Semântica", "title": "Etapa 2 — Estrutura, Semântica e Compatibilidade (HTML / ARIA)", "items": [{"id": "etapa2-0", "category": "A", "subsection": "", "text": "A página possui título na tag <title> que descreve claramente seu tópico ou finalidade."}, {"id": "etapa2-1", "category": "A", "subsection": "", "text": "O idioma principal da página está declarado programaticamente no código (ex.: <html lang=\"pt-BR\">)."}, {"id": "etapa2-2", "category": "AA", "subsection": "", "text": "Palavras, citações ou trechos em língua estrangeira possuem marcação de idioma própria no código (ex.: lang=\"en\")."}, {"id": "etapa2-3", "category": "A", "subsection": "", "text": "Usar tags HTML semânticas nativas para seu propósito correto (<button> e <a> para ações, <label> e <fieldset> em formulários, <th> associado às células de tabelas)."}, {"id": "etapa2-4", "category": "A", "subsection": "", "text": "Estruturar regiões principais (<header>, <main>, <footer>, <nav>) sem repetição indevida e manter hierarquia lógica de cabeçalhos (H1 único por página, H2 a H6 em ordem sequencial, sem pular níveis)."}, {"id": "etapa2-5", "category": "AA", "subsection": "", "text": "Títulos, cabeçalhos e rótulos de campos devem descrever claramente o assunto ou a função do conteúdo que acompanham."}, {"id": "etapa2-6", "category": "A", "subsection": "", "text": "A ordem de leitura e apresentação dos elementos no código (DOM) é lógica e preserva o significado, cuidando para que display: none ou visibility: hidden não escondam conteúdos necessários para leitores de tela."}, {"id": "etapa2-7", "category": "A", "subsection": "", "text": "Não utilizar CSS para inserir conteúdo informativo na página."}, {"id": "etapa2-8", "category": "A", "subsection": "", "text": "Nome e Função (Role) de todos os componentes de interface são identificados por tecnologias assistivas, e mudanças de estado (ex.: botão expandido/recolhido) são notificadas em tempo real ao leitor de tela."}, {"id": "etapa2-9", "category": "A", "subsection": "", "text": "O nome acessível de cada botão e controle deve conter o texto visível na tela, para que quem usa comando de voz consiga acioná-lo pelo nome que vê."}, {"id": "etapa2-10", "category": "AA", "subsection": "", "text": "Mensagens de status (ex.: \"carregando\", \"salvo com sucesso\", \"item adicionado\") são anunciadas automaticamente pelo leitor de tela (aria-live / role=\"status\") sem roubar o foco do usuário."}]}, {"num": 3, "slug": "etapa3", "short": "Etapa 3: Navegação e Teclado", "title": "Etapa 3 — Navegação, Teclado, Foco e Interação", "items": [{"id": "etapa3-0", "category": "A", "subsection": "", "text": "Toda a funcionalidade do site é 100% operável por teclado (exceto funções que dependam do traço contínuo do movimento, como desenho à mão livre)."}, {"id": "etapa3-1", "category": "AAA", "subsection": "", "text": "Absolutamente todas as funcionalidades da página são operáveis por teclado, sem exceções e sem exigir tempo específico para pressionar as teclas."}, {"id": "etapa3-2", "category": "A", "subsection": "", "text": "Não existem \"armadilhas de teclado\" (o foco nunca fica preso em um componente sem que o usuário consiga sair usando apenas Tab, setas ou ESC)."}, {"id": "etapa3-3", "category": "A", "subsection": "", "text": "O primeiro item interativo da página é um link de atalho para pular blocos repetidos (como o menu) e ir direto ao conteúdo principal."}, {"id": "etapa3-4", "category": "A", "subsection": "", "text": "A ordem de navegação do foco (Tab) é sequencial, lógica e previsível."}, {"id": "etapa3-5", "category": "AA", "subsection": "", "text": "O indicador de foco do teclado deve estar sempre visível ao navegar pelos elementos interativos (:focus-visible)."}, {"id": "etapa3-6", "category": "AA", "subsection": "", "text": "Um elemento com foco do teclado não pode ficar totalmente coberto por outro conteúdo, como cabeçalhos fixos, banners ou janelas sobrepostas."}, {"id": "etapa3-7", "category": "AAA", "subsection": "", "text": "O indicador de foco engloba visualmente toda a área do componente focado (minimum bounding box) com alto destaque."}, {"id": "etapa3-8", "category": "AA", "subsection": "", "text": "Conteúdos exibidos ao passar o mouse (hover) ou focar (tooltips, submenus) podem ser fechados com ESC sem mover o foco/cursor, permitem passar o mouse sobre eles sem sumir e permanecem visíveis até o usuário fechar ou tirar o foco."}, {"id": "etapa3-9", "category": "A", "subsection": "", "text": "Modais (janelas sobrepostas) não abrem automaticamente nem um dentro do outro, mantêm o foco restrito a eles enquanto abertos e podem ser facilmente fechados por botão visível ou tecla ESC."}, {"id": "etapa3-10", "category": "A", "subsection": "", "text": "Não há atalhos de teclado de uma única tecla (letra, número ou símbolo sem Ctrl/Alt), a menos que possam ser desativados, remapeados ou só funcionem quando o componente estiver em foco."}, {"id": "etapa3-11", "category": "AA", "subsection": "", "text": "Existe mais de um caminho para encontrar uma página dentro do site (ex.: menu de navegação + campo de busca ou mapa do site)."}, {"id": "etapa3-12", "category": "AA", "subsection": "", "text": "A área mínima de clique ou toque de botões e controles é de pelo menos 24x24 CSS pixels."}, {"id": "etapa3-13", "category": "AAA", "subsection": "", "text": "A área mínima de clique ou toque de botões e controles é de pelo menos 44x44 CSS pixels (48x48 px recomendado)."}, {"id": "etapa3-14", "category": "A", "subsection": "", "text": "Alternativa para gestos na tela: funções que usam movimento de pinça (dois dedos) ou deslizar na tela (como dar zoom em mapas ou girar carrosséis) possuem botões simples que funcionam com apenas um clique ou toque."}, {"id": "etapa3-15", "category": "AA", "subsection": "", "text": "Funções que exigem arrastar (sliders, reordenação, mapas) devem ter alternativa que funcione com um clique ou toque simples."}, {"id": "etapa3-16", "category": "A", "subsection": "", "text": "Cancelamento de clique/toque: a ação de um botão só é disparada quando o usuário solta o clique do mouse ou tira o dedo da tela, permitindo desistir da ação se arrastar para fora do botão antes de soltar."}, {"id": "etapa3-17", "category": "A", "subsection": "", "text": "Ações por movimento do aparelho: nenhuma função depende apenas de sacudir ou inclinar o celular/tablet; sempre existe um botão na tela para fazer a mesma ação e opção para desativar o sensor de movimento."}, {"id": "etapa3-18", "category": "AAA", "subsection": "", "text": "O site aceita diferentes formas de controle ao mesmo tempo (teclado, mouse, toque na tela e voz), sem travar uma quando a outra é usada."}]}, {"num": 4, "slug": "etapa4", "short": "Etapa 4: Design e Contraste", "title": "Etapa 4 — Design, Cores, Contraste e Responsividade", "items": [{"id": "etapa4-0", "category": "A", "subsection": "", "text": "Nunca transmitir informação, indicar ação ou apontar erro usando apenas cor; complementar sempre com texto, ícone ou sublinhado (ex.: links com cor + sublinhado)."}, {"id": "etapa4-1", "category": "A", "subsection": "", "text": "Instruções de uso não dependem apenas de características sensoriais como formato, tamanho, localização visual (\"clique no botão à direita\") ou som."}, {"id": "etapa4-2", "category": "AA", "subsection": "", "text": "Contraste mínimo de 4,5:1 para textos normais e 3:1 para textos grandes (18pt ou 14pt em negrito), inclusive sobre fundos com degradê (logotipos e itens decorativos são isentos)."}, {"id": "etapa4-3", "category": "AAA", "subsection": "", "text": "Contraste aprimorado mínimo de 7:1 para textos normais e 4,5:1 para textos grandes (18pt ou 14pt em negrito)."}, {"id": "etapa4-4", "category": "AA", "subsection": "", "text": "Componentes de interface (bordas de inputs, botões) e ícones informativos possuem contraste mínimo de 3:1 contra o fundo."}, {"id": "etapa4-5", "category": "AAA", "subsection": "", "text": "Permitir que o usuário escolha esquemas personalizados de cores para texto e fundo, oferecendo também opção de alto contraste / modo escuro."}, {"id": "etapa4-6", "category": "AA", "subsection": "", "text": "Suporte a redimensionamento/zoom de até 200% sem perda de conteúdo, funcionalidade ou sobreposição de textos."}, {"id": "etapa4-7", "category": "AA", "subsection": "", "text": "Responsividade (Refluxo): o conteúdo permanece legível e funcional em telas de até 320 CSS pixels de largura sem exigir rolagem horizontal."}, {"id": "etapa4-8", "category": "AA", "subsection": "", "text": "Não travar a visualização do site em apenas uma orientação de tela (funcionar tanto na vertical/retrato quanto na horizontal/paisagem)."}, {"id": "etapa4-9", "category": "AA", "subsection": "", "text": "O conteúdo deve funcionar tanto na orientação retrato quanto na paisagem, sem exigir que o usuário gire o aparelho."}, {"id": "etapa4-10", "category": "AA", "subsection": "", "text": "Não usar imagens de texto para transmitir informação, exceto em logotipos ou quando a apresentação do texto for essencial."}, {"id": "etapa4-11", "category": "AA", "subsection": "", "text": "O layout não perde informação nem corta textos quando o usuário configura espaçamento entre linhas de 1,5x, entre parágrafos de 2x, entre letras de 0,12em e entre palavras de 0,16em."}, {"id": "etapa4-12", "category": "AAA", "subsection": "", "text": "Parágrafos alinhados à esquerda (nunca justificados), com largura máxima de 80 caracteres por linha, fontes sem serifa/rebuscamento (mínimo 18pt normal ou 14pt negrito) e espaçamento mínimo de 1,5x entre linhas."}]}, {"num": 5, "slug": "etapa5", "short": "Etapa 5: Formulários e Tempo", "title": "Etapa 5 — Formulários, Previsibilidade, Segurança e Limites de Tempo", "items": [{"id": "etapa5-0", "category": "A", "subsection": "", "text": "Todos os campos de formulário possuem rótulos (<label>) visíveis e associados no código, com identificação clara dos campos obrigatórios."}, {"id": "etapa5-1", "category": "AA", "subsection": "", "text": "Campos que coletam dados pessoais do usuário (nome, e-mail, telefone, senha, endereço) indicam corretamente sua finalidade no código (autocomplete)."}, {"id": "etapa5-2", "category": "A", "subsection": "", "text": "Erros de preenchimento são identificados automaticamente e descritos em texto próximo ao campo afetado (sem revelar dados sensíveis), movendo o foco para ajudar na localização."}, {"id": "etapa5-3", "category": "AA", "subsection": "", "text": "Quando um erro de entrada é detectado, o sistema oferece sugestões claras de como corrigi-lo."}, {"id": "etapa5-4", "category": "AA", "subsection": "", "text": "Em transações jurídicas, financeiras ou de alteração/exclusão de dados, é possível reverter o envio, revisar os dados ou confirmar antes de finalizar."}, {"id": "etapa5-5", "category": "AAA", "subsection": "", "text": "Todos os formulários do site permitem revisão e confirmação antes do envio e contam com ajuda contextual disponível."}, {"id": "etapa5-6", "category": "A", "subsection": "", "text": "Não exigir que o usuário digite novamente informações já fornecidas na mesma sessão ou etapa (preenchimento automático ou seleção dos dados já informados)."}, {"id": "etapa5-7", "category": "AA", "subsection": "", "text": "Processos de login e autenticação não dependem de memorização ou desafios cognitivos (permitir colar senha e usar gerenciadores de senhas) e são 100% operáveis por teclado."}, {"id": "etapa5-8", "category": "AA", "subsection": "", "text": "O login e as demais etapas de autenticação não podem exigir testes cognitivos, como memorizar, resolver quebra-cabeças ou transcrever códigos, salvo com alternativa que dispense esse esforço."}, {"id": "etapa5-9", "category": "A", "subsection": "", "text": "Desafios de segurança (como CAPTCHA) possuem alternativas acessíveis para diferentes percepções sensoriais (sem áudio ruidoso ou imagens sem contraste)."}, {"id": "etapa5-10", "category": "A", "subsection": "", "text": "Caso ocorra erro de login ou segurança, o usuário consegue corrigir os dados sem perder o que já havia preenchido."}, {"id": "etapa5-11", "category": "A", "subsection": "", "text": "Focar em um elemento ou alterar o valor de um campo não dispara mudanças inesperadas de contexto (não envia o formulário nem abre nova janela sozinho sem aviso prévio). Links que abrem nova janela informam isso ao usuário."}, {"id": "etapa5-12", "category": "AA", "subsection": "", "text": "Manter elementos que se repetem (menu de navegação, campo de busca e botões de ajuda) na mesma posição e ordem relativa em todas as páginas, identificando componentes de mesma função de forma padronizada."}, {"id": "etapa5-13", "category": "A", "subsection": "", "text": "Links de ajuda (contato, FAQ, chat) devem estar sempre na mesma posição em todas as páginas do site."}, {"id": "etapa5-14", "category": "AA", "subsection": "", "text": "Componentes com a mesma função em todo o site devem ter o mesmo nome e o mesmo ícone."}, {"id": "etapa5-15", "category": "A", "subsection": "", "text": "Se houver limite de tempo na página, o usuário pode desativá-lo antes, ajustá-lo em até 10x o valor padrão ou estendê-lo com ação simples (recebendo aviso com pelo menos 20 segundos de antecedência)."}, {"id": "etapa5-16", "category": "AAA", "subsection": "", "text": "A aplicação não impõe limites de tempo para uso ou teclado, permite adiar alertas/interrupções não emergenciais e preserva todos os dados preenchidos caso a sessão expire (avisando se houver expiração com menos de 20 horas)."}]}, {"num": 6, "slug": "etapa6", "short": "Etapa 6: Conteúdo e Multimídia", "title": "Etapa 6 — Conteúdo Textual, Imagens, Áudio, Vídeo e Animações", "items": [{"id": "etapa6-0", "category": "A", "subsection": "", "text": "Toda imagem informativa possui texto alternativo (alt) descrevendo tipo, contexto e ação (sem \"foto de...\"); imagens complexas (gráficos) possuem descrição detalhada complementar; imagens decorativas possuem alt=\"\" vazio."}, {"id": "etapa6-1", "category": "A", "subsection": "", "text": "Botões apenas com ícones possuem nome acessível descrevendo a ação ou destino (ex.: \"Buscar\"), e não a aparência do ícone (\"lupa\")."}, {"id": "etapa6-2", "category": "AA", "subsection": "", "text": "Sempre utilizar texto real em vez de imagens contendo texto (permitido no nível AA apenas quando personalizável ou essencial, como logotipos)."}, {"id": "etapa6-3", "category": "AAA", "subsection": "", "text": "Imagens de texto são usadas exclusivamente para logotipos ou pura decoração, sem outras exceções."}, {"id": "etapa6-4", "category": "A", "subsection": "", "text": "Rótulos de links e botões devem ser claros e autoexplicativos sobre seu destino ou função (evitar termos vagos como \"clique aqui\" ou \"saiba mais\")."}, {"id": "etapa6-5", "category": "A", "subsection": "", "text": "A finalidade de cada link deve ser compreensível pelo texto do link ou pelo contexto em que ele está, sem depender de texto escondido ou de interpretação."}, {"id": "etapa6-6", "category": "AAA", "subsection": "", "text": "A finalidade de cada link deve poder ser compreendida apenas pelo texto do próprio link isoladamente, mesmo fora de contexto."}, {"id": "etapa6-7", "category": "AAA", "subsection": "", "text": "Textos redigidos em linguagem simples e direta (frases de 15 a 20 palavras, sem ambiguidades), hashtags em CamelCase (#ExemploDeUso), terminologia correta (\"pessoa com deficiência\"), além de explicação para jargões, siglas, pronúncia e resumo para textos complexos."}, {"id": "etapa6-8", "category": "A", "subsection": "", "text": "Vídeos pré-gravados possuem legendas sincronizadas, audiodescrição e transcrição textual completa (visual e sonora)."}, {"id": "etapa6-9", "category": "AA", "subsection": "", "text": "Transmissões de áudio e vídeo ao vivo possuem legendas em tempo real (e alternativa textual ao vivo para mídias apenas de áudio no nível AAA)."}, {"id": "etapa6-10", "category": "AAA", "subsection": "", "text": "Vídeos pré-gravados possuem janela de interpretação em língua de sinais (Libras)."}, {"id": "etapa6-11", "category": "A", "subsection": "", "text": "Áudios e podcasts pré-gravados possuem transcrição textual completa (falas e sons relevantes)."}, {"id": "etapa6-12", "category": "A", "subsection": "", "text": "Nenhum áudio toca automaticamente por mais de 3 segundos sem um controle visível para pausar, parar ou ajustar o volume de forma independente do sistema."}, {"id": "etapa6-13", "category": "AAA", "subsection": "", "text": "Em áudios focados em fala, sons de fundo podem ser desativados ou permanecem pelo menos 20 dB abaixo da voz principal."}, {"id": "etapa6-14", "category": "A", "subsection": "", "text": "Informações que se movem, rolam ou piscam automaticamente por mais de 5 segundos (carrosséis, banners) ou se atualizam sozinhas (feeds) possuem botão visível para pausar, parar ou ocultar."}, {"id": "etapa6-15", "category": "A", "subsection": "", "text": "Nenhum elemento da página pisca mais de 3 vezes no período de 1 segundo (prevenção de crises epilépticas fotossensíveis; no nível AAA, no máximo 3 vezes em 3 segundos)."}, {"id": "etapa6-16", "category": "AAA", "subsection": "", "text": "Animações de transição, tela inteira ou efeitos parallax acionados por interação possuem opção para serem desativados pelo usuário."}]}, {"num": 7, "slug": "etapa7", "short": "Etapa 7: Heurísticas de Nielsen", "title": "Etapa 7 — Usabilidade: As 10 Heurísticas de Jakob Nielsen", "items": [{"id": "etapa7-0", "category": "NIELSEN", "subsection": "1. Visibilidade do Status do Sistema", "text": "O sistema mantém o usuário sempre informado sobre o que está acontecendo por meio de feedback claro, visual e em tempo razoável (ex.: barras de progresso, indicadores de \"Carregando...\" ou \"Processando...\")."}, {"id": "etapa7-1", "category": "NIELSEN", "subsection": "1. Visibilidade do Status do Sistema", "text": "Nenhuma ação importante é executada em segundo plano sem avisar o usuário sobre o estado atual ou a conclusão da tarefa."}, {"id": "etapa7-2", "category": "NIELSEN", "subsection": "2. Correspondência entre o Sistema e o Mundo Real", "text": "A interface utiliza palavras, frases e conceitos familiares ao usuário (linguagem simples e natural), evitando jargões técnicos, termos internos orientados ao sistema ou siglas sem explicação."}, {"id": "etapa7-3", "category": "NIELSEN", "subsection": "2. Correspondência entre o Sistema e o Mundo Real", "text": "Ícones, metáforas visuais (ex.: pasta, lixeira, carrinho) e a ordem de apresentação das informações seguem convenções lógicas do mundo real e do contexto da aplicação."}, {"id": "etapa7-4", "category": "NIELSEN", "subsection": "3. Controle e Liberdade do Usuário", "text": "O sistema oferece \"saídas de emergência\" claramente visíveis para que o usuário saia de estados indesejados sem precisar passar por fluxos longos (ex.: botões claros de \"Cancelar\", \"Fechar\" ou \"Voltar\")."}, {"id": "etapa7-5", "category": "NIELSEN", "subsection": "3. Controle e Liberdade do Usuário", "text": "Há suporte fácil para desfazer (Ctrl+Z / botão \"Desfazer\") e refazer ações acidentais."}, {"id": "etapa7-6", "category": "NIELSEN", "subsection": "4. Consistência e Padrões", "text": "Manter consistência visual e funcional entre todas as páginas do sistema (mesmo padrão de tipografia, cores, cabeçalhos, formulários, ícones e posicionamento de menus)."}, {"id": "etapa7-7", "category": "NIELSEN", "subsection": "4. Consistência e Padrões", "text": "Palavras, ícones ou botões diferentes não são usados para representar a mesma ação, e a interface segue as convenções conhecidas da plataforma web/mobile."}, {"id": "etapa7-8", "category": "NIELSEN", "subsection": "5. Prevenção de Erros", "text": "O design previne que falhas ocorram antes da ação (ex.: desabilitar botões indevidos, usar máscaras de entrada em campos de CPF/data, limitar opções inválidas)."}, {"id": "etapa7-9", "category": "NIELSEN", "subsection": "5. Prevenção de Erros", "text": "O sistema exige confirmação explícita (\"Deseja mesmo apagar? Confirmar / Cancelar\") e apresenta um resumo dos dados antes de executar ações críticas, irreversíveis ou transações."}, {"id": "etapa7-10", "category": "NIELSEN", "subsection": "6. Reconhecimento em vez de Memorização", "text": "Objetos, ações, filtros e opções ficam visíveis ou facilmente recuperáveis na interface, evitando que o usuário precise memorizar dados de uma tela para outra."}, {"id": "etapa7-11", "category": "NIELSEN", "subsection": "6. Reconhecimento em vez de Memorização", "text": "Campos de busca e formulários oferecem recursos como histórico recente, sugestões, menus drop-down ou preenchimento automático (auto-fill), além de instruções de uso visíveis quando necessário."}, {"id": "etapa7-12", "category": "NIELSEN", "subsection": "7. Eficiência e Flexibilidade de Uso", "text": "A interface atende de forma eficiente tanto usuários novatos (com fluxos guiados e intuitivos) quanto usuários experientes."}, {"id": "etapa7-13", "category": "NIELSEN", "subsection": "7. Eficiência e Flexibilidade de Uso", "text": "Oferece aceleradores, atalhos de teclado (ex.: Ctrl+C, Ctrl+V), filtros avançados e permite personalizar ou repetir ações frequentes com agilidade."}, {"id": "etapa7-14", "category": "NIELSEN", "subsection": "8. Estética e Design Minimalista", "text": "A interface foca no essencial (\"menos é mais\") e não contém informações irrelevantes ou raramente necessárias que sobrecarreguem a leitura."}, {"id": "etapa7-15", "category": "NIELSEN", "subsection": "8. Estética e Design Minimalista", "text": "Elementos visuais (cores, ícones, fontes) não competem com a informação principal, mantendo uma hierarquia visual clara e bom uso de espaço em branco (respiro)."}, {"id": "etapa7-16", "category": "NIELSEN", "subsection": "9. Recuperação Diante de Erros (Ajudar a Reconhecer, Diagnosticar e Recuperar-se)", "text": "Mensagens de erro são expressas em linguagem clara e amigável (sem códigos técnicos ou de banco de dados), indicando com precisão visual qual campo ou etapa apresentou problema."}, {"id": "etapa7-17", "category": "NIELSEN", "subsection": "9. Recuperação Diante de Erros (Ajudar a Reconhecer, Diagnosticar e Recuperar-se)", "text": "A mensagem explica exatamente o motivo do problema e oferece uma solução prática ou botão construtivo para resolver na hora (ex.: \"Tentar novamente\", \"Recuperar senha\")."}, {"id": "etapa7-18", "category": "NIELSEN", "subsection": "10. Ajuda e Documentação", "text": "O sistema disponibiliza recursos de suporte e ajuda (FAQ, Central de Ajuda, chat ou botão ?) facilmente localizáveis a qualquer momento."}, {"id": "etapa7-19", "category": "NIELSEN", "subsection": "10. Ajuda e Documentação", "text": "A documentação de ajuda é pesquisável, contextualizada à página atual e apresenta passos concretos e curtos focados na tarefa do usuário."}]}];

const STORAGE_KEY = "ihc_grupo12_checklist_v2";
const SITE_INFO_KEY = "ihc_grupo12_site_info_v1";

function loadSavedState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

function loadSiteInfo() {
  try {
    return JSON.parse(localStorage.getItem(SITE_INFO_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function saveSiteInfo(info) {
  try {
    localStorage.setItem(SITE_INFO_KEY, JSON.stringify(info));
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", function () {
  initChecklistSystem();
});

function initChecklistSystem() {
  const savedState = loadSavedState();
  updateSidebarStageCounters(savedState);

  const dashboardMount = document.getElementById("checklist-dashboard-mount");
  if (!dashboardMount) return;

  const currentStageSlug = dashboardMount.dataset.stage || "etapa1";
  const currentStageNum = parseInt(dashboardMount.dataset.stageNum || "1", 10);
  const rawItems = Array.from(
    document.querySelectorAll(".md-content ul.task-list > li, .md-content li.task-list-item")
  );

  // Transformar cada item em um card com checkbox customizado livre de bugs do tema
  const stageCards = [];
  rawItems.forEach((li, index) => {
    const itemId = `${currentStageSlug}-${index}`;

    // Remover inputs/labels antigos gerados pelo markdown
    const oldInput = li.querySelector('input[type="checkbox"]');
    if (oldInput) oldInput.remove();
    const oldLabel = li.querySelector("label.task-list-control");
    if (oldLabel) oldLabel.remove();

    // Detectar categoria
    const rawText = li.textContent || "";
    let category = currentStageNum === 1 ? "SCOPE" : currentStageNum === 7 ? "NIELSEN" : "OTHER";
    if (rawText.includes("(Nível AAA)")) category = "AAA";
    else if (rawText.includes("(Nível AA)")) category = "AA";
    else if (rawText.includes("(Nível A)")) category = "A";

    // Converter (Nível A/AA/AAA) em badge colorido
    const strongTag = li.querySelector("strong");
    if (strongTag) {
      const txt = strongTag.textContent.trim();
      if (txt === "(Nível A)") strongTag.outerHTML = '<span class="wcag-badge wcag-a">Nível A</span>';
      else if (txt === "(Nível AA)") strongTag.outerHTML = '<span class="wcag-badge wcag-aa">Nível AA</span>';
      else if (txt === "(Nível AAA)") strongTag.outerHTML = '<span class="wcag-badge wcag-aaa">Nível AAA</span>';
    }

    const innerContentHTML = li.innerHTML.trim();
    li.className = "checklist-card";
    li.dataset.itemId = itemId;
    li.dataset.category = category;
    li.setAttribute("role", "checkbox");
    li.setAttribute("tabindex", "0");

    const isChecked = savedState[itemId] === true;
    if (isChecked) li.classList.add("is-checked");
    li.setAttribute("aria-checked", isChecked ? "true" : "false");

    li.innerHTML = `
      <div class="check-box-ui" aria-hidden="true">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div class="check-content">${innerContentHTML}</div>
    `;

    function toggleCard() {
      const nowChecked = !li.classList.contains("is-checked");
      li.classList.toggle("is-checked", nowChecked);
      li.setAttribute("aria-checked", nowChecked ? "true" : "false");
      if (nowChecked) {
        savedState[itemId] = true;
      } else {
        delete savedState[itemId];
      }
      saveState(savedState);
      refreshDashboard();
      updateSidebarStageCounters(savedState);
    }

    li.addEventListener("click", function (e) {
      if (e.target.tagName === "A") return;
      toggleCard();
    });

    li.addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleCard();
      }
    });

    stageCards.push(li);
  });

  const isFullDashboard = currentStageNum === 1 || currentStageNum === 7;

  // Montar a barra de etapas (1 a 7)
  const stagesStripHTML = CHECKLIST_CATALOG.map((st) => {
    const activeClass = st.slug === currentStageSlug ? "active-stage" : "";
    return `
      <a class="stage-pill-link ${activeClass}" id="strip-${st.slug}" href="${st.slug}.html">
        <span class="stage-pill-title">Etapa ${st.num}</span>
        <span class="stage-pill-count" id="strip-count-${st.slug}">0/${st.items.length}</span>
      </a>
    `;
  }).join("");

  // Renderizar o Painel Completo (Etapas 1 e 7) ou Simplificado (Etapas 2 a 6)
  if (isFullDashboard) {
    const headerActionsHTML =
      currentStageNum === 7
        ? `<div class="dashboard-header-actions">
            <button type="button" class="btn-reset-site" id="btn-top-reset-site">
              🔄 Reiniciar Teste (Outro Site)
            </button>
            <button type="button" class="btn-pdf-export" id="btn-export-pdf">
              📄 Exportar Checklist em PDF
            </button>
          </div>`
        : "";

    dashboardMount.innerHTML = `
      <div class="approval-dashboard">
        <div class="active-site-banner" id="active-site-banner"></div>
        <div class="dashboard-top">
          <div class="score-main">
            <div class="score-circle">
              <span class="score-percent" id="overall-percent">0%</span>
              <span class="score-label">Aprovação</span>
            </div>
            <div class="score-details">
              <h2>
                Índice de Aprovação Geral do Site
                <span class="status-pill status-waiting" id="approval-status-badge">Aguardando Avaliação</span>
                <span class="saved-badge">✓ Progresso salvo entre etapas</span>
              </h2>
              <p class="score-subtitle" id="overall-counter-text">
                Calculado considerando todas as 7 etapas do checklist (103 critérios no total).
              </p>
            </div>
          </div>
          ${headerActionsHTML}
        </div>

        <div class="progress-track">
          <div class="progress-fill" id="overall-progress-bar"></div>
        </div>

        <div class="stages-strip">
          ${stagesStripHTML}
        </div>

        <div class="metrics-row">
          <div class="metric-mini">
            <div class="metric-mini-header">
              <span>Etapa Atual (${currentStageNum}/7)</span>
              <span id="stat-stage">0%</span>
            </div>
            <div class="metric-mini-bar">
              <div class="metric-mini-fill" id="bar-stage" style="background:#0d9488;"></div>
            </div>
          </div>
          <div class="metric-mini">
            <div class="metric-mini-header">
              <span>WCAG Nível A</span>
              <span id="stat-a">0%</span>
            </div>
            <div class="metric-mini-bar">
              <div class="metric-mini-fill" id="bar-a" style="background:#3b82f6;"></div>
            </div>
          </div>
          <div class="metric-mini">
            <div class="metric-mini-header">
              <span>WCAG Nível AA</span>
              <span id="stat-aa">0%</span>
            </div>
            <div class="metric-mini-bar">
              <div class="metric-mini-fill" id="bar-aa" style="background:#f59e0b;"></div>
            </div>
          </div>
          <div class="metric-mini">
            <div class="metric-mini-header">
              <span>WCAG Nível AAA</span>
              <span id="stat-aaa">0%</span>
            </div>
            <div class="metric-mini-bar">
              <div class="metric-mini-fill" id="bar-aaa" style="background:#a855f7;"></div>
            </div>
          </div>
          <div class="metric-mini">
            <div class="metric-mini-header">
              <span>Heurísticas Nielsen</span>
              <span id="stat-nielsen">0%</span>
            </div>
            <div class="metric-mini-bar">
              <div class="metric-mini-fill" id="bar-nielsen" style="background:#10b981;"></div>
            </div>
          </div>
        </div>

        <div class="dashboard-controls">
          <div class="filter-group">
            <button type="button" class="filter-btn active" data-filter="ALL">Todos desta Etapa</button>
            <button type="button" class="filter-btn" data-filter="PENDING">Pendentes</button>
            <button type="button" class="filter-btn" data-filter="DONE">Concluídos</button>
          </div>
          <div class="filter-group">
            <button type="button" class="action-btn" id="btn-check-stage">Marcar Etapa Atual</button>
            <button type="button" class="action-btn" id="btn-clear-stage">Limpar Etapa Atual</button>
          </div>
        </div>
      </div>
    `;
  } else {
    dashboardMount.innerHTML = `
      <div class="approval-dashboard compact-dashboard">
        <div class="compact-header">
          <div class="compact-scores">
            <span class="compact-pill-score">Aprovação Geral: <span id="overall-percent">0%</span></span>
            <span class="compact-stage-pill">Etapa ${currentStageNum}: <span id="stat-stage">0/0</span></span>
            <span class="status-pill status-waiting" id="approval-status-badge">Aguardando Avaliação</span>
          </div>
          <span class="saved-badge" id="overall-counter-text">✓ Progresso salvo</span>
        </div>

        <div class="progress-track" style="margin-bottom:0.75rem;">
          <div class="progress-fill" id="overall-progress-bar"></div>
        </div>

        <div class="dashboard-controls">
          <div class="filter-group">
            <button type="button" class="filter-btn active" data-filter="ALL">Todos</button>
            <button type="button" class="filter-btn" data-filter="A">Nível A</button>
            <button type="button" class="filter-btn" data-filter="AA">Nível AA</button>
            <button type="button" class="filter-btn" data-filter="AAA">Nível AAA</button>
            <button type="button" class="filter-btn" data-filter="PENDING">Pendentes</button>
            <button type="button" class="filter-btn" data-filter="DONE">Concluídos</button>
          </div>
          <div class="filter-group">
            <button type="button" class="action-btn" id="btn-check-stage">Marcar Etapa</button>
            <button type="button" class="action-btn" id="btn-clear-stage">Limpar Etapa</button>
          </div>
        </div>
      </div>
    `;
  }

  // Eventos de filtro local da etapa
  let currentFilter = "ALL";
  const filterBtns = dashboardMount.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyStageFilter(currentFilter);
    });
  });

  function applyStageFilter(filter) {
    stageCards.forEach((card) => {
      const checked = card.classList.contains("is-checked");
      const cat = card.dataset.category;
      let show = true;
      if (filter === "A") show = cat === "A";
      else if (filter === "AA") show = cat === "AA";
      else if (filter === "AAA") show = cat === "AAA";
      else if (filter === "PENDING") show = !checked;
      else if (filter === "DONE") show = checked;
      card.style.display = show ? "" : "none";
    });
  }

  // Botões de ação da etapa e global
  document.getElementById("btn-check-stage").addEventListener("click", () => {
    stageCards.forEach((card) => {
      if (card.style.display !== "none") {
        card.classList.add("is-checked");
        card.setAttribute("aria-checked", "true");
        savedState[card.dataset.itemId] = true;
      }
    });
    saveState(savedState);
    refreshDashboard();
    updateSidebarStageCounters(savedState);
  });

  document.getElementById("btn-clear-stage").addEventListener("click", () => {
    stageCards.forEach((card) => {
      card.classList.remove("is-checked");
      card.setAttribute("aria-checked", "false");
      delete savedState[card.dataset.itemId];
    });
    saveState(savedState);
    refreshDashboard();
    updateSidebarStageCounters(savedState);
    applyStageFilter(currentFilter);
  });

  window.resetFullEvaluation = function (goToStage1) {
    if (
      !confirm(
        "Deseja reiniciar o teste para avaliar outro site?\n\nIsso irá zerar todas as marcações das 7 etapas e limpar o nome/URL do site atual."
      )
    ) {
      return;
    }
    Object.keys(savedState).forEach((k) => delete savedState[k]);
    Object.keys(siteInfo).forEach((k) => delete siteInfo[k]);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(SITE_INFO_KEY);
    } catch (e) {}

    if (goToStage1 && currentStageSlug !== "etapa1") {
      window.location.href = "etapa1.html";
      return;
    }

    stageCards.forEach((card) => {
      card.classList.remove("is-checked");
      card.setAttribute("aria-checked", "false");
    });

    const nameIn = document.getElementById("input-site-name");
    const urlIn = document.getElementById("input-site-url");
    const targetIn = document.getElementById("input-wcag-target");
    const techIn = document.getElementById("input-site-tech");
    if (nameIn) nameIn.value = "";
    if (urlIn) urlIn.value = "";
    if (targetIn) targetIn.value = "AA";
    if (techIn) techIn.value = "";

    updateActiveSiteBanner();
    refreshDashboard();
    updateSidebarStageCounters(savedState);
    applyStageFilter(currentFilter);
  };

  const topResetBtn = document.getElementById("btn-top-reset-site");
  if (topResetBtn) {
    topResetBtn.addEventListener("click", () => {
      window.resetFullEvaluation(false);
    });
  }

  const exportPdfBtn = document.getElementById("btn-export-pdf");
  if (exportPdfBtn) {
    exportPdfBtn.addEventListener("click", () => {
      window.exportChecklistPDF();
    });
  }

  // Renderizar formulário de dados do site na Etapa 1
  const siteInfoMount = document.getElementById("site-info-form-mount");
  const siteInfo = loadSiteInfo();

  function updateActiveSiteBanner() {
    const banner = document.getElementById("active-site-banner");
    if (!banner) return;
    const name = (siteInfo.siteName || "").trim();
    const url = (siteInfo.siteUrl || "").trim();
    const target = (siteInfo.wcagTarget || "AA").trim();
    if (name || url) {
      banner.innerHTML = `
        <span>🌐 <strong>Site em Avaliação:</strong> ${escapeHtml(name || "Não informado")} ${
        url ? `• 🔗 <a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(url)}</a>` : ""
      }</span>
        <span>🎯 <strong>Meta WCAG:</strong> Nível ${escapeHtml(target)}</span>
      `;
    } else {
      banner.innerHTML = `
        <span>ℹ️ <strong>Site avaliado ainda não identificado.</strong> Preencha o nome do site e a URL na <a href="etapa1.html">Etapa 1</a> para constar no relatório PDF.</span>
        <span>🎯 <strong>Meta Padrão:</strong> Nível AA</span>
      `;
    }
  }

  if (siteInfoMount) {
    siteInfoMount.innerHTML = `
      <div class="site-info-card">
        <div class="site-info-header">
          <h3>🌐 Identificação do Site Avaliado (Dados do Teste)</h3>
          <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <span class="saved-badge">✓ Salvo no navegador (não perde ao fechar)</span>
            <button type="button" class="btn-reset-site" onclick="window.resetFullEvaluation && window.resetFullEvaluation(false)">
              🔄 Reiniciar para Avaliar Outro Site
            </button>
          </div>
        </div>
        <div class="site-info-grid">
          <div class="site-field">
            <label for="input-site-name">Nome do Site / Sistema</label>
            <input type="text" id="input-site-name" placeholder="Ex.: Portal UnB / Gov.br" value="${escapeHtml(siteInfo.siteName || "")}" />
          </div>
          <div class="site-field">
            <label for="input-site-url">URL Utilizada para Teste</label>
            <input type="url" id="input-site-url" placeholder="Ex.: https://www.unb.br" value="${escapeHtml(siteInfo.siteUrl || "")}" />
          </div>
          <div class="site-field">
            <label for="input-wcag-target">Nível de Conformidade Alvo</label>
            <select id="input-wcag-target">
              <option value="A" ${siteInfo.wcagTarget === "A" ? "selected" : ""}>Nível A (Mínimo)</option>
              <option value="AA" ${!siteInfo.wcagTarget || siteInfo.wcagTarget === "AA" ? "selected" : ""}>Nível AA (Recomendado)</option>
              <option value="AAA" ${siteInfo.wcagTarget === "AAA" ? "selected" : ""}>Nível AAA (Avançado)</option>
            </select>
          </div>
          <div class="site-field">
            <label for="input-site-tech">Navegador / Tecnologias / Avaliador</label>
            <input type="text" id="input-site-tech" placeholder="Ex.: Chrome + NVDA • Grupo 12" value="${escapeHtml(siteInfo.siteTech || "")}" />
          </div>
        </div>
      </div>
    `;

    const bindInput = (id, key) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("input", () => {
        siteInfo[key] = el.value;
        saveSiteInfo(siteInfo);
        updateActiveSiteBanner();
      });
    };

    bindInput("input-site-name", "siteName");
    bindInput("input-site-url", "siteUrl");
    bindInput("input-wcag-target", "wcagTarget");
    bindInput("input-site-tech", "siteTech");
  }

  updateActiveSiteBanner();

  function refreshDashboard() {
    let globalTotal = 0;
    let globalDone = 0;
    const catTotals = { A: 0, AA: 0, AAA: 0, NIELSEN: 0 };
    const catDone = { A: 0, AA: 0, AAA: 0, NIELSEN: 0 };

    CHECKLIST_CATALOG.forEach((st) => {
      let stDone = 0;
      st.items.forEach((item) => {
        globalTotal++;
        const done = savedState[item.id] === true;
        if (done) {
          globalDone++;
          stDone++;
        }
        if (catTotals[item.category] !== undefined) {
          catTotals[item.category]++;
          if (done) catDone[item.category]++;
        }
      });

      // Atualizar pílula da etapa na faixa
      const pillCount = document.getElementById(`strip-count-${st.slug}`);
      const pillLink = document.getElementById(`strip-${st.slug}`);
      if (pillCount) {
        pillCount.textContent = `${stDone}/${st.items.length}${stDone === st.items.length ? " ✓" : ""}`;
      }
      if (pillLink) {
        pillLink.classList.toggle("completed-stage", stDone === st.items.length && st.items.length > 0);
      }

      // Se for a etapa atual, atualizar métrica da etapa
      if (st.slug === currentStageSlug) {
        const stPct = st.items.length > 0 ? Math.round((stDone / st.items.length) * 100) : 0;
        const statStage = document.getElementById("stat-stage");
        const barStage = document.getElementById("bar-stage");
        if (statStage) statStage.textContent = `${stDone}/${st.items.length} (${stPct}%)`;
        if (barStage) barStage.style.width = `${stPct}%`;
      }
    });

    const globalPct = globalTotal > 0 ? Math.round((globalDone / globalTotal) * 100) : 0;
    document.getElementById("overall-percent").textContent = `${globalPct}%`;
    document.getElementById("overall-progress-bar").style.width = `${globalPct}%`;
    document.getElementById("overall-counter-text").textContent = isFullDashboard
      ? `${globalDone} de ${globalTotal} critérios atendidos no total das 7 etapas (${globalTotal - globalDone} pendentes).`
      : `✓ Progresso salvo (${globalDone}/${globalTotal} no total)`;

    const statusBadge = document.getElementById("approval-status-badge");
    statusBadge.className = "status-pill";
    if (globalDone === 0) {
      statusBadge.classList.add("status-waiting");
      statusBadge.textContent = "Aguardando Avaliação";
    } else if (globalPct < 40) {
      statusBadge.classList.add("status-low");
      statusBadge.textContent = "Reprovado • Baixa Conformidade";
    } else if (globalPct < 70) {
      statusBadge.classList.add("status-medium");
      statusBadge.textContent = "Regular • Em Adequação";
    } else if (globalPct < 90) {
      statusBadge.classList.add("status-good");
      statusBadge.textContent = "Bom • Aprovado com Ressalvas";
    } else {
      statusBadge.classList.add("status-excellent");
      statusBadge.textContent = "Excelente • Site Aprovado!";
    }

    setMiniMetric("stat-a", "bar-a", catDone.A, catTotals.A);
    setMiniMetric("stat-aa", "bar-aa", catDone.AA, catTotals.AA);
    setMiniMetric("stat-aaa", "bar-aaa", catDone.AAA, catTotals.AAA);
    setMiniMetric("stat-nielsen", "bar-nielsen", catDone.NIELSEN, catTotals.NIELSEN);
  }

  function setMiniMetric(txtId, barId, done, total) {
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const t = document.getElementById(txtId);
    const b = document.getElementById(barId);
    if (t) t.textContent = `${done}/${total} (${pct}%)`;
    if (b) b.style.width = `${pct}%`;
  }

  refreshDashboard();
}

// Atualiza contadores ao lado de cada Etapa na barra lateral esquerda do MkDocs
function updateSidebarStageCounters(savedState) {
  const navLinks = Array.from(document.querySelectorAll(".md-nav__link"));
  CHECKLIST_CATALOG.forEach((st) => {
    const doneCount = st.items.filter((it) => savedState[it.id] === true).length;
    const totalCount = st.items.length;
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.includes(`${st.slug}.html`)) {
        let badge = link.querySelector(".nav-stage-counter");
        if (!badge) {
          badge = document.createElement("span");
          badge.className = "nav-stage-counter";
          link.appendChild(badge);
        }
        badge.textContent = `${doneCount}/${totalCount}`;
        badge.classList.toggle("done", doneCount === totalCount && totalCount > 0);
      }
    });
  });
}

// Exportador de Relatório Completo em PDF (todas as 7 Etapas)
window.exportChecklistPDF = function () {
  const savedState = loadSavedState();
  const siteInfo = loadSiteInfo();
  let globalTotal = 0;
  let globalDone = 0;
  const catTotals = { A: 0, AA: 0, AAA: 0, NIELSEN: 0, SCOPE: 0 };
  const catDone = { A: 0, AA: 0, AAA: 0, NIELSEN: 0, SCOPE: 0 };

  CHECKLIST_CATALOG.forEach((st) => {
    st.items.forEach((it) => {
      globalTotal++;
      const done = savedState[it.id] === true;
      if (done) globalDone++;
      if (catTotals[it.category] !== undefined) {
        catTotals[it.category]++;
        if (done) catDone[it.category]++;
      }
    });
  });

  const globalPct = globalTotal > 0 ? Math.round((globalDone / globalTotal) * 100) : 0;
  let statusText = "Aguardando Avaliação";
  let statusColor = "#475569";
  if (globalDone > 0 && globalPct < 40) {
    statusText = "Reprovado • Baixa Conformidade";
    statusColor = "#b91c1c";
  } else if (globalPct >= 40 && globalPct < 70) {
    statusText = "Regular • Em Adequação";
    statusColor = "#b45309";
  } else if (globalPct >= 70 && globalPct < 90) {
    statusText = "Bom • Aprovado com Ressalvas";
    statusColor = "#0369a1";
  } else if (globalPct >= 90) {
    statusText = "Excelente • Site Aprovado!";
    statusColor = "#15803d";
  }

  const dateStr = new Date().toLocaleString("pt-BR");

  const stagesHTML = CHECKLIST_CATALOG.map((st) => {
    const stDone = st.items.filter((i) => savedState[i.id] === true).length;
    const stPct = Math.round((stDone / st.items.length) * 100);
    const rows = st.items
      .map((it) => {
        const done = savedState[it.id] === true;
        const badge =
          it.category === "A" || it.category === "AA" || it.category === "AAA"
            ? `<span class="pdf-badge pdf-${it.category.toLowerCase()}">Nível ${it.category}</span> `
            : it.subsection
            ? `<span class="pdf-badge pdf-nielsen">${escapeHtml(it.subsection)}</span> `
            : "";
        return `
        <tr class="${done ? "row-done" : "row-pending"}">
          <td class="col-status">${done ? "✓ Atendido" : "☐ Pendente"}</td>
          <td class="col-text">${badge}${escapeHtml(it.text)}</td>
        </tr>
      `;
      })
      .join("");

    return `
      <div class="stage-block">
        <div class="stage-header">
          <h3>${escapeHtml(st.title)}</h3>
          <span>${stDone} de ${st.items.length} atendidos (${stPct}%)</span>
        </div>
        <table>
          <thead>
            <tr>
              <th style="width:110px;">Status</th>
              <th>Critério Avaliado</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    `;
  }).join("");

  const pct = (d, t) => (t > 0 ? Math.round((d / t) * 100) : 0);

  const reportHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Relatório de Avaliação WCAG e Heurísticas de Nielsen - Grupo 12</title>
  <style>
    @page { size: A4; margin: 14mm; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      line-height: 1.45;
      margin: 0;
      padding: 20px;
      font-size: 12px;
    }
    .no-print-bar {
      background: #1e1b4b;
      color: #fff;
      padding: 12px 18px;
      border-radius: 10px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .no-print-bar button {
      background: #10b981;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 700;
      cursor: pointer;
      font-size: 13px;
    }
    .report-header {
      border-bottom: 2px solid #4f46e5;
      padding-bottom: 12px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .report-header h1 {
      margin: 0 0 4px 0;
      font-size: 18px;
      color: #312e81;
    }
    .report-header p {
      margin: 0;
      color: #64748b;
      font-size: 11px;
    }
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      margin-bottom: 20px;
    }
    .summary-box {
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 10px;
      background: #f8fafc;
    }
    .summary-box.main {
      background: #eef2ff;
      border-color: #6366f1;
    }
    .summary-box .num {
      font-size: 18px;
      font-weight: 800;
      color: #1e293b;
    }
    .summary-box .lbl {
      font-size: 10px;
      text-transform: uppercase;
      color: #64748b;
      font-weight: 700;
    }
    .stage-block {
      margin-bottom: 18px;
    }
    .stage-header {
      background: #f1f5f9;
      padding: 8px 12px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
      border-left: 4px solid #4f46e5;
    }
    .stage-header h3 {
      margin: 0;
      font-size: 13px;
    }
    .stage-header span {
      font-weight: 700;
      font-size: 11px;
      color: #4f46e5;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11px;
    }
    th, td {
      border: 1px solid #e2e8f0;
      padding: 6px 8px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #f8fafc;
      font-weight: 700;
      color: #475569;
    }
    tr.row-done td.col-status {
      color: #15803d;
      font-weight: 700;
      background: #f0fdf4;
    }
    tr.row-pending td.col-status {
      color: #64748b;
    }
    .pdf-badge {
      display: inline-block;
      font-size: 9px;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 4px;
      margin-right: 4px;
      text-transform: uppercase;
    }
    .pdf-a { background: #dbeafe; color: #1d4ed8; }
    .pdf-aa { background: #fef3c7; color: #b45309; }
    .pdf-aaa { background: #f3e8ff; color: #7e22ce; }
    .pdf-nielsen { background: #dcfce7; color: #15803d; }
    @media print {
      .no-print-bar { display: none !important; }
      body { padding: 0; }
      tr { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="no-print-bar">
    <span>📄 <strong>Visualização do Relatório em PDF</strong> — Escolha "Salvar como PDF" na janela de impressão.</span>
    <button onclick="window.print()">🖨️ Salvar / Imprimir PDF Agora</button>
  </div>

  <div class="report-header">
    <div>
      <h1>Relatório de Avaliação de Acessibilidade (WCAG) e Usabilidade (Nielsen)</h1>
      <p>Universidade de Brasília (UnB) • Interação Humano-Computador (IHC) 2026.2 • Grupo 12</p>
      <p style="margin-top:6px;color:#1e293b;font-size:12px;">
        <strong>Site Avaliado:</strong> ${escapeHtml(siteInfo.siteName || "Não informado")} &nbsp;|&nbsp;
        <strong>URL de Teste:</strong> ${escapeHtml(siteInfo.siteUrl || "Não informada")} &nbsp;|&nbsp;
        <strong>Meta WCAG:</strong> Nível ${escapeHtml(siteInfo.wcagTarget || "AA")}
        ${siteInfo.siteTech ? ` &nbsp;|&nbsp; <strong>Ambiente/Avaliador:</strong> ${escapeHtml(siteInfo.siteTech)}` : ""}
      </p>
    </div>
    <div style="text-align:right;">
      <p><strong>Data:</strong> ${dateStr}</p>
      <p style="color:${statusColor};font-weight:700;">${statusText}</p>
    </div>
  </div>

  <div class="summary-grid">
    <div class="summary-box main">
      <div class="lbl">Aprovação Geral</div>
      <div class="num">${globalPct}% (${globalDone}/${globalTotal})</div>
    </div>
    <div class="summary-box">
      <div class="lbl">WCAG Nível A</div>
      <div class="num">${pct(catDone.A, catTotals.A)}% (${catDone.A}/${catTotals.A})</div>
    </div>
    <div class="summary-box">
      <div class="lbl">WCAG Nível AA</div>
      <div class="num">${pct(catDone.AA, catTotals.AA)}% (${catDone.AA}/${catTotals.AA})</div>
    </div>
    <div class="summary-box">
      <div class="lbl">WCAG Nível AAA</div>
      <div class="num">${pct(catDone.AAA, catTotals.AAA)}% (${catDone.AAA}/${catTotals.AAA})</div>
    </div>
    <div class="summary-box">
      <div class="lbl">Heurísticas Nielsen</div>
      <div class="num">${pct(catDone.NIELSEN, catTotals.NIELSEN)}% (${catDone.NIELSEN}/${catTotals.NIELSEN})</div>
    </div>
  </div>

  ${stagesHTML}

  <script>
    window.addEventListener("load", function() {
      setTimeout(function() { window.print(); }, 350);
    });
  </script>
</body>
</html>`;

  const printWin = window.open("", "_blank");
  if (printWin) {
    printWin.document.open();
    printWin.document.write(reportHTML);
    printWin.document.close();
  } else {
    alert("Permita pop-ups para visualizar e salvar o relatório em PDF.");
  }
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
