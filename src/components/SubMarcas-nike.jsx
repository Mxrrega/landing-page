import Style from "./SubMarcas-nike.module.css";

function SubMarcas( props )
{
    return(
       <div className={Style.submarcas}>
        <div className={Style.divtext}>
            <div className={Style.divtit}>
                <h1>Desenvolvido para seu melhor conforto</h1>
            </div> 
            <div className={Style.divcont}>
            <span>Nosso trabalho é guiado por metas 
            baseadas na ciência, uma determinação de criar 
            um futuro melhor para mulheres e meninas e uma 
            mentalidade de progresso sobre a perfeição.</span>
            </div> 
        </div>
       </div>
    )
}
export default SubMarcas;