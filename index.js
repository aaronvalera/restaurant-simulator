const orderStatus = () => {
  return Math.random() > 0.8;
};

const orderProducts = (product) => {
  return new Promise((resolve) => {
    console.log(`⏳ Preparando ${product}...`);
    
    setTimeout(() => {
      resolve(`✅ ${product} entregado`);
    }, 2000);
  });
};

const initializeSimulation = async () => {
  console.log("--- 📝 Iniciando Nueva Orden ---");

  try {
    const status = orderStatus();
    
    // Si hay error en el sistema, lanzamos la excepción inmediatamente
    if (status) {
      throw new Error("❌ Error: El restaurante no pudo procesar la orden total.");
    }

    const resBebida = await orderProducts("Bebida")
    console.log(resBebida);

    const resPizza = await orderProducts("Pizza");
    console.log(resPizza);

    const resPostre = await orderProducts("Postre");
    console.log(resPostre);
    setTimeout(() => {
        console.log("----------------------------------");
        console.log("🎊 ¡Toda la orden ha sido entregada con éxito!");
    }, 2000);

  } catch (error) {
    console.log(error);
  }
};

// Arrancar simulación
initializeSimulation();