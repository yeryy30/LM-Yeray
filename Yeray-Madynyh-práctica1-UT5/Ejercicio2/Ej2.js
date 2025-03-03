function verAsignaturas() {
    var alumnos = Array.from(arguments);

    if (alumnos.length === 0) {
        console.log("No hay datos para mostrar");
        return;
    }

    for (var i = 0; i < alumnos.length; i++) {
        var alumno = alumnos[i];
        var nombre = alumno[0];
        var curso = alumno[1];
        var asignaturas = alumno.slice(2);

        console.log(nombre + " - " + curso + " - asignaturas: " + asignaturas.join(' / '));
    }
}

verAsignaturas(
    ["Sara", "DAMA", "Programación", "ED"],
    ["Martín", "DAMB", "Programación", "LM", "ED", "BD", "IPE", "SI"],
    ["Álvaro", "Semi", "BD"]
);

verAsignaturas();