import{Testimonial} from '../models/Testimoniales.js'


const guardarTestimonial = async (req,res)=>{
    //Validar

    const {nombre , correo ,mensaje }= req.body;
    const errores = [];
    if (nombre.trim() ==='') {
        errores.push({mensaje:'El nombre esta vacio'})
    }
    if (correo.trim() ==='') {
        errores.push({mensaje:'El correo esta vacio'})
    }
    if (mensaje.trim() ==='') {
        errores.push({mensaje:'El mensaje esta vacio'})
    }

    if(errores.length > 0){
        //Consultar testimoniales existentes 
        const testimoniales = await Testimonial.findAll() //Trae todos los testimoniales

        //Mostrar la vista con errores
        res.render('testimoniales',{
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }
    else{
        //Almacenarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje // variables de la base de datos , no las de arriba

            })

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonial
}