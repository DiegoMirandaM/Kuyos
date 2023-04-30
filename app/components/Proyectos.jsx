import { supabase } from "../lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

async function getProjects() {

    const res = await supabase
        .from('Proyecto')
        .select(`id_proyecto, nombre, desc, orden, Imagen_02 (*)`)
        .order('update_date', { ascending: false })
        .limit(2);

    // Idealmente, la url de la img principal debiese poder conseguirse sin recuperar todavia todas las imgs.

    if (res.status !== 200) {
        throw new Error(`Recuperar los proyectos falló. \n${res.error} `);
    }

    const finalRes = Object.values(res.data).map(proy => {
        proy.mainImg = proy.Imagen_02.find(img => img.es_principal == true)?.url;

        // Si no hay imagen principal, pero hay imagenes, usar una de esas. 
        if (proy.mainImg == undefined) {
            // Si tampoco hay imagenes, usar img no encontrada. Reemplazar esta img por una propia idealmente
            if (proy.Imagen_02.length === 0) {
                proy.mainImg = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png';
                return proy;
            }
            proy.mainImg = proy.Imagen_02[0].url;
        }

        return proy;
    }, {})

    console.log(finalRes);

    //console.log(Object.values(finalRes));

    return finalRes;


}

export default async function Proyectos() { 
    //const proyectos = getProjects();
    getProjects();




    return (
        <>
            <h1>*Aquí van los últimos dos proyectos   *</h1>

            <div className=" block sm:flex">
                
                <div className=" w-11/12 h-40 mt-4 block bg-blue-800 mx-auto rounded-md hover:cursor-pointer sm:w-2/5 ">
                    <Link href={'#'}
                    >
                        <Image href='./../../public/kuyos_logo_miniatura.png' />
                    </Link>
                </div>

                <div className=" w-11/12 h-40 mt-4 block bg-blue-800 mx-auto rounded-md hover:cursor-pointer sm:w-2/5 ">
                    <Link href={'#'}
                    >
                        <Image href='./../../public/kuyos_logo_miniatura.png' />
                    </Link>
                </div>
                


                {/*
                {Object.values(proyectos).map((proy) => (
                    <div key={proy.id_proyecto} className=" w-11/12 h-40 mt-4 block bg-blue-800 mx-auto hover:cursor-pointer sm:w-2/5">

                        <Image src={proy.mainImg} />


                    </div>
                ))}
                 */}


            </div>
            {/*
            <ul>

                
                {Object.keys(proyectos).map((proy, index) => (
                    <li key={index}> {proy.nombre} </li>
                ))}
                

            </ul>
            */}
        </>
    );
}
