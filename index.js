import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'


// crear la app
const app = express()

//habilitar Pug

app.set('view engine', 'pug')
app.set('views', './views')

// carpeta publica
app.use( express.static('public'))

// Routing
app.use('/auth', usuarioRoutes)



// definir puerto y arrancar servidor
const port = 3000;

app.listen(port, () =>{
  console.log(`El servidor esta funcionando en el puerto ${port}`)
})
