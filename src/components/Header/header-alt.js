// header.js

// Inyectar HTML del header
document.body.insertAdjacentHTML("afterbegin", `
  <div class="top-bar"> <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> Llámanos al 55-38-11-40-25 | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
  <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
  <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"/>
</svg> Servicio de guardias 12,24/7 en todo México</p> </div> 
<header>
  <div class="logo"> 
<img src="https://www.elemsegpriv.com/Imagenes/Logos.webp" alt="Logo" class="logo-img">
  <img src="https://www.elemsegpriv.com/Imagenes/letras.webp" alt="Elemsegpriv" class="logo-letters">
   </div>
  <nav>
    <ul class="nav-links">
      <li><a href="/index#servicios">Servicios</a></li>
      <li><a href="/index#valores">Valores</a></li>
      <li><a href="/index#tecnologia">Tecnología</a></li>
      <li><a href="/index#mision">Misión y Visión</a></li>
      <li><a href="/index#equipo">Equipo</a></li>
      <li><a href="/index#clientes">Clientes</a></li>
      <li><a href="/index#estadisticas">Estadísticas</a></li>
      <li><a href="/index#blog">Noticias</a></li>
      <li><a href="/index#mapa">Ubicación</a></li>
      <li><a href="/index#certificaciones">Certificaciones</a></li>
      <li><a href="/index#contacto">Contacto</a></li>
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
.top-bar {  
  background: #f1c40f; 
  color: #111; 
  font-weight: 600; 
  font-size: 14px; 
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%;
  height: 65px; 
  z-index: 1000; 
  font-family: "Poppins", sans-serif;
  /* Método definitivo para centrar vertical y horizontalmente */
  display: flex;
  justify-content: center; /* Centrado horizontal */
  align-items: center;     /* Centrado vertical */
  box-sizing: border-box;
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
font-family: "Poppins", sans-serif;
  margin-top: 70px;
  background: linear-gradient(90deg, #111, #222);
  color: #fff;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 1rem 2rem; 
  position: sticky; 
 top: 50px;
    left: 0; 
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
