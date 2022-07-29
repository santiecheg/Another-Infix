alert("Escape Room")
let intentos=5;
let vida=5;
let incorrecto="";

let actual=parseInt(prompt("Adivina un número de 1 a 100 para escapar"));
while (actual!=25){
    if (actual=25){alert("Felicitaciones!! conseguiste adivinar y pudiste escapar");break};
    vida=vida-1;
    intentos=vida;
    alert("ooops.. no era ese numero intenta de nuevo, te quedan"+" "+vida+" "+"intentos");
    actual=prompt("Bueno indica otro numero para intentar");
    if (vida==1){alert("No conseguiste adivinar pero igualmente pudiste escapar");break}; 
    }
alert("Eres libre");