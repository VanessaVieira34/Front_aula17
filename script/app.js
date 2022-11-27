let btn = document.getElementById("random")

window.onload = inserir()
function inserir(){

  fetch('https://randomuser.me/api/')

    .then(response => {
        return response.json()
    })
    .then(response => {
        renderizarDadosUsuario(response)      
    });
    
    function renderizarDadosUsuario(dados) {
        let card = document.querySelector(".card");
        for(let imagem of dados.results){
        card.innerHTML = `
        <img src="${imagem.picture.large}" class="image">
        <p>${imagem.name.title} ${imagem.name.first} ${imagem.name.last}</p>
        <p>${imagem.email}</p>
        `
        }
    }
    } 
    btn.addEventListener("click", inserir)