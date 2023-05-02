import { getImagesFromProject } from "@/app/lib/supabaseClient";
import Image from "next/image";

export default async function ExpositorProyecto({ params }) {

    // Extrae el id para recuperar imgs asociadas solo a ese proyecto.
    const { idProyecto } = params;

    const { data: imagenes } = await getImagesFromProject(idProyecto);


    //console.log(imagenes);


    return (
        <>
            <div className=" block sm:flex">

                {Object.values(imagenes).map(img => (

                    <div key={img.id_imagen} className="relative w-11/12 mx-auto sm:w-1/3 h-72">
                        <Image 
                            src={img.url}
                            fill={true}
                            alt={img.nombre}
                            className="object-contain"
                        />
                    </div>

                ))}

            </div>


        </>
    )
}
