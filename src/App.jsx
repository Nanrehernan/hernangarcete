import { Fragment } from "react";
import "./App.css";
import { FaCode, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import reactjs from "./assets/react.svg";
import nodejs from "./assets/node.svg";
import html from "./assets/html.svg";
import javascript from "./assets/javascript.svg";
import sql from "./assets/sql.svg";
import mysql from "./assets/mysql.svg";
import git from "./assets/git.svg";
import figma from "./assets/figma.svg";
import css from "./assets/css.svg";
import appNotas from "./assets/app-notas.png";
import pokemon from "./assets/pokemon.png";
import orgChart from "./assets/org-chart.png";
import cv from "./assets/hernangarcete.pdf";

const initialConfig = {
   socialSize: 30,
   color: "#eeeeee",
};

function App() {
   return (
      <Fragment>
         <header>
            <nav>
               <a href="#">Inicio</a>
               <a href="#sobremi">Sobre mí</a>
               <a href="#proyectos">Proyecto</a>
               <a href="#contacto">Contacto</a>
            </nav>
         </header>
         <section className="inicio">
            <div className="box">
               <FaCode color="#2196f3" fontSize={100} />
               <div className="box-info">
                  <h1>
                     Hola!!, soy <span>Hernan Garcete</span>, desarrollador{" "}
                     <span>javascript</span>
                  </h1>
                  <div className="social-box">
                     <div className="social">
                        <a
                           href="https://github.com/Nanrehernan"
                           target="_blank"
                           rel="noopener"
                        >
                           <FaGithub
                              fontSize={initialConfig.socialSize}
                              color={initialConfig.color}
                           />
                        </a>
                        <a
                           href="https://www.linkedin.com/in/hernan-garcete-371109164/"
                           target="_blank"
                           rel="noopener"
                        >
                           <FaLinkedinIn
                              fontSize={initialConfig.socialSize}
                              color={initialConfig.color}
                           />
                        </a>
                        <a
                           href="https://wa.me/595991305595"
                           target="_blank"
                           rel="noopener"
                        >
                           <FaWhatsapp
                              fontSize={initialConfig.socialSize}
                              color={initialConfig.color}
                           />
                        </a>

                        <a className="cv" href={cv} target="_blank">
                           Ver CV
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="sobremi">
            <h2>Sobre mí</h2>
            <div className="texto-box">
               <p>
                  Mi nombre es <span>Hernan Garcete Barrios</span>. Soy
                  desarrollador <span>javascript</span> y amante del desarrollo
                  móvil. He trabajado en mis propios proyectos con{" "}
                  <span>ReactJS</span>, <span>React Native</span> y{" "}
                  <span>NodeJs</span>, utilizando bases de datos en{" "}
                  <span>MYSQL</span>. También estoy preparado para aprender
                  nuevas tecnologías sin ningún problema. Mis pasatiempos esta
                  relacionado en aprender y buscar sobre las novedades
                  tecnologicas. Me considero una persona muy implicada y con
                  capacidad para detectar y solucionar problemas.
               </p>
            </div>
            <h3>Tecnologías</h3>
            <div className="habilidades">
               <figure>
                  <img src={reactjs} />
                  <label>ReactJs</label>
               </figure>

               <figure>
                  <img src={nodejs} />
                  <label>NodeJs</label>
               </figure>

               <figure>
                  <img src={javascript} />
                  <label>Javascript</label>
               </figure>

               <figure>
                  <img src={html} />
                  <label>HTML</label>
               </figure>

               <figure>
                  <img src={sql} />
                  <label>SQL</label>
               </figure>

               <figure>
                  <img src={mysql} />
                  <label>MYSQL</label>
               </figure>

               <figure>
                  <img src={figma} />
                  <label>Figma</label>
               </figure>

               <figure>
                  <img src={css} />
                  <label>CSS</label>
               </figure>

               <figure>
                  <img src={git} />
                  <label>Git</label>
               </figure>
            </div>
         </section>

         <section id="proyectos">
            <h2>Proyectos</h2>
            <div className="carrusel">
               <div className="contenedor-info-carrusel">
                  <figure className="contenedor-imagen">
                     <img src={pokemon} />
                  </figure>

                  <div className="info">
                     <h4>Pokemon</h4>
                     <label>Proyecto realizo con React</label>
                     <a
                        href="https://nanrehernan.github.io/pokemon-react/"
                        target="_blank"
                     >
                        Ver
                     </a>
                  </div>
               </div>

               <div className="contenedor-info-carrusel">
                  <figure className="contenedor-imagen">
                     <img src={appNotas} />
                  </figure>

                  <div className="info">
                     <h4>App Tareas</h4>
                     <label>Proyecto realizado en javascript</label>
                     <a
                        href="https://nanrehernan.github.io/lista-de-tareas-javascript/"
                        target="_blank"
                     >
                        Ver
                     </a>
                  </div>
               </div>

               <div className="contenedor-info-carrusel">
                  <figure className="contenedor-imagen">
                     <img src={orgChart} />
                  </figure>

                  <div className="info">
                     <h4>Organigrama de proyectos</h4>
                     <label>Organigrama de Proyectos en react</label>
                     <a
                        href="https://github.com/Nanrehernan/react-org-chart"
                        target="_blank"
                     >
                        Ver Git Hub
                     </a>
                  </div>
               </div>
            </div>
         </section>

         <section id="contacto">
            <h2>Contacto</h2>

            <div className="social-box">
               <div className="social">
                  <a
                     href="https://github.com/Nanrehernan"
                     target="_blank"
                     rel="noopener"
                  >
                     <FaGithub
                        fontSize={initialConfig.socialSize}
                        color={initialConfig.color}
                     />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/hernan-garcete-371109164/"
                     target="_blank"
                  >
                     <FaLinkedinIn
                        fontSize={initialConfig.socialSize}
                        color={initialConfig.color}
                     />
                  </a>
                  <a href="https://wa.me/595991305595" target="_blank">
                     <FaWhatsapp
                        fontSize={initialConfig.socialSize}
                        color={initialConfig.color}
                     />
                  </a>

                  <a className="cv" href={cv} target="_blank">
                     Ver CV
                  </a>
               </div>
            </div>
         </section>
      </Fragment>
   );
}

export default App;
