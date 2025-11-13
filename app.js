import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import router from './routes/producto.js'
import conectarDB from './config/db.js'

//crear la app con express
const app = express()
//conectar la base de datoss
conectarDB()
//habilitar que pueda trabajar con datos json
app.use(json())
/**
 * habilitar para que se pueda acceder a las rutas desde
 * cualquier sitio
 * */
app.use(cors())

//llamar a las rutas que devuelva router
app.use('/api/productos', router)

export default app;