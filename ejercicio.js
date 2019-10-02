// Escribe un programa de una sola línea que haga que aparezca en la
// pantalla un aler t que diga « Bienvenido al mundo de Javascript »

// window.alert("Bienvenido al mundo de Javascript");

// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto

// document.write('Hola Mundo');

// 3. Escribe un programa de una sola línea que escriba en la pantalla el resul de 13 + 25

// document.write(13+25);

// 4. Escribe un programa de dos líneas que pida el nombre del usuario con un
// prompt y escriba un texto que diga «Hola + nombreUsuario »

// var nombre = prompt("Escribe tu nombre");
// document.write("Hola "+nombre);

// 5. Escribe un programa que pida dos números y escriba en la pantalla cual es
// el mayor

// var num1= prompt("Ingrese un número")
// var num2= prompt("Ingrese otro número")

// if (num1 > num2) {
//     document.write("El mayor es",num1)
// }else if (num1 == num2) {
//     document.write("Son iguales")
// }else{
//     document.write("Elmayor es",num2)
// }

// Escribe un programa que pida 3 números y escriba en la pantalla el mayor
// de los tres

var num1= prompt("Ingrese un número")
var num2= prompt("Ingrese un número")
var num3= prompt("Ingrese un número")

if (num1 > num2 > num3) {
        document.write("El mayor es",num1)
    }else if (num1 < num2 > num3) {
        document.write("El mayor es",num2)
    }else{
        document.write("Elmayor es",num3)
    }


