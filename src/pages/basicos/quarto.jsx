import { match } from "assert"

export default function jsx4(){
    const sub='estou no subtitulo'
    const trecho3=<h3>{3*3}</h3>
    return (<div><h1>integraçoẽs jsx e js</h1><h2>{sub}</h2><h3></h3>{trecho3}<h4>{Math.max(13,39)}</h4><h5>{entre(30,1,9)}</h5></div>)}
    function entre (valor,min,max){
if(valor>=min&& valor<valor<=max){
    return 'sim'
}
else{
    "não"
}
    }