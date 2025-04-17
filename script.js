onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    
    // Opcional: Efecto adicional para el mensaje
    const message = document.querySelector('.message');
    setTimeout(() => {
        message.style.animation = "fadeInOut 8s ease-in-out infinite";
    }, 1500);
};