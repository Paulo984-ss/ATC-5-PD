# Auditoria de IA

## Ficha 1 — Criação dos gráficos com Chart.js

### 1. Prompt completo e ferramenta utilizada
**Ferramenta:** ChatGPT

**Prompt:**
"Crie gráficos usando Chart.js para apresentar dados sobre vagas
júnior de tecnologia e exigência de experiência."

### 2. Código bruto devolvido pela IA
```html
<section id="dados" class="section-card">

    <h2>Dados</h2>
    <p>O que os números dizem sobre o primeiro emprego na era da IA.</p>

    <!-- Indicadores principais -->
    <div class="row g-3 mb-3">

        <div class="col-12 col-md-4">
            <div class="card card-dado h-100">
                <div class="card-body text-center">
                    <h3 class="numero-dado">34%</h3>
                    <p>queda nas vagas júnior de tecnologia</p>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-4">
            <div class="card card-dado h-100">
                <div class="card-body text-center">
                    <h3 class="numero-dado">19%</h3>
                    <p>diferença no emprego de jovens em áreas expostas à IA</p>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-4">
            <div class="card card-dado h-100">
                <div class="card-body text-center">
                    <h3 class="numero-dado">42%</h3>
                    <p>das vagas de tecnologia exigiam 5+ anos de experiência</p>
                </div>
            </div>
        </div>

    </div>

    <!-- Gráficos -->
    <div class="row g-3">

        <div class="col-12 col-lg-6">
            <div class="card card-grafico h-100">
                <div class="card-body">
                    <h5>Vagas júnior vs. sênior</h5>
                    <canvas id="graficoVagas"></canvas>
                    <small class="fonte-grafico">
                        Fonte: Indeed Hiring Lab, 2025.
                    </small>
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-6">
            <div class="card card-grafico h-100">
                <div class="card-body">
                    <h5>Exigência de experiência</h5>
                    <canvas id="graficoExperiencia"></canvas>
                    <small class="fonte-grafico">
                        Fonte: Indeed Hiring Lab, 2025.
                    </small>
                </div>
            </div>
        </div>

    </div>

    <p class="nota-dados mt-3">
        Dados dos Estados Unidos. Os estudos mostram tendências e associações;
        não comprovam que a IA seja a única causa das mudanças.
    </p>

</section>

```

```css
/* Cards dos números */
.card-dado,
.card-grafico {
    background-color: #1b1b1b;
    color: #e5e7eb;
    border: 1px solid #343434;
    border-radius: 12px;
}

.card-dado .card-body {
    padding: 15px;
}

.numero-dado {
    color: #60a5fa;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 4px;
}

.card-dado p {
    color: #c4c4c4;
    margin-bottom: 0;
    font-size: 0.9rem;
}

/* Cards dos gráficos */
.card-grafico .card-body {
    padding: 15px;
}

.card-grafico h5 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 15px;
}

.card-grafico canvas {
    width: 100% !important;
    height: 190px !important;
}

.fonte-grafico {
    display: block;
    color: #929292;
    font-size: 0.75rem;
    margin-top: 10px;
}

.nota-dados {
    color: #a3a3a3;
    font-size: 0.8rem;
}

```

```javascript
// Configuração geral dos gráficos
Chart.defaults.font.family = "Inter, sans-serif";
Chart.defaults.color = "#c4c4c4";

// Gráfico 1: queda nas vagas de tecnologia
const elementoVagas = document.getElementById("graficoVagas");

new Chart(elementoVagas, {
    type: "bar",

    data: {
        labels: ["Júnior / padrão", "Sênior / gerência"],

        datasets: [{
            data: [34, 19],
            backgroundColor: ["#2563eb", "#60a5fa"],
            borderRadius: 6,
            barThickness: 35
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            },

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.raw + "% de queda nas vagas";
                    }
                }
            }
        },

        scales: {
            x: {
                grid: {
                    display: false
                }
            },

            y: {
                beginAtZero: true,
                max: 40,
                ticks: {
                    callback: function(value) {
                        return value + "%";
                    }
                },
                grid: {
                    color: "#333333"
                }
            }
        }
    }
});


// Gráfico 2: aumento nas exigências de experiência
const elementoExperiencia = document.getElementById("graficoExperiencia");

new Chart(elementoExperiencia, {
    type: "line",

    data: {
        labels: ["2022", "2025"],

        datasets: [{
            label: "Vagas que exigem 5+ anos",
            data: [37, 42],
            borderColor: "#60a5fa",
            backgroundColor: "#2563eb",
            pointBackgroundColor: "#60a5fa",
            pointRadius: 6,
            borderWidth: 3,
            tension: 0.3
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            },

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.raw + "% das vagas";
                    }
                }
            }
        },

        scales: {
            x: {
                grid: {
                    display: false
                }
            },

            y: {
                beginAtZero: true,
                max: 50,
                ticks: {
                    callback: function(value) {
                        return value + "%";
                    }
                },
                grid: {
                    color: "#333333"
                }
            }
        }
    }
});
```


### 3. Auditoria crítica da dupla (diagnóstico técnico de falhas)

Verificação feita em nov/2026, comparando o código bruto com o código final do projeto e os números com as fontes originais.

| # | Falha ou risco encontrado no código da IA | Gravidade |
|---|---|---|
| 1 | **Dados sem origem no prompt.** O prompt não trazia números; a IA escolheu 34, 19, 37 e 42 e atribuiu a "Indeed Hiring Lab, 2025". Conferimos no artigo do Indeed Hiring Lab (30/07/2025): os valores existem, mas 34% e 19% são a queda das vagas de **fev/2025 frente a fev/2020** e 37% para 42% é de **2º tri/2022 a 2º tri/2025**. O código bruto não informava essas bases de comparação, o que induz a erro. | Alta |
| 2 | **Sem verificação de elemento.** `document.getElementById(...)` seguido de `new Chart(...)` quebra com erro no Console em qualquer página que não tenha o `<canvas>`. | Alta |
| 3 | **Acessibilidade ignorada.** Os `<canvas>` não tinham `role="img"`, `aria-label` nem texto alternativo (WCAG 1.1.1). Os números dos cards usavam `<h3>`, o que bagunça a hierarquia de cabeçalhos. | Média |
| 4 | **Altura forçada com `!important`** (`.card-grafico canvas { height: 190px !important }`), em conflito com `maintainAspectRatio: false`. A forma recomendada pela documentação do Chart.js é um contêiner com `position: relative` e altura definida. | Média |
| 5 | **Código duplicado.** A função `value + "%"` e as opções de `scales` e `tooltip` se repetem em cada gráfico. | Média |
| 6 | **Só funciona no tema escuro.** Cores fixas (`#c4c4c4` no texto, `#333333` na grade) ficam ilegíveis no tema claro, e o projeto tem alternância de tema. | Média |
| 7 | **Resposta incompleta e misturada.** A IA entregou HTML, CSS e JS no mesmo bloco, não incluiu o `<script>` do Chart.js e não fixou versão da biblioteca. | Baixa |
| 8 | **Dataset sem `label` no gráfico de barras**, o que prejudica leitores de tela e tooltips. | Baixa |

### 4. Refatoração manual e intervenção da dupla

**Código final:** `js/script.js`, `Dados.html` e `css/style.css`.

Trecho principal do código refatorado:

```javascript
function formatarPorcentagem(valor) {
    return valor + "%";
}

function opcoes(sufixo, max, horizontal) {
    const eixoValor = {
        beginAtZero: true,
        ticks: { callback: formatarPorcentagem },
        grid: { color: corGrade() }
    };
    if (max) { eixoValor.max = max; }
    const eixoCategoria = { grid: { display: false } };
    return {
        indexAxis: horizontal ? "y" : "x",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (contexto) => contexto.raw + sufixo } }
        },
        scales: horizontal ? { x: eixoValor, y: eixoCategoria } : { x: eixoCategoria, y: eixoValor }
    };
}

function criarGrafico(idCanvas, configuracao) {
    const elemento = document.getElementById(idCanvas);
    if (elemento) { graficos.push(new Chart(elemento, configuracao)); }
}
```

| Falha | Correção e justificativa |
|---|---|
| 1 | Conferimos cada número na fonte original. Rótulos e legendas agora trazem a base de comparação ("fev/2025 vs. fev/2020", "2º tri 2022" e "2º tri 2025"), e cada gráfico tem `<figcaption>` com a fonte. Aprendizado: números de IA precisam ser verificados na fonte. |
| 2 | `criarGrafico()` só cria o gráfico se o elemento existir, e todo o script é protegido por `typeof Chart !== "undefined"`. Assim o mesmo arquivo funciona mesmo se a CDN falhar. |
| 3 | Cada `<canvas>` ganhou `role="img"` e `aria-label` descritivo, dentro de uma `<figure>`. Os números dos cards viraram `<p class="numero-dado">`. |
| 4 | Criamos `.grafico-container` (altura em CSS, `position: relative`) e removemos o `!important`. |
| 5 | Criamos `formatarPorcentagem()` e `opcoes()`, reutilizadas pelos quatro gráficos. |
| 6 | `corTexto()` e `corGrade()` leem o tema atual, e `tema.js` dispara o evento `tema-alterado`, que atualiza os gráficos. |
| 7 | Fixamos `chart.js@4.4.7` na CDN e separamos HTML, CSS e JS em arquivos próprios. |
| 8 | Todos os datasets têm `label`. |

Além disso, a dupla acrescentou o **gráfico 3** (Stanford) e o **gráfico 4** (Deloitte, eixo socioemocional), que não vieram da IA.

---

## Registro de atualizações e correções do projeto

> Esta seção reúne o que já estava no seu registro, organizado e com os blocos de código fechados.

### O que foi feito nesta atualização

- **Simulador de empregabilidade júnior** (`Simulador.html` + `js/simulador.js`): formulário com dois eixos, preparo para o mercado (horas de estudo, projetos no GitHub, uso de IA, experiência prática) e dimensão socioemocional (comparação com a IA e dias de descanso). O resultado mostra duas pontuações de 0 a 100 com faixa (baixa, média ou alta) e recomendações personalizadas.
- **Página de Dados** (`Dados.html`): cartões com os principais números e gráficos feitos com Chart.js.
- **Modo claro e escuro**: botão no menu de todas as páginas (`js/tema.js`). A escolha fica salva no navegador.
- **Navegação padronizada**: o mesmo menu em todas as páginas, com links entre Cenário, Dados, Simulador, Debate e Fontes.
- **Página inicial** (`index.html`): ficou só com a seção de abertura, e os demais conteúdos foram para páginas próprias.

### Correções

- Links quebrados do menu na página do simulador:

```html
<li class="nav-item"><a class="nav-link" href="index.html#inicio">Cenário</a></li>
<li class="nav-item"><a class="nav-link" href="Dados.html">Dados</a></li>
<li class="nav-item"><a class="nav-link active" href="Simulador.html">Simulador</a></li>
<li class="nav-item"><a class="nav-link" href="Debate.html">Debate</a></li>
<li class="nav-item"><a class="nav-link" href="Fontes.html">Fontes</a></li>
```

- Id do título do simulador que não correspondia ao `aria-labelledby` (acessibilidade):

```html
<section id="Simulador" ... aria-labelledby="titulo-simulador">
    <h1 id="titulo-simulador" class="display-6 fw-bold">
```

- Seções que apareciam como "será desenvolvida posteriormente": saíram da página inicial e cada uma virou uma página própria. Na página inicial ficou um botão para a página de Dados:

```html
<div class="mt-4">
    <a href="Dados.html" class="btn btn-primary px-4">Ver os dados</a>
</div>
```

### Tecnologias

HTML5, CSS3, JavaScript, Bootstrap 5.3.3 e Chart.js 4.4.7.

### Estrutura

`index.html`, `Dados.html`, `Simulador.html`, `Debate.html`, `Fontes.html`, `css/style.css`, `js/script.js`, `js/simulador.js`, `js/tema.js`, `image/`.

---

## Ficha 2 — Simulador de empregabilidade júnior (`js/simulador.js`)

### 1. Prompt completo e ferramenta utilizada
- **Ferramenta :claude.ai
- **Prompt: Faca um grafico de simulador que combine com meu site para eu completar o meu simulador.html

### 2. Código bruto devolvido pela IA
<main id="conteudo" class="container py-4">
        <section id="simulador" class="p-4 p-md-5 section-card mb-5" aria-labelledby="titulo-simulador">
            <header class="mb-4">
                <h1 id="titulo-simulador" class="display-6 fw-bold">Simulador de empregabilidade júnior</h1>
                <p class="lead text-body-secondary col-lg-9 px-0">
                    Responda com sinceridade. O diagnóstico cruza seu preparo para o mercado com sua saúde emocional
                    diante da IA.
                </p>
            </header>

            <form id="formSimulador" novalidate>
                <fieldset class="mb-4">
                    <legend class="h5 text-body-secondary">Eixo A: preparo para o mercado</legend>
                    <div class="row g-4">
                        <div class="col-12 col-md-6">
                            <label for="horas" class="form-label">Horas de estudo por semana</label>
                            <div class="d-flex align-items-center gap-3">
                                <input type="range" class="form-range" id="horas" name="horas" min="0" max="30"
                                    step="1" value="10">
                                <output id="horasSaida" for="horas" class="fw-bold">10</output>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="projetos" class="form-label">Projetos próprios no GitHub</label>
                            <select class="form-select" id="projetos" name="projetos">
                                <option value="0">Nenhum</option>
                                <option value="10" selected>1 a 2</option>
                                <option value="16">3 a 5</option>
                                <option value="20">6 ou mais</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="usoIa" class="form-label">Como você usa IA para programar</label>
                            <select class="form-select" id="usoIa" name="usoIa">
                                <option value="5">Copio e colo sem revisar</option>
                                <option value="15" selected>Uso e testo o resultado</option>
                                <option value="25">Uso, audito e explico o código</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="experiencia" class="form-label">Experiência prática</label>
                            <select class="form-select" id="experiencia" name="experiencia">
                                <option value="0">Nenhuma</option>
                                <option value="8" selected>Projetos da faculdade</option>
                                <option value="20">Freelas ou open source</option>
                                <option value="30">Estágio ou emprego</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="mb-4">
                    <legend class="h5 text-body-secondary">Eixo B: dimensão socioemocional</legend>
                    <div class="row g-4">
                        <div class="col-12 col-md-6">
                            <label for="ansiedade" class="form-label">Quanto você se compara à IA e sente que não vai
                                dar (1 a 5)</label>
                            <div class="d-flex align-items-center gap-3">
                                <input type="range" class="form-range" id="ansiedade" name="ansiedade" min="1" max="5"
                                    step="1" value="3">
                                <output id="ansiedadeSaida" for="ansiedade" class="fw-bold">3</output>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="descanso" class="form-label">Dias por semana sem tela de estudo</label>
                            <div class="d-flex align-items-center gap-3">
                                <input type="range" class="form-range" id="descanso" name="descanso" min="0" max="7"
                                    step="1" value="1">
                                <output id="descansoSaida" for="descanso" class="fw-bold">1</output>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" class="btn btn-primary px-4">Ver diagnóstico</button>
            </form>

            <section id="resultado" class="mt-5 d-none" aria-live="polite" aria-labelledby="titulo-resultado">
                <h2 id="titulo-resultado" class="h4 mb-4" tabindex="-1">Seu diagnóstico</h2>

                <div class="row g-4 mb-4">
                    <div class="col-12 col-md-6">
                        <article class="card card-timeline h-100 p-3">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-baseline mb-2">
                                    <h3 class="h6 mb-0 text-body-secondary">Preparo técnico</h3>
                                    <span id="notaTecnica" class="fs-2 fw-bold">0</span>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Pontuação de preparo técnico"
                                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="barraTecnica">
                                    <div class="progress-bar bg-primary" id="preenchimentoTecnico" style="width: 0%">
                                    </div>
                                </div>
                                <span id="faixaTecnica" class="badge mt-3">Faixa</span>
                            </div>
                        </article>
                    </div>
                    <div class="col-12 col-md-6">
                        <article class="card card-timeline h-100 p-3">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-baseline mb-2">
                                    <h3 class="h6 mb-0 text-body-secondary">Bem-estar</h3>
                                    <span id="notaBemEstar" class="fs-2 fw-bold">0</span>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Pontuação de bem-estar"
                                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="barraBemEstar">
                                    <div class="progress-bar bg-success" id="preenchimentoBemEstar" style="width: 0%">
                                    </div>
                                </div>
                                <span id="faixaBemEstar" class="badge mt-3">Faixa</span>
                            </div>
                        </article>
                    </div>
                </div>

                <article class="card card-timeline p-3">
                    <div class="card-body">
                        <h3 class="h6 text-body-secondary">Recomendações para você</h3>
                        <ul id="listaRecomendacoes" class="mb-0"></ul>
                    </div>
                </article>
            </section>

            <aside class="nota-dados mt-4" aria-label="Aviso sobre o simulador">
                <p class="mb-0">
                    O simulador é uma autoavaliação simples com fins educativos. O Eixo B não usa uma escala
                    psicológica validada e não substitui avaliação profissional. Se você se sente sobrecarregado,
                    converse com alguém de confiança ou procure apoio de um profissional de saúde.
                </p>
            </aside>
        </section>
    </main>

    <footer class="site-footer">
        <div class="container rodape-grid">
            <section aria-label="Sobre o projeto">
                <p class="rodape-titulo">Porta de Entrada Fechada?</p>
                <p>Projeto acadêmico de Front-end e Copilotagem com IA (UNICID, Prof. Diego Marques de Carvalho) sobre IA, primeiro emprego e Geração Z.</p>
            </section>
            <nav aria-label="Páginas do site">
                <p class="rodape-titulo">Páginas</p>
                <ul>
                    <li><a href="index.html#inicio">Cenário</a></li>
                    <li><a href="Dados.html">Dados</a></li>
                    <li><a href="Simulador.html">Simulador</a></li>
                    <li><a href="Debate.html">Debate</a></li>
                    <li><a href="Fontes.html">Fontes</a></li>
                </ul>
            </nav>
            <section aria-label="Sobre os dados e o uso de IA">
                <p class="rodape-titulo">Transparência</p>
                <p>Os dados vêm de estudos citados na página <a href="Fontes.html">Fontes</a> e mostram tendências, não causas. O uso de IA no projeto está registrado em <a href="https://github.com/Paulo984-ss/ATC-5-PD/blob/main/AUDITORIA_IA.md" target="_blank" rel="noopener">AUDITORIA_IA.md</a>.</p>
            </section>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/simulador.js"></script>


### 4. Refatoração manual
**Código final: Na parte do simulador nao mudamos mais nada pois se encaixou perfeitamente no site apesar de no comeco so temos errado a parte da conecçoes entre os sites 

---

## Ficha 3 — Modo claro e escuro (`js/tema.js` e CSS)

### 1. Prompt completo e ferramenta utilizada
- **Ferramenta:Claude.ia
- **Prompt:como eu insiro o modo escuro no meu site 

### 2. Código bruto devolvido pela IA
html
<button id="btnTema" type="button" class="btn btn-outline-light btn-sm ms-lg-3 mt-2 mt-lg-0">🌙 Modo escuro</button>

<link href="css/style.css" rel="stylesheet">
<script src="js/tema.js"></script>

Botão no menu de todas as páginas e carregamento no `<head>`:

```html
<button id="btnTema" type="button" class="btn btn-outline-light btn-sm ms-lg-3 mt-2 mt-lg-0">🌙 Modo escuro</button>

<link href="css/style.css" rel="stylesheet">
<script src="js/tema.js"></script>
```

`js/tema.js`:
// Aplica o tema salvo (ou claro, por padrão) antes de desenhar a página
(function () {
    var salvo = null;
    try { salvo = localStorage.getItem('tema'); } catch (e) { }
    var tema = salvo === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', tema);
})();

document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('btnTema');
    if (!botao) return;

    function atualizar() {
        var escuro = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        botao.textContent = escuro ? '☀️ Modo claro' : '🌙 Modo escuro';
        botao.setAttribute('aria-pressed', escuro ? 'true' : 'false');
    }

    botao.addEventListener('click', function () {
        var escuro = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        var novo = escuro ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', novo);
        try { localStorage.setItem('tema', novo); } catch (e) { }
        atualizar();
    });

    atualizar();
});

```javascript
// Aplica o tema salvo (ou claro, por padrão) antes de desenhar a página
(function () {
    var salvo = null;
    try { salvo = localStorage.getItem('tema'); } catch (e) { }
    var tema = salvo === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', tema);
})();

document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('btnTema');
    if (!botao) return;

    function atualizar() {
        var escuro = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        botao.textContent = escuro ? '☀️ Modo claro' : '🌙 Modo escuro';
        botao.setAttribute('aria-pressed', escuro ? 'true' : 'false');
    }

    botao.addEventListener('click', function () {
        var escuro = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        var novo = escuro ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', novo);
        try { localStorage.setItem('tema', novo); } catch (e) { }
        atualizar();
    });

    atualizar();
});
```

Acrescentado no fim de `css/style.css`:

```css
#btnTema {
    white-space: nowrap;
}

[data-bs-theme="dark"] {
    --cor-fundo: #0F172A;
    --cor-texto: #E2E8F0;
    --cor-card: #1E293B;
    --cor-borda: #334155;
}

[data-bs-theme="dark"] .card-timeline {
    background-color: #273449;
    color: var(--cor-texto);
    border-color: #3B4A63;
}

[data-bs-theme="dark"] .numero {
    color: #60A5FA;
}

[data-bs-theme="dark"] .nota-dados {
    color: #94A3B8;
}

[data-bs-theme="dark"] .card-dado,
[data-bs-theme="dark"] .card-grafico {
    background-color: #111827;
    border-color: #334155;
}

[data-bs-theme="dark"] a:not(.btn):not(.nav-link):not(.navbar-brand) {
    color: #60A5FA;
}
```

### 3. Auditoria crítica da dupla

| # | Achado no código bruto | Gravidade |
|---|---|---|
| 1 | **Pontos positivos mantidos:** `localStorage` dentro de `try/catch`, tema aplicado antes de desenhar a página (sem "piscar") e `aria-pressed` no botão. | Informativo |
| 2 | **Gráficos não acompanham o tema.** O script não avisa ninguém quando o tema muda, e as cores do Chart.js estavam fixas para fundo escuro. No modo claro, o texto dos gráficos ficava ilegível. | Alta |
| 3 | **Cores repetidas e inconsistentes.** Os mesmos elementos usavam três tons de fundo diferentes (`#273449`, `#111827`, `#1E293B`) e a variável `--cor-card` foi criada, mas nunca usada. | Média |
| 4 | **Um seletor `[data-bs-theme="dark"]` para cada componente.** Cada novo componente exigia mais um bloco de exceção, em vez de trocar valores de variáveis. | Média |
| 5 | **Regra de links com cadeia de `:not()`** (`a:not(.btn):not(.nav-link):not(.navbar-brand)`), frágil e difícil de manter. | Baixa |
| 6 | **Sem `:focus-visible` estilizado** nos controles, o que prejudica a navegação por teclado (WCAG 2.4.7). | Média |

### 4. Refatoração manual

**Código final:** `js/tema.js` e `css/style.css`.

```javascript
// em js/tema.js, depois de salvar o tema:
document.dispatchEvent(new CustomEvent('tema-alterado', { detail: { tema: novo } }));
```

```css
/* em css/style.css: tokens no :root, redefinidos no tema escuro */
:root { --cor-fundo: #F3F6FB; --cor-superficie: #FFFFFF; --cor-texto: #0F172A; --cor-borda: #D5DDEA; }
[data-bs-theme="dark"] { --cor-fundo: #0E1116; --cor-superficie: #1B1B1B; --cor-texto: #E5E7EB; --cor-borda: #343434; }
```

| Achado | Correção e justificativa |
|---|---|
| 2 | `tema.js` dispara o evento `tema-alterado`, e `script.js` o escuta para atualizar o texto e a grade dos gráficos conforme o tema. |
| 3 e 4 | Toda a paleta virou tokens no `:root`, redefinidos uma única vez no tema escuro. Os componentes usam `var(--cor-superficie)`, `var(--cor-borda)` etc., sem seletores de exceção por componente. |
| 5 | A cor dos links vem do token `--cor-realce`, definido para cada tema. |
| 6 | Criamos a regra `:focus-visible` com a cor `--cor-foco`, visível nos dois temas. |

---

## Declaração de uso de IA na revisão geral (nov/2026)

**Ferramenta:** Claude (Anthropic).

**Pedido feito:** conferir se o projeto estava conforme as instruções da atividade e corrigir o que faltava.

**O que a IA produziu nesta revisão:** o conteúdo de `css/style.css`, a reorganização das páginas HTML (rodapé, `<aside>`, accordion no Debate, `aria-current`, link para pular ao conteúdo, texto alternativo), a página Fontes com links diretos, o quarto gráfico e a pesquisa dos dados da Deloitte, o `README.md` e o texto das fichas.

**Ponto de atenção para a avaliação:** as instruções definem que a Parte I (HTML5, CSS3 e Bootstrap) deve ser autoral, sem IA generativa. Os arquivos da Parte I desta revisão foram produzidos com ajuda de IA e precisam ser **declarados como tal** e revisados pela dupla antes da entrega. [PREENCHER: o que a dupla revisou, testou e alterou depois.]

**Verificação dos números:** os valores de Indeed e Stanford foram conferidos nos artigos originais. Os valores da Deloitte (34%, 48%, 74%, 63%) foram conferidos no comunicado e no relatório da empresa e em resumos de imprensa; **confira 34% e 48% diretamente nas páginas do PDF** antes de entregar.
