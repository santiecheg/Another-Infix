alert("Escape Room")
let intentos=5;
let vida=5;
let actual=101
actual=parseInt(prompt("Adivina un número de 1 a 100 para escapar"));
while (actual!=25){

    //Pistas
    if (((actual<101)&&(actual>0)) && (actual<=24)){alert("oooops..."+" "+actual+" "+"No era, es un numero mas grande")};
    if (((actual<101)&&(actual>0)) && (actual>=26)){alert("oooops..."+" "+actual+" "+"No era, es un numero mas chico")};
    
    //ANTI TONTOS
    if ((actual>=101)||(actual<=0)) {alert("solo números de 1 a 100... a los tontos no les resto intentos");
    vida=vida+1;};

    //VIDAS y CICLOS//
    if (vida==1){alert("No conseguiste adivinar pero igualmente pudiste escapar");break}; 
    vida=vida-1;
    intentos=vida;
    alert("Intenta de nuevo, te quedan"+" "+vida+" "+"intentos");
    actual=prompt("Bueno indica otro numero para intentar");
    }
    
if (actual==25){alert('Adivinaste! Felicitaciones, pudiste escapar')};
alert("Eres libre");