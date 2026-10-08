// header.js

// Inyectar HTML del header
document.body.insertAdjacentHTML("afterbegin", `
<header>
  <div class="logo"> 
<img src="https://www.elemsegpriv.com/Imagenes/Logos.webp" alt="Logo" class="logo-img">
  <img src="https://www.elemsegpriv.com/Imagenes/letras.webp" alt="Elemsegpriv" class="logo-letters">
  </div>
  <nav>
    <ul class="nav-links">
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#valores">Valores</a></li>
      <li><a href="#tecnologia">Tecnología</a></li>
      <li><a href="#mision">Misión y Visión</a></li>
      <li><a href="#equipo">Equipo</a></li>
      <li><a href="#clientes">Clientes</a></li>
      <li><a href="#estadisticas">Estadísticas</a></li>
      <li><a href="#blog">Noticias</a></li>
      <li><a href="#mapa">Ubicación</a></li>
      <li><a href="#certificaciones">Certificaciones</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
    <!-- Botón hamburguesa -->
    <div class="hamburger">
      <span></span><span></span><span></span>
    </div>
  </nav>
</header>
`);

// Inyectar CSS del header
const style = document.createElement("style");
style.textContent = `
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.logo-img {
  height: 50px; /* Controla el tamaño vertical del logo uniformemente */
  width: auto;  /* Mantiene la proporción de aspecto original */
}
.logo-letters {
  height: 30px;         /* Altura independiente para ajustar el tamaño de las letras al icono */
  width: auto;          /* Mantiene la proporción original del texto */
}
header {
  padding-top: 70px;
  background: linear-gradient(90deg, #111, #222);
  color: #fff;
  display: flex;
  justify-content: space-between; 
  align-items: center;
//  padding: 1rem 2rem; 
  position: sticky; 
  top: 0; 
  z-index: 1000; 
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
.logo { font-size: 1.5rem; font-weight: 800; background:linear-gradient(180deg, #ffd700 0%, #b8860b 100%);-webkit-background-clip:text; color:transparent; }
.logo:hover { text-shadow: 0 0 10px #f1c40f, 0 0 20px #f1c40f; transition: text-shadow 0.3s ease; }

.nav-links { list-style: none; display: flex; gap: 1rem; }
.nav-links li a { color: #fff; text-decoration: none; font-weight: 600; transition: color 0.3s, border-bottom 0.3s; }
.nav-links li a:hover { color: #f1c40f; border-bottom: 2px solid #f1c40f; }

.hamburger { display: none; flex-direction: column; cursor: pointer; gap: 5px; }
.hamburger span { width: 25px; height: 3px; background: #fff; transition: all 0.3s ease; }
.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

@media(max-width: 1300px){
  .nav-links { 
    position: fixed; top: 0; right: 0; height: 100vh; width: 220px; 
    background: #111; flex-direction: column; align-items: center; justify-content: center; 
    gap: 1.5rem; transform: translateX(100%); transition: transform 0.3s ease-in-out; 
  }
  .nav-links.active { transform: translateX(0); }
  .hamburger { display: flex; }
}
`;
document.head.appendChild(style);

// Lógica JS para el menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
});
