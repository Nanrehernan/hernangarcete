import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Nav from "./Nav"

const Header = () => {
    const [menu, setMenu] = useState(false)
    const handleMenuClick = ()=> {
        setMenu(false)
    }
    return (
        <header className="header">
            <button className="btn btn-menu" onClick={() => setMenu(!menu)}>
                <IoIosMenu className="icon-menu" />
            </button>
            <Nav menu={menu} handleMenuClick={handleMenuClick} />
        </header>
    )
}

export default Header