// types

type Pizza = { id: number; name: string; price: number };

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed" | "cancelled"; // only these values allowed
};

// menu

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

// declared variables

let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory: Order[] = [];

// function to add new item to menu
function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

//function to place new order
function placeOrder(pizzaName: string) {
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
function completeOrder(orderId: number) {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Order ${orderId} not found`);
    return;
  }
  order.status = "completed";
  return order;
}

// function to refund an existing
function refund(orderId: number) {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Order ${orderId} not found`);
    return;
  }
  cashInRegister -= order.pizza.price;
  order.status = "cancelled";
  return order;
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

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
