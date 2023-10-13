import express from "express"
import bodyParser from 'body-parser'

var app = express();

let todaytasks=[];
let worktasks=[];

const port = 3000 ;
const dateObject = new Date();
let date = dateObject.toUTCString().slice(5, 16);

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", function (req, res) {

    res.render("index.ejs");
 })

 app.get("/today", function (req, res) {

   res.render("todaylist.ejs", {todaytasks,date});
})

app.get("/work", function (req, res) {

   res.render("worklist.ejs", {worktasks});
})

 app.post("/today", function (req, res) {
    
   console.log(req.body["task-name"])
   todaytasks.push(req.body["task-name"])
   console.log(todaytasks);
   console.log(date)
   res.redirect("/today")
    

 })

 app.post("/work", function (req, res) {
    
   console.log(req.body["task-name"])
   worktasks.push(req.body["task-name"])
   console.log(worktasks)
   res.redirect("/work")

})



 



 app.listen(port, function () {
    
    console.log(` Running on Port ${port}`)
 })