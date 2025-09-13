//1) Create an array of contact objects with properties and method
let contacts = [
  {
    name: "Alice",
    phone: "1234567890",
    email: "alice@example.com",
    displayInfo: function () {
      console.log(`Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`);
    }
  },
  {
    name: "Bob",
    phone: "9876543210",
    email: "bob@example.com",
    displayInfo: function () {
      console.log(`Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`);
    }
  }
];

// 2) Use destructuring to extract contact info
function showContact({ name, phone, email }) {
  console.log(`(Destructured) ${name} - ${phone} - ${email}`);
}
showContact(contacts[0]);

// 3) Access contact properties using dot and bracket notation
console.log("Dot notation:", contacts[0].name);
console.log("Bracket notation:", contacts[1]["email"]);

// Iterate through the array of contacts to print details
contacts.forEach(contact => contact.displayInfo());

// 4) Use rest parameters to create a function that adds multiple contacts
function addContacts(...newContacts) {
  contacts.push(...newContacts);
}
addContacts(
  {
    name: "Charlie",
    phone: "1112223333",
    email: "charlie@example.com",
    displayInfo() {
      console.log(`${this.name} - ${this.phone} - ${this.email}`);
    }
  },
  {
    name: "David",
    phone: "4445556666",
    email: "david@example.com",
    displayInfo() {
      console.log(`${this.name} - ${this.phone} - ${this.email}`);
    }
  }
);

console.log("\nAfter adding new contacts:");
contacts.forEach(c => c.displayInfo());

// 5) Use spread operator to merge multiple contact arrays
let moreContacts = [
  {
    name: "Eva",
    phone: "7778889999",
    email: "eva@example.com",
    displayInfo() {
      console.log(`${this.name} - ${this.phone} - ${this.email}`);
    }
  }
];
contacts = [...contacts, ...moreContacts];

console.log("\nAfter merging arrays:");
contacts.forEach(c => c.displayInfo());

// Demonstrate call(), apply(), and bind()
let contactUtil = {
  displayCustom: function (prefix, suffix) {
    console.log(`${prefix} ${this.name} - ${this.phone} - ${this.email} ${suffix}`);
  }
};

let exampleContact = contacts[0];

// call()
contactUtil.displayCustom.call(exampleContact, ">>", "<<");

// apply()
contactUtil.displayCustom.apply(exampleContact, ["[", "]"]);

// bind()
let boundDisplay = contactUtil.displayCustom.bind(exampleContact, "START", "END");
boundDisplay();
