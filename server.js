var express=require("express");
var morgan=require("morgan");
var mongoose=require('mongoose');

var app=express();

mongoose.connect('mongodb://root:123456@ds013931.mlab.com:13931/ecommerce_vn',function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Connected to the database");
  }
})

app.use(morgan('dev'));

app.get('/',function(req,res){
  var name="Tieu Ba Vuong";
  res.json(name+ " is me!");
});
app.get('/catname',function(req,res){
  var catname="Ton Sach";
  res.json(" is "+catname);
});

app.listen(3000,function(err){
  if(err)throw err;
  console.log("Server is Running on port 3000");
});
