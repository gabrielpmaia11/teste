/*
//carne  400g por pessoa +6  horas - 650
cerveja -1200 ml por pessoa + 6horas  - 2000ml -todos os adultos bebem 

refrigerante /agua  1000 ml por pessoa +6 horas 1500ml 
 
criancas valem  por 0,5 

*/


let inputAdultos  = document.getElementById("adultos");

let inputCriancas = document.getElementById("criancas");

let inputDuracao  = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
  
    let qntAdultos = inputAdultos.value;
    let qntCriancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    

 

    let qntTotalCarne = carnePP(duracao) * qntAdultos + (carnePP(duracao) / 2*qntCriancas );

    let qntTotalCerveja = cervejaPP(duracao) * qntAdultos  ;
    console.log(qntTotalCarne);

    let qntTotalBebidas = bebidasPP(duracao) * qntAdultos + (bebidasPP(duracao) / 2*qntCriancas ) ;

    console.log(qntTotalCarne);
    resultado.innerHTML = `<p>${qntTotalCarne/1000} kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja/355)} latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebidas/2000)} Pets de  2L de Bebidas</p>`;

}

function carnePP(duracao){
    
    if(duracao>=6){
        return 650;
    }else{
        return 400;
    }
     
}

function cervejaPP(duracao){
    
    if(duracao>=6){
        return 2000;
    }else{
        return 1200;
    }
     
}

function bebidasPP(duracao){
    
    if(duracao>=6){
        return 1500;
    }else{
        return 1000;
    }
     
}