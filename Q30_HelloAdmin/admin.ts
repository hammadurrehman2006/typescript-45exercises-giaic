let userNames: string[] = ["HammadurRehman", "Aswad Akram", "Admin", "Saifullah", "Abdul Khalique"]
userNames.forEach((item) => {
    if (item == "Admin") {
        console.log(`\nHello Admin, would you like to see a status report of today?\n`)
    }
    else {
        console.log(`Hey ${item}! Thank you for logging in again.`)
    }
})