
const port = process.env.PORT || 3000;
var express = require("express");
var app = express();


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/PictureApi.html");
});

app.listen(port, () => {
  console.log('Server running at port ' + port);
});
