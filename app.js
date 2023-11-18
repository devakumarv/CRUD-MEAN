// imports
const express = require('express')
const app = express()
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const homeRoutes = require('./routers/home');

app.use(bodyParser.urlencoded({extended:true}));
const dbURI = 'mongodb+srv://<username>:<password>@<cluster_name>.6ur8tn0.mongodb.net/<cluster_name>?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose.connect(dbURI, {useNewUrlParser:true,useUnifiedTopology: true})
    .then((result) => app.listen(process.env.PORT || 3000, function(){
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
      }))
    .catch((err) =>console.log(err));

//static files
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/images', express.static(__dirname + '/public/images'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/',homeRoutes);

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
