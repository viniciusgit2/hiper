import Image from "next/image";
import { Inter } from "next/font/google";
import integracao from './integrando-com-css/integracao'
import condicional1 from '../pages/render/condicional1'
import pai from '../pages/comunicacao/direta/pai'
import Botao from '../pages/basicos/Botao'
import Pai from '../pages/comunicacao/indireta/Pai'
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div>
<Link href="integrando-com-css/integracao">integração</Link>,
<Link href='render/condicional1'>parouimpar</Link>,
<Link href="comunicacao/direta/pai">comunicacaçao</Link>,
<Link href='basicos/Botao'>botao</Link>,
<Link href="comunicacao/indireta/Pai">comunicacaçao2</Link>,


</div>
  );
}

