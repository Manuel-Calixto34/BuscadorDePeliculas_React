import { useEffect, useState } from "react"
export default function Buscador({buscar,verFavoritos}){
    const [texto,setTexto] = useState("");
    const [tipo,setTipo] = useState("");

    useEffect(() => {
        if (texto.length >= 3) {
            buscar(texto, tipo);
        }
    }, [texto, tipo]);


    return(
        <>
            <div id="box">
                <h2>Buscador de películas</h2>
                <input value={texto} onChange={e => setTexto(e.target.value)} placeholder="Buscar pelicula"></input>
                <button onClick={()=>buscar(texto,tipo)}>Buscar</button>
                <select onChange={e => setTipo(e.target.value)}>
                    <option value="&type=movie">Peliculas</option>
                    <option value="&type=series">Series</option>
                    <option value="">Cualquiera</option>
                </select>
                <button onClick={verFavoritos}>Ver favoritos</button>
            </div>
        </>
    );
}