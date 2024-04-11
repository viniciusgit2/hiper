export default function Filho(props) {
  console.log(props.funcao);
  return (
    <div>
      <h1>ex</h1>
      <button onClick={props.funcao}>click</button>
    </div>
  );
}
