import Image from "next/image";
import Nav from "./components/nav";
import { M_PLUS_Rounded_1c } from "next/font/google";
import {
  BiLogoFacebook,
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import Link from "next/link";
import { SiInstacart } from "react-icons/si";

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: "700",
});

export default function Home() {
  const products = [
    {
      id: "crema-agria",
      color: "#0066b1",
      title: "100% Natural 🥛",
    },
    {
      id: "quesadilla-rayado",
      color: "#f48331",
      title: "Mexican Style 🇲🇽",
    },
    {
      id: "queso-panela",
      color: "#23266b",
      title: "Part-Skim Cheese 🧀",
    },
    {
      id: "queso-oaxaca",
      color: "#e91524",
      title: "Melting Cheese 🫕🧀",
    },
    {
      id: "queso-munster",
      color: "#3460a9",
      title: "Soft & Tasty 😋",
    },
    {
      id: "cotija-polvo",
      color: "#0ea64f",
      title: "Grated Cheese 🧀🌀",
    },
    {
      id: "queso-fresco",
      color: "#0186e1",
      title: "Crumbling Cheese 🧀🔨",
    },
  ];

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Nav />
      {products.map((product) => (
        <main
          key={product.id}
          style={{
            backgroundColor: product.color,
          }}
          className="flex max-md:p-10 snap-center snap-always min-h-screen relative flex-col items-center justify-between p-24"
        >
          <Image
            alt="product cover"
            width={1000}
            height={1000}
            className="max-sm:h-[80vh] object-contain"
            src={`https://res.cloudinary.com/labodegaltd/image/upload/q_auto,f_auto/v12423443/quesosgallito/${product.id}.png`}
          />
          <h1
            className={
              "font-bold max-sm:text-[32px] max-sm:bottom-32 max-sm:left-0 max-sm:w-full max-sm:text-center absolute bottom-2 left-10 text-[72px] text-white " +
              mPlusRounded.className
            }
          >
            {product.title}
          </h1>
        </main>
      ))}

      <div className="fixed max-sm:hidden top-80 right-14 flex flex-col">
        <Link
          target="_blank"
          href="https://www.facebook.com/quesoselgallito"
          className={
            "text-lg my-2 text-white flex row items-center opacity-80 " +
            mPlusRounded.className
          }
        >
          <BiLogoFacebookSquare style={{ height: 30, width: 30 }} />
          &nbsp;&nbsp;quesoselgallito
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/channel/UC9OvJ2Z9uhV8y8P4SVO4D_g"
          className={
            "text-lg my-2 text-white flex row items-center opacity-80 " +
            mPlusRounded.className
          }
        >
          <BiLogoYoutube style={{ height: 30, width: 30 }} />
          &nbsp;&nbsp;Quesos El Gallito
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/quesoselgallito/?hl=en"
          className={
            "text-lg my-2 text-white flex row items-center opacity-80 " +
            mPlusRounded.className
          }
        >
          <BiLogoInstagram style={{ height: 30, width: 30 }} />
          &nbsp;&nbsp;quesoselgallito
        </Link>
        <Link
          target="_blank"
          href="https://www.instacart.com/store/s?k=el+gallito"
          className={
            "text-lg my-2 text-white flex row items-center opacity-80 " +
            mPlusRounded.className
          }
        >
          <SiInstacart style={{ height: 30, width: 30 }} />
          &nbsp;&nbsp;quesoselgallito
        </Link>
      </div>
    </div>
  );
}
