const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const port=process.env.PORT || 3000;
const routes=require('./app/routes/appRoutes');
const db=require('./db');

app.listen(port);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
routes(app);