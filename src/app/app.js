import express from 'express';
import morgan from 'morgan';
import userRouter from '../routers/user.router.js';
import userStatusRouter from '../routers/userStatus.router.js';
import roleRouter from '../routers/role.router.js';


const app=express();
app.use(morgan("dev"));
app.use(express.json());

app.use('/api/v1',userRouter);
app.use('/api/v1',userStatusRouter);
app.use('/api/v1',roleRouter);

app.use((rep,res,nex)=>{
    res.status(400).json({
        Message: 'Endpoint losses'
    });
});

export default app;