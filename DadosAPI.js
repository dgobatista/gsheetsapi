document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "#";
    const investimentoElement = document.getElementById("investimentoValue");
    const lucroElement = document.getElementById("lucroValue");
    const roiElement = document.getElementById("roiValue");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const investimento = data.saida[1].Investimento;
            const lucro = data.saida[1].Lucro;
            const roi = data.saida[1].ROI;

            investimentoElement.textContent = investimento;
            lucroElement.textContent = lucro;
            roiElement.textContent = roi;
        })
        .catch(error => {
            console.error("Erro ao buscar dados da API:", error);
        });
});
