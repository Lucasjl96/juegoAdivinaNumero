// variables
let numeroMaximoPosible = 100;

let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;

let numeroUsuario = 0;
//contador
let contadorDeIntentos = 1; //partimos de 1 porque minimamente va a realizar un intento
//let palabraVeces = "vez";
let maximosIntentos = 6;

console.log(numeroSecreto);

//VAMOS A VER BUCLES


while (numeroUsuario != numeroSecreto){ 


    numeroUsuario = parseInt(prompt(`Escribe un numero entre 1 y ${numeroMaximoPosible}:`));



    console.log(numeroUsuario);

    /*
    Este codigo realiza la comparacion
    */

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroSecreto}. Lo hiciste en ${contadorDeIntentos} ${contadorDeIntentos == 1 ? 'vez' : 'veces' }` ); //acertamos
        //ejemplo de template strings
    }

    else{
        if (numeroUsuario > numeroSecreto){
            alert('el numero secreto es menor');
        } 
        else{
            alert('el numero secreto es mayor');
        }
         //incrementa el contador cuando no acierta
        //contadorDeIntentos = contadorDeIntentos + 1;
        //contadorDeIntentos +=1;
        contadorDeIntentos++;
        //palabraVeces = "veces";
        if (contadorDeIntentos > maximosIntentos){
            alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
            break; //rompe el bucle
        }
    }

}
    //alert('No acertaste el numero'); //no acertamos

        
    