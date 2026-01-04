import './styles.css'

export default function Landing({onAcceder}){
    return(
        <div id="landing">
            <h1>CINE COSMIC</h1>
            <p>Busca y guarda tus películas y series favoritas de todo el universo</p>
            <button onClick={onAcceder}> Acceder al buscador</button>
        </div>
    ) 
}