import express from 'express';
import mongoose from 'mongoose';
import dotEnv from 'dotenv';
import cors from 'cors';


///Routes

  // Man Routes
  import shirtsRouterMan from './routes/Clothes/Man/Clothes-router.js'
  import fshoesRouterMan from './routes/Clothes/Man/f-shoes-router.js'
  import sshoesRouterMan from './routes/Clothes/Man/s-shoes-router.js'
  import trousersRouterMan from './routes/Clothes/Man/trousers-router.js'


  //Kids Routes

  import shirtsRouterKids from './routes/Clothes/Kids/shirts-router.js'
  import shoesRouterKids from './routes/Clothes/Kids/shoes-router.js'
  import trousersRouterKids from './routes/Clothes/Kids/trousers-router.js'

  //Woman Routes
  import shirtsRouterWoman from './routes/Clothes/Woman/shirts-router.js'
  import shoesRouterWoamn from './routes/Clothes/woman/shoes-router.js'
  import RobesRouterWoman from './routes/Clothes/Woman/robes-router.js'
  import trousersRouterWoman from './routes/Clothes/Woman/trousers-router.js'



dotEnv.config();
const app = express();

app.use(express.json());
app.use(cors());




/// Man clothes
app.use('/clothes', shirtsRouterMan)
app.use('/', fshoesRouterMan)
app.use('/', sshoesRouterMan)
app.use('/', trousersRouterMan)


//Woman clothes
app.use('/', shirtsRouterWoman)
app.use('/', shoesRouterWoamn)
app.use('/', trousersRouterWoman)
app.use('/', RobesRouterWoman)


//kids clothes
app.use('/', shoesRouterKids)
app.use('/', trousersRouterKids)
app.use('/', shirtsRouterKids)




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





