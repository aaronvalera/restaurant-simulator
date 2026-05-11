# 🍕 Aaron's Pizza - Restaurant Simulator

An interactive and visual simulation of a pizzeria's workflow, focusing on mastering asynchronous JavaScript patterns!

## Index
1. [About the Project](#-about-the-project)
2. [Asynchronous Logic](#-asynchronous-logic)
3. [Key Features](#-key-features)
4. [Technologies Used](#-technologies-used)
5. [Live Demo](#-live-demo)
6. [Author](#-author)

## About the Project
This project is a functional simulation of a restaurant order system. It goes beyond a simple UI by mimicking real-world delays and random failure possibilities (like a kitchen error or a missing ingredient). It’s a showcase of how to handle complex flows and UI states using modern JavaScript.

## ⚙️ Asynchronous Logic (The Core)
The most important part of this project is the implementation of **Async/Await** and **Promises** to handle the flow of an order.

**Highlights include:**
* **Custom Promise Wrappers:** Used to create artificial delays, making the simulation feel realistic (e.g., waiting for the pizza to bake).
* **Robust Error Handling:** Implementation of `try...catch` blocks to manage "Rejected" states, such as when `Math.random()` determines an order has failed.
* **The Finally Pattern:** Use of the `finally` block to ensure the UI (like the "Order" button) resets to its original state regardless of whether the order was successful or failed.

## Key Features
* **Real-time Tracking:** Watch each stage of the process (Preparing, Baking, Delivering) appear dynamically in the DOM.
* **Randomized Outcomes:** Not every order is a success! The system calculates a failure margin to test error-handling logic.
* **Themed UI:** A custom-designed pizzeria aesthetic with responsive layouts and space-themed elements.
* **State Management:** The button is disabled during the simulation to prevent multiple concurrent requests, ensuring data integrity.

## Technologies Used
* 🟨 **JavaScript (~57.7%):** Focused on DOM manipulation, Event Listeners, and Asynchronous programming (Promises).
* 🟧 **HTML (~11.4%):** Semantic structure for the simulation container and the interactive menu.
* 🟦 **CSS (~30.9%):** Custom styling for "pizzeria" branding, including Google Fonts integration (Bangers & Italianno) and responsive flexbox layouts.

##  Live Demo
Experience the pizza-making process live here:  
**[Play Restaurant Simulator](https://aaronvalera.github.io/restaurant-simulator/)**

## Author
**Aaron Valera**  
* GitHub: [@aaronvalera](https://github.com/aaronvalera)

---
*This project was built to practice and demonstrate the power of JavaScript Promises.*