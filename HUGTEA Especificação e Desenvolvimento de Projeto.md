# **Modelo de Especificação e Desenvolvimento de Projeto de TI**

Abaixo está o texto estruturado do **Documento de Especificação de Projeto (DEP)** para uso imediato em documentações de projetos de software, jogos ou infraestrutura de TI:

# **Documento de Especificação de Projeto (DEP)**

**Projeto:** HUGTEA  
**Código / ID:** PRJ-2026-001  
**Autor / Tech Lead:** Luiza Martins, Laura Alves, Jonathan Correa, Gabriella Ribeiro  
**Gerente de Projetos:** Vinícius Lima  
**Data:** 18/08/2026 | **Versão:** v1.0 | **Status:** Em Desenvolvimento

## **1\. Visão Geral e Objetivos do Projeto**

### **1.1. Contexto e Problema**

### O HUGTEA busca facilitar a rotina e promover mais autonomia e inclusão para pessoas autistas oferecendo uma solução tecnológica acessível e adaptada às suas necessidades.

### **1.2. Objetivos**

* **Objetivo Geral:** Desenvolver um site de acolhimento para pessoas com TEA(Transtorno do Espectro Autista).  
* **Objetivos Específicos:**  
  1. Deixar tudo mais simples e rápido  
  2. Fazer um site leve, que carrega rápido e não trava, mesmo com várias pessoas usando ao mesmo tempo.

### **1.3. Escopo do Projeto**

| Dentro do Escopo (In Scope) | Fora do Escopo (Out of Scope) |
| :---- | :---- |
| • Módulo de Autenticação e Perfil de Usuário | • Aplicativo instalável |
| • Conteúdos atualizados  | • Publicação de fake news/ conteúdos com a veracidade dos fatos não confirmada |
| • Sistema de feedback por e-mail | • Suporte a múltiplos idiomas  |
| . |  |

## **2\. Requisitos do Sistema**

### **2.1. Requisitos Funcionais (RF)**

| ID | Funcionalidade | Descrição / Regra de Negócio | Prioridade |
| :---- | :---- | :---- | :---- |
| **RF-001** | Sistema de login | Login (opcional) via e-mail/senha.  | **Média** |
| **RF-002** | Personalização de Perfil | Atualização de dados cadastrais, foto de perfil (opcional)  e preferências pessoais. | **Média** |
| **RF-003** | Atendimento via e-mail | Os feedbacks ou avaliações escritas dos usuários serão avaliadas e respondidas por um representante escolhido pela equipe. | **Alta** |
| **RF-004** | Exportação de Dados | Emissão de relatórios, feedbacks dos usuários. | **Média** |

### **2.2. Requisitos Não-Funcionais (RNF)**

| ID | Categoria | Métrica / Critério de Aceite |
| :---- | :---- | :---- |
| **RNF-001** | Desempenho | A API deve responder em tempo inferior a 200ms para 95% das requisições. |
| **RNF-002** | Segurança | Criptografia TLS 1.3 em trânsito e armazenamento com algoritmo BCrypt/Argon2. Compliance LGPD. |
| **RNF-003** | Disponibilidade | Disponibilidade mínima de 99.9% (High Availability) com failover automático. |

## **3\. Arquitetura Técnica e Stack Tecnológica**

Plaintext  
\+-----------------------------------------------------------------------+  
|                         ARQUITETURA DE SOLUÇÃO                        |  
\+--------------------------------------------- \--------------------------+  
| \[Frontend Web\]     \-\> React.js / [Next.js](http://Next.js), HTML \+ CSS               |  
| \[Backend API\]      \-\> Node.js (TypeScript)         |  
| \[Database Primary\] \-\> MySQL 8.4 (Relacional)                      |  
| \[Cache & Queue\]    \-\> Redis (Sessões e Filas Assíncronas)            |  
| \[Cloud / Infra\]    \-\> Github Pages / XAMPP (Local)          |  
| \[CI/CD Pipeline\]   \-\> GitHub Actions / Docker Containerization        |  
\+-----------------------------------------------------------------------+

## **4\. Metodologia de Desenvolvimento (Kanban / Agile)**

O projeto utilizará fluxo contínuo com limites de trabalho em progresso (WIP Limits):

> 1. **Fluxo Otimizado para Acessibilidade e Neurodiversidade :** Garantir que nenhuma funcionalidade avance sem passar por testes de acessibilidade e validação de sobrecarga sensorial.  
> 2. **Ready for Dev:** Histórias refinadas com critérios de aceite definidos.  
> 3. **In Progress (WIP Max: 3):** Desenvolvimento ativo das interfaces adaptativas e funcionalidades do site.  
> 4. **Code Review (WIP Max: 2):** Peer review obrigatório.  
> 5. **QA / Testes:** Validação de aceitação e testes automatizados.  
> 6. **Done:** Deploy em produção via pipeline de CI/CD.

> 

## **5\. Matriz de Riscos**

| Risco Identificado | Impacto | Probabilidade | Plano de Mitigação |
| :---- | :---- | :---- | :---- |
| Possíveis falhas de código interno do site. | Alto | Média/Baixa | Observação e correção da equipe desenvolvedora. |
| Gargalo de performance no banco de dados | Médio | Média | Implementar camada de cache com Redis e rotinas de indexação. |
| Vulnerabilidades em dependências | Alto | Baixa | Integrar Snyk / Dependabot no pipeline de CI/CD. |

## **6\. Aprovadores do Documento**

* **Vinícius Lima** — *Líder Técnico / Arquiteto*  
* **Vinícius Lima** — *Gerente de Projeto / PO*