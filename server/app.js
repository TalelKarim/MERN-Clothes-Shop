import express from 'express';
import mongoose from 'mongoose';
import dotEnv from 'dotenv';
import cors from 'cors';
import clothesRouter from './routes/Clothes-router.js'

dotEnv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/clothes', clothesRouter)

const port = process.env.PORT || 8800

// Database connection 
mongoose.connect(process.env.CONNNECTION_STRING)
.then( () => {
    app.listen(port, (req,res) => {
        console.log(`app listening on port ${port}`)
    })
} )
.catch( (err) => {
    console.log(err.stack)
    process.exit(1)
})





