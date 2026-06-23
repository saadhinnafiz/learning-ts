// Types and global variables

type Product = {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing" | "food" | "books";
};

type CartItem = {
  product: Product;
  quantity: number;
};

// empty cart

const cart: CartItem[] = [];

// Products Array

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 18 Pro",
    price: 1200,
    category: "electronics",
  },
  {
    id: 2,
    name: "Levi Jeans",
    price: 20,
    category: "clothing",
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    price: 5,
    category: "food",
  },
  {
    id: 4,
    name: "Atomic Habits",
    price: 10,
    category: "books",
  },
  {
    id: 5,
    name: "Fujifilm XM-5 Mirrorless Camera",
    price: 10,
    category: "electronics",
  },
];

// Function to add to cart

function addToCart(
  productId: number,
  quantity: number,
): CartItem[] | undefined {
  const selectedProduct = products.find((item) => item.id === productId);
  if (!selectedProduct) {
    console.error(`Selected product ID ${productId} not found`);
    return;
  }
  const existingCartItem = cart.find(
    (cartItem) => cartItem.product.id === productId,
  );
  if (existingCartItem) {
    existingCartItem.quantity += quantity;
  } else {
    cart.push({ product: selectedProduct, quantity });
  }
  return cart;
}

addToCart(1, 1); // add new iphone to cart
addToCart(2, 1); // add new jeans to cart
addToCart(2, 2); // add 2 more jeans to cart total jeans = 3

// function to remove from cart

function removeFromCart(productId: number): CartItem[] | undefined {
  const existingCartItem = cart.find(
    (cartItem) => cartItem.product.id === productId,
  );
  if (!existingCartItem) {
    console.error(`Selected product ID ${productId} not found in cart`);
    return;
  }
  const index = cart.indexOf(existingCartItem);
  cart.splice(index, 1);
  return cart;
}

removeFromCart(2); // All jeans removed from cart

// function to get cart total

function getCartTotal(): number {
  return cart.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);
}

console.log("Cart total:", getCartTotal());

// Filter by category function

function getByCategory(
  category: "electronics" | "clothing" | "food" | "books",
): Product[] {
  return products.filter(
    (productCategory) => productCategory.category === category,
  );
}

console.log(getByCategory("electronics")); // returns prodcuts with electronics category
