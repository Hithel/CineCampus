import renderPelicula from "./renderPelicula.js";

const URL = "http://localhost:3000"
const headers = new Headers ({'Content-Type': 'application/json'});

export async function getPelicula(){
    let data = await (await fetch(`${URL}/peliculas`)).json();
    renderPelicula(data);
}


export async function postPelicula(data){
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }

    let personas = await (await fetch(`${URL}/peliculas`,config)).json();

}

export async function deletePelicula(div,id){

    let data = Object.fromEntries(new FormData(div.target));

    let config = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    };

    let del = await(await fetch(`${URL}/peliculas/${id}`,config)).json();
}

export async function ActualizarPelicula(data,id) {

    let config = {
        method: 'PUT',
        headers: headers,
        body:JSON.stringify(data)
    }

    let act = await (await fetch(`${URL}/peliculas/${id}`,config)).json();
}