'use strict'

const infos = [
    {
        nome: "Rubens Luiz",
        imagem: 'rubens.jpg',
        descricao: 'Aquela descriçaozinha básica né',
        tempo: '30',
        tipoTempo:'minutos',
        numeroNot: '1',
        nomeAtendente: 'Fulano de tal'
    },
    {
        nome: "Inocente",
        imagem: 'inocente.jpg',
        descricao: 'É a lei do doende, quem bola acende',
        tempo: '20',
        tipoTempo:'minutos',
        numeroNot: '2',
        nomeAtendente: 'Fulano de tal'
    },
    {
        nome: "Matheuzin",
        imagem: 'matheus.png',
        descricao: 'Vulgo, Sapequinha',
        tempo: '10',
        tipoTempo:'minutos',
        numeroNot: '3',
        nomeAtendente: 'Fulano de tal'
    },
    {
        nome: "Hector",
        imagem: 'hector2.png',
        descricao: 'Olhou sorriu mandioca no bombril',
        tempo: 1,
        tipoTempo:'minuto',
        numeroNot: '4',
        nomeAtendente: 'Sei lá'
    },
    {
        nome: "Queiroz",
        imagem: 'queiroz.png',
        descricao: 'Quer um 9 bolado',
        tempo: '',
        tipoTempo:'alguns segundos',
        numeroNot: '5',
        nomeAtendente: 'Algo'
    }
]

function criarCards(infos) {
    const containerGeral = document.getElementById('containerGeral')

    const card = document.createElement('div')
    card.classList.add('card')

    const top = document.createElement('div')
    top.classList.add('top')

    const tempo = document.createElement('p')
    tempo.textContent = `Há ${infos.tempo} ${infos.tipoTempo}`
    tempo.classList.add('tempo')

    const container = document.createElement('div')
    container.classList.add('container')
    
    const pfp = document.createElement('div')
    pfp.classList.add('pfp')
    pfp.alt = infos.nome
    pfp.style.backgroundImage=`url(./img/${infos.imagem})`
    
    const text = document.createElement('div')
    text.classList.add('text')
    
    const descricao = document.createElement('p')
    descricao.classList.add('descricao')
    descricao.textContent = infos.descricao
    
    const nomeNot = document.createElement('div')
    nomeNot.classList.add('nomeNot')
    
    const nome = document.createElement('h2')
    nome.classList.add('nome')
    nome.textContent = infos.nome
    
    const not = document.createElement('div')
    not.classList.add('not')
    not.textContent = infos.numeroNot
    
    const atendente = document.createElement('div')
    atendente.classList.add('atendente')

    const atendenteImg = document.createElement('div')
    atendenteImg.classList.add('atendenteImg')

    const atendenteNome = document.createElement('h2')
    atendenteNome.classList.add('atendenteNome')
    atendenteNome.textContent = infos.nomeAtendente


    atendente.replaceChildren(atendenteImg,atendenteNome)
    nomeNot.replaceChildren(nome,not)
    text.replaceChildren(nomeNot,descricao)
    container.replaceChildren(pfp,text)
    top.replaceChildren(tempo)
    card.replaceChildren(top,container,atendente)
    containerGeral.appendChild(card)
    
}

infos.forEach(criarCards)