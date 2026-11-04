Chart.defaults.font.family = "Inter, sans-serif";
Chart.defaults.color = "#C4C4C4";



function formatarPorcentagem(valor) {
    return valor + "%";
}



const elementoVagas = document.getElementById("graficoVagas");

if (elementoVagas) {

    new Chart(elementoVagas, {

        type: "bar",

        data: {

            labels: [
                "Júnior / padrão",
                "Sênior / gerência"
            ],

            datasets: [{

                label: "Redução nas vagas",

                data: [34, 19],

                backgroundColor: [
                    "#2563EB",
                    "#60A5FA"
                ],

                borderRadius: 8,

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

                        label: function (context) {

                            return context.raw + "% de redução";

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

                        callback: formatarPorcentagem

                    },

                    grid: {

                        color: "#333333"

                    }

                }

            }

        }

    });

}



const elementoExperiencia =
    document.getElementById("graficoExperiencia");

if (elementoExperiencia) {

    new Chart(elementoExperiencia, {

        type: "line",

        data: {

            labels: [
                "2022",
                "2025"
            ],

            datasets: [{

                label: "Vagas que exigem 5+ anos",

                data: [37, 42],

                borderColor: "#60A5FA",

                backgroundColor: "#2563EB",

                pointBackgroundColor: "#60A5FA",

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

                        label: function (context) {

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

                        callback: formatarPorcentagem

                    },

                    grid: {

                        color: "#333333"

                    }

                }

            }

        }

    });

}




const elementoJovens =
    document.getElementById("graficoJovens");

if (elementoJovens) {

    new Chart(elementoJovens, {

        type: "bar",

        data: {

            labels: [
                "Estudo de 2025",
                "Atualização de 2026"
            ],

            datasets: [{

                label: "Redução relativa no emprego",

                data: [13, 19],

                backgroundColor: [
                    "#93C5FD",
                    "#2563EB"
                ],

                borderRadius: 8,

                barThickness: 45

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

                        label: function (context) {

                            return context.raw + "% de redução";

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

                    ticks: {

                        callback: formatarPorcentagem

                    },

                    grid: {

                        color: "#333333"

                    }

                }

            }

        }

    });

}
