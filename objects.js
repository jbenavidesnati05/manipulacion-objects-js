console.log("hola");

let alumnos = 
[
    {nombre:"juanes", edad:24},   
    {nombre:"andres", edad:25},   
    {nombre:"thomas", edad:26},   
];

function agregarAlumnos(){
    let alumno = {nombre:"juan", edad:23}   
    alumnos.push(alumno)
}

agregarAlumnos()
console.log(alumnos);
console.log(alumnos.length);

for (const alumno in alumnos) {
    if (alumnos.hasOwnProperty.call(alumnos, alumno)) {
        const element = alumnos[alumno];
     console.log(element.edad);   
    }
}


