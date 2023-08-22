import Style from "./tela-principal.module.css"
import Button from  "./Botão";
import Input from "./Input";

function Princ( props )
{
    return(
        <body className={Style.body}>
        <main className={Style.principal}>
        <div className={Style.divv}>
            <h1>Nike</h1>
            <span>JUST DO IT</span>
        </div>
        <div className={Style.div}>
            <Input tipo="email" texto="Email"/>
            <Button nome="Enviar Email"/>
        </div>
        <div className={Style.espaco}>

        </div>
        </main>
        </body>
    )
}
export default Princ;   