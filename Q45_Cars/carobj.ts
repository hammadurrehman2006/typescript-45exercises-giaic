function car_spec(manufacturer: string, model: string, ...furtherSpec) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    furtherSpec.forEach(item =>{ 
        let [key, value] = item.split(`:`);
        car[key.trim()] = value.trim();
    })
        return car;
}
    let car1 = car_spec("Toyota", "Corolla Altis", "Year : 2024", "Number : AFR 2006")
    console.log(car1)