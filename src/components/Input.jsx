import Style from "./input.module.css";

function Input( props )
{
    return(
        <input className={Style.input} type={props.tipo} placeholder={props.texto}/>
    )
}
export default Input;