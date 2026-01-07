import MaquetaPeliculas from "./MaquetaPeliculas";
import "./styles.css";

export default function ListaPeliculas({ peliculas, onSeleccionar }) {
  return (
    <div id="contenedor">
      {peliculas.map(p => (
        <MaquetaPeliculas
          key={p.imdbID}
          pelicula={p}
          onClick={() => onSeleccionar(p.imdbID)}
        />
      ))}
    </div>
  );
}