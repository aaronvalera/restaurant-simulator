// Selectors
const orderBtn = document.querySelector("#order-button");
const simulationContainer = document.querySelector("#restaurant-simulation");

// FUNCTIONS //
// Function to randomize simulation
const orderStatus = () => Math.random() > 0.8;

// Fuction to simulate the order
const orderProducts = (product) => {
  return new Promise((resolve) => {
    preparingProducts(product);
    setTimeout(() => {
      resolve(readyProducts(product));
    }, 4000);
  });
};

// Function to simulate the preparation of the order
const preparingProducts = (product) => {
    const paragraph = `<p id="status-${product}">Preparing ${product}...<span class="loader"></span></p>`;
    simulationContainer.insertAdjacentHTML("beforeend", paragraph);
}

// Function to display the success of the order
const readyProducts = (product) => {
    const successParagraph = document.querySelector(`#status-${product}`);
    successParagraph.classList.add("order-success");
    successParagraph.textContent = `${product} is ready ✅`;
}

// Function of the simulation
const initializeSimulation = async () => {
    // Reset the container and disable button
    orderBtn.disabled = true;
    simulationContainer.innerHTML = "";
    // The simulation starts
    const startMessage = document.createElement("h3");
    simulationContainer.appendChild(startMessage);
    startMessage.innerText = "--- 📝 Placing new order ---";
    console.log("--- 📝 Placing new order ---");
    try {
        const status = orderStatus();
        if (status) {
            simulationContainer.innerHTML = `<h3 style="color: red;">❌ Error: The restaurant was unable to process your order.</h3>`;
            throw new Error("❌ Error: The restaurant was unable to process your order.");
        };
        // Call of the promises
        await orderProducts("Drink");
        await orderProducts("Pizza");
        await orderProducts("Dessert");
        // Manual timer using an empty promise
        await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("🎊 Your order has been delivered successfully!");
            const successHeading = document.createElement("h4");
            simulationContainer.appendChild(successHeading);
            successHeading.classList.add("order-success");
            successHeading.innerText = `🎊 Your order has been delivered successfully!`;
    } catch (error) {
        console.log(error);
    } finally {
        setTimeout(() => {
            orderBtn.disabled = false;
        }, 1000);
    }
};

// Run simulation
orderBtn.addEventListener("click", initializeSimulation);