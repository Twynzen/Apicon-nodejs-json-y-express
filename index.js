//Punto de entrada de la aplicación
const express = require('express');
const {SERVER_PORT} = require ('./config');

const app = express();
//la informacion que se recibe es req y la que se envia es res

//middlewares: son funcionalidades que se usan entre procesos, permite recibir json y urlencoded formularios
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
require('./routes')(app);





//Levantamos el puerto
app.listen(SERVER_PORT, ()=>{
  console.log(`Server on port ${SERVER_PORT}`);
} );


/*
app.get('/api/home', (req, res)=> {
  res.status(200).json({texto: 'Hola mundo', nombre: 'Daniel'});
});

app.get('/datos', ()=>{
  res.status(200).send('Estoy en datos');
})

//Levantamos el puerto
app.listen(3000, ()=>{
  console.log('Server on port 3000');
} );




 ARROW FUNCTION
() => (
  console .console.log('prueba');
)
*/
