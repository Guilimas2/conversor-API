const apiKey = '356a1cbfe6e284549ede9c05';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;


// função para consulta a taxa de cambio via API 
// ##############################################
async function getExchangeRete(deMoeda, paraMoeda){
    // trata erro try 
    try{
        const response = await fetch(`${apiURL}${deMoeda}`);
        const data = response.json();

        if(data.result ==="success"){
            return data.conversion_rates[paraMoeda];
        }else{
            throw new Error("erro ao buscar tava de cambio")
        }
    }catch (error){
        console.error("Erro:", error);
        return null;
    }
}
// ##############################################

document.getElementById('currency-form').addEventListener('submit', async function(event){
    
});