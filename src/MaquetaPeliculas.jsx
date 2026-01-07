import "./styles.css";
export default function MaquetaPeliculas({pelicula,onClick}){
    return(
        <>
        <div onClick={onClick}>
            <img src={pelicula.Poster} alt="poster pelicula"/>
            <h3>{pelicula.Title}</h3>
        </div>
        </>
    )
}