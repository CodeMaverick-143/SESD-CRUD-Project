import express,{ Application , Request , Response } from "express";
import  cors  from "cors";
import helmet from "helmet";


const app : Application = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/health",(_req:Request,res:Response)=>{
    res.status(200).json({
        success:true,
        message:"API is Live"
    })
});


app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
