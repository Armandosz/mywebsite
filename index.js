const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
//console.log(path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//cada vez que alguien entre a la ruta inicial,
//enviar un archivo
app.get('/', (req,res) => {
    //res.sendFile(path.join(__dirname, 'index.html'));
});

//static files

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

