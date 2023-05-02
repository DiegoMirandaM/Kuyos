import { getRecentProjects } from "../lib/supabaseClient";
import Proyecto from "./Proyecto";

export default async function Proyectos() {
    const proyectos = await getRecentProjects();

    return (
        <>
            <div className=" block sm:flex">

                {Object.values(proyectos).map((proy, index) => (

                    <Proyecto proyecto={proy} key={index} />

                ))}

            </div>

            <button className=" text-primary-pink font-bold block ml-auto mr-4 mt-4 underline underline-offset-4 sm:mr-20">
                Ver más proyectos
            </button>

        </>
    );
}
