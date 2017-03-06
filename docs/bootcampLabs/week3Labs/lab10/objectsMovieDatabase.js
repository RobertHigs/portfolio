// JavaScript File

/*
Create and array of movie objects. Each movie should have a title, 
rating, and hasWatched properties. Iterate through the array and 
print out something that looks like:
You have watched "Moonlight" - 5 stars
You have not seen "La La Land" - 4.5 stars
You have seen "Rogue One" - 5 stars
You have not seen "Frozen" - 3.5 stars
*/

function Movie(name, rating, hasWatched) {
  this.name = name;
  this.rating = rating;
  this.hasWatched = hasWatched;
}

// Now we can make an array of movies
var movie = new Array();
movie[0] = new Movie("Moonlight", 5, "watched");
movie[1] = new Movie("La La Land", 4.5, "not seen");
movie[2] = new Movie("Rogue One", 5, "watched");
movie[3] = new Movie("Frozen", 3.5, "not seen");


for (var i = 0; i < movie.length; i++) {
        console.log("You have " + movie[i].hasWatched + " " + movie[i].name + " - " + movie[i].rating + " stars.");
}

/*
// loop through our new array
for (var i = 0; i < family.length; i++) {
    console.log(family.hasWatched + " - " + family[i].name + " - " + family[i].rating);
}
*/

/*    
// Let's make bob and susan again, using our constructor
var moonlight = new movie("Moonlight", 5, true);
var laLaLand = new movie("La La Land", 4.5, false);
var rogueOne = new movie("Rogue One", 5, true);
var frozen = new movie("Frozen", 3.5, false);

if (hasWatched === true) {
    var hasWatched = "You have watched ";
} else {
    var hasWatched = "You have not seen ";
}

console.log(hasWatched + " " + moonlight.name + " - " + moonlight.rating);
console.log(laLaLand.hasWatched + " " + laLaLand.name + " - " + laLaLand.rating);
console.log(rogueOne.hasWatched + " " + rogueOne.name + " - " + rogueOne.rating);
console.log(frozen.hasWatched + " " + frozen.name + " - " + frozen.rating);
*/