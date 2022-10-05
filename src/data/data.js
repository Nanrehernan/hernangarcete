import cv from "../assets/hernangarcete.pdf";
import appTarea from "../assets/app-notas.png";
import pokemon from "../assets/pokemon.png";
import reactOrgChart from "../assets/org-chart.png";
import coin from "../assets/coin.jpeg"

export const iconList = [
    {
        href: "https://github.com/Nanrehernan",
        icon: "github"
    },
    {
        href: "https://www.linkedin.com/in/hernan-garcete-371109164/",
        icon: "linkedin" 
    },
    {
        href: "https://wa.me/595991305595",
        icon: "whatsapp" 
    },
    {
        href: cv,
        icon: "cv",
        class: "btn btn-cv"
    }
]

export const menuList = [
    {
        texto: "Inicio",
        referencia: "#inicio"
    },
    {
        texto: "Sobre mí",
        referencia: "#sobremi"
    },
    {
        texto: "Proyecto",
        referencia: "#proyectos"
    },
    {
        texto: "Contacto",
        referencia: "#contacto"
    }
]

export const proyectoList = [
    {
        titulo: "Pokemon",
        informacion: "Proyecto realizado en ReactJs, utilizando la API de Pokemon",
        link: "https://nanrehernan.github.io/pokemon-react/",
        textoLink: "Ver Demo",
        imagen: pokemon
    },
    {
        titulo: "App de Tareas",
        informacion: "Proyecto realizado en Javascript para gestionar tareas",
        link: "https://nanrehernan.github.io/lista-de-tareas-javascript/",
        textoLink: "Ver Demo",
        imagen: appTarea
    },
    {
        titulo: "Organigrama de Proyectos",
        informacion: "Proyecto realizado en ReactJs para gestionar Proyectos en Jerarquia",
        link: "https://github.com/Nanrehernan/react-org-chart",
        textoLink: "Ver Git Hub",
        imagen: reactOrgChart
    },
    {
        titulo: "Coin",
        informacion: "Proyecto realizado en React Native para ver los cambios en precio de las monedas",
        link: "https://github.com/Nanrehernan/react-org-chart",
        textoLink: "Ver Git Hub",
        imagen: coin
    }
]