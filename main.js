onload = () => {
  document.body.classList.remove("container");

  // Configurar el botón de "Abrir regalo"
  const openGiftBtn = document.getElementById("openGiftBtn");
  const initialScreen = document.getElementById("initialScreen");
  const titulo = document.getElementById("titulo");
  const night = document.getElementById("night");
  const flowers = document.getElementById("flowers");
  const audio = document.getElementById("bgMusic");
  const cartaContainer = document.getElementById("carta-container");
  const cartaVolver = document.getElementById("carta-volver");
  const verCarta = document.getElementById("ver-carta");
  const envoltura = document.querySelector(".envoltura-sobre");
  const carta = document.querySelector(".carta");

  cartaVolver.addEventListener("click", function () {
    cartaContainer.style.opacity = "0";
    cartaContainer.style.transition = "opacity 0.8s ease-out";

    if (envoltura.classList.contains("abierto")) {
      envoltura.classList.remove("abierto");
    }

    if (carta.classList.contains("abierta")) {
      carta.classList.add("cerrando-carta");
      envoltura.classList.remove("desactivar-sobre");

      setTimeout(() => {
        carta.classList.remove("cerrando-carta");
        carta.classList.remove("abierta");
      }, 500);
    }

    setTimeout(() => {
      cartaContainer.style.display = "none";

      verCarta.style.display = "block";
      titulo.style.display = "block";
      night.style.display = "block";
      flowers.style.display = "block";

      verCarta.style.transition = "opacity 1s ease-in";
      verCarta.style.opacity = "1";
      verCarta.style.transform = "scale(1)";
      titulo.style.transition = "opacity 1s ease-in";
      titulo.style.opacity = "1";
      titulo.style.transform = "scale(1)";
      night.style.opacity = "1";
      night.style.transition = "opacity 1s ease-in";
      flowers.style.transition = "opacity 1s ease-in";
      flowers.style.opacity = "1";
      flowers.style.transform = "scale(1)";
    }, 500);
  });

  verCarta.addEventListener("click", function () {
    verCarta.style.opacity = "0";
    verCarta.style.transform = "scale(0.8)";
    verCarta.style.transition = "all 0.8s ease-out";
    titulo.style.opacity = "0";
    titulo.style.transform = "scale(0.8)";
    titulo.style.transition = "all 0.8s ease-out";
    night.style.opacity = "0";
    night.style.transition = "opacity 0.8s ease-out";
    flowers.style.opacity = "0";
    flowers.style.transform = "scale(0.8)";
    flowers.style.transition = "all 0.8s ease-out";

    setTimeout(() => {
      verCarta.style.display = "none";
      titulo.style.display = "none";
      night.style.display = "none";
      flowers.style.display = "none";

      cartaContainer.style.display = "block";

      // Animación de aparición del contenido principal
      setTimeout(() => {
        cartaContainer.style.transition = "opacity 1s ease-in";
        cartaContainer.style.opacity = "1";
      }, 100);
    }, 800);
  });

  openGiftBtn.addEventListener("click", function () {
    // Animación de transición suave
    initialScreen.style.opacity = "0";
    initialScreen.style.transform = "scale(0.8)";
    initialScreen.style.transition = "all 0.8s ease-out";

    setTimeout(() => {
      // Ocultar pantalla inicial
      initialScreen.style.display = "none";

      // Mostrar contenido principal
      verCarta.style.display = "block";
      verCarta.style.transition = "opacity 1s ease-in";
      verCarta.style.opacity = "1";
      titulo.style.display = "block";
      titulo.style.transition = "opacity 1s ease-in";
      titulo.style.opacity = "1";
      night.style.display = "block";
      flowers.style.display = "block";

      // Animación de aparición del contenido principal
      setTimeout(() => {
        mainContent.style.transition = "opacity 1s ease-in";
        mainContent.style.opacity = "1";
      }, 100);

      // Reproducir música
      audio.currentTime = 20.8;
      audio.play().catch((error) => {
        console.log("Error reproduciendo música:", error);
        // Si hay error, intentar de nuevo en un momento
        setTimeout(() => {
          audio
            .play()
            .catch((e) =>
              console.log("No se pudo reproducir la música automáticamente")
            );
        }, 1000);
      });
    }, 800);
  });
};
