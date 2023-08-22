import Style from "./footer.module.css";
import Social from "./redes sociais.png";
import Cartão from "./Cartões.png";

function Footer( props )
{
    return(
        <footer className={Style.footer}>
            <div className={Style.divEncontre}>
                <h1>Encontre Uma loja Nike</h1>
                <span>Cadastre-se para receber novidades</span>
                <span>Catão Presente</span>
                <span>Mapa do Site</span>
            </div>
            <div className={Style.divAjuda}>
                <h1>Ajuda</h1>
                <span>Dúvidas Gerais</span>
                <span>Encontre seu tamanho</span>
                <span>Entregas</span>
                <span>Pedidos</span>
                <span>Trocas e devoluções</span>
                <span>Pagamentos</span>
                <span>Produtos</span>
                <span>Corporativo</span>
                <span>Fale conosco</span>
            </div>
            <div className={Style.divSobre}>
                <h1>Sobre a nike</h1>
                <span>Feito para jogar</span>
                <span>Sustentabilidade</span>
                <span>Sobre a nike Inc.</span>
                <span>Sobre o Grupo SBF</span>   
            </div>
            <div className={Style.divcartfor}>
                <h1>Redes sociais</h1>
                <br />
                <img src={Social} alt="" />
                <br />
                <h1>Formas de pagamentos</h1>
                <br />
                <img src={Cartão} alt="" />
            </div>
        </footer>
    )
}
export default Footer;