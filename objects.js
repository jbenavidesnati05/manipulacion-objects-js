
let alumnos = []

function guardar(){
    let nombre  = document.getElementById("nombre").value;
    let edad    = document.getElementById("edad").value;
    let id      = document.getElementById("id").value;
    
    if (nombre != "" && edad != "" && id != "") {
        let encontrado = alumnos.find(item => item.id == id)
        if(encontrado){
            console.log("ID YA EXISTE");
            limpiar()
        }else{
            alumnos.push({id: id, nombre:nombre, edad: edad})
            listar()
            limpiar()
        }
    }else{
        alert("ingrese todos los datos ")
    }
}

function eliminar(){
    let id = document.getElementById("id").value;
    let encontrado = alumnos.find(item => item.id == id)
    if(encontrado){
        alumnos.splice(encontrado,1)
        console.log("encontrado");
    }else{
        listar()
    }
}

function buscar(){

    if(alumnos.length == 0 ){
        alert("arreglo esta vacio")
    }else{
        alumnos.forEach(p => {
            encontrado = document.getElementById("id").value;
            if(encontrado != p.id ){
            }else{
                document.getElementById('nombre').value = p.nombre;
                document.getElementById('edad').value = p.edad;
            }
        });
    }
}

function listar(){
    alumnos.length == 0 ? console.log("vacio") : console.log(alumnos);
}

function limpiar(){
    document.getElementById('id').value = "";
    document.getElementById('nombre').value = "";
    document.getElementById('edad').value = "";
}

function mostrar(){
    alumnos.forEach(p => {
        console.log(`id: ${p.id} nombre: ${p.nombre} edad: ${p.edad}`);
    });
}
