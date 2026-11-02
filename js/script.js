Chart.defaults.font.family = "Inter, sans-serif";
Chart.defaults.color = "#c4c4c4";

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