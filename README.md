<br>_"What the f.... are you, a programmer,_</br>
<br>_if you didn't make a calculator!!!"_</br> 
 <br>_- A random person from Habr._</br>

<img src="habrUser.png" alt="userHabr" width="110" height="80">


# Calculator Project

![Project Example](Calkcrop.gif)

## Description

The "Calculator" project is an interactive calculator that can perform standard arithmetic operations such as addition, subtraction, multiplication, and division. The calculator supports input of not only integers but also decimal numbers and negative numbers. Users can easily delete one character at a time or clear the entire input. One of the unique features of this calculator is its user-friendly interface, allowing interaction through buttons without the use of an input field.

## Project Goal

The main goal of this project was to create a calculator using the React and Redux libraries and to address various challenges related to data processing and state management within the application. During the development of the calculator, various JavaScript language features were explored and tested when working with different data types. An important aspect was handling situations related to division by zero and operations between numbers and strings.

## Tools and Technologies
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>
The project was developed using the following tools and technologies:
- **React**: The React library was used to create the project's interface and components.
- **Redux**: Redux was used to manage the application's state.
- **Math.js**: The Math.js library was used to perform mathematical operations without using `eval`.
- **Jest**: Unit tests were written using Jest.
- **HTML and CSS**: The design of the calculator was inspired by the Apple calculator style, giving the project a modern and minimalist design.


## Worked JavaScript Features

During the creation of the "Calculator" project, various JavaScript language features were worked on and tested when dealing with different data types:

### 1. Division by 0
A check for division by zero (0) was implemented to prevent errors and incorrect results when attempting to divide a number by zero. Users receive a notification about the impossibility of performing the operation.

### 2. Addition of Numbers and Strings
The JavaScript feature where the "+" operator can be used for string concatenation and number addition was studied. This allowed for proper handling of scenarios where users input numbers and operators, with efforts made to prevent concatenation of numbers and strings.

### 3. Division of Number by String
A situation where dividing a number by a string can lead to unexpected results was identified. To ensure the correct operation of the application, input validation was performed, and users are notified of an error if they attempt to divide a number by a string.

### 4. Input of Non-Integer and Negative Values
The project supports the input of non-integer numbers (floating-point) and negative values, requiring special attention to the processing of input data for proper handling.

All these features were meticulously worked on and tested using the Jest framework to ensure reliable and stable functioning of the calculator when working with different data types.

### The deployed project can be found at the following link: ...    
