# Kaleb Ramos Advocacia — Website Institucional (advkaleb.com.br)

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/OAB%2FDF-74.275-d5a727?style=flat-square)](https://advkaleb.com.br)

Website institucional moderno, performático e acessível do advogado **Dr. Kaleb dos Santos Ramos** (`OAB/DF 74.275`). O portal foi desenvolvido para atendimento em **Luziânia/GO**, municípios do **Entorno do Distrito Federal** (Valparaíso de Goiás, Cidade Ocidental, Novo Gama, Cristalina, DF) e clientes em todo o território nacional por meio de consultas online.

---

## 📌 Visão Geral e Objetivo

O portal combina alta velocidade de carregamento (exportação 100% estática via SSG), conformidade rigorosa com as diretrizes de publicidade da OAB (Provimento nº 205/2021 do CFOAB), design profissional e ferramentas focadas em conversão ética e experiência do usuário:

- **Advogado Titular:** Dr. Kaleb dos Santos Ramos
- **Inscrição:** OAB/DF 74.275
- **Domínio Oficial:** [advkaleb.com.br](https://advkaleb.com.br)
- **Áreas de Atuação:** Direito Previdenciário (INSS, BPC/LOAS, Concessões e Revisões), Direito de Família e Sucessões, Direito Cível e Contratos, Direito Penal e Demandas Trabalhistas.
- **Localização:** Luziânia/GO, Entorno do DF e atendimento online em todo o Brasil.

---

## 🛠️ Stack Tecnológica

- **Framework:** [Next.js 16.3.3](https://nextjs.org/) (App Router, Turbopack)
- **Biblioteca de Interface:** [React 19](https://react.dev/)
- **Linguagem:** [TypeScript 5.7](https://www.typescriptlang.org/)
- **Estilização e Design System:** [Tailwind CSS v4.3.3](https://tailwindcss.com/) com suporte a variáveis CSS nativas (`@theme inline`), Shadcn UI e ícones via `lucide-react`.
- **Modo de Saída:** Exportação estática pura (`output: 'export'`), gerando páginas HTML, CSS e JavaScript estáticas na pasta `./out`, ideais para hospedagem em CDN sem necessidade de servidor Node.js em produção.
- **Métricas e Telemetria:** `@vercel/analytics` integrado e ativo em ambiente de produção.
- **Segurança:** Content Security Policy (CSP) rigorosa via `<meta http-equiv>`, liberando de forma restritiva os iframes e origens oficiais do Google Calendar e telemetria da Vercel.

---

## 🎨 Identidade Visual e Tipografia Oficial

O projeto reflete fielmente o manual de identidade visual e papel timbrado do escritório:

1. **Tipografia:**
   - **Títulos, Logotipo, Badges e Botões:** Fonte **Poppins** (pesos 400, 500, 600, 700), transmitindo modernidade, precisão e autoridade.
   - **Corpo de Texto, Artigos e Parágrafos:** Fonte **Atkinson Hyperlegible** (pesos 400, 700 e estilos normal/itálico), desenvolvida pelo Braille Institute para máxima legibilidade, clareza e acessibilidade visual.
2. **Paleta de Cores Institucional:**
   - **Midnight Navy / Fundo Primário:** `#010b20` e `#0a1329` — profundidade e sobriedade jurídica.
   - **Dourado Oficial:** `#d5a727` — contraste e requinte.
   - **Degradê Dourado Metálico:** `linear-gradient(135deg, #B8891F 0%, #E3BC4E 50%, #FBE7A1 100%)`.
   - **Bronze Institucional:** `#8F7236`.

---

## 🚀 Funcionalidades e Recursos Implementados

1. **Agendamento Online Integrado (Google Calendar & Meet):**
   - Seção `#agendamento` com iframe responsivo da página oficial de agendamentos do Google Workspace do Dr. Kaleb.
   - Permite que o cliente escolha data e horário diretamente na página para consulta por videoconferência (Google Meet), com sincronização imediata na agenda.
2. **Seção "Como Funciona o Atendimento" em 4 Etapas:**
   - Fluxo didático que orienta o cliente desde o primeiro contato:
     1. *Agendamento ou Contato:* Escolha entre agendamento online no Google Calendar ou conversa rápida no WhatsApp.
     2. *Envio Seguro de Documentos:* Instruções claras para envio de documentos sem complicação.
     3. *Consulta Especializada:* Reunião online via Google Meet ou alinhamento direto.
     4. *Ação e Acompanhamento:* Protocolo imediato e relatórios transparentes de andamento.
3. **FAQ Jurídico Estratégico (Accordion Interativo):**
   - Respostas diretas e esclarecedoras para as dúvidas mais comuns dos clientes (prazos do INSS, benefícios negados, pensão e guarda, honorários contratuais e sigilo profissional).
4. **CTAs Rápidos para WhatsApp com Mensagens Contextualizadas:**
   - Cada card de área de atuação (Previdenciário, Família, Cível, etc.) possui botão direto para o WhatsApp `(61) 98336-5619` com texto pré-configurado e contextualizado para a necessidade do cidadão.
5. **Botão Flutuante (Speed Dial) para Dispositivos Móveis:**
   - Componente flutuante no canto inferior da tela, garantindo acesso imediato ao WhatsApp e ao agendamento de consultas a partir de qualquer seção da página.
6. **SEO Local Estruturado (Schema.org `LegalService`):**
   - Metadados JSON-LD inseridos no cabeçalho contendo identificação profissional (`OAB/DF 74.275`), dados de contato, áreas atendidas (Luziânia, Valparaíso de Goiás, Cidade Ocidental, Novo Gama, Cristalina e DF) e geolocalização para otimização nos mecanismos de busca do Google.
7. **Blog Jurídico Informativo:**
   - Rotas estáticas (`/blog` e `/blog/[slug]`) preparadas com artigos orientativos sobre benefícios do INSS e partilha de bens no divórcio.

---

## 📁 Estrutura de Diretórios

```
advkaleb-main/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Pipeline de CI/CD para GitHub Pages
├── app/
│   ├── blog/                    # Rotas estáticas do blog informativo
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── globals.css              # Variáveis CSS, tema Tailwind v4 e utilitários
│   ├── layout.tsx               # Root Layout, fontes Poppins/Atkinson, CSP e Schema.org
│   └── page.tsx                 # Composição da página principal (Landing Page)
├── components/
│   ├── about.tsx                # Seção sobre o advogado e qualificação profissional
│   ├── appointment-schedule.tsx # Iframe oficial do Google Calendar Appointment
│   ├── contact-cta.tsx          # Seção final de contato e chamada para ação
│   ├── coverage.tsx             # Regiões de atendimento (Luziânia, Entorno e Brasil)
│   ├── faq-section.tsx          # Accordion interativo de perguntas frequentes
│   ├── floating-action.tsx      # Botão flutuante mobile (WhatsApp + Agendamento)
│   ├── hero.tsx                 # Dobra principal com headline e botões de conversão
│   ├── how-it-works.tsx         # Seção didática do fluxo de atendimento em 4 passos
│   ├── practice-areas.tsx       # Cards de atuação jurídica com CTAs personalizados
│   ├── site-footer.tsx          # Rodapé institucional, links e avisos éticos OAB
│   ├── site-header.tsx          # Cabeçalho fixo com navegação e botão de agendamento
│   └── ui/                      # Componentes base Shadcn / Radix / Base UI
├── lib/                         # Utilitários de classe (cn)
├── public/                      # Imagens estáticas, ícones e assets de marca
├── tests/                       # Suíte completa de testes automatizados E2E (Tiers 1-4)
│   ├── e2e_site_audit.py        # Runner principal da auditoria automatizada
│   ├── helpers.py               # Utilitários de asserção, inspeção de DOM e build
│   ├── test_tier1_features.py   # Testes unitários de componentes e funcionalidades
│   ├── test_tier2_boundaries.py # Testes de limites, segurança CSP e sanitização
│   ├── test_tier3_pairwise.py   # Testes de integração cruzada de recursos
│   └── test_tier4_scenarios.py  # Testes de build estático e validação do ./out
├── next.config.mjs              # Configuração do Next.js (output: export, basePath)
├── package.json                 # Dependências e scripts npm/pnpm
├── postcss.config.mjs           # Configuração do PostCSS com Tailwind v4
└── tsconfig.json                # Configuração do TypeScript 5.7
```

---

## 💻 Instruções de Desenvolvimento Local

### Pré-requisitos
- **Node.js:** Versão 20+ ou 24+ LTS (ambiente oficial: Node v24).
- **Gerenciador de Pacotes:** `pnpm` (versão 9+ ou 12+).

### 1. Configurar o Ambiente e Instalar Dependências
```bash
# Caso o Node/pnpm estejam em caminho customizado no sistema local:
export PATH="/home/kaleus/.local/opt/node/bin:$PATH"

# Instalar as dependências do projeto
pnpm install
```

### 2. Iniciar o Servidor de Desenvolvimento
```bash
pnpm dev
```
O servidor estará disponível em: `http://localhost:3000`

---

## 🧪 Compilação e Suíte de Testes Automatizados

### Build de Produção (Exportação Estática)
Para compilar e gerar os artefatos estáticos prontos para produção na pasta `./out`:
```bash
export PATH="/home/kaleus/.local/opt/node/bin:$PATH"
pnpm build
```
O comando executa a compilação com Turbopack, valida os componentes e exporta as páginas estáticas em `./out`.

### Execução da Suíte de Testes E2E (4-Tier Audit)
O projeto conta com uma suíte automatizada em Python cobrindo 4 camadas de testes:
- **Tier 1:** Cobertura de funcionalidades (componentes, formulários, rotas, textos e metadados).
- **Tier 2:** Casos de borda, regras de responsividade, segurança CSP e integridade de links.
- **Tier 3:** Testes cruzados (interação entre agendamento, navegação e botões do WhatsApp).
- **Tier 4:** Auditoria dos arquivos HTML gerados em `./out` (presença de iframe, SEO, Schema.org e CSP).

Para executar toda a suíte:
```bash
python3 tests/e2e_site_audit.py
```

Opções adicionais do executor de testes:
```bash
# Executar apenas um tier específico (ex: Tier 1)
python3 tests/e2e_site_audit.py --tier 1

# Executar sem reconstruir a pasta ./out (caso o pnpm build já tenha sido rodado)
python3 tests/e2e_site_audit.py --skip-build

# Gerar saída estruturada em JSON
python3 tests/e2e_site_audit.py --json
```

---

## 🌐 Guia Completo de Deploy

Como o projeto está configurado para exportação estática (`output: 'export'`), ele pode ser hospedado gratuitamente e com máxima performance em qualquer serviço moderno.

### Opção 1: GitHub Pages (Automatizado via GitHub Actions)
O repositório já inclui o arquivo de workflow pronto em `.github/workflows/deploy.yml`.

1. **Subir o código para o GitHub:**
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/advkaleb.git
   git branch -M main
   git push -u origin main
   ```
2. **Ativar o GitHub Pages:**
   - No GitHub, acesse o repositório e vá em: **Settings** -> **Pages**.
   - Em **Build and deployment > Source**, selecione: **GitHub Actions**.
3. **Observação sobre `NEXT_PUBLIC_BASE_PATH`:**
   - Se o site for publicado em um subdomínio de projeto (ex.: `https://usuario.github.io/advkaleb/`), o workflow automaticamente injeta a variável `NEXT_PUBLIC_BASE_PATH: /advkaleb`.
   - Se você configurar um **domínio personalizado** no GitHub Pages (ex.: `advkaleb.com.br`), basta remover ou deixar a variável `NEXT_PUBLIC_BASE_PATH` em branco no workflow ou no arquivo `next.config.mjs`.

### Opção 2: Vercel (Recomendado para Domínio Próprio)
1. Acesse o painel da [Vercel](https://vercel.com/) e clique em **Add New Project**.
2. Conecte sua conta do GitHub e selecione o repositório `advkaleb`.
3. O framework **Next.js** será detectado automaticamente.
4. Clique em **Deploy**.
5. Para configurar o domínio próprio (`advkaleb.com.br`), acesse **Settings > Domains** na Vercel e aponte os registros DNS (tipo `A` e `CNAME`) conforme as instruções da plataforma.

### Opção 3: Netlify
1. Crie uma nova aplicação no [Netlify](https://www.netlify.com/) conectando o repositório.
2. Defina os seguintes parâmetros de compilação:
   - **Build command:** `pnpm build`
   - **Publish directory:** `out`
3. Conclua o deploy e configure o domínio em **Domain Management**.

### Opção 4: Hospedagem Tradicional / cPanel
Se preferir hospedar em servidores Linux tradicionais (ex.: Apache, Nginx ou cPanel):
1. Execute o build estático localmente:
   ```bash
   pnpm build
   ```
2. Abra o Gerenciador de Arquivos do cPanel (ou conecte via FTP/SFTP).
3. Envie todo o conteúdo presente dentro da pasta `./out` diretamente para o diretório raiz público do seu domínio (geralmente `public_html/` ou `www/`).

---

## 📞 Contatos e Suporte Institucional

- **Advogado:** Dr. Kaleb dos Santos Ramos
- **Inscrição:** OAB/DF 74.275
- **WhatsApp:** [(61) 98336-5619](https://wa.me/5561983365619)
- **E-mail:** [advkaleb@gmail.com](mailto:advkaleb@gmail.com)
- **Website Oficial:** [https://advkaleb.com.br](https://advkaleb.com.br)
- **Instagram:** [@advkaleb](https://instagram.com/advkaleb)
- **Atendimento Presencial:** Luziânia/GO e região do Entorno do DF (mediante agendamento prévio).
- **Atendimento Online:** Realizado via Google Meet para todo o Brasil.
