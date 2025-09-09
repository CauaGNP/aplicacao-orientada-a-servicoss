const resetButton = document.querySelector("#resetQuoteButton");

async function getAPI() {
    try {
        const url = 'https://aplicacao-orientada-a-servicos-ex01.vercel.app';
        const response = await axios.get(`${url}/inspiration`)
                console.log(response);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('Erro ao buscar a API:', error);
    }
}

async function displayQuotes() {
    const paragraph = document.querySelector("#paragraph");
    const data = await getAPI();
    
    paragraph.textContent = data.quote;
}

resetButton.addEventListener("click", ()=>{
    displayQuotes();
})

window.onload = displayQuotes;