var sand_wich = function (items) {
    if (items.length == 0) {
        console.log("You have ordered a sandwich with no ingredients.");
    }
    else if (items.length == 1) {
        console.log("You have ordered a sandwich with ".concat(items, "."));
    }
    else if (items.length >= 2) {
        var last = items.pop();
        console.log("You have ordered a sandwich with ".concat(items, " and ").concat(last));
    }
};
var order_1 = ["Grilled Chicken", "Lettuce", "Tomato"];
sand_wich(order_1);
var order_2 = ["Roast Beef", "Cheddar Cheese", "Mustard", "Pickles", "Onions"];
sand_wich(order_2);
var order_3 = ["Tuna", "Olives"];
sand_wich(order_3);
