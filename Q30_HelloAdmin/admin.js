var userNames = ["HammadurRehman", "Aswad Akram", "Admin", "Saifullah", "Abdul Khalique"];
userNames.forEach(function (item) {
    if (item == "Admin") {
        console.log("\nHello Admin, would you like to see a status report of today?\n");
    }
    else {
        console.log("Hey ".concat(item, "! Thank you for logging in again."));
    }
});
