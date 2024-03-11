document.addEventListener("DOMContentLoaded", function () {
    // URL da API
    const apiUrl = "#";

    // Elementos HTML onde você deseja exibir os valores
    const investimentoElement = document.getElementById("investimentoValue");
    const lucroElement = document.getElementById("lucroValue");
    const roiElement = document.getElementById("roiValue");

    // Fazer a solicitação AJAX
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extrair os valores da API
            const investimento = data.saida[1].Investimento;
            const lucro = data.saida[1].Lucro;
            const roi = data.saida[1].ROI;

            // Atualizar os elementos HTML com os valores
            investimentoElement.textContent = investimento;
            lucroElement.textContent = lucro;
            roiElement.textContent = roi;
        })
        .catch(error => {
            console.error("Erro ao buscar dados da API:", error);
        });
});
