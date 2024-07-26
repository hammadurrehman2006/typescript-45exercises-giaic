var guest = ["Aswad", "Abdul Khalique", "Saifullah", "Musaib"];
//adds at start of array
guest.unshift("Salman");
//adds at end of array
guest.push("Kabeer");
//adds at centre
guest.splice(3, 0, "Naveed");
for (var i = 0; i <= 6; i++) {
    console.log("Hello Mr. ".concat(guest[i], "! You are invited to dinner at Highway Resturant."));
}
