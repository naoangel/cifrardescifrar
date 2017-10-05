main();

function main(){
  do {
  	var answer = prompt("Ingrese opción a realizar /n 1 Cifrar  /n 2 Descifrar" );
    if(answer != ""){
    	if (answer = 1){
    		cipher();
    	}  else if (answer=2){
    		decipher();
    	}  else {
    		alert("Ingrese una opción válida");
    	}
       }
	 }while(answer =="" || (answer !="1" && answer !="2"));
   } 	
 
  
function cipher(){
    var code = prompt("Ingrese el código a trabajar"); //solicita código  
	var codeAscii =[];  // Var para los números del código
    var asciiTo =[]; //Var para tener los números transformados por la fórmula.                  
    var newCode =[];  //Var para tener las letras, resultado.
         for(i=0; i<code.length; i++){ //for para recorrer el código
		codeAscii[i] = code[i].charCodeAt();  // en codeAscii guardo cada valor de code en número de ASCII                                      
         asciiTo[i] = (codeAscii[i] - 65 + 33)%26 + 65;   //tomar cada valor y transformarlo
         newCode[i] = String.fromCharCode(asciiTo[i]); // volverlo a letra otra vez.

	}
	 	   return alert(newCode.join(''));
	 	}
 


function decipher(){
    var code = prompt("Ingrese el código a trabajar"); //solicita código a 
	var code2 = []; //Var para tener los números transformados por la fórmula. 
	var code3 = []; //Var para tener las letras, resultado.
    var finalCode = []; // se guarda en esta var el código resultado. 
	for(i=0; i<code.length; i++){ //for para recorrer el código
		code2[i] = code[i].charCodeAt();  // en codeAscii guardo cada valor de code en número de ASCII                                      
        code3[i] = (code2[i] -65 - 7 + 52)%26 + 65;  //aplica fórmula
        finalCode[i] = String.fromCharCode(code3[i]); // volverlo a letra otra vez.

	}
	 	   return alert(finalCode.join(''));  

}
