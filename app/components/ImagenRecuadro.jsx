'use client'

import Image from "next/image";

export default function ImagenRecuadro(params) {

    const {img, index} = params; 

    return( 
        index === 0 || index % 3 === 0 ? (
            <div  className="relative w-11/12 mx-auto block sm:flex">
                <Image
                    src={img.url}
                    fill={false}
                    height={500}
                    width={800}
                    alt={img.nombre}
                    className="object-contain border-2 border-solid border-black mx-auto"
                />
            </div>
        ) : (
            <div className="relative w-11/12 mx-auto my-4 block sm:inline-flex sm:px-10 sm:w-1/2">
                <Image
                    src={img.url}
                    fill={false}
                    height={500}
                    width={1000}
                    alt={img.nombre}
                    className="object-contain border-2 border-solid border-black mx-auto"
                />
            </div>
        )
        
    )
}
