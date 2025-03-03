function Ejercicio1(cadena, booleano, funcion, array) {
    if (typeof cadena != 'string' || typeof booleano != 'boolean' || typeof funcion != 'function')
    {
        console.log("Error: El segundo parametro no es correcto");
    }
    
    if (booleano) {
        let producto = 1;
        for (let i = 0; i < array.length; i++) {
            producto *= array[i];
        }

        if (producto > 100) {
            if (cadena.includes('a')) {
                console.log("La 'a' no está permitida.");
            } else {
                console.log("Muy bien no has usado la 'a'.");
            }
        } else {
            console.log("El resultado de tu array es insuficiente para comprobar la cadena.");
        }

    } else {
        funcion();
    }
}