document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('formSimulador');
    if (!form) return;

    [['horas', 'horasSaida'], ['ansiedade', 'ansiedadeSaida'], ['descanso', 'descansoSaida']]
        .forEach(function (par) {
            var campo = document.getElementById(par[0]);
            var saida = document.getElementById(par[1]);
            campo.addEventListener('input', function () { saida.textContent = campo.value; });
        });

    function faixa(nota) {
        if (nota >= 75) return { texto: 'Alta', classe: 'text-bg-success' };
        if (nota >= 45) return { texto: 'Média', classe: 'text-bg-warning' };
        return { texto: 'Baixa', classe: 'text-bg-danger' };
    }

    function preencher(idNota, idBarra, idPreench, idFaixa, nota) {
        document.getElementById(idNota).textContent = nota;
        document.getElementById(idPreench).style.width = nota + '%';
        document.getElementById(idBarra).setAttribute('aria-valuenow', nota);
        var f = faixa(nota);
        var badge = document.getElementById(idFaixa);
        badge.textContent = f.texto;
        badge.className = 'badge mt-3 ' + f.classe;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var horas = Number(document.getElementById('horas').value);
        var projetos = Number(document.getElementById('projetos').value);
        var usoIa = Number(document.getElementById('usoIa').value);
        var experiencia = Number(document.getElementById('experiencia').value);
        var ansiedade = Number(document.getElementById('ansiedade').value);
        var descanso = Number(document.getElementById('descanso').value);

        var tecnica = Math.round((horas / 30) * 25 + projetos + usoIa + experiencia);
        var bemEstar = Math.round(((5 - ansiedade) / 4) * 60 + (Math.min(descanso, 3) / 3) * 40);

        preencher('notaTecnica', 'barraTecnica', 'preenchimentoTecnico', 'faixaTecnica', tecnica);
        preencher('notaBemEstar', 'barraBemEstar', 'preenchimentoBemEstar', 'faixaBemEstar', bemEstar);

        var recs = [];
        if (usoIa <= 5) recs.push('Revise e teste o código gerado por IA antes de usar. Saber explicar o que ele faz é o que te diferencia.');
        if (projetos <= 10) recs.push('Publique mais projetos no GitHub, com README claro. Eles viram sua experiência comprovada.');
        if (experiencia <= 8) recs.push('Busque freelas, open source ou estágio para ganhar experiência além da faculdade.');
        if (horas < 8) recs.push('Tente aumentar aos poucos suas horas de estudo semanais, com constância.');
        if (ansiedade >= 4) recs.push('Comparar-se com a IA desgasta. Use-a como ferramenta e foque no que você aprende a cada semana.');
        if (descanso < 1) recs.push('Reserve pelo menos um dia por semana sem tela de estudo. Descanso também melhora o aprendizado.');
        if (!recs.length) recs.push('Bom equilíbrio! Mantenha a rotina e continue construindo projetos e networking.');

        var lista = document.getElementById('listaRecomendacoes');
        lista.innerHTML = '';
        recs.forEach(function (r) {
            var li = document.createElement('li');
            li.textContent = r;
            lista.appendChild(li);
        });

        var res = document.getElementById('resultado');
        res.classList.remove('d-none');
        document.getElementById('titulo-resultado').focus();
        res.scrollIntoView({ behavior: 'smooth' });
    });
});
