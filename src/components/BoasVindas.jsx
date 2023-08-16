import { useState } from "react";

function BoasVidas()
{
    const [ nome, setNome ] = useState( '' );

    return(
        <>
            <div>
                <input type="text" onChange={ (e) => { setNome( e.target.value ) } }/>
            </div>
            <div>
                <span>{nome}</span>
            </div>
        </>
    )
}
export default BoasVidas;