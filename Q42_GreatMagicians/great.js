var magicians = ["Harry Potter", "MAD", "Howard Thurston", "Jean-Eugène Robert-Houdin"];
var makeGreat = function (magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "Great " + magicians[i];
    }
};
var showMagicians = function (magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
};
showMagicians(magicians);
makeGreat(magicians);
showMagicians(magicians);
