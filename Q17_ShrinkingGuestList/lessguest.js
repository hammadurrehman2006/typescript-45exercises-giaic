var guest = ["Aswad", "Abdul Khalique", "Saifullah", "Musaib"];
console.log("Due to some in inconvenience, I have to invite only two persons.\n");
for (var i = 0; i <= 1; i++) {
    var sorry = guest.pop();
    console.log("Mr.".concat(sorry, ", we are sorry that we can't invite you to the dinner today"));
}
console.log("\n Invitations \n");
for (var i = 0; i <= 1; i++) {
    console.log("Hello Mr.".concat(guest[i], "! You are invited at dinner today."));
}
