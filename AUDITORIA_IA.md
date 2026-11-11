# Auditoria de IA

## Ficha 1 — Criação dos gráficos com Chart.js

### 1. Prompt completo e ferramenta utilizada
**Ferramenta:** ChatGPT

**Prompt:**
"Crie gráficos usando Chart.js para apresentar dados sobre vagas
júnior de tecnologia e exigência de experiência.

### 2. Código bruto devolvido pela IA
```javascript
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

CSS
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

JS
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

### O que foi feito nesta atualização

- **Simulador de empregabilidade júnior** (`Simulador.html` + `js/simulador.js`):
  formulário com dois eixos, preparo para o mercado (horas de estudo, projetos
  no GitHub, uso de IA, experiência prática) e dimensão socioemocional
  (comparação com a IA e dias de descanso). O resultado mostra duas pontuações
  de 0 a 100 com faixa (baixa, média ou alta) e recomendações personalizadas.
- **Página de Dados** (`Dados.html`): cartões com os principais números e três
  gráficos feitos com Chart.js.
- **Modo claro e escuro**: botão no menu de todas as páginas (`js/tema.js`).
  A escolha fica salva no navegador.
- **Navegação padronizada**: o mesmo menu em todas as páginas, com links entre
  Cenário, Dados, Simulador, Debate e Fontes.
- **Página inicial** (`index.html`): ficou só com a seção de abertura, e os
  demais conteúdos foram para páginas próprias.

### Correções

- Links quebrados do menu na página do simulador.
- Id do título do simulador que não correspondia ao `aria-labelledby`
  (acessibilidade).
- Seções que apareciam como "será desenvolvida posteriormente".

### Tecnologias

HTML5, CSS3, JavaScript, Bootstrap 5.3 e Chart.js.

### Estrutura

index.html, Dados.html, Simulador.html, Debate.html, Fontes.html,
css/style.css, js/script.js, js/simulador.js, js/tema.js, image/


Correções:
<li class="nav-item"><a class="nav-link" href="index.html#inicio">Cenário</a></li>
<li class="nav-item"><a class="nav-link" href="Dados.html">Dados</a></li>
<li class="nav-item"><a class="nav-link active" href="Simulador.html">Simulador</a></li>
<li class="nav-item"><a class="nav-link" href="Debate.html">Debate</a></li>
<li class="nav-item"><a class="nav-link" href="Fontes.html">Fontes</a></li>


Id do título que não batia com o aria-labelledby (acessibilidade)
<section id="Simulador" ... aria-labelledby="titulo-simulador">
    <h1 id="titulo-simulador" class="display-6 fw-bold">

Depois, essas seções saíram da página inicial e cada uma virou uma página própria. Ficou só um botão para a página de Dados no fim da primeira seção:

html
<div class="mt-4">
    <a href="Dados.html" class="btn btn-primary px-4">Ver os dados</a>
</div>

4. Modo claro e escuro

Botão no menu de todas as páginas:

html
<button id="btnTema" type="button" class="btn btn-outline-light btn-sm ms-lg-3 mt-2 mt-lg-0">🌙 Modo escuro</button>

No <head>, depois do CSS (e data-bs-theme="light" no <html>):

html
<link href="css/style.css" rel="stylesheet">
<script src="js/tema.js"></script>

js/tema.js:

javascript
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

Acrescentado no fim de css/style.css:
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


