import FormularioContacto from "@/app/components/FormularioContacto";
import { getImagesFromProject } from "@/app/lib/supabaseClient";
import Image from "next/image";

export default async function ExpositorProyecto({ params }) {

    
    // Extraer id numerico y nombre del proyecto para uso posterior.
    const idProyecto = params.idProyecto.substring(0, params.idProyecto.indexOf('_'));
    const nombreProyecto = params.idProyecto.substring(params.idProyecto.indexOf('_') + 1).replaceAll('%20', ' ');

    // Obtener y destructurar imagenes asociadas al proyecto, bajo el nombre de imagenes.
    let { data: imagenes } = await getImagesFromProject(idProyecto); 

    // Extraer la imagen principal del conjunto para mostrarla al inicio, y removerla del conjunto para no repetirla despues.
    const imgPrincipal = Object.values(imagenes).find(img => img.es_principal == true);
    imagenes = imagenes.filter(img => img.es_principal == false);

    // De especificarse un campo orden en la tabla de imgs, seria posible recuperar el conjunto ordenado para desplegarlas como se prefiera.


    return (
        <>
            <div key={imgPrincipal.id_imagen} className="relative w-11/12 mx-auto h-[15rem] block sm:h-[30rem] mt-[8vw] sm:mt-[4vw] sm:flex">
                <Image
                    src={imgPrincipal.url}
                    fill={true}
                    alt={imgPrincipal.nombre}
                    className="object-contain"
                />
            </div>

            <hr className=" bg-primary-pink pt-1 border-0 w-11/12 mx-auto my-[5vh]" />

            <h2 className=" text-light-blue text-center my-7 text-3xl font-bold sm:text-4xl">Conoce los diseños para nuestro cliente <span className=" text-primary-pink font-bold">&quot;{ nombreProyecto }&quot;</span></h2>

            {Object.values(imagenes).map((img, index) => (
                // Si es la primera img, o multiplo de 3, img grande. De lo contrario, colocar 2 imgs chicas. 
                index === 0 || index % 3 === 0 ? (
                    <div key={img.id_imagen} className="relative w-11/12 mx-auto block sm:flex">
                        <Image
                            src={img.url}
                            fill={false}
                            height={ 500 }
                            width={ 800 }
                            alt={img.nombre}
                            className="object-contain border-2 border-solid border-black mx-auto"
                        />
                    </div>
                ) : (
                    <div key={img.id_imagen} className="relative w-11/12 mx-auto my-4 block sm:inline-flex sm:px-10 sm:w-1/2">
                        <Image
                            src={img.url}
                            fill={false}
                            height={ 500 }
                            width={ 1000 }
                            alt={img.nombre}
                            className="object-contain border-2 border-solid border-black mx-auto"
                        />
                    </div>
                )

            ))}

            <FormularioContacto />

        </>
    )
}
