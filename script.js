const precos = {
    adesivo: 120,
    pvc: 200,
    pvcRefletivo:250,
    pvcFoto:320,
    galvanizado: 220,
    galvanizadoRefletivo: 270,
    acm: 250,
    acmRefletivo:290
};

function calcular(tipo) {
    let altura = document.getElementById(`altura-${tipo}`).value;
    let largura = document.getElementById(`largura-${tipo}`).value;

    altura = altura.replace(",", ".");
    largura = largura.replace(",", ".");

    altura = parseFloat(altura);
    largura = parseFloat(largura);

    if (isNaN(altura) || isNaN(largura) || altura <= 0 || largura <= 0) {
        alert("Informe valores válidos!");
        return;
    }

    altura = altura / 100;
    largura = largura / 100;

    let total = altura * largura * precos[tipo];

    // 🔥 arredonda para 0,05
    let totalArredondado = Math.ceil(total / 0.05) * 0.05;

    document.getElementById(`resultado-${tipo}`).innerText =
        "VALOR: R$ " + totalArredondado.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
        });
}
document.querySelectorAll(".card").forEach(card => {
    const botao = card.querySelector("button");

    botao.addEventListener("click", () => {
        const tipo = botao.dataset.tipo;
        calcular(tipo);
    });
});