# cifrardescifrar
Ejercicio para cifrar descrifrar códigos ASCII... 


Diagrama de flujo -> https://www.lucidchart.com/invitations/accept/ba47ff1f-97b0-467b-8a1e-7e3cb229f550


Pseudo código.

Se inicia el programa con una función Main, esta función permite crear  un loop que ayude en caso de 
que el usuario ingrese un dato incorrecto en el prompt que nos entrega la primera variable, answer.
luego usamos condicional if, para poder escoger cuál es la siguiente función a ejecutar, si cipher o decipher.
Mientras la respuesta sea correcta ejecutará una de las dos siguientes funciones, en caso contrario, volverá a pedir la información solicitada.


En caso de escoger cifrar, se ejecuta función cipher, en ella usamos un prompt para solicitar el código con el que trabajaremos, queda guardado en la variable code.
declaramos algunas variables para poder almacenar la información en medida se vaya trabajando ( codeAscii, asciiTo, newCode). 
para poder trabajar uno a uno los caracteres, utilizamos un ciclo for que recorra code, y aplicamos .charCodeAt(), para que nos devuelva los números correspondientes en Ascii. Esto queda guardado en codeAscii.
a codeAscii, se vuelve a recorrer y le aplicamos a cada número la fórmula para que nos de el nuevo número., estos nuevos números quedan guardados en asciiTo.
Para obtener las nuevas letras y y almacenarlas en newCode, aplicamos String.fromCharCode a asciiTo.
y fuera del ciclo for (porque de lo contrario de nos cortaal primer resultado que entregue) 
usamos return para devolver el resultado en un alert, y sería newCode con join aplicado para que se devuelva todo junto como un nuevo string. 

Para en caso de escoger descifrar, el proceso en sí, es idéntico a cipher, lo diferente, es el nombre de las variables y la fórmula a aplicar.
