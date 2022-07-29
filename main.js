
//CONTEO + Virus jajaja, quitar el "<" y se hará exponencial

//for (m=2;m<=10;m++){
//    alert(m);
//if (m==5){break}
//}

//WHILE 

//let date=prompt("INGRESE DATO")
//while (date!="505050"){
//    alert("Ingresaste"+" "+date)
//    date=prompt("INGRESE DATO")
//}

alert("Escape Room")
let intentos=5
let vida=5
let actual=prompt("Adivina un número de 1 a 100 para escapar");
while (actual!=25){
    alert("ooops.. no era ese numero intenta de nuevo, te quedan"+" "+vida+" "+"vidas");
    actual=prompt("Bueno indica otro numero para intentar")
    vida=intentos-1;
    intentos=vida
 if (vida<=0){break}
}
alert("vaya,se te acabaron los intentos....igualmente eres libre")
