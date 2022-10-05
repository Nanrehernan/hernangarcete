import { iconList } from "../data/data"
import Icon from "./Icon"

const Contacto = () => {
    return (
        <section id="contacto">
            <h2>Contacto</h2>

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
        </section>
    )
}

export default Contacto