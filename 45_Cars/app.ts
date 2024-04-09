//define a function to create a car object with optional options 
function create_car(manufacture, model, ...options){
    // initialize a car object with manufacture and model 
    let car = {
        manufacture:manufacture,
        model:model
    };

    // Add additional options to the car object
    options.forEach(option => {
        let [key,value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;


}

// CAll the function to create a car object
let my_car = create_car("Toyota", "Corolla", "color:Black", "sunroof: True", "Year: 2024");

// Print the Value to ensure all the information is stored correctly in the car object

console.log(my_car);