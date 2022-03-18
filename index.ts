import express, {Application, Request, Response} from 'express';
import route from './src/routes/crmRoutes';

const app: Application = express();
const PORT: number = 4000;

route(app);

app.get('/',(req:Request, res:Response)=>{
    res.send("Your Server is Live HomePage")
})

app.listen(PORT,()=>{
    console.log("Your Server is Live")
})
