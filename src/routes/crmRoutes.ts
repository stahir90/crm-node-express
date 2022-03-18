import {Application, Request, Response} from 'express';

const route = (app: Application) => {

    app.route('/contact')
    .get((req: Request,res:Response, next)=>{

        console.log("I am in the middleware")
        next();
        
    },(req: Request,res:Response,next)=>{
        res.send('Get Contact Request')
    })

    .post((req: Request,res:Response)=>(
        res.send('post Contact Request')
    ))

    app.route('/contact/:contactID')
    .put((req: Request,res:Response)=>(
        res.send('Put Contact Request')
    ))

    .delete((req: Request,res:Response)=>(
        res.send('delete Contact Request')
    ))

}

export default route;