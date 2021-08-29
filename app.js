const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const app = express();

//app.engine('ejs', ejsMate);
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'Templates/views'));
hbs.registerPartials(path.join(__dirname, 'Templates/partials'));
app.use(express.urlencoded({extended: true}));
//app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res)=>{
    res.render('index.hbs');
});
app.get('/about',(req, res)=>{
    res.render('about.hbs');
});
app.get('/weather',(req, res)=>{
    res.render('weather.hbs');
});
app.get('*',(req, res)=>{
    res.send('errorpage 404 not found');
});

app.listen(port, ()=>{
    console.log("Running on port 3000");
    console.log(__dirname);
});