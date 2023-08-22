import Style from "./botão.module.css";

function Botão( props )
{
    return(
        <button className={Style.button}>{props.nome}</button>
    )
}
export default Botão;   