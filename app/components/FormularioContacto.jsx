'use client'

import { useForm } from '@formSpree/react';

export default function FormularioContacto() {

    const [state, handleSubmit] = useForm("mnqylygl");
    if (state.succeeded) {
        return <h3>¡Gracias por considerarnos para tus proyectos!</h3>
    }

    


    return (
        <>
            <div className=' bg-light-blue my-3 w-11/12 px-12 py-6 rounded-[1rem] border-2 text-center m-auto border-black sm:w-[45vw]'>
                <h2 className='text-xl'>¿Tienes algún proyecto en mente?</h2>
                <h2 className=' text-3xl font-bold mb-5'>Contáctanos</h2>
                <form className='grid' 
                onSubmit={handleSubmit}>

                    <input className=' py-1 bg-transparent border-2 p-3 rounded-md border-primary-pink placeholder:text-gray-800 focus:border-cyan-600'
                    type="text" required
                    placeholder='Nombre'/>

                    <input className=' py-1 my-5 bg-transparent border-2 p-3 rounded-md border-primary-pink placeholder:text-gray-800'
                    type="email" required
                    placeholder='Correo'/>

                    <textarea className=' bg-transparent border-2 px-3 py-1 mb-2 rounded-md border-primary-pink placeholder:text-gray-800'
                    name="mensaje" cols="30" rows="4" required
                    placeholder='Su mensaje'
                    />
                    
                    <button className='bg-primary-pink font-bold px-3 py-2 my-5 w-[20vw] m-auto rounded-md hover:bg-primary-pink' type="submit" disabled={state.submitting}>
                        Enviar
                    </button>
                </form>
            </div>
        </>
    );

}
