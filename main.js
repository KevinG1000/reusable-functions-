// Part 1: Thinking Functionally

// Function to take an array of numbers and return the sum
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to take an array of numbers and return the average
function averageArray(numbers) {
    if (numbers.length === 0) return 0;
    return sumArray(numbers) / numbers.length;
}

// Function to take an array of strings and return the longest string
function longestString(strings) {
    return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

// Function to take an array of strings and a number, returning strings longer than the given number
function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}

// Function to take a number n and print every number between 1 and n using recursion
function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
}

// Part 2: Thinking Methodically

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by age
const sortedByAge = data.sort((a, b) => parseInt(a.age) - parseInt(b.age));

// Filter the array to remove entries with an age greater than 50
const filteredByAge = data.filter(person => parseInt(person.age) <= 50);

// Map the array to change the “occupation” key to “job” and increment every age by 1
const updatedData = data.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: (parseInt(person.age) + 1).toString()
}));

// Use the reduce method to calculate the sum of the ages
const sumOfAges = data.reduce((sum, person) => sum + parseInt(person.age), 0);

// Calculate the average age
const averageAge = sumOfAges / data.length;

// Part 3: Thinking Critically

// Function to take an object and increment its age field
function incrementAge(obj) {
    if (!obj.age) {
        obj.age = 0;
    } else {
        obj.age += 1;
    }
    obj.updated_at = new Date();
}

// Function to take an object, make a copy, and increment the age field of the copy
function incrementAgeCopy(obj) {
    const copy = { ...obj };
    if (!copy.age) {
        copy.age = 0;
    } else {
        copy.age += 1;
    }
    copy.updated_at = new Date();
    return copy;
}
