'use client'

import { ValidationError, useForm } from '@formspree/react';
import Swal from 'sweetalert2';

export default function FormularioContacto() {

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
    if (state.succeeded) {
        Swal.fire({
            title: 'Mensaje enviado',
            icon: 'success',
            text: `Muchas gracias por considerarnos para sus proyectos.\n¡Nos pondremos en contacto con ud a la brevedad!`,
            confirmButtonText: '¡Genial!'
        });
        
        document.getElementById('formularioContacto').reset();
    }

    // Pulir el tema de las validaciones del formulario.
    


    return (
        <>
            <div className=' bg-light-blue my-3 w-11/12 px-12 py-6 rounded-[1rem] border-2 text-center m-auto border-black sm:w-[45vw]'>
                <h2 className='text-xl'>¿Tienes algún proyecto en mente?</h2>
                <h2 className=' text-3xl font-bold mb-5'>Contáctanos</h2>
                <form id='formularioContacto' className='grid' 
                onSubmit={handleSubmit} method='POST'>

                    <input className=' py-1 bg-transparent border-2 p-3 rounded-md border-primary-pink placeholder:text-gray-800 focus:border-cyan-600'
                    name='Nombre' type="text" required
                    placeholder='Nombre'
                    />
                    <ValidationError field='Nombre' prefix='Nombre' errors={state.errors}/>

                    <input className=' py-1 my-5 bg-transparent border-2 p-3 rounded-md border-primary-pink placeholder:text-gray-800'
                    name="_replyto" type="email" required
                    placeholder='Correo'
                    />
                    <ValidationError field='_replyto' prefix='Correo' errors={state.errors}/>

                    <textarea className=' bg-transparent border-2 px-3 py-1 mb-2 rounded-md border-primary-pink placeholder:text-gray-800'
                    name="Mensaje" cols="30" rows="4" required
                    placeholder='Su mensaje'
                    />
                    <ValidationError field='Mensaje' prefix='Mensaje' errors={state.errors}/>

                    <input className='hidden' type="text" name="_gotcha" />
                    
                    <button className='bg-primary-pink font-bold px-3 py-2 my-5 w-[20vw] m-auto rounded-md hover:bg-primary-pink' type="submit" disabled={state.submitting}>
                        Enviar
                    </button>
                </form>
            </div>
        </>
    );

}
