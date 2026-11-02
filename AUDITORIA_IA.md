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
