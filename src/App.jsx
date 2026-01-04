import { useState } from "react";
import Landing from "./Landing";
import Buscador from "./Buscador";
import ListaPeliculas from "./ListaPeliculas";
import DetallesPelicula from "./DetallesPelicula";
import UsePeliculas from "./UsePeliculas";

export default function App() {
  const [mostrarLanding, setMostrarLanding] = useState(true);
  const [seleccionada, setSeleccionada] = useState(null);

const resultado = UsePeliculas();

const peliculas = resultado.peliculas;
const buscar = resultado.buscar;
const verFavoritos = resultado.verFavoritos;


  if (mostrarLanding) {
    return <Landing onAcceder={() => setMostrarLanding(false)} />;
  }

  return (
    <>
      <Buscador buscar={buscar} verFavoritos={verFavoritos} />

      <ListaPeliculas
        peliculas={peliculas}
        onSeleccionar={setSeleccionada}
      />

      {seleccionada && (
        <DetallesPelicula
          id={seleccionada}
          cerrar={() => setSeleccionada(null)}
        />
      )}
    </>
  );
}
