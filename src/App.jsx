import { Fragment, useState } from "react";
import "./App.css";
import { FaCode, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
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

function App() {
   const [menu, setMenu] = useState(false)

   const handleMenuClick = ()=> setMenu(false)
   return (
      <Fragment>
         <header className="header">
            <button className="btn btn-menu" onClick={()=> setMenu(!menu)}>
               <IoIosMenu className="icon-menu" />
            </button>
            <nav className={menu ? "nav mostrar-nav" : "nav"}>
               <a className="btn btn-nav" href="#inicio" onClick={handleMenuClick}>
                  Inicio
               </a>
               <a className="btn btn-nav" href="#sobremi" onClick={handleMenuClick}>
                  Sobre mí
               </a>
               <a className="btn btn-nav" href="#proyectos" onClick={handleMenuClick}>
                  Proyecto
               </a>
               <a className="btn btn-nav" href="#contacto" onClick={handleMenuClick}>
                  Contacto
               </a>
            </nav>
         </header>
         <section className="inicio" id="inicio">
            <div className="box-inicio">
               <FaCode className="logo" />
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
                           className="btn-social"
                        >
                           <FaGithub className="icon-social" />
                        </a>
                        <a
                           href="https://www.linkedin.com/in/hernan-garcete-371109164/"
                           target="_blank"
                           rel="noopener"
                           className="btn-social"
                        >
                           <FaLinkedinIn className="icon-social" />
                        </a>
                        <a
                           href="https://wa.me/595991305595"
                           target="_blank"
                           rel="noopener"
                           className="btn-social"
                        >
                           <FaWhatsapp className="icon-social" />
                        </a>

                        <a className="btn" href={cv} target="_blank">
                           Ver CV
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

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
                        className="btn"
                     >
                        Ver Demo
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
                        className="btn"
                     >
                        Ver Demo
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
                        className="btn"
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
                     className="btn-social"
                  >
                     <FaGithub className="icon-social" />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/hernan-garcete-371109164/"
                     target="_blank"
                     rel="noopener"
                     className="btn-social"
                  >
                     <FaLinkedinIn className="icon-social" />
                  </a>
                  <a
                     href="https://wa.me/595991305595"
                     target="_blank"
                     rel="noopener"
                     className="btn-social"
                  >
                     <FaWhatsapp className="icon-social" />
                  </a>

                  <a className="btn" href={cv} target="_blank">
                     Ver CV
                  </a>
               </div>
            </div>
         </section>
      </Fragment>
   );
}

export default App;
