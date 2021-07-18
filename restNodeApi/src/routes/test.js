const { Router } = require('express');
const router = Router();

router.get('/' , (request , response) =>{
    response.json({"Nombre" : "Francisco"});
});

router.get('/test' , (request , response) =>{
    response.json({"Prueba" : "Test"});
});

module.exports = router;