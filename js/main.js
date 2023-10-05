import {databasea} from "./datubasea.json"


let titulo = document.getElementById("tituloEntrada")
let autor = document.getElementById("autorEntrada")
let isbn = document.getElementById("isbnEntrada")
let fecha = document.getElementById("fecha")
let imagen = document.getElementById("imagen")

let derecha = document.getElementById("adelante")
let izquierda = document.getElementById("atras")

let indiceBD =0;
let urlbase = "https://covers.openlibrary.org/b/olid/"

function VisualizarLibro(){
    titulo.value =  databasea[indiceBD].titulo;
    autor.value = databasea[indiceBD].autor;
    isbn.value =databasea[indiceBD].isbn;
    fecha.value = databasea[indiceBD].fecha;
    imagen.src = urlbase+databasea[indiceBD].filename;
}

function cargar(){
    VisualizarLibro();
    derecha.addEventListener("click", (event)=> {
        if(indiceBD<databasea.length-1){
            indiceBD++;
        }
    });
    VisualizarLibro();
    izquierda.addEventListener("click", (event)=> {
        if(indiceBD>0{
            indiceBD--;
        }
    })
    VisualizarLibro();
}