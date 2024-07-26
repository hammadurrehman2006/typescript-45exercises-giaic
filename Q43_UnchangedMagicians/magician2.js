var magicians = ["Harry Potter", "MAD", "Howard Thurston", "Jean-Eugène Robert-Houdin"];
var make_Great = function (magicians) {
    return magicians.map(function (item) { return "Great ".concat(item); });
};
var show_Magicians = function (magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
};
show_Magicians(magicians); //old array
var great_magicians = make_Great(magicians);
show_Magicians(great_magicians); //modified array
