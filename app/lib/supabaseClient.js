import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export async function getRecentProjects() {

    const res = await supabase
        .from('Proyecto')
        .select(`id_proyecto, nombre, desc, orden, Imagen_02 (*)`)
        .order('update_date', { ascending: false })
        .limit(2);

    // MEJORAR ESTO: Recuperar proys sin imgs, y recuperar imgs principales donde el id_proyecto sea el de los proys recuperados.
    // Luego tomar los objetos que contienen las imgs, e insertarlas como propiedad de los objetos proyecto.

    // Asi no se recuperan innecesariamente imgs que no van a ser usadas, y se tiene acceso a mas props de las imgs principales.

    if (res.status !== 200) {
        throw new Error(`Recuperar los proyectos falló. \n${res.error} `);
    }

    const finalRes = Object.values(res.data).map(proy => {
        proy.mainImg = proy.Imagen_02.find(img => img.es_principal == true)?.url;

        // Si no hay imagen principal, pero hay imagenes, usar una de esas. 
        if (proy.mainImg == undefined) {
            // Si tampoco hay imagenes, usar img no encontrada. Reemplazar esta img por una propia idealmente
            if (proy.Imagen_02.length === 0) {
                proy.mainImg = 'https://cvruycddlqkyjmelqdta.supabase.co/storage/v1/object/sign/kuyos/placeholder-image-not-found.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJrdXlvcy9wbGFjZWhvbGRlci1pbWFnZS1ub3QtZm91bmQucG5nIiwiaWF0IjoxNjgyOTIxNDkxLCJleHAiOjE5OTgyODE0OTF9.nVM0EhxCWegNgyOvyKDjM89088kPiy4JCeV929-dDrw&t=2023-05-01T06%3A11%3A31.991Z';
                return proy;
            }
            proy.mainImg = proy.Imagen_02[0].url;
        }

        return proy;
    }, {})

    return finalRes;
}

export async function getImagesFromProject(projectId) {

    const res = await supabase
        .from('Imagen_02')
        .select(`id_imagen, nombre, url, es_principal`)
        .eq('id_proyecto', projectId)

    if (res.status !== 200) {
        throw new Error(`Recuperar los proyectos falló. \n${res.error} `);
    }

    

    return res;
}