import Image from "next/image";
import { Inter } from "next/font/google";
import integracao from './integrando-com-css/integracao'
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div>
<Link href="integrando-com-css/integracao">integração</Link>
</div>
  );
}
