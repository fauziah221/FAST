let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let port = 3000;


app.get("/", function(req, res) {
    res.render("index");
});

app.listen(port, function() {
    console.log("Server running on localhost:3000");
});