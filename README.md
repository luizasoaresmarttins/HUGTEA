# 🤗 HUGTEA

> **Site de acolhimento e inclusão para pessoas com TEA (Transtorno do Espectro Autista)**

O **HUGTEA** (Projeto TCC ETEC 2026) busca facilitar a rotina e promover mais autonomia e inclusão para pessoas autistas, oferecendo uma solução tecnológica acessível e adaptada às suas necessidades sensoriais e funcionais.

🌐 **Acesse o site:** [https://luizasoaresmarttins.github.io/HUGTEA/](https://luizasoaresmarttins.github.io/HUGTEA/)

---

## 🌟 Funcionalidades Principais

- **📚 Conteúdo Educativo e Confiável:** Informações sobre o que é o TEA, características, níveis de suporte, direitos e desmistificação de mitos.
- **🛠️ Ferramentas Práticas e Recursos:** Dicas de organização de rotina, desenvolvimento de habilidades sociais e bem-estar (incluindo uma ferramenta interativa de respiração guiada).
- **👤 Sistema de Perfil (Opcional):** Autenticação e personalização do perfil de usuário com opções de acessibilidade e gestão de dados (RF-001, RF-002).
- **📧 Suporte e Feedback:** Formulário de contato validado para atendimento humanizado direto com a equipe (RF-003).
- **♿ Acessibilidade Integrada:** Design pensado para pessoas neurodivergentes (cores suaves, pouco ruído visual) e um widget de acessibilidade (Alto Contraste, Fontes Maiores, Redução de Movimento).
- **📥 Privacidade e Dados (LGPD):** Opção para exportação de dados do usuário no formato JSON diretamente do painel de perfil (RF-004).

---

## 💻 Tecnologias e Dependências

O HUGTEA foi desenvolvido com foco na performance, acessibilidade e simplicidade, dispensando frameworks pesados em sua versão inicial para garantir carregamento instantâneo.

### **Core Stack (Frontend)**
- **HTML5:** Estrutura semântica focada em acessibilidade (ARIA labels).
- **CSS3 Vanilla:** 
  - Variáveis CSS (Design Tokens) para padronização de paleta, tipografia e espaçamento.
  - Media Queries para layout 100% responsivo (Mobile First).
  - Animações baseadas no estado de preferência do usuário (`prefers-reduced-motion`).
- **JavaScript Vanilla (ES6+):** 
  - Lógica de interação da UI (Menu hamburger, Toasts, navegação).
  - Intersection Observer API para animações fluidas baseadas em scroll.
  - `localStorage` API para armazenamento local de preferências de acessibilidade e simulação de estados de sessão de usuário.

### **Dependências Externas (CDNs)**
- **Google Fonts:**
  - `Inter` (para textos gerais, alta legibilidade).
  - `Nunito` (para títulos amigáveis e arredondados).

*Nota: O projeto não possui dependências de pacotes via npm (`node_modules`) nesta fase arquitetural, visando simplicidade para hospedagem estática pura.*

---

## 📁 Estrutura de Diretórios

```text
HUGTEA/
├── index.html            # Página inicial (Home)
├── sobre-tea.html        # Página educativa e informativa sobre o espectro
├── recursos.html         # Painel de recursos, dicas de rotina e relaxamento
├── contato.html          # Central de atendimento e dúvidas (FAQ)
├── login.html            # Acesso à conta
├── cadastro.html         # Criação de conta de usuário
├── perfil.html           # Gestão de dados, preferências e segurança
├── css/
│   └── style.css         # Design System, variáveis e estilos globais
├── js/
│   └── main.js           # Lógica principal e widget de acessibilidade
└── img/                  # Ilustrações otimizadas do projeto
    ├── hero.jpg
    ├── about-tea.jpg
    └── resources.jpg
```

---

## 🚀 Como Rodar o Projeto Localmente

Como o projeto é um site estático, ele não requer servidor de backend ou banco de dados para ser visualizado.

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/hugtea.git
   ```
2. **Navegue até a pasta do projeto:**
   ```bash
   cd hugtea/HUGTEA
   ```
3. **Execute:**
   Você pode simplesmente dar dois cliques no arquivo `index.html` para abrir no navegador.
   
   *Para a melhor experiência e para evitar bloqueios de CORS ao navegar localmente, recomendamos usar um servidor local:*
   - Se possuir **Python** instalado:
     ```bash
     python -m http.server 8000
     ```
   - Se possuir **Node.js** (npm) instalado:
     ```bash
     npx serve .
     ```
   - Ou utilize a extensão **Live Server** no VS Code.

---

## 🌐 Como Realizar o Deploy (Publicação)

A maneira mais simples, rápida e gratuita de hospedar este projeto é através do **GitHub Pages**, já que ele consiste puramente em arquivos estáticos.

### **Deploy via GitHub Pages**
1. Faça upload/push do código para um repositório público (ou privado em contas PRO) no seu GitHub.
2. Acesse o repositório no GitHub.
3. Clique na aba **Settings** (Configurações).
4. No menu lateral esquerdo, clique em **Pages**.
5. Em **Build and deployment**:
   - **Source:** Selecione `Deploy from a branch`.
   - **Branch:** Selecione `main` (ou `master`) e a pasta `/ (root)`.
6. Clique em **Save**.
7. Aguarde 1 a 2 minutos. O GitHub fornecerá um link semelhante a: `https://seu-usuario.github.io/hugtea/`.
8. O seu site já estará no ar e disponível publicamente!

### **Alternativas de Hospedagem Estática**
- **Vercel / Netlify:** Basta conectar a sua conta do GitHub na plataforma e importar o repositório. O deploy ocorre automaticamente em segundos sem necessidade de configurações extras.

---

## 👥 Equipe do Projeto

| Nome | Função |
|------|-------|
| **Luiza Martins** | Desenvolvedora / Tech Lead |
| **Laura Alves** | Desenvolvedora |
| **Jonathan Correa** | Desenvolvedor |
| **Gabriella Ribeiro** | Desenvolvedora |
| **Vinícius Lima** | Gerente de Projetos / PO |

---

<p align="center">
  <i>Projeto desenvolvido para o TCC da ETEC - 2026<br>Feito com 💜 para promover a inclusão.</i>
</p>
