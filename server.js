var express = require('express')
var app = express()


app.use(express.static(__dirname + "/public"));
app.get('/', function (req, res) {
  res.sendFile('index.html')
 
 
})
//app.get('/value',function(req,res){
//    console.log(req);
//})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})