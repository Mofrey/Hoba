var express = require('express');
var   app     = express();
var request = require('request');
const fs = require("fs");
var    bodyParser = require('body-parser');
var    mongoose   = require('mongoose');
var    os = require('os');
var    hostname = os.hostname(); 
var path = require('path'); 
//var file  = request('https://cslmis.s3-us-west-2.amazonaws.com/cslmis-admin-firebase-adminsdk-aj55d-e419e36c52.json').pipe(fs.createWriteStream('cslmis-admin-firebase-adminsdk-aj55d-e419e36c52.json'))
    //var cors = require('cors');
var router = express.Router();
var path = __dirname + '/public/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.use("/",router);
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(function(req, res, next) { 
res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS"); 
res.header("Access-Control-Allow-Origin", "*"); 
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
next();
 });


var port = process.env.PORT || 8081;
var localURI = "mongodb://localhost:27017/samplledb";
var mongoURL = localURI;

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(mongoURL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//All artisan routers
//var indexRouter = require('./routes');
//var mailerRouter = require('./routes/mailer');
//var artisanRouter = require('./routes/artisan/Artisan');

var wordAssessementRouter = require('./routes/wordAssessement/WordAssessement');
var commentReactionRouter = require('./routes/commentReaction/CommentReaction');
var postReactionRouter = require('./routes/postReaction/PostReaction');
var wordCommentRouter = require('./routes/wordComment/WordComment');
var wordPostRouter = require('./routes/wordPost/WordPost');
var languageRouter = require('./routes/language/Language');
var dictionaryRouter = require('./routes/dictionary/Dictionary');
var sentenceRouter = require('./routes/sentence/Sentence');
var synonymsRouter = require('./routes/synonyms/Synonyms');
var wordDevRouter = require('./routes/wordDev/WordDev');
var wordRouter = require('./routes/word/Word');
var typeRouter = require('./routes/type/Type');

//app.use(express.static('data',{index:false, extensions:['json']}),jsonRoute);
//app.use('/', indexRouter);  
app.use('/public/assets/', express.static(__dirname + '/public/assets/'));
app.use('/public/assets/css/', express.static(__dirname + '/public/assets/css/'));
app.use('/public/assets/scss/', express.static(__dirname + '/public/assets/scss/'));
app.use('/public/assets/assets/bootstrap/', express.static(__dirname + '/public/assets/assets/bootstrap/'));
app.use('/public/assets/assets/css/', express.static(__dirname + '/public/assets/assets/css/'));
app.use('/public/assets/assets/bootstrap/css/', express.static(__dirname + '/public/assets/assets/bootstrap/css/'));
app.use('/public/assets/assets/bootstrap/fonts/', express.static(__dirname + '/public/assets/assets/bootstrap/fonts/'));
app.use('/public/assets/assets/font-awesome/', express.static(__dirname + '/public/assets/assets/font-awesome/'));
app.use('/public/assets/assets/font-awesome/css/', express.static(__dirname + '/public/assets/assets/font-awesome/css/'));
app.use('/public/assets/assets/font-awesome/fonts/', express.static(__dirname + '/public/assets/assets/font-awesome/fonts/'));
app.use('/public/assets/assets/font-awesome/less/', express.static(__dirname + '/public/assets/assets/font-awesome/less/'));
app.use('/public/assets/assets/font-awesome/scss/', express.static(__dirname + '/public/assets/assets/font-awesome/scss/'));
app.use('/public/assets/assets/img/backgrounds/', express.static(__dirname + '/public/assets/assets/img/backgrounds/'));
app.use('/public/assets/assets/ico/', express.static(__dirname + '/public/assets/assets/ico/'));
app.use('/public/assets/assets/img/', express.static(__dirname + '/public/assets/assets/img/'));
app.use('/public/assets/assets/js/', express.static(__dirname + '/public/assets/assets/js/'));
app.use('/public/assets/fonts/', express.static(__dirname + '/public/assets/fonts/'));
app.use('/public/assets/images/', express.static(__dirname + '/public/assets/images/'));
app.use('/public/assets/images/resources/', express.static(__dirname + '/public/assets/images/resources/'));
app.use('/public/assets/js/', express.static(__dirname + '/public/assets/js/'));
app.use('/public/assets/lib/slick/', express.static(__dirname + '/public/assets/lib/slick/'));
app.use('/public/assets/lib/slick/fonts/', express.static(__dirname + '/public/assets/lib/slick/fonts/'));

app.use('/api/commentReaction', commentReactionRouter);
app.use('/api/wordAssessement', wordAssessementRouter);
app.use('/api/postReaction', postReactionRouter);
app.use('/api/wordComment', wordCommentRouter);
app.use('/api/dictionary', dictionaryRouter);
app.use('/api/wordPost', wordPostRouter);
app.use('/api/language', languageRouter);
app.use('/api/synonyms', synonymsRouter);
app.use('/api/sentence', sentenceRouter);
app.use('/api/wordDev', wordDevRouter);
app.use('/api/word', wordRouter);
app.use('/api/type', typeRouter);

router.get("/",function(req,res){
  res.sendFile(path + "login.html");
});

router.get("/home",function(req,res){
    res.sendFile(path + "index.html");
  });
  router.get("/companies",function(req,res){
    res.sendFile(path + "companies.html");
  });
  router.get("/jobs",function(req,res){
    res.sendFile(path + "jobs.html");
  });
  router.get("/market",function(req,res){
    res.sendFile(path + "market-temp.html");
  });
  router.get("/my-profile-feed",function(req,res){
    res.sendFile(path + "my-profile-feed.html");
  });
  router.get("/messages",function(req,res){
    res.sendFile(path + "messages.html");
  });
  router.get("/page-temp",function(req,res){
    res.sendFile(path + "page-temp.html");
  });
  router.get("/account-setting",function(req,res){
    res.sendFile(path + "profile-account-setting.html");
  });
  router.get("/profile",function(req,res){
    res.sendFile(path + "profiles.html");
  });
  router.get("/projects",function(req,res){
    res.sendFile(path + "projects.html");
  });
  router.get("/user-profile",function(req,res){
    res.sendFile(path + "user-profile.html");
  });
  

app.listen(port,() => {
    console.log(`Server running at port `+port);
    });

console.log('nodejs server running on '+ port);

module.exports = app;
