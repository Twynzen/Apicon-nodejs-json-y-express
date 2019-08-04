module.exports = (app)=> {
  app.get('/', (req, res) =>{
    res.status(200).json({message: 'Estoy desde la carpeta routes en home'});
  })

  app.post('/formulario', (req, res) =>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido
    const ciudad = req.body.ciudad;
    console.log(req.body);

    res.status(200).json({message: `Yo soy ${nombre} ${apellido} y vivo en  ${ciudad}`});
  })
  app.get('/formulario', (req, res) =>{
    res.status(404).json({message: 'El formulario esta en post'});
  })
}
