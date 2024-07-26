var ordinals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinals.forEach(function (item) {
    if (item == 1)
        console.log("".concat(item, "st"));
    else if (item == 2)
        console.log("".concat(item, "nd"));
    else if (item == 3)
        console.log("".concat(item, "rd"));
    else
        console.log("".concat(item, "th"));
});
