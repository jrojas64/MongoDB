const express=require('express');
const app=express();
const morgan=require('morgan');
const cors= require('cors');
const {mongoose}=require('./database');

require('./database');

//settings
app.set('nombreApp','Aplicacipn manejo Gastos');
app.set('puerto',process.env.PORT||3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routers
app.use('/api/gastos',require('./routes/server.routers'));

app.listen(app.get('puerto'), ()=>{
    console.log('Nombre de la App', app.get('nombreApp'));
    console.log('Puerto del servidor', app.get('puerto'));
})