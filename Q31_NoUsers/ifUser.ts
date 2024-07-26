let userNames: string[] = ["HammadurRehman", "Aswad Akram", "Admin", "Saifullah", "Abdul Khalique"]
if (userNames.length == 0)
    console.log("We need to find some users!")
else
    console.log("Array has elements")
userNames.splice(0, 5) //array becomes empty
if (userNames.length == 0)
    console.log("We need to find some users!")
else
    console.log("Array has elements")
