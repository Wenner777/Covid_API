const onOff = document.querySelector("#onOff");

//* Função para verificar se o site está online
verificaçãoAPI();
function verificaçãoAPI(){
    fetch("https://covid19-brazil-api.now.sh/api/status/v1")
    .then(res => res.json())
    .then(dados => {

        let receber = null;
        
        if(dados.status === "ok"){
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
function mostrarStatus(dados){
    if(dados === 1){
        onOff.textContent = `ONLINE`;

    } else if(dados === 0){
        onOff.textContent = `OFFLINE`;
        
    }
    
}