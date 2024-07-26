var current_users = ["HammadurRehman", "AswadAkram", "Saifullah", "AsadSajjad"];
var new_users = ["hammadurrehman", "IshtiaqAhmed", "Mudassir", "Aswadakram"];
new_users.forEach(function (item) {
    for (var i = 0; i <= 3; i++) {
        if (item.toLowerCase() === current_users[i].toLowerCase()) {
            console.log("This username (".concat(item, ") has already been used."));
            break;
        }
        else if (i == 3) {
            console.log("The userName (".concat(item, ") is available"));
        }
    }
});
