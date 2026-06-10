# Restaurant Simulator

A pure JavaScript simulator that models real-time restaurant operations. This project showcases the use of asynchronous programming, custom native **Promises**, and **async/await** workflows to handle concurrent event-driven logic without external frameworks.

---

## Index
1. [Project Overview](#project-overview)
2. [Asynchronous Logic](#asynchronous-logic)
3. [Key Features](#key-features)
4. [Technologies Used](#technologies-used)
5. [Live Demo](#live-demo)
6. [Author](#author)

---

## Project Overview

The simulation models the workflow of a restaurant from the moment an order is placed to the final billing process. It manages key entities such as menus, table statuses, ordering processes, and kitchen preparation times asynchronously, simulating real-world delays using timed events.

### Key Technical Concepts Demonstrated:
* **Asynchronous Flow Control:** Managing non-blocking tasks with `async/await`.
* **Custom Promises:** Creating and resolving native JavaScript Promises to handle state transitions.
* **Modular Architecture:** Separation of concerns between different restaurant modules (orders, data, logic).
* **State Management:** Tracking changes in menu availability and table availability dynamically.

---

## Asynchronous Logic
The most important part of this project is the implementation of **Async/Await** and **Promises** to handle the flow of an order.

**Highlights include:**
* **Custom Promise Wrappers:** Used to create artificial delays, making the simulation feel realistic (e.g., waiting for the pizza to bake).
* **Robust Error Handling:** Implementation of `try...catch` blocks to manage "Rejected" states, such as when `Math.random()` determines an order has failed.
* **The Finally Pattern:** Use of the `finally` block to ensure the UI (like the "Order" button) resets to its original state regardless of whether the order was successful or failed.

---

## Key Features
* **Real-time Tracking:** Watch each stage of the process (Preparing, Baking, Delivering) appear dynamically in the DOM.
* **Randomized Outcomes:** Not every order is a success. The system calculates a failure margin to test error-handling logic.
* **Themed UI:** A custom-designed pizzeria aesthetic with responsive layouts and space-themed elements.
* **State Management:** The button is disabled during the simulation to prevent multiple concurrent requests, ensuring data integrity.

---

## Technologies Used
* **JavaScript (ES6+)*** - Native asynchronous architecture, execution loops, and Promise objects.
---

##  Live Demo
Experience the pizza-making process live here:  
**[Play Restaurant Simulator](https://aaronvalera.github.io/restaurant-simulator/)**

---

## Author
**Aaron Valera**  
* GitHub: [@aaronvalera](https://github.com/aaronvalera)

---

## License
[MIT](https://choosealicense.com/licenses/mit/)
