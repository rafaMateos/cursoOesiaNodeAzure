const { Router } = require('express');
const router = Router();

const personas = require('../data.json');

router.get('/' , (request , response) =>{
    response.json({"Saludo" : "Hola"});
});

router.get('/test' , (request , response) =>{
    response.send(personas);
});

router.post('/test' , (request , response) =>{
    const { name , age , phoneNumber } = request.body;
    if(name && age && phoneNumber) {
        const id = personas.length + 1;
        const newPersona = {id , ...request.body};
        personas.push(newPersona);
        response.send("OK");
    }else{
        response.send('Wrong request');
    }
});




module.exports = router;