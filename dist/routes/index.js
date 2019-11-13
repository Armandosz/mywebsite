const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', {title: 'Hipnosis Clinica - Inicio'});
});

router.get('/about', (req, res) => {
    res.render('about.html', {title: 'Hipnosis Clinica - Videos'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Hipnosis Clinica - Contacto'});
});



module.exports = router;