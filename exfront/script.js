
async function getAPI() {
    try {
        const url = 'https://fictional-space-telegram-7v75px7xq5gvcr6wx-3000.app.github.dev';
        const response = await axios.get(`https://fictional-space-telegram-7v75px7xq5gvcr6wx-3000.app.github.dev/inspiration`)
        
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.data;
        console.log(data);
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

window.onload = displayQuotes;
