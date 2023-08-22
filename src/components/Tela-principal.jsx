import Style from "./tela-principal.module.css"
import Button from  "./Botão";
import Input from "./Input";

function Princ( props )
{
    return(
        <main className={Style.principal}>
        <div>
            <h1>Nike</h1>
            <span>JUST DO IT</span>
        </div>
        <div className={Style.div}>
            <Input tipo="email" texto="Email"/>
            <Button nome="Enviar Email"/>
        </div>
        </main>
    )
}
export default Princ;   