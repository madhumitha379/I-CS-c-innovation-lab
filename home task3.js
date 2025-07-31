let choice;
do {
    console.log("\nMenu:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    choice = prompt("Enter your choice (1-5): ");

    if (choice < 1 || choice > 5 || isNaN(choice)) {
        console.log("Invalid choice. Please enter a number between 1 and 5.");
        continue;
    }

    if (choice == 5) {
        console.log("Exiting...");
        break;
    }

    let num1 = parseFloat(prompt("Enter the first number: "));
    while (isNaN(num1)) {
        console.log("Invalid input. Please enter a number.");
        num1 = parseFloat(prompt("Enter the first number: "));
    }

    let num2 = parseFloat(prompt("Enter the second number: "));
    while (isNaN(num2)) {
        console.log("Invalid input. Please enter a number.");
        num2 = parseFloat(prompt("Enter the second number: "));
    }

    switch (choice) {
        case '1':
            console.log(Result: ${num1} + ${num2} = ${num1 + num2});
            break;
        case '2':
            console.log(Result: ${num1} - ${num2} = ${num1 - num2});
            break;
        case '3':
            console.log(Result: ${num1} * ${num2} = ${num1 * num2});
            break;
        case '4':
            if (num2 !== 0) {
                console.log(Result: ${num1} / ${num2} = ${num1 / num2});
            } else {
                console.log("Error: Division by zero.");
            }
            break;
    }
} while (choice != 5);
