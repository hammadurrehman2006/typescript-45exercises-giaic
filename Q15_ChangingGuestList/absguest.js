var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guest = ["Aswad", "Abdul Khalique", "Saifullah", "Musaib"];
var guests = __spreadArray([], guest, true);
for (var i = 0; i <= 3; i++) {
    if (i == 2)
        guest[2] = "Toqeer";
    console.log("Hey Mr. ".concat(guest[i], " You are invited at dinner tonight."));
}
console.log("Due to some Busynesses, Mr. ".concat(guests[2], " is unable to attend dinner todat."));
