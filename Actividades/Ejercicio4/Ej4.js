let alumnos = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Pedro', edad: 40 }
];

let alumnosConAsignaturas = alumnos.map(alumno => {
    let curso = prompt(`Introduce el curso de ${alumno.nombre}:`);
    let asignaturas = prompt(`Introduce las asignaturas de ${alumno.nombre} separadas por -:`).split('-');
    return {
        nombre: alumno.nombre,
        edad: alumno.edad,
        curso: curso,
        asignaturas: asignaturas
    };
});

console.log(alumnosConAsignaturas);