import { globalErrorHandler } from "../utils/globalErrorHandling.js";
import Exchange from "./modules/Currency_Exchange_router.js"
export const bootstrap = (app,express)=>{
    app.use(express.json())
    app.use("/Api",Exchange)
    
    app.use("*",(req,res)=>{
        res.send(`<h1> in-validURL ${req.originalUrl} </h1>`)
    })
    app.use(globalErrorHandler)
}