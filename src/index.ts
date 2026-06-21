type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found!");
    return;
  }
  Object.assign(foundUser, updates);
}

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users);

//* Generics
// Generics allow you to write reusable functions that work with ANY type
// instead of writing separate functions for numbers, strings, objects etc.
// T is a placeholder for the actual type — it gets filled in when you call the function

// Without generics you'd need three separate functions:
// function getLastNumber(array: number[]) { ... }
// function getLastString(array: string[]) { ... }
// function getLastObject(array: object[]) { ... }

// With generics — one function handles all types:
// <T> declares the generic type placeholder
// T[] means "an array of whatever type T is"
// TypeScript automatically figures out what T is based on what you pass in

function getLastItem<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = ["raindrops on roses", "whiskers on kittens"];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

console.log(getLastItem(gameScores)); // T = number → returns number
console.log(getLastItem(favoriteThings)); // T = string → returns string
console.log(getLastItem(voters)); // T = {name: string, age: number} → returns object

// * T is just a convention — you could use any letter or word
// * <T> is like a parameter but for types instead of values
// * TypeScript infers the type automatically — no need to specify it manually
