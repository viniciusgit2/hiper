import { useState } from "react";
export default function Contador() {
  const [num, setnumero] = useState(0);

  const soma = () => {
    setnumero(num + 1);
  };
  const diminuir = () => {
    setnumero(num - 1);
  };
  return (
    <div>
      <h1>contador</h1>
      <h2></h2>
      <div>
        <button onClick={soma}>+</button>
        <div>
          <button onClick={diminuir}>-</button>
        </div>
        {num}
      </div>
      <div>valor:{num}</div>
    </div>
  );
}