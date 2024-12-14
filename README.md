# Assigment3
 
![Jest Tests](https://github.com/SaharLambton/Assigment3/actions/workflows/jest-tests.yml/badge.svg)


# Bookstore - Library Management Project
This project simulates the management of a library using TypeScript and Jest. It enables operations such as adding books, borrowing books, and returning them. It is designed as a practice exercise to learn object-oriented programming, unit testing, and development best practices.

## Features
- Management of books and customers.
- Book borrowing and return with availability validation.
- Unit testing with Jest to ensure functionality.

---

## Prerequisites
Before starting, make sure you have the following tools installed:
- **Node.js**: [Download here](https://nodejs.org)
- **npm**: Comes with Node.js.
- **Code Editor**: Recommended [Visual Studio Code](https://code.visualstudio.com/).

---

## Setup Instructions

1. **Clone the repository or create a new directory:**
   git clone <repository-url>
   cd bookstore-project
2. Install dependencies: Run the following command in your terminal:npm install
3. Configure TypeScript and Jest: The project already includes a tsconfig.json and jest.config.js file, so no further configuration is required.

How to Run the Project
1. Compile the code:
Transpile the TypeScript code into JavaScript using: npx tsc
This will generate JavaScript files in the dist/ folder.

2. Run the program:
Execute the main file using Node.js:node dist/index.js

3. Run the tests:
Verify the project’s functionality by running unit tests with Jest: npm test
