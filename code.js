const items = [{
        id: 0,
        nome: 'Camisa basica preta',
        img: './Assets/camisaPreta.jpeg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Camisa basica laranja',
        img: './Assets/camisaLaranja.jpeg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Camisa basica branca',
        img: './Assets/camisaBranca.jpeg',
        quantidade: 0
    },
]

inicializarLoja = () => {
    var conteinerProdutos = document.getElementById('produtos');
    items.map((val) => {
        conteinerProdutos.innerHTML += `

                    <div class="produto-single">
                    <img src=${val.img} />
                    <p> ${val.nome} </p>
                    <a key="${val.id}" href="#"> Adicionar ao carrinho!</a>
                    </div>

                    `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var conteinerCarrinho = document.getElementById('carrinho');
    conteinerCarrinho.innerHTML = "";
    items.map((val) => {
        if (val.quantidade > 0) {
            conteinerCarrinho.innerHTML += `
                    <div class="info-single-checkout">
                    <p style="flot:left;"> produto:  ${val.nome} </p>
                    <p style="flot:right;"> quantidade:  ${val.quantidade}</p>
                    <div style="clear:both"></div>
                    </div>
                    `;
        }
    })
}

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}