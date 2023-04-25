import Link from "next/link";
import Image from "next/image";

import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

export default function HomePage() {
    return (
        <>
            <div id="texto-grande" className=" text-[15vw] my-10 uppercase text-primary-pink  text-center font-bold md:text-9xl/tight">
                <h2 >Con Kuyos</h2>
                <h2 className=" text-[7vw] bg-primary-pink text-grey-blue mx-auto sm:pt-2 w-[80vw] rounded-[0.5rem]">diseñamos juntos</h2>
                <h2 id="texto-grande-cambiante" className=" text-[10vw] lg:text-[6vw] tracking-[2vw] mt-3">Logotipos</h2>
            </div>

            <hr className=" bg-primary-pink pt-1 border-0 w-11/12 mx-auto" />

            <Proyectos />

            <Contacto />

        </>
    );
};
