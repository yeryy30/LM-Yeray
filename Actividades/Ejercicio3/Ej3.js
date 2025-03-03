function ejercicio4(lista1, lista2) {
    let todosIncluidos = true;
    let ningunoIncluido = true;

    lista1.forEach(nombre => {
        if (lista2.includes(nombre)) {
            ningunoIncluido = false;
        } else {
            todosIncluidos = false;
        }
    });

    if (todosIncluidos) {
        console.log("Todos los nombres del primer array están en el segundo.");
    } else if (ningunoIncluido) {
        console.log("Ninguno de los nombres del primer array está en el segundo.");
    } else {
        console.log("Algunos nombres del primer array están en el segundo.");
    }
}

    //Ejemplos de llamadas
ejercicio4(
    ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"],
    ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"]
);

ejercicio4(
    ["Lina Armida Machado Iglesias", "Apolonia Santiago Buendía", "Poncio Cobo Herrera", "Rafaela Seco Cañas", "Fulano de Tal"],
    ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"]
);

ejercicio4(
    ["Elisabet Ricart Monreal", "Poncio Cobo Herrera", "Isaac Talavera Luna"],
    ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"]
);