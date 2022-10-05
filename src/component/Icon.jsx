import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Icon = ({icon})=> {
    switch(icon){
        case "whatsapp": return <FaWhatsapp className="icon-social" />
        case "linkedin": return <FaLinkedinIn className="icon-social" />
        case "github": return <FaGithub className="icon-social" />
        default: return "Ver CV"
    }
}

export default Icon