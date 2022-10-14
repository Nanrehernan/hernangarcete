const Link = ({ item, handleMenuClick }) => {
    return (
        <a className="btn btn-nav" href={item.referencia} onClick={handleMenuClick}>{item.texto}</a>
    )
}

export default Link