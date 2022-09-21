import {Viaje} from '../models/Viaje.js'
import {Testimonial} from '../models/Testimoniales.js'

const paginaInicio = async(req,res)=>{ //req = lo que enviamos(peticion) , res = lo que express nos responde
   
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit:3}));
    promiseDB.push(Testimonial.findAll({limit:3}));

    //Consultar 3 viajes del modelo viaje
    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio',{
            pagina:'Inicio', //Pasar variable a la vista
            clase: 'home' , //(esta en el css)
            viajes:resultado[0],
            testimoniales : resultado[1]
        });
    } catch (error) {
        console.log(errror)
    }
}

const paginaNosotros = (req,res)=>{ 
    res.render('nosotros',{
        pagina:'Nosotros'
    }) // buscara la vista (pug) y lo mostrara
}

const paginaViajes = async(req,res)=>{ 
    //CONSULTAR BD
    const viajes = await Viaje.findAll(); //traer todos los resultados de la tabla


    res.render('viajes',{
        pagina:'Proximos Viajes',
        viajes, 
    }) 
}

const paginaTestimoniales = async(req,res)=>{ 
    try {
        const testimoniales = await Testimonial.findAll() //Trae todos los testimoniales
        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
    
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res)=>{
    const {slug} = req.params

    try {
        const viaje = await Viaje.findOne({where : {slug}});
        res.render('viaje',{
            pagina: "Informacion viaje",
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}




//Exportar variables al modelo
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
}