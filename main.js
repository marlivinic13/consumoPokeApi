
function sortNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function sortPoke(event) {
    event.preventDefault()

    const idIn = Number(sortNum(0, 1000)) //document.getElementById("nameInput").value //pegar o valor do elemento a parti do seu id 
    const nameOut = document.getElementById("namePoke")//elemento de saida com o nome do pokemon
    const imgOut = document.getElementById("imgPoke")//elemento de saida com a imagem do pokemon
    const listMovs = document.getElementById("lMov")//elemento de saída dos movimentos do pokemon


    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${idIn}`) //acessa o endpoint pokemon da api pokeapi, passa o parâmetro id e pega a resposta contendo as informações do pokemon pesquisado
    const data = await resp.json() //converter a resposta em json 

    nameOut.textContent = "" //zera o conteúdo do elemento
    nameOut.textContent = data.name //insere o nome do pokemon respectivo

    imgOut.src = "" //zera o conteúdo do elemento
    imgOut.src = data.sprites.front_default //acessar a imagem do pokemon

    var key = "" //cria variável key do tipo String
    var qtdMov = 0 //cria variável qtd do tipo int
    //saber quantos movimentos aquele pokemon tem
    for (key in data.moves) { //para cada chaves em movimentos do pokemon...
        qtdMov += 1 //eu somo 1 à variável qtd
    }

    var sorte = 0
    var mov = 0
    listMovs.textContent = ""
    //sortear 4 habilidades do pokemon escolhido 
    for (var i = 1; i <= 4; i++) {
        sorte = sortNum(0, qtdMov - 1)
        mov = data.moves[sorte].move.name

        const li = document.createElement("li")
        li.textContent = mov

        listMovs.appendChild(li)
    }
}


