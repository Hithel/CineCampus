import {postPelicula,getPelicula,deletePelicula} from "./peticiones.js";

let form = document.querySelector('#form');
let DivPelicula = document.querySelector('#DivPelicula');

getPelicula();

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    postPelicula(data)
})

DivPelicula.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let div = e.target.closest('div');
    let id = div.id
    let accion = e.target.dataset.accion;

    

    // if (accion === "Eliminar"){
    //     deletePelicula(id);
    // }

});

