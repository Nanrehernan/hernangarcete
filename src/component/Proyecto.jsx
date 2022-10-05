const Proyecto = ({ proyecto }) => {
    return (
        <div className="card-proyecto">
            <div className="card-header">
                <img src={proyecto.imagen} />
            </div>
            <div className="card-footer">
                <div>
                    <h4>{proyecto.titulo}</h4>
                    <label>{proyecto.informacion}</label>
                </div>
                <a
                    href={proyecto.link}
                    target="_blank"
                    className="btn"
                >
                    {proyecto.textoLink}
                </a>
            </div>
        </div>
    )
}

export default Proyecto