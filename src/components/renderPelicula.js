
export default function renderPelicula(data) {

    let DivPelicula = document.querySelector('#DivPelicula');

    data.forEach((peli) => {
    
        let div = document.createElement('div');
        div.setAttribute("class","card col-12 col-md-10 col-sm-6 col-lg-4 col-xl-3");
        div.setAttribute("style","width: 18rem;");

        div.innerHTML = `
            <img src="${peli.imagen}" class="card-img-top">
            <div class="card-body" id="${peli.id}">
                <h5 class="card-title">${peli.titulo}</h5>
                <p class="card-text">${peli.genero}</p>
                <p class="card-text">${peli.duracion}</p>
                <p class="card-text">${peli.director}</p>
                <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
                <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2">
            </div>
        `;
        DivPelicula.appendChild(div);
    });
}

