# 🤗 HUGTEA

> **Site de acolhimento para pessoas com TEA (Transtorno do Espectro Autista)**

O HUGTEA é um projeto de TCC que busca facilitar a rotina e promover mais autonomia e inclusão para pessoas autistas, oferecendo uma solução tecnológica acessível e adaptada às suas necessidades.

## 🌟 Funcionalidades

- **📚 Informação Confiável** — Conteúdos verificados sobre TEA (O que é, características, níveis, direitos)
- **🛠️ Recursos e Ferramentas** — Ferramentas de organização, bem-estar e habilidades sociais
- **🫁 Exercício de Respiração** — Ferramenta interativa para momentos de ansiedade
- **👤 Sistema de Login/Cadastro** — Autenticação opcional via e-mail/senha (RF-001)
- **✏️ Personalização de Perfil** — Atualização de dados, foto e preferências (RF-002)
- **📧 Atendimento via E-mail** — Formulário de contato com validação (RF-003)
- **📥 Exportação de Dados** — Download dos dados em JSON, conforme LGPD (RF-004)
- **♿ Acessibilidade Total** — Alto contraste, texto grande, redução de animações

## 📁 Estrutura do Projeto

```
HUGTEA/
├── index.html          # Página inicial (Home)
├── sobre-tea.html      # Informações sobre o TEA
├── recursos.html       # Recursos e ferramentas
├── contato.html        # Formulário de contato/feedback
├── login.html          # Página de login
├── cadastro.html       # Página de cadastro
├── perfil.html         # Gerenciamento de perfil
├── css/
│   └── style.css       # Design system e estilos globais
├── js/
│   └── main.js         # JavaScript global (navbar, acessibilidade, etc)
└── img/
    ├── hero.jpg         # Ilustração do hero (home)
    ├── about-tea.jpg    # Ilustração sobre TEA
    └── resources.jpg    # Ilustração de recursos
```

## 🎨 Design

- **Paleta:** Lavanda suave, turquesa, rosa e amarelo acolhedor
- **Tipografia:** Nunito (display) + Inter (body)
- **Princípios:** Sem sobrecarga sensorial, cores suaves, animações leves e opcionais
- **Responsivo:** Mobile-first, adaptado para todas as telas
- **Acessibilidade:** Skip link, ARIA labels, widget de acessibilidade global

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- JavaScript Vanilla (ES6+)
- Google Fonts
- LocalStorage (simulação de autenticação)

## 👥 Equipe

| Nome | Papel |
|------|-------|
| **Luiza Martins** | Tech Lead / Desenvolvedora |
| **Laura Alves** | Desenvolvedora |
| **Jonathan Correa** | Desenvolvedor |
| **Gabriella Ribeiro** | Desenvolvedora |
| **Vinícius Lima** | Gerente de Projetos / Arquiteto |

## 📋 Requisitos Atendidos

| ID | Funcionalidade | Status |
|----|---------------|--------|
| RF-001 | Sistema de Login | ✅ Implementado |
| RF-002 | Personalização de Perfil | ✅ Implementado |
| RF-003 | Atendimento via E-mail | ✅ Implementado |
| RF-004 | Exportação de Dados | ✅ Implementado |
| RNF-002 | Compliance LGPD | ✅ Implementado |

## 🚀 Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Ou use um servidor local:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve .
   ```

## 📄 Licença

Projeto acadêmico — ETEC 2026

---

*Feito com 💜 pela equipe HUGTEA*
