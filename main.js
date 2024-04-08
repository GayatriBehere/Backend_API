import express from 'express';
import userRoutes from './routes/task.js';

const app = express();

app.use(express.json());

app.use('/api', userRoutes)

app.listen(3000, ()=>{
    console.log("Server Listening on Port 3000")
})