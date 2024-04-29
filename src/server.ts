import express  from 'express'
import router from './router'
import db from './config/db'


// Conectar DB
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log('Conexión exitosa a la BD');
    } catch (error) {
        console.log(error);
        console.log('Hubo un error al conectar a la DB');
        
    }
}

connectDB()

// Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)


server.get('/api', (req, res) => {
    res.json({msj: 'DESDE API'})
})


export default server