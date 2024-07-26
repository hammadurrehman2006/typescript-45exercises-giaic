let guest = ["Aswad", "Abdul Khalique", "Saifullah", "Musaib"]
let guests = [...guest]
for (let i = 0; i <= 3; i++)
{
    if(i==2)
        guest[2]="Toqeer";
    console.log(`Hey Mr. ${guest[i]} You are invited at dinner tonight.`)
}
console.log(`Due to some Busynesses, Mr. ${guests[2]} is unable to attend dinner today.`)