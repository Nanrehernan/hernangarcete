import Link from "./Link"
import { menuList } from "../data/data"


const Nav = ({menu, handleMenuClick}) => {
    return (
        <nav className={menu ? "nav mostrar-nav" : "nav"}>
            {menuList.map((item, index) => <Link key={index} item={item} handleMenuClick={handleMenuClick} />)}
        </nav>
    )
}

export default Nav