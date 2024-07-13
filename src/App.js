import "./App.css";
import Testimonio from "./components/Testimonio";

let datos = [
  {
    nombre: "Shawn Wang",
    pais: "Singapur",
    imagen: "shawn",
    cargo: "Ingeniera de Software",
    empresa: "Amazon",
    testimonio:
      "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.",
  },
];

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre={datos[0].nombre}
          pais={datos[0].pais}
          imagen={datos[0].imagen}
          cargo={datos[0].cargo}
          empresa={datos[0].empresa}
          testimonio={datos[0].testimonio}
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software.  llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. "
          part="Era todo lo que necesitaba "
          testimonio2="para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </div>
    </div>
  );
}

export default App;
