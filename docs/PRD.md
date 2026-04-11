# PRD , EscopoCerto ✅

> "O que o cliente espera é o que será entregue."

**Versão:** 1.0  
**Data:** Abril 2026  
**Autor:** Eduardo de Castro Fischer  
**Status:** Em desenvolvimento  

---

## 1. Visão do Produto

### 1.1 Problema Central

Software houses e consultorias de tecnologia enfrentam um problema recorrente e custoso: o gap entre o que o cliente descreveu na reunião comercial e o que o time técnico entendeu e desenvolveu.

Esse desalinhamento acontece porque o processo de captura de requisitos é informal, dependente da memória e da interpretação do comercial, sem padronização, sem registro estruturado e sem validação técnica antes do projeto começar. O resultado é retrabalho, insatisfação do cliente, estouros de prazo e perda de margem.

Além disso, a geração de propostas técnicas é lenta. O comercial sai da reunião com o cliente, liga para o tech lead, aguarda análise, recebe um número de horas e custo dias depois. Nesse intervalo, o cliente já pode ter fechado com outro fornecedor.

### 1.2 Solução Proposta

O EscopoCerto é uma plataforma web que permite ao comercial registrar o briefing do cliente em linguagem natural, diretamente durante ou após a reunião. A partir desse briefing, a IA, alimentada por uma base de conhecimento real de projetos anteriores via RAG, gera automaticamente um escopo preliminar com estimativa de squad, horas e custo.

O escopo gerado é revisado pelo comercial e enviado ao supervisor técnico para aprovação via link seguro e tokenizado. Todo o processo é registrado, versionado e auditável.

O resultado é um processo comercial mais rápido, mais padronizado e com muito menos espaço para interpretações divergentes.

### 1.3 Lema e Posicionamento

> "O que o cliente espera é o que será entregue."

O EscopoCerto não é uma ferramenta de geração de propostas genéricas. É um sistema de alinhamento entre comercial e técnico, onde a IA atua como ponte entre a linguagem do cliente e a linguagem do time de desenvolvimento.

### 1.4 Público-Alvo

Software houses, consultorias de tecnologia e agências digitais com times comerciais ativos e squads de desenvolvimento internos. O sistema é especialmente relevante para empresas que atendem múltiplos clientes simultaneamente e precisam padronizar e acelerar o processo de escopo sem perder qualidade técnica.

### 1.5 Métricas de Sucesso

| Métrica | Descrição |
|---|---|
| Tempo de geração de escopo | Redução de dias para minutos |
| Taxa de retrabalho por gap de escopo | Redução estimada de 40% |
| Tempo de aprovação pelo supervisor | Redução por processo assíncrono |
| Briefings registrados por semana | Volume de uso da plataforma |
| Taxa de aprovação na primeira versão | Qualidade da geração da IA |

## 2. Personas

### 2.1 Persona 1, O Comercial

**Nome fictício:** Carlos Mendes  
**Cargo:** Executivo de Contas  
**Idade:** 32 anos  

**Contexto:**  
Carlos é o ponto de contato entre a software house e os clientes. Ele conduz reuniões de levantamento, entende o problema do cliente e precisa transformar essa conversa em algo concreto para o time técnico. Não tem formação técnica aprofundada, mas conhece bem o portfólio de serviços da empresa.

**Dores:**  
- Depende do tech lead para gerar qualquer estimativa, o que atrasa a proposta
- Não tem um processo padronizado para registrar o que o cliente pediu
- Já perdeu negócios porque a proposta demorou dias para chegar
- Fica sem resposta quando o cliente pergunta "quanto vai custar e quanto tempo leva?"

**O que ele precisa:**  
Registrar o briefing rapidamente, receber uma estimativa preliminar na hora e ter algo concreto para apresentar ao supervisor sem depender de uma reunião técnica imediata.

**Como usa o EscopoCerto:**  
Durante ou logo após a reunião com o cliente, abre o sistema, preenche o briefing em linguagem natural e aguarda o escopo gerado pela IA. Revisa, ajusta se necessário, e envia para aprovação do supervisor com um clique.

---

### 2.2 Persona 2, O Supervisor Técnico

**Nome fictício:** Marcela Souza  
**Cargo:** Tech Lead / Gerente de Projetos  
**Idade:** 35 anos  

**Contexto:**  
Marcela é responsável por validar a viabilidade técnica das propostas antes de elas chegarem ao cliente. Ela conhece a capacidade dos squads, as tecnologias disponíveis e os projetos em andamento. Seu tempo é escasso e ela odeia ser interrompida para análises que poderiam ser assíncronas.

**Dores:**  
- Recebe pedidos de estimativa por WhatsApp, e-mail e reunião ao mesmo tempo, sem padronização
- Não tem histórico centralizado das propostas que já avaliou
- Às vezes aprova algo sem todas as informações necessárias porque o comercial não registrou direito

**O que ela precisa:**  
Receber um resumo estruturado e completo do briefing, com escopo e estimativa já gerados, para avaliar, ajustar se necessário e aprovar ou recusar de forma rápida e rastreável.

**Como usa o EscopoCerto:**  
Recebe um e-mail com link seguro, acessa a tela de aprovação, visualiza o escopo gerado pela IA, adiciona comentário se precisar ajustar, e registra sua decisão. Tudo sem precisar entrar no sistema com login próprio.

---

### 2.3 Persona 3, O Cliente Final

**Nome fictício:** Roberto Alves  
**Cargo:** Diretor de Operações  
**Idade:** 44 anos  

**Contexto:**  
Roberto não usa o EscopoCerto diretamente. Ele é o motivo pelo qual o sistema existe. É ele quem descreveu o problema para o Carlos na reunião, e é a expectativa dele que o sistema precisa capturar com precisão.

**Relevância para o produto:**  
O sucesso do EscopoCerto é medido pela distância entre o que Roberto descreveu e o que foi desenvolvido. Quanto menor esse gap, mais o sistema está cumprindo seu propósito.

**Não usa o sistema, mas impacta:**  
- A qualidade do briefing que o Carlos registra
- O nível de detalhe que a IA consegue processar
- A satisfação final com o projeto entregue