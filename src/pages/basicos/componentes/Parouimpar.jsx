export default function ParouImpar(props) {
    if (props.numero % 2 === 0) {
      return <h1>{props.numero + "é par"}</h1>;
    } else {
      return 'é impar';
    }
  }