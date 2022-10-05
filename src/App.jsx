import { Fragment } from "react";
import "./App.css";
import Header from "./component/Header";
import Inicio from "./component/Inicio";
import SobreMi from "./component/SobreMi";
import Proyectos from "./component/Proyectos";
import Contacto from "./component/Contacto";

function App() {

   return (
      <Fragment>
         <Header />
         <Inicio />
         <SobreMi />
         <Proyectos />
         <Contacto />
      </Fragment>
   );
}

export default App;
