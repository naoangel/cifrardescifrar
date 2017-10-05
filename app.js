

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
    var code = prompt("Ingrese el código a trabajar"); //solicita código a 
	var codeAscii =[];  // Var para los números del código
    var asciiTo =[]; //Var para tener los números transformados por la fórmula.                  
    var newCode =[];  //Var para tener las letras, resultado.
         for(i=0; i<code.length; i++){ //for para recorrer el código
		codeAscii[i] = code[i].charCodeAt();  // en codeAscii guardo cada valor de code en número de ASCII                                      
         asciiTo[i] = (codeAscii[i] - 65 + 33)%26 + 65;   //tomar cada valor y transformarlo
         newCode[i] = asciiTo[i].fromCharCode(); // volverlo a letra otra vez.

	}
	 	   return newCode;
	 	}
 

	

function decipher(code){
    var code = prompt("Ingrese el código a trabajar"); //solicita código a 
	var newCodeNum = "";

}
