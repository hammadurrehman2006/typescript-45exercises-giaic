console.log("\tFavorite Number");
var fav_num = 7;
//1st method-------------------------------------
console.log("Hey! Your fvorite number is ".concat(fav_num, ". Great!"));
//2nd method-------------------------------------
function reveal(num) {
    console.log("Hey! Your fvorite number is ".concat(num, ". Great!"));
}
reveal(fav_num);
