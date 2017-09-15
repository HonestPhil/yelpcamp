var bodyParser  = require("body-parser"),
    express     = require("express"),
    app         = express(),
    Campground  = require("./models/campgrounds"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds");
    
mongoose.Promise = global.Promise;

//requiring routes    
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");
 
mongoose.connect("mongodb://phil:Jamaal83@ds139124.mlab.com:39124/yelpcamp-live");
//mongoose.connect("mongodb://localhost/dynamic_price");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());


//seedDB(); //seeds the database

//Passport Configuration
app.use(require("express-session")({
   secret: "This is the secret text",
   resave: false,
   saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server has started!"); 
});