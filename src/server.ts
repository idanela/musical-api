import express from 'express'
import mongoose from 'mongoose'
import baseRouter from './routes';

const app = express();
const port = 5000;
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/musical').then(()=>console.log("connected to DB")).catch(console.error);
app.use('/',baseRouter)

app.listen(port,()=>
{
    console.log(`Listening on port ${port}`);
})