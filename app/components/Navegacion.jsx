"use client"

import { useState } from 'react';
import Link from "next/link"




export default function Navegacion() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNav = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <button className=" text-primary-pink text-xl sm:hidden" onClick={toggleNav}>
                Menú
            </button>

            <nav className={`transition  ${isExpanded ? 'block' : 'hidden'} grid leading-[10vw] self-center text-left ml-3 uppercase text-primary-pink sm:block sm:space-x-16`}>
                <Link href="/"> Home</Link> 
                <Link href="#"> ¿Qué hacemos?</Link>
                <Link href="/about"> Nosotros</Link>
            </nav>
        </>
    );
};



