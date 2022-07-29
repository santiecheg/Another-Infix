alert("Escape Room")
let intentos=5;
let vida=5;
let actual=101
actual=parseInt(prompt("Adivina un número de 1 a 100 para escapar"));
while (actual!=25){
    
    if (actual<=24){alert("oooops..."+" "+actual+" "+"No era, es un numero mas grande")};
    if (actual>=26){alert("oooops..."+" "+actual+" "+"No era, es un numero mas chico")};
    if (vida==1){alert("No conseguiste adivinar pero igualmente pudiste escapar");break}; 
    if (actual==25){alert("Adivinaste, pudiste escapar");break}

    vida=vida-1;
    intentos=vida;
    alert("Intenta de nuevo, te quedan"+" "+vida+" "+"intentos");
    actual=prompt("Bueno indica otro numero para intentar");
    }
alert("Eres libre");