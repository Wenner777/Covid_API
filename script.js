const onOff = document.querySelector("#onOff");

//* Função para verificar se o site está online
verificaçãoAPI();
function verificaçãoAPI() {
    fetch("https://covid19-brazil-api.now.sh/api/status/v1")
        .then(res => res.json())
        .then(dados => {

            let receber = null;

            if (dados.status === "ok") {
                receber = 1;
            } else {
                receber = 0;
            }

            mostrarStatus(receber);

        })
        .catch(() => {
            console.log("Erro!");

        })
}

//* Exibe a condição atual do site online/offline
function mostrarStatus(dados) {
    if (dados === 1) {
        onOff.textContent = `ONLINE`;
        console.log("Sistema Online!");
        
    } else if (dados === 0) {
        onOff.textContent = `OFFLINE`;
        console.log("Sistema Offline!");
        
    }

}

/**
 * Nessa parte o codigo vai pegar o select é buscar a informação na API 
*/

// Variaveis do Select
const infoPais = document.querySelector("#infoPais");
const selectPaises = document.querySelector("#selectPais");
const btnSelecionarPaises = document.querySelector("#buttonSelect");

//* Função para chamar os pais selecionado no select
btnSelecionarPaises.addEventListener("click", () => {
    const valorDoselect = selectPaises.value;   

    console.log(valorDoselect);
    
    casosPais(valorDoselect);

});

function casosPais(pais) {
    fetch(`https://covid19-brazil-api.vercel.app/api/report/v1/${pais}`)
        .then(res => res.json())
        .then(dados => {
            const dadosConfirmados = dados.data.confirmed;
            const dadosMortes = dados.data.deaths;

            exibirPais(dadosConfirmados, dadosMortes);
        })
    .catch(() => {
        console.log("Error!");
        
    });
}

function exibirPais(confirmado, mortes) {
    infoPais.innerHTML = `${casos}`;
}