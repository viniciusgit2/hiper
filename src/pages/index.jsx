import Image from "next/image";
import { Inter } from "next/font/google";
import integracao from './integrando-com-css/integracao'
import condicional1 from '../pages/render/condicional1'
import pai from '../pages/comunicacao/direta/pai'
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div>
<Link href="integrando-com-css/integracao">integração</Link>,
<Link href='render/condicional1'>parouimpar</Link>,
<Link href="comunicacao/direta/pai">comunicacaçao</Link>
</div>
  );
}
//esse comunicao nao ta pronto ainda
