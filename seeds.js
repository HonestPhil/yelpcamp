var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://farm8.staticflickr.com/7268/6849760776_8629610727.jpg",
            description: "Irure beef brisket rump veniam laborum. Minim ut brisket elit enim tenderloin turkey veniam chuck occaecat. Beef ribs flank filet mignon burgdoggen strip steak. Occaecat pastrami tri-tip esse. Cow ham hock leberkas pork, jerky in pastrami in."
        },
        {
            name: "Trees and Stuff",
            image: "https://farm1.staticflickr.com/66/158583580_79e1c5f121.jpg",
            description: "Irure beef brisket rump veniam laborum. Minim ut brisket elit enim tenderloin turkey veniam chuck occaecat. Beef ribs flank filet mignon burgdoggen strip steak. Occaecat pastrami tri-tip esse. Cow ham hock leberkas pork, jerky in pastrami in."
        },
        {
            name: "Is That A Lake?",
            image: "https://farm7.staticflickr.com/6224/6331268757_9894e13755.jpg",
            description: "Irure beef brisket rump veniam laborum. Minim ut brisket elit enim tenderloin turkey veniam chuck occaecat. Beef ribs flank filet mignon burgdoggen strip steak. Occaecat pastrami tri-tip esse. Cow ham hock leberkas pork, jerky in pastrami in."
        }
    ];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        // } else {
        //     console.log("removed campgrounds!");
        //      //add a few campground
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //             if(err){
        //                 console.log(err);
        //             } else {
        //                 console.log("added a campground");
        //                 //create a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet",
        //                         author: "Homer"
        //                     }, function(err, comment){
        //                         if(err){
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created new comment");    
        //                         }
        //                     });
        //             }
        //         });    
        //     });
         }
    });
    
    //add comments
}

module.exports = seedDB;