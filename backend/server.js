const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
app.use(express.json());
mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log(err));
app.use('/',require('./routes/authRoutes'));
app.use('/task',require('./routes/taskRoutes'));
const port=3000;
app.listen(port,()=>{
    console.log('server is running on port '+port);
})

app.use('/api',(req,res)=>{
    res.send('hi from madhu');
})

app.post('/api',(req,res)=>{
    res.send('post request received');
})