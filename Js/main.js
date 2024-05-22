  // Asegúrate de que GSAP y ScrollTrigger estén cargados
gsap.registerPlugin(ScrollTrigger);

// Animación de entrada para la barra de navegación
gsap.to(".navbar", {
  y: 0,
  opacity: 1,
  duration: 1.2,
  ease: "bounce.out"
});

// Ejemplo de animación que se dispara al hacer scroll
gsap.to(".mi-elemento", {
  scrollTrigger: {
    trigger: ".mi-elemento",
    start: "top 75%", // Cuando la parte superior del elemento esté en el 75% de la ventana
    end: "bottom 25%", // Cuando la parte inferior del elemento esté en el 25% de la ventana
    toggleActions: "play pause resume reset", // Acciones en cada fase
  },
  opacity: 1,
  x: 0,
  duration: 2
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
  
  
  