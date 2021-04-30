// Rutas de prueba
router.post('/prueba-post', (req, res) => {
    console.log(req.body)
    response.success(req, res, 'lista de mensajes', 201)
})

router.post('/prueba-query', (req, res) => {
    console.log(req.query)
    res.send('Hola soy el post con query')
})


router.get('/prueba-header', (req, res) => {
    console.log(req.headers)
    res.header({
        "custom-header": "Esto es un header personalizado"
    })
    res.send('Hola soy el get con header personalizado')
})