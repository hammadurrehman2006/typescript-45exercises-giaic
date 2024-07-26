let sand_wich = (items:string[]):void=>{
if(items.length == 0){
    console.log(`You have ordered a sandwich with no ingredients.`)
}
else if(items.length == 1){
console.log(`You have ordered a sandwich with ${items}.`)
}
else if(items.length >= 2){
    const last = items.pop()
console.log(`You have ordered a sandwich with ${items} and ${last}`)
}
}
let order_1 = ["Grilled Chicken", "Lettuce", "Tomato"]
sand_wich(order_1)
let order_2 = ["Roast Beef", "Cheddar Cheese", "Mustard", "Pickles", "Onions"]
sand_wich(order_2)
let order_3 = ["Tuna", "Olives"]
sand_wich(order_3)