import { proyectoList } from "../data/data"
import Proyecto from "./Proyecto"

const Proyectos = () => {
    return (
        <section id="proyectos">
            <h2>Proyectos</h2>
            <div className="box-proyecto">
                {proyectoList.map((proyecto, index)=> <Proyecto key={index} proyecto={proyecto} />)}
            </div>
        </section>
    )
}

export default Proyectos