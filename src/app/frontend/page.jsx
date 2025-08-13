import Link  from "next/link";
import estilos from "./frontend.module.css";

export default function FrontEnd() {
    return (
            
        <div className={estilos.container_frontend}>
            <h2>React.JS</h2>
            <p>
                O react.js é uma biblioteca JavaEcript utilizada para construir interface de usuários interativas e eficientes. Ele é amplamente adotado devido à sua abordagem baseada em componentes e a falcilidade de criar aplicativos escaláveis. o React permite o desenvolvimento de Single Page Applications (SPAs) de forma eficiente e flexivel.
            </p>

            <Link
            href="https://www.devmedia.com.br/carreira-programador/?slug=front-end" target="_blank"
            >
                Guia de Front-end
            </Link>
            <Link className="link_retorno" href="/">Voltar</Link>
        </div>
    )
}