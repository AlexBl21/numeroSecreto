function asignarElementos(elemento,texto){
    let elementohtml= document.querySelector(elemento);
    elementohtml.innerHTML=texto;
}

asignarElementos('h1','Juego del numero secreto');
asignarElementos('p','elige un numero del 1 al 10');

function generarNumero(){
    return  Math.floor(Math.random()*10)+1;
}
let intentos=0;
let numeroSecreto= generarNumero();
console.log(numeroSecreto);

function intentoDeUsuario(){
    let numeroUsuario = document.getElementById('nUsuario').value;
    intentos++;
    if(numeroUsuario<numeroSecreto){
        asignarElementos('p','el numero es mayor');
        limpiarCaja();
    }
    else if(numeroUsuario>numeroSecreto){
        asignarElementos('p','el numero es menor');
        limpiarCaja();
    }
    else{
        asignarElementos('p',`acertaste, lo hiciste con ${intentos } ${(intentos==1)?` intento` : `intentos`} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
    console.log(intentos);
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#nUsuario')
    valorCaja.value='';
}

function reiniciarJuego(){
    limpiarCaja();
    asignarElementos('p','elige un numero del 1 al 10');
    numeroSecreto= generarNumero();
    intentos=1;
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
//---------------------------------------------------------------------------------
// let n=prompt('tu nombre');
// saludar(n)
// function saludar (nombre){
//     return alert('hola '+nombre);
// }
//-----------------------------------------
// let n=parseInt(prompt('dame un numero'));
// function doblar(n){
//     return alert('el doble es '+ n*2)
// }
// doblar(n)
//-----------------------------------------

// let n1=parseInt(prompt('dame un numero'))
// let n2=parseInt(prompt('dame un numero'))
// let n3=parseInt(prompt('dame un numero'))

// promedio(n1,n2,n3);
//  function promedio(n1,n2,n3){
//     return alert('el promedio es : '+((n1+n2+n3)/3))
//  }
//-----------------------------------------

// let n1=parseInt(prompt('dame un numero'));
// let n2=parseInt(prompt('dame un numero'));
// mayor(n1,n2);

// function mayor(n1,n2){
//     if(n1>n2){
//         return alert('el ' +n1+' es mayor')
//     }
//     else{
//         return alert('el ' +n2+' es mayor')
//     }
// }
//-----------------------------------------
// let n=parseInt(prompt('dame un numero'));
// function doblar(n){
//     return alert('el cuadrado es '+ n*n)
//  }
// doblar(n)







