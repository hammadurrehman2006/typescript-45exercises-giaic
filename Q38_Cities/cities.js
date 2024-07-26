function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is a city of ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Moscow"); //give a humorous error
describe_city("Bejing", "China");
