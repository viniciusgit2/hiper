import Filho from "./Filho";
export default function Pai(props) {
  function lembrete(props) {
    console.log("lembrar de pagar o cartão");
  }
  return (
    <div>
      <Filho funcao={lembrete} />
    </div>
  );
}
