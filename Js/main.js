// Animación de entrada para la barra de navegación

gsap.to(".navbar", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power1.inOut"
});


  // Obtiene la imagen por su ID
  var logo = document.getElementById('logo');

  // Función para cambiar la imagen y rotar al pasar el mouse sobre ella
  logo.addEventListener('mouseenter', function() {
    // Verifica qué imagen está actualmente en uso
    if (logo.src.includes('Destroid1.webp')) {
      // Si es la primera imagen, cambia a la segunda
      logo.src = 'IMG/Destroid2.webp';
    } else {
      // Si es la segunda imagen, cambia a la primera
      logo.src = 'IMG/Destroid1.webp';
    }

 
  });

  // Restablece la rotación y la imagen original al quitar el mouse de la imagen
  logo.addEventListener('mouseleave', function() {
    logo.src = 'IMG/Destroid1.webp'; // Cambia a la primera imagen cuando el mouse se va
  });
  
  
    // Animación con GSAP
    gsap.from(".navbar", { duration: 0, y: 100, opacity: 0, ease: "power4.out" });
    gsap.from("#Contenido", { duration: 1, y: 100, opacity: 0, ease: "power4.out", delay: 1 });
    gsap.from(".icono", { duration: 0.5, opacity: 0, y: 20, stagger: 0.2, delay: 2 });
  
    // Efecto al quitar el cursor del icono
    gsap.to(".icono", {
      scale: 1, // Vuelve al tamaño original
      ease: "power1.inOut",
      cursor: "auto", // Restablece el cursor
      boxShadow: "none", // Quita la sombra
      duration: 0.3
    });
  
    // Registra eventos de mouseenter y mouseleave para cada icono
    document.querySelectorAll(".icono").forEach(icono => {
      icono.addEventListener("mouseenter", () => {
        gsap.to(icono, { scale: 1.5, duration: 0.3 });
      });
      icono.addEventListener("mouseleave", () => {
        gsap.to(icono, { scale: 1, duration: 0.3 });
      });
    });
