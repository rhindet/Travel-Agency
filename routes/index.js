import express from 'express';
import {paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViaje} from '../controllers/paginasController.js';
import{
        guardarTestimonial,

} from '../controllers/testimonialController.js'

//UTILIZAMOS EL ROUTER
const router = express.Router();


//CREAMOS LAS RUTAS
router.get('/',paginaInicio)
router.get('/nosotros',paginaNosotros)
router.get('/viajes',paginaViajes)
router.get('/viajes/:slug',paginaDetalleViaje)
router.get('/testimoniales',paginaTestimoniales)
router.post('/testimoniales',guardarTestimonial)




export default router;