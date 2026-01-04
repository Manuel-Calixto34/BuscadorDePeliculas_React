import { useEffect, useState } from "react";

const API_KEY = "ea005db6";

export default function UsePeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("");
  const [pagina, setPagina] = useState(1);

  const buscar = (texto, tipoSeleccionado) => {
    setBusqueda(texto);
    setTipo(tipoSeleccionado);
    setPagina(1);

    fetch(
      `https://www.omdbapi.com/?s=${texto}${tipoSeleccionado}&apikey=${API_KEY}&page=1`
    )
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setPeliculas(data.Search);
        }
      });
  };

  const verFavoritos = () => {
    const favs = JSON.parse(localStorage.getItem("peliculasfavs")) || [];
    setPeliculas([]);

    favs.forEach(id => {
      fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setPeliculas(prev => [...prev, data]);
        });
    });
  };

  // Scroll infinito
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        const nextPage = pagina + 1;

        fetch(
          `https://www.omdbapi.com/?s=${busqueda}${tipo}&apikey=${API_KEY}&page=${nextPage}`
        )
          .then(res => res.json())
          .then(data => {
            if (data.Search) {
              setPeliculas(prev => [...prev, ...data.Search]);
              setPagina(nextPage);
            }
          });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pagina, busqueda, tipo]);

  return { peliculas, buscar, verFavoritos };
}
