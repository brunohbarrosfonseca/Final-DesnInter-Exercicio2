//Evento de escuta
function escutaScroll(event){
    
//Ver gatilhos 
    let gatilhos = document.querySelectorAll(".gatilhos > div");

//Loop de gatilhos
    for(let gatilho of gatilhos){
//Posições
        let posicao = gatilho.getBoundingClientRect();
//Propriedade data-alvo
        let alvo = gatilho.dataset.alvo;
// Elemento do alvo
        let passo = document.querySelector('.'+alvo);
//Posição no topo
        if(posicao.top <= 0 && posicao.top > -posicao.height){
// Se está no topo, exibe
            passo.classList.add('passo-ativo');
        }else{
// Se não, não exibe
            passo.classList.remove('passo-ativo');
        }
    }
}

//Evento de rolagem da página
window.addEventListener('scroll', escutaScroll);