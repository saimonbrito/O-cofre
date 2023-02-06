  var senha_secreta = Math.floor(Math.random() * 1001);

  function cofreFun(){
    var mudar = document.getElementById('cofre').value
   var aparecerSenha = document.getElementById('apareces')

   if(mudar == senha_secreta){
    
    aparecerSenha.innerHTML=  ('Parabens Cofre Aberto ..! ' + mudar+' essa e sua senha ')
    document.getElementById('cofre').value =""
   }else if(mudar > senha_secreta){
    
    
                aparecerSenha.innerHTML=  ('Errou.. senha invalida, tente um numero menor ' + mudar);
                 document.getElementById('cofre').value =""
          
          }else if(mudar < senha_secreta){
          
            aparecerSenha.innerHTML=  ('Errou.. senha invalida, tente um numero maior ' + mudar);
            document.getElementById('cofre').value =""
          }
        
   }
   

 
//incirir elgo no html : document.write('so teste ')

// mudar.addEventListener("click", (evt)=>{
//     const el = evt.target
//     el.classList.add('h1')
// })



//let senhaSecreta = 20;
// let senha = prompt('Digite um a senha ')
    
//     if(senhaSecreta == senha){

//         alert(senhaSecreta +' Parabens você acertou !..')
    
//     }else if(senha > senhaSecreta){
    
    
//         alert('Errou.. senha invalida, tente um numero menor ')
    
//     }else if(senha < senhaSecreta){
    
//         alert('Errou.. senha invalida, tente um numero maior ')
//     }



// while(senha != senhaSecreta){
    
//     var senha = prompt('Digite um a senha ')

//     if(senhaSecreta == senha){

//         alert(senhaSecreta +' Parabens você acertou !..')
    
//     }else if(senha > senhaSecreta){
    
    
//         alert('Errou.. senha invalida, tente um numero menor ')
    
//     }else if(senha < senhaSecreta){
    
//         alert('Errou.. senha invalida, tente um numero maior ')
//     }
  
// }



/////////////////////////////////////

// var jogar = prompt('Quer jogar?(s/n)');
// if(jogar == 's'){
  
//   var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
//   var iterador = 0;
//   console.log(numeroSecreto);
  
//   while(chute != numeroSecreto){
    
//     if(iterador != 0){
//       alert('Você já fez' + iterador + 'tentativas!')
//     }
    
//     var chute = prompt('Digite um número entre 1 e 1000');
    
//     if (chute == numeroSecreto){
//       alert('Acertou!');
//     } else if (chute > numeroSecreto){
//          alert('O número secreto é menor que ' + chute);
//     } else if (chute < numeroSecreto){
//          alert('O número secreto é maior que ' + chute);
//     }