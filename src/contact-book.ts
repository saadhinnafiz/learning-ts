// Type and global variables

type Contact = {
  id: number;
  name: string;
  phone: string;
  email: string;
  group: "family" | "friends" | "work" | "other";
  favourite: boolean;
};

let nextId: number = 6;

// Array of contacts

const contacts: Contact[] = [
  {
    id: 1,
    name: "Mum",
    phone: "7770000",
    email: "safiyya@example.com",
    group: "family",
    favourite: true,
  },
  {
    id: 2,
    name: "Dad",
    phone: "7770001",
    email: "nafiz@example.com",
    group: "family",
    favourite: true,
  },
  {
    id: 3,
    name: "Shahuzan",
    phone: "7770002",
    email: "shahuzan@work.com",
    group: "work",
    favourite: false,
  },
  {
    id: 4,
    name: "Naish",
    phone: "7770003",
    email: "naish6769@gamer.com",
    group: "friends",
    favourite: true,
  },
  {
    id: 5,
    name: "Bank",
    phone: "7770004",
    email: "bankofcountry@bank.com",
    group: "other",
    favourite: false,
  },
];

// Function to add a new contact

function addContact(
  name: string,
  phone: string,
  email: string,
  group: "family" | "friends" | "work" | "other",
): Contact[] {
  const addNewContact: Contact = {
    id: nextId++,
    name,
    phone,
    email,
    group,
    favourite: false,
  };
  contacts.push(addNewContact);
  return contacts;
}

addContact("Iza", "7770007", "iza@example.com", "family"); // Add a new contact
addContact("Naashiya", "7770008", "naash@example.com", "other"); // Add a new contact
console.log(contacts);

// Function to toggle favourites

function toggleFavourite(id: number): Contact | undefined {
  const selectedContact = contacts.find((contact) => contact.id === id);
  if (!selectedContact) {
    console.error(`Selected Contact ID ${id} not found`);
    return;
  }
  selectedContact.favourite = !selectedContact.favourite;
  return selectedContact;
}

toggleFavourite(6); // flips the newly added contact as a favourite
toggleFavourite(4); // flips the contact as not a favourite
console.log(contacts);

// Function to search for a contact

function searchContact(input: string): Contact[] {
  return contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
  );
}

console.log("search results", searchContact("na"));

// Function to filter by group

function getByGroup(group: "family" | "friends" | "work" | "other"): Contact[] {
  return contacts.filter((category) => category.group === group);
}

console.log("SEARCH RESULTS", getByGroup("family"));

// Function to Delete contacts

function deleteContact(id: number): Contact[] | undefined {
  const selectedContact = contacts.find((contact) => contact.id === id);
  if (!selectedContact) {
    console.error(`Selected Contact ID ${id} not found`);
    return;
  }
  const index = contacts.indexOf(selectedContact);
  contacts.splice(index, 1);
  return contacts;
}

deleteContact(7);

console.log("Here is the full contact list:", contacts);
