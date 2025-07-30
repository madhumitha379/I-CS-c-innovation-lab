// Task Manager Module

// Array to store tasks
let tasks = [];

// Function to add a task and call a callback function
const addTask = (task, callback) => {
    tasks.push(task);
    callback(tasks);
};

// Callback function to print all current tasks
const printTasks = (tasks) => {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => {
        console.log(${index + 1}. ${task});
    });
};

// Function to add multiple tasks at once
const addMultipleTasks = (...tasks) => {
    tasks.forEach((task) => {
        addTask(task, printTasks);
    });
};

// Variable scope demonstration
let globalVariable = "I'm global";

const demonstrateScope = () => {
    let localVariable = "I'm local";
    console.log(Global variable inside function: ${globalVariable});
    console.log(Local variable inside function: ${localVariable});

    if (true) {
        let blockVariable = "I'm block-scoped";
        console.log(Block variable inside if block: ${blockVariable});
    }

    // Trying to access blockVariable outside the if block will result in an error
    // console.log(blockVariable); // Uncomment to see the error
};

console.log(Global variable outside function: ${globalVariable});

// Trying to access localVariable outside the function will result in an error
// console.log(localVariable); // Uncomment to see the error

// Adding tasks and printing them
addTask("Buy groceries", printTasks);
addTask("Finish project", printTasks);

// Adding multiple tasks at once
addMultipleTasks("Clean room", "Do laundry", "Prepare dinner");

// Demonstrating variable scope
demonstrateScope();