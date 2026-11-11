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
        // Avisa outros scripts (ex.: gráficos) que o tema mudou
        document.dispatchEvent(new CustomEvent('tema-alterado', { detail: { tema: novo } }));
    });

    atualizar();
});
