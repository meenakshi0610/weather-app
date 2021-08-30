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
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var day = Number(new Date().getDay());
    var datetime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" }) + ", " + weekday[Number(day)] + ", " + new Date().toLocaleDateString().replace(',', '');
    res.render('weather.hbs', {datetime});
});
app.get('*',(req, res)=>{
    res.send('errorpage 404 not found');
});

app.listen(port, ()=>{
    console.log("Running on port 3000");
    console.log(__dirname);
});