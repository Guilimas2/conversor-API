const apiKey = '356a1cbfe6e284549ede9c05';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;


// função para consulta a taxa de cambio via API 
// ##############################################
async function getExchangeRete(deMoeda, paraMoeda){
    // trata erro try 
    try{
        const response = await fetch(`${apiURL}${deMoeda}`);
        const data = await response.json();    

        if(data.result === "success"){
            return data.conversion_rates[paraMoeda];
        } else {
            throw new Error("erro ao buscar tava de cambio")
        }
    } catch (error) {
        console.error("Erro:", error);
        return null;
    }
}
// ##############################################

document.getElementById('currency-form').addEventListener('submit', async function(event){
    event.preventDefault();

    // obter valores de entrada
    
    const valor = parseFloat(document.getElementById('valor').value);
    const deMoeda = document.getElementById('deMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    const exchangeRate = await getExchangeRete(deMoeda, paraMoeda);

    if(exchangeRate){
        const convertedValue = valor * exchangeRate;

        console.log(convertedValue);


        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`; 
    } else{
        alert('Erro ao buscar a cotação. Tente novamente');
    }
}); 