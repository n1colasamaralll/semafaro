document.addEventListener('DOMContentLoaded', ()=>{
    const vermelho = document.getElementById('vermelho')
    const amarelo = document.getElementById('amarelo')    
    const verde = document.getElementById('verde')
 
    let estadoatual = 'vermelho'
 
    function alternarluzes (){
 
        if(estadoatual === 'amarelo'){
            vermelho.style.backgroundColor = '#555555';
            amarelo.style.backgroundColor = '#ffff00';
            verde.style.backgroundColor = '#555555'
            estadoatual = 'vermelho';
            }else if(estadoatual === 'vermelho') {
            vermelho.style.backgroundColor = '#ff0000';
            amarelo.style.backgroundColor = '#555555';
            verde.style.backgroundColor = '#555555';
            estadoatual = 'verde';
            } else if(estadoatual === 'verde') {
                vermelho.style.backgroundColor = '#555555';
                amarelo.style.backgroundColor = '#555555';
                verde.style.backgroundColor = '#00ff00';
                estadoatual = 'amarelo';
            }
    }
 
    setInterval(alternarluzes, 2000);
 
}); 