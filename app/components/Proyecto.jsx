'use client'

import Image from "next/image"
import { useState } from "react"
import Link from "next/link";

export default function Proyecto({ proyecto }) {
    const [isExpanded, setExpanded] = useState(false);

    const toggleDesc = () => setExpanded(!isExpanded);


    return (
        <div className="w-11/12 sm:w-2/5 mx-auto">
            <div id='img'
                className="relative h-52 mt-4 block bg-header-blue border-2 border-primary-pink rounded-md 
                sm:h-64
                hover:cursor-pointer "
                onClick={toggleDesc}
            >
                <Image
                    src={proyecto.mainImg}
                    fill={true}
                    alt={proyecto.nombre}
                    className="py-8 object-contain"
                />
            </div>

            <div id='desc' className={`${isExpanded ? 'grid' : 'hidden'} bg-light-blue rounded-md  h-fit sm:h-48`}>
                <h3 className="p-4">{proyecto.desc}</h3>
                <Link href={`/proyecto/${proyecto.id_proyecto}_${proyecto.nombre}`} className="mb-5 ml-4 py-2 px-10 bg-primary-pink rounded-md w-fit h-fit self-end font-bold">Ver diseños relacionados</Link>
            </div>
        </div>
    )
}
