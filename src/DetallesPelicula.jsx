import { useEffect,useState } from "react";
import "./styles.css";

export default function DetallesPelicula({id, cerrar}){

    const api_key = "ea005db6";

    const [data,setData] = useState(null);
    const [favoritos,setFavoritos] = useState(JSON.parse(localStorage.getItem("peliculasfavs")) || []);

    useEffect(() => {
        fetch("https://www.omdbapi.com/?i="+id+"&apikey="+api_key)
        .then(res => res.json())
        .then(setData);
    }, [id]);

    const mostrarFavoritos = () => {
        let nuevosFavs;

        if(favoritos.includes(data.imdbID)){
            nuevosFavs = favoritos.filter(f => f !== data.imdbID);
        }else{
            nuevosFavs = [...favoritos, data.imdbID];
        }
        setFavoritos(nuevosFavs);
        localStorage.setItem("peliculasfavs", JSON.stringify(nuevosFavs));
    }

    if(!data){
        return null;
    }

    return(
        <>
            <div id="detalles">
                <div id="contenidoDetalles" onClick={e => e.stopPropagation()}>
                    <button onClick={cerrar} id="cerrar">X</button>
                
                    <h2>{data.Title}</h2>
                    <img src={data.Poster} />
                    <p>Sinopsis: {data.Plot}</p>
                    <p>Director: {data.Director}</p>

                </div>
            </div>
        </>
    )
}