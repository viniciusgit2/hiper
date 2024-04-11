import { useState } from "react"

export default function formulario(){
    const [valor,setvalor]=useState('inicial')
    function alterarinput(){
        setvalor(valor+"!")
    }
    return(
        <div>
    <input type="text"value={valor} onChange={e =>setvalor(e.target.value)} />
    <button onClick={alterarinput}>altera</button>
    </div>
    )
}