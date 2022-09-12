const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/keeper',{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log("DB is connected"));

