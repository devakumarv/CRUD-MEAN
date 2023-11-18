const express = require('express');
const Router = express.Router();
const User = require('../models/user')

Router.get('/',(err,res)=>{
     res.render('index')
})

//Add data into DB
Router.post('/add',(req,res)=>{
   const name = req.body.name
   const productid = req.body.productid
   const category = req.body.category
   const price = req.body.price
   const discount = req.body.discount
   const bonus = req.body.bonus  
   const billableprice = req.body.billprice
   const user = new User({
        name,
        productid,
        category,
        price,
        discount,
        bonus,
        billableprice
   })
   user.save(err=>{
       if(err){
        console.log("Error")
       }else{
        res.redirect('/')
       }
   })
})

//Find and display data from database
Router.get('/display',(req,res)=>{
    User.find((err,docs)=>{
        if(err) throw err;
        res.render('display',{
            userList:docs
        })
    })
  })


//Edit Data in database
Router.get('/edit/:id',(req,res)=>{

    User.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,users)=>{
        if(err){
            console.log("Unable to update ")
           }else{
           res.render('edit',{userdata:users})
           }
    })
})

//Update Data in database
Router.post('/edit/:id',(req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},req.body,(err,users)=>{
       if(err){
        console.log("Error")
       }else{
        res.redirect('/display')
       }

    })
})

//Delete data form database
Router.get('/delete/:id',(req,res)=>{
    User.findByIdAndDelete({_id:req.params.id},req.body,(err,users)=>{
        if(err){
            console.log("Error")
           }else{
            res.redirect('/display')
           }
    })
})

module.exports = Router;