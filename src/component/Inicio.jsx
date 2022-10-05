import { FaCode } from "react-icons/fa";
import { iconList } from "../data/data";
import Icon from "./Icon";

const Inicio = () => {
    return (
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
                            {
                                iconList.map((item, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className={item.class ? item.class : "btn-social"}
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <Icon icon={item.icon} />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio