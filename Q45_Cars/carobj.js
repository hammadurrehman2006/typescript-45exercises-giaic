function car_spec(manufacturer, model) {
    var furtherSpec = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        furtherSpec[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    furtherSpec.forEach(function (item) {
        var _a = item.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var car1 = car_spec("Toyota", "Corolla Altis", "Year : 2024", "Number : AFR 2006");
console.log(car1);
