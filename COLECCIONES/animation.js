ScrollReveal().reveal(".caja.dos h3", {
    duration: 1000,  // Duración de la animación
    origin: "bottom",  // Animación desde la izquierda
    distance: "50px",  // Distancia que se mueve el elemento
    delay: 200,  // Retraso antes de la animación
  });
  
  ScrollReveal().reveal(".caja.dos p", {
    duration: 1000,
    origin: "bottom",  // Animación desde la derecha para variar
    distance: "50px",
    delay: 400,  // Retraso adicional para que el párrafo aparezca después del h3
  });
  