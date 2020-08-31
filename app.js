import express  from 'express';
import cors     from 'cors';
import morgan   from 'morgan';
import mongoose from 'mongoose';

import students from './rutes/student';

const app = express();

//const uri= 'mongodb://localhost:27017/GCP';

const uri = 'mongodb+srv://userGCP:Z8X8s4sTMSt12mxW@cluster0.5ktwo.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority'

const options = {
    useNewUrlParser:    true,
    useCreateIndex:     true,
    useUnifiedTopology: true
}

mongoose.connect(uri, options)
.then(() => {
    console.log(`we are in DB`),
    err => {
        console.log(err)
    }
});

//middleware 
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//rutes
app.use('/api', students);


//Setting port and connection
app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), () => {
    console.log('we are in port = ', app.get('puerto'));
});
