function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById(container)
    let cartao = document.createElement(article)

    cartao.innHTML = `
    <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que è javaScript?</p>
                    </div>
                    <div class="cartao__conteudo__respostas">
                        <p>javaScript é uma linguagem de programação.</p>
                    </div>
                </div>`
}