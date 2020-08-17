const mongoose=require('mongoose')
let dbString='mongodb://localhost:27017/learningMongo';
mongoose.connect(dbString);

mongoose.connection.once('open',()=>{
    console.log('Connection is Successful.MongoDB Connected....')
}).on('error',(error)=>{
    console.log("Connection Error", error)
});