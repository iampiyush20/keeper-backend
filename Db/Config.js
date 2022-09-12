const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://piyushdb:9667751125@cluster0.la410e4.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log("DB is connected"));

