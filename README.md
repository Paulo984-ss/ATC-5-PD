# Porta de Entrada Fechada?

![Ilustração do projeto: jovem desanimado diante do notebook, ao lado de um robô de IA e de uma vaga júnior substituída](image/ia-image.png)

## 1. Visão geral e preview

**Porta de Entrada Fechada?** é um projeto acadêmico de Front-end e Copilotagem com IA (UNICID, Prof. Diego Marques de Carvalho). Ele investiga como a inteligência artificial muda o primeiro emprego em tecnologia e como a Geração Z vive esse cenário, cruzando:

- **Eixo A (futuro do trabalho):** vagas júnior x sênior, exigência de experiência e emprego de jovens em ocupações expostas à IA.
- **Eixo B (socioemocional):** facetas críticas (burnout, ansiedade) e positivas (adaptabilidade, saúde mental, preferência por progresso constante) da Geração Z.

**Site publicado (GitHub Pages):** https://paulo984-ss.github.io/ATC-5-PD/

**Status:** em finalização. O link acima só funciona depois de ativar o Pages (Settings > Pages > Deploy from a branch > `main` > `/ (root)`).

Páginas: **Cenário** (`index.html`), **Dados**, **Simulador**, **Debate** e **Fontes**.

## 2. Estrutura de arquivos e diretórios

```text
ATC-5-PD/
├── index.html
├── Dados.html
├── Simulador.html
├── Debate.html
├── Fontes.html
├── css/
│   └── style.css          # Design System (variáveis :root), Grid, Flexbox, animações
├── js/
│   ├── tema.js            # tema claro/escuro com localStorage
│   ├── script.js          # gráficos (Chart.js)
│   └── simulador.js       # microaplicação interativa
├── image/
│   └── ia-image.png
├── AUDITORIA_IA.md        # registro de auditoria de IA (prompt logbook)
├── README.md
├── LICENSE
└── .gitignore
```

## 3. Arquitetura de software e contratos de dados

### Componentes da interface

| Componente | Onde | Função |
|---|---|---|
| Navbar responsiva (Bootstrap) | todas as páginas | navegação e menu hambúrguer colapsável |
| Alternância de tema | `tema.js` | salva `light` ou `dark` em `localStorage` e dispara o evento `tema-alterado` |
| Cards de indicadores | `Dados.html` | três números-síntese |
| Gráficos | `Dados.html` + `script.js` | quatro gráficos Chart.js com `role="img"` e `aria-label` |
| Simulador | `Simulador.html` + `simulador.js` | diagnóstico de preparo técnico e bem-estar |
| Accordion | `Debate.html` | os dois lados do debate e o eixo socioemocional |

### Contrato de dados dos gráficos (`js/script.js`)

```json
{
  "graficoVagas": {
    "fonte": "Indeed Hiring Lab (30/07/2025)",
    "labels": ["Júnior / padrão", "Sênior / gerência"],
    "data": [34, 19],
    "unidade": "% de queda em fev/2025 vs. fev/2020"
  },
  "graficoExperiencia": {
    "fonte": "Indeed Hiring Lab (30/07/2025)",
    "labels": ["2º tri 2022", "2º tri 2025"],
    "data": [37, 42],
    "unidade": "% das vagas de tecnologia que pedem 5+ anos"
  },
  "graficoJovens": {
    "fonte": "Stanford Digital Economy Lab (ago/2025 e revisão ago/2026)",
    "labels": ["Estudo de 2025", "Atualização de 2026"],
    "data": [13, 19],
    "unidade": "% de diferença relativa no emprego, jovens de 22 a 25 anos",
    "ressalva": "métodos diferentes; não comparar diretamente"
  },
  "graficoGeracaoZ": {
    "fonte": "Deloitte Global Gen Z and Millennial Survey 2026",
    "labels": ["Usam IA no trabalho diário", "Saúde mental boa ou ótima", "Sentem-se esgotados (burnout)", "Ansiosos ou estressados quase sempre"],
    "data": [74, 63, 48, 34],
    "unidade": "% dos respondentes"
  }
}
```

### Contrato de dados do simulador (`js/simulador.js`)

Entrada (valores lidos do formulário):

```json
{
  "horas": "0 a 30 (horas de estudo por semana)",
  "projetos": "0 | 10 | 16 | 20",
  "usoIa": "5 | 15 | 25",
  "experiencia": "0 | 8 | 20 | 30",
  "ansiedade": "1 a 5",
  "descanso": "0 a 7 (dias sem tela de estudo)"
}
```

Saída (calculada em `simulador.js`):

```json
{
  "tecnica": "round(horas/30*25 + projetos + usoIa + experiencia), de 0 a 100",
  "bemEstar": "round((5 - ansiedade)/4*60 + min(descanso,3)/3*40), de 0 a 100",
  "faixa": "Alta (>= 75) | Média (>= 45) | Baixa (< 45)",
  "recomendacoes": ["lista de textos conforme as respostas"]
}
```

O Eixo B é uma autoavaliação simples. Ele **não usa escala psicológica validada** e não substitui avaliação profissional.

Dependências e CDN

| Biblioteca | Versão | Origem | Uso |
|---|---|---|---|
| Bootstrap (CSS e JS Bundle) | 5.3.3 | jsDelivr | grid de 12 colunas, navbar, cards, accordion, badges, temas |
| Chart.js | 4.4.7 (UMD) | jsDelivr | gráficos |
| Google Fonts | Inter 400/500 e Space Grotesk 500/700 | fonts.googleapis.com | tipografia |

**Justificativa de compatibilidade cross-browser:** todas as bibliotecas são entregues por CDN com versão fixa, o que garante o mesmo comportamento em Chrome, Firefox e Safari. O Bootstrap 5.3 e o Chart.js 4 não dependem de jQuery nem de polyfills. A tipografia tem fonte de reserva (`system-ui`), e o `backdrop-filter` do menu tem prefixo `-webkit-` para o Safari. Todos os caminhos de arquivos são relativos, o que evita erros 404 no GitHub Pages.


 Uso de IA

- **Recursos avançados (gráficos, simulador, tema):** assistência de IA, registrada com prompt, resposta bruta, auditoria e refatoração em [`AUDITORIA_IA.md`](AUDITORIA_IA.md).
- **Revisão geral (nov/2026):** foi usado o Claude (Anthropic) para conferir o projeto frente às instruções e corrigir pendências, incluindo arquivos da Parte I. Isso está declarado em `AUDITORIA_IA.md`.
- A ilustração da página inicial parece ter sido gerada por IA. (Chat.gpt)

 Acessibilidade e testes

- HTML5 semântico (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`), um `<h1>` por página e link para pular ao conteúdo.
- Gráficos com `role="img"` e `aria-label`; foco visível; `prefers-reduced-motion` respeitado.
- Checklist de entrega: testar o site publicado em Chrome, Firefox, Safari e no celular, e abrir o Console (F12) para confirmar que não há erros.

Referências

- Indeed Hiring Lab. *Experience Requirements Have Tightened Amid the Tech Hiring Freeze* (30/07/2025). https://www.hiringlab.org/2025/07/30/experience-requirements-have-tightened-amid-the-tech-hiring-freeze/
- Brynjolfsson, E.; Chandar, B.; Chen, R. *Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence*. Stanford Digital Economy Lab (ago/2025; revisado em ago/2026). https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/
- Deloitte Global. *2026 Gen Z and Millennial Survey*. https://www.deloitte.com/content/dam/assets-shared/docs/campaigns/2026/2026-genz-millennial-survey.pdf
- Bootstrap 5.3: https://getbootstrap.com/docs/5.3/ · Chart.js: https://www.chartjs.org/docs/
