
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "red sauce", "mozzarella", ["pepperoni", "sausage"])
console.log(p1)

var p2 = pizzaOven("traditional", "red sauce", "mozzarella", ["pepperoni", "sausage"])
console.log(p2)

var p3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(p3)

var p4 = pizzaOven("thin crust", "white sauce", "mozzarella", ["pepperoni", "jalapeno"])
console.log(p4)

var p5 = pizzaOven("thins crust", "white sauce", "mozzarella", ["artichoke", "green pepper", "garlic"])
console.log(p5)
