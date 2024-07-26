let current_users = ["HammadurRehman", "AswadAkram", "Saifullah", "AsadSajjad"]
let new_users = ["hammadurrehman", "IshtiaqAhmed", "Mudassir", "Aswadakram"]
new_users.forEach((item) => {
    for (let i = 0; i <= 3; i++) {
        if (item.toLowerCase() === current_users[i].toLowerCase()) {
            console.log(`This username (${item}) has already been used.`)
            break;
        }
        else if (i == 3) {
            console.log(`The userName (${item}) is available.`)
        }
    }
})