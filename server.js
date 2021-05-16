const express = require("express"); // Import Express Module
const bodyParser = require("body-parser"); //Import body-parser

 const app = express(); // Create a function named app which calls the function express
 app.use(bodyParser.urlencoded({extwnded: true})) //we want to use the body parser method


app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html"); // use __dirname will get the current directory in which we are at this time
}); //Whenever a / request comes to the server requesting for the homepage

app.post("/", function(req, res){
  //after the post we want to utilise the bodyParser method
  var n1 = Number(req.body.num1); //do type conversion add Number to convert string to number
  var n2 = Number(req.body.num2); //do type conversion add Number to convert string to number
  var result = n1+n2;  // convert the number back to the string again
  res.send("The answer is " + result); // append a number at the end of a string so that it type casts automatically i.e changes number bak to string
  //console.log(req.body.num1); // we want to see what has been encoded in the body
  //res.send("Thanks!! for posting the form");
}); //sends data to the homepage



app.listen (3000, function(){
  console.log("Server has started on port 3000");
}); // We are now telling the browser to keep listening to the entire port requests locally
