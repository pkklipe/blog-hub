const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
    botao.addEventListener('click',  curtir)
    let curtiu = false
    function curtir() {
        let curtidas = document.querySelector('span') //Colocar botao.query...
       
        if(curtiu == false){
            curtiu = true
            curtidas.textContent++
            botao.style.backgroundColor = 'pink'
        }

    }
});