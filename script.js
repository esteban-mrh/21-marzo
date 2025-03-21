// Animación de los girasoles como si el viento soplara
    gsap.to(".sunflower", {
      rotate: 3,
      transformOrigin: "50% 50%",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
