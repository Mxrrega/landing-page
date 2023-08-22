import Style from "./header.module.css";
import Logo from "./logo.png";

function Header( props )
{
    return(
    <header className={Style.header}>
            <div>
                <img src={Logo} alt="Meu Logo" />
            </div>
            <div className="header-topo-menu">
                <ul>
                    <a href="#">Ajuda</a>
                    <a href="#">Junte-se a nós</a>
                    <a href="#">Entrar</a>
                </ul>
            </div>
    </header>
    )
}
export default Header;   