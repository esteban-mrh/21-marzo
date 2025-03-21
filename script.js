// Animación de los girasoles como si el viento soplara
    gsap.to(".sunflower", {
      rotation: 3,  // Cambiamos rotate por rotation
      transformOrigin: "bottom center",  // Cambiamos el origen para que gire desde abajo
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
