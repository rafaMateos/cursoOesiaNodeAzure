const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port' , process.env.port || 3000);
app.set('json spaces' , 2);

//Middleare
app.use(morgan('dev'));
app.use(express.json()); // Permite al servidor recibir , enviar y entender formatos JSON
app.use(express.urlencoded({extended : false}));

app.listen(app.get('port') , () =>{
    console.log('Server on port ' + app.get('port'));
});

//routes
app.use(require('./routes/test'));