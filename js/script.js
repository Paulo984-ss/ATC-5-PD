/* Gráficos da página Dados (Chart.js 4.4.7)
   Dados e fontes: ver README.md (Contratos de Dados) e Fontes.html */

if (typeof Chart !== "undefined") {

    const COR = {
        azul: "#2563EB",
        azulClaro: "#60A5FA",
        azulPalido: "#93C5FD",
        alerta: "#F59E0B"
    };

    const graficos = [];

    function formatarPorcentagem(valor) {
        return valor + "%";
    }

    function modoEscuro() {
        return document.documentElement.getAttribute("data-bs-theme") === "dark";
    }

    function corTexto() { return modoEscuro() ? "#C4C4C4" : "#475569"; }
    function corGrade() { return modoEscuro() ? "#333333" : "#D5DDEA"; }

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
                tooltip: {
                    callbacks: {
                        label: function (contexto) {
                            return contexto.raw + sufixo;
                        }
                    }
                }
            },
            scales: horizontal
                ? { x: eixoValor, y: eixoCategoria }
                : { x: eixoCategoria, y: eixoValor }
        };
    }

    function criarGrafico(idCanvas, configuracao) {
        const elemento = document.getElementById(idCanvas);
        if (elemento) {
            graficos.push(new Chart(elemento, configuracao));
        }
    }

    function aplicarTema() {
        Chart.defaults.color = corTexto();
        graficos.forEach(function (grafico) {
            Object.values(grafico.options.scales).forEach(function (eixo) {
                if (eixo.grid && eixo.grid.display !== false) {
                    eixo.grid.color = corGrade();
                }
            });
            grafico.update();
        });
    }

    Chart.defaults.font.family = "Inter, sans-serif";
    Chart.defaults.color = corTexto();

    /* 1. Vagas de tecnologia: queda em fev/2025 vs. fev/2020 (Indeed Hiring Lab) */
    criarGrafico("graficoVagas", {
        type: "bar",
        data: {
            labels: ["Júnior / padrão", "Sênior / gerência"],
            datasets: [{
                label: "Redução nas vagas",
                data: [34, 19],
                backgroundColor: [COR.azul, COR.azulClaro],
                borderRadius: 8,
                barThickness: 35
            }]
        },
        options: opcoes("% de redução em relação a fev/2020", 40)
    });

    /* 2. Vagas de tecnologia que exigem 5+ anos de experiência (Indeed Hiring Lab) */
    criarGrafico("graficoExperiencia", {
        type: "line",
        data: {
            labels: ["2º tri 2022", "2º tri 2025"],
            datasets: [{
                label: "Vagas que exigem 5+ anos",
                data: [37, 42],
                borderColor: COR.azulClaro,
                backgroundColor: COR.azul,
                pointBackgroundColor: COR.azulClaro,
                pointRadius: 6,
                borderWidth: 3,
                tension: 0.3
            }]
        },
        options: opcoes("% das vagas", 50)
    });

    /* 3. Emprego de jovens de 22 a 25 anos em ocupações expostas à IA (Stanford) */
    criarGrafico("graficoJovens", {
        type: "bar",
        data: {
            labels: ["Estudo de 2025", "Atualização de 2026"],
            datasets: [{
                label: "Redução relativa no emprego",
                data: [13, 19],
                backgroundColor: [COR.azulPalido, COR.azul],
                borderRadius: 8,
                barThickness: 45
            }]
        },
        options: opcoes("% de diferença relativa no emprego", 25)
    });

    /* 4. Eixo socioemocional: pesquisa Deloitte 2026 (Geração Z, 44 países) */
    criarGrafico("graficoGeracaoZ", {
        type: "bar",
        data: {
            labels: [
                "Usam IA no trabalho diário",
                "Saúde mental boa ou ótima",
                "Sentem-se esgotados (burnout)",
                "Ansiosos ou estressados quase sempre"
            ],
            datasets: [{
                label: "Respondentes (%)",
                data: [74, 63, 48, 34],
                backgroundColor: [COR.azul, COR.azul, COR.alerta, COR.alerta],
                borderRadius: 8,
                barThickness: 28
            }]
        },
        options: opcoes("% dos respondentes", 100, true)
    });

    document.addEventListener("tema-alterado", aplicarTema);
}
