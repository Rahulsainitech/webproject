const { text } = require('express');
const express=require('express');
const path =require('path');
const fs = require('fs')
const app=express();
const bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});
const port=80;

//DEFINE MONGOOSE SCHEMA
var contactSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    address:String,
    aboutdance:String
  });
  var Contact = mongoose.model('Contact', contactSchema);

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('Static')) // serving static file
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine','pug')// set the templete engine as pug
app.set('views',path.join(__dirname,'views'))// set the view directory

//ENDPOINT
app.get('/',(req,res)=>{
    const con="this is the best content on u tube use it wiesely"
    const params={}
    res.status(200).render('home.pug',params);
});
app.get('/about',(req,res)=>{
    const con="this is the best content on u tube use it wiesely"
    const params={}
    res.status(200).render('aboutus.pug',params);
});
app.get('/contact',(req,res)=>{
    const con="this is the best content on u tube use it wiesely"
    const params={}
    res.status(200).render('contact.pug',params);
});
app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been submitted to the database")
    }).catch(()=>{
        res.status(400).send("this item was not saved in database")
    });
    
    // res.status(200).render('contact.pug',params);
});
//START THE SERVER
app.listen(port,()=>{
    console.log(`application is started on  port ${port}`)
});