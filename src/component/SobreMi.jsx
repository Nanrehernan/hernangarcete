import reactjs from "../assets/react.svg";
import nodejs from "../assets/node.svg";
import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import sql from "../assets/sql.svg";
import mysql from "../assets/mysql.svg";
import git from "../assets/git.svg";
import figma from "../assets/figma.svg";
import css from "../assets/css.svg";

const SobreMi = () => {
    return (
        <section id="sobremi">
            <h2>Sobre mí</h2>
            <p>
                Mi nombre es <span>Hernan Garcete Barrios</span>. Soy
                desarrollador <span>javascript</span> y amante del desarrollo
                móvil. He trabajado en mis propios proyectos con{" "}
                <span>ReactJS</span>, <span>React Native</span> y{" "}
                <span>NodeJs</span>, utilizando bases de datos en{" "}
                <span>MYSQL</span>. También estoy preparado para aprender nuevas
                tecnologías sin ningún problema. Mis pasatiempos esta relacionado
                en aprender y buscar sobre las novedades tecnologicas. Me
                considero una persona muy implicada y con capacidad para detectar
                y solucionar problemas.
            </p>
            <h3>Tecnologías</h3>
            <div className="box-tecnologia">
                <div className="card">
                    <div className="img-tecnologia">
                        <img src={reactjs} alt="reactjs" />
                    </div>
                    <div className="titulo-tecnologia">
                        <p>ReactJs</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img-tecnologia">
                        <img src={nodejs} alt="nodejs" />
                    </div>
                    <div className="titulo-tecnologia">
                        <p>NodeJs</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img-tecnologia">
                        <img src={javascript} alt="javascript" />
                    </div>
                    <div className="titulo-tecnologia">
                        <p>Javascript</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img-tecnologia">
                        <img src={html} alt="html" />
                    </div>
                    <div className="titulo-tecnologia">
                        <p>HTML</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img-tecnologia">
                        <img src={css} alt="css" />
                    </div>
                    <div className="titulo-tecnologia">
                        <p>CSS</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img-tecnologia">
                        <img src={sql} alt="sql" />
                    </div>
                    <div className="titulo-tecnologia">
                        <p>SQL</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img-tecnologia">
                        <img src={mysql} alt="mysql" />
                    </div>
                    <div className="titulo-tecnologia">
                        <p>MYSQL</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img-tecnologia">
                        <img src={git} alt="git" />
                    </div>
                    <div className="titulo-tecnologia">
                        <p>Git</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img-tecnologia">
                        <img src={figma} alt="figma" />
                    </div>
                    <div className="titulo-tecnologia">
                        <p>Figma</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobreMi