alert("Escape Room")
let intentos=5;
let vida=5;
let incorrecto="";

let actual=parseInt(prompt("Adivina un número de 1 a 100 para escapar"));
while (actual!=25){
    vida=vida-1;
    intentos=vida;
    alert("ooops.. no era ese numero intenta de nuevo, te quedan"+" "+vida+" "+"intentos");
    actual=prompt("Bueno indica otro numero para intentar");
 
    if (vida==1){alert("No conseguiste adivinar pero igualmente pudiste escapar");break};
    if (actual==25){alert("Lo has conseguido, pudiste escapar");break}

    for (incorrecto=1;incorrecto<=100;incorrecto++){
        while (actual!=incorrecto){alert("eso no era un numero.. no te quitaré intentos si eres tonto, venga prueba de nuevo");
        actual=incorrecto;
        actual=prompt("Indica otro NUMERO para continuar adivinando NUMEROS");
    break}
    }
 }
alert("Eres libre");