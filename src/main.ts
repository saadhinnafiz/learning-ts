// types

type Pizza = { id: number; name: string; price: number };

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed" | "cancelled"; // only these values allowed
};

// declared variables

let cashInRegister: number = 100;
let nextOrderId: number = 1;
let nextPizzaId: number = 1;
const orderHistory: Order[] = [];

// menu

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

// function to add new item to menu
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(newPizza);
  return newPizza;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

//function to place new order
function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  return newOrder;
}

//function to compleye an order
function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Order ${orderId} not found`);
    return;
  }
  order.status = "completed";
  return order;
}

// function to refund an existing
function refund(orderId: number): Order | undefined {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Order ${orderId} not found`);
    return;
  }
  cashInRegister -= order.pizza.price;
  order.status = "cancelled";
  return order;
}

// getpizza detail function

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  const selctedPizza = menu.find((pizza) => {
    if (typeof identifier === "string") {
      return pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase();
    } else {
      return pizza.id === identifier;
    }
  });
  if (!selctedPizza) {
    console.error(`Pizza ${identifier} not found`);
    return;
  }
  return selctedPizza;
}

const finder = getPizzaDetail(2);
console.log(finder);

placeOrder("Chicken Bacon Ranch");
placeOrder("BBQ Chicken");
completeOrder(1);
completeOrder(2);

refund(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order history:", orderHistory);

//*------------------------------------------------------------------------------------*/

// Literal Types — restrict a value to specific allowed values only
// Union Types — allow a value to be one of several types using |

type User = {
  name: string;
  mobile: number;
  email: string;
  role: "guest" | "member" | "admin"; // can ONLY be one of these three values
  status: "active" | "inactive" | "banned"; // another literal union example
  age: number | null; // union with null — age might not be provided
};

// Creating a user — TypeScript will error if role is anything other than the three options

const newUser: User = {
  name: "Saadhin",
  mobile: 9991717,
  email: "saadhin@example.com",
  role: "guest",
  status: "active",
  age: 26,
};

// * Literal types are great for:
// * - User roles (guest, member, admin)
// * - Order status (ordered, processing, completed, cancelled)
// * - Payment status (pending, paid, failed)
// * - Any fixed set of allowed values
