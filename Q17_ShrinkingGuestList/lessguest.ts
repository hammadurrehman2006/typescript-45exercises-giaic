let guest = ["Aswad", "Abdul Khalique", "Saifullah", "Musaib"]
console.log(`Due to some in inconvenience, I have to invite only two persons.\n`)
for(let i=0;i<=1;i++)
{
   let sorry = guest.pop()
    console.log(`Mr.${sorry}, we are sorry that we can't invite you to the dinner today.`)
}
console.log(`\n Invitations \n`)
for(let i=0; i<=1;i++)
{
    console.log(`Hello Mr.${guest[i]}! You are invited at dinner today.`)
}