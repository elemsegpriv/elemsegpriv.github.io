// footer.js

const footerHTML = `
<footer>
  <div class="footer-container">
    
    <!-- Columna izquierda -->
    <div class="footer-left">
  <img src="https://www.elemsegpriv.com/Imagenes/letras.webp" alt="Elemsegpriv" class="logo-letters">
      <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
</svg> <span class="year"></span> Elemsegpriv. Todos los derechos reservados.</p>
      <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
</svg>México, Ciudad de México</p>
      <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> Tel: +52 55 XXXX XXXX</p>
      <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/>
</svg> contacto@elemsegpriv.com</p>
    </div>
    
    <!-- Columna centro -->
    <div class="footer-center">
      <h4>Enlaces rápidos</h4>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#equipo">Equipo</a></li>
        <li><a href="#certificaciones">Certificaciones</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </div>
   <!-- Columna segundo centro -->
    <div class="footer-center">
      <h4>Explorar</h4>
      <ul>
        <li><a href="/Acerca_de_nosotros">Acerca de</a></li>
        <li><a href="/Linea_tiempo">Linea de tiempo</a></li>
        <li><a href="/Links">RS</a></li>
        <li><a href="/Directorio">Directorio</a></li>
      </ul>
    </div>
   <!-- Columna tercer centro -->
    <div class="footer-center">
      <h4>Otros</h4>
      <ul>
        <li><a href="/Documentacion">Documentación</a></li>
        <li><a href="/Bolsa_trabajo">Bolsa de trabajo</a></li>
        <li><a href="/Blog">Blog</a></li>
        <li><a href="/Noticias">Noticias</a></li>
        <li><a href="/Bolentin">Boletin</a></li>
      </ul>
    </div>
    <!-- Columna derecha -->
    <div class="footer-right">
      <h4>Síguenos</h4>
      <div class="social-icons">
        <a href="https://facebook.com/elemsegpriv" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com/elemsegpriv" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://tiktok.com/@elemsegprivv" target="_blank" aria-label="TikTok">
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://x.com/elemsegpriv" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com/@elemsegpriv" target="_blank" aria-label="YouTube">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Aviso legal -->
  <div class="footer-bottom">
    <p><a href="/Politica_privacidad">Politica de privacidad</a> | <a href="/Términos_condiciones">Términos y condiciones</a> | <a href="/Políticas_cookies">Políticas de cookies</a></p>
    <p>Horario de atención: Lunes a Sabado - 8:00 a.m / 10:00 p.m</p>
  </div>
</footer>
`;

// Insertar el footer al final del body
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Inyectar CSS del footer
  const style = document.createElement("style");
  style.textContent = `
    footer {
      position: relative;
      background: #111;
      color: #fff;
      padding: 2rem 1rem;
    }
    .footer-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .footer-left, .footer-center, .footer-right {
      flex: 1;
      min-width: 200px;
      margin: 1rem;
    }
    .footer-center ul {
      list-style: none;
      padding: 0;
    }
    .footer-center ul li {
      margin: 6px 0;
    }
    .footer-center a {
      color: #f1c40f;
      text-decoration: none;
      position: relative;
    }
    .footer-center a:hover {
      text-decoration: underline;
    }
    .footer-center a::after { 
      content: ""; position: absolute; left: 0; bottom: -2px; width: 0%; height: 2px; background: #f1c40f; transition: width 0.3s; 
    }
    .footer-center a:hover::after { width: 100%; }

    .social-icons {
      display: flex;
      gap: 1rem;
      justify-content: space-evenly;
    }
    .social-icons a {
      color: #aaa;
      font-size: 1.5rem;
      transition: color 0.3s, transform 0.3s;
    }
    .social-icons a:hover {
      color: #f1c40f;
      transform: rotate(10deg) scale(1.2);
    }

    .footer-bottom {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.9rem;
      border-top: 1px solid #333;
      padding-top: 1rem;
    }
    .footer-bottom a {
      color: #f1c40f;
      text-decoration: none;
    }
    .footer-bottom a:hover {
      text-decoration: underline;
    }

    @media(max-width:768px){
      .footer-container { flex-direction: column; text-align: center; gap:1rem; }
    }
  `;
  document.head.appendChild(style);

  // JS opcional: ejemplo de interacción
  const links = document.querySelectorAll(".footer-center a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log("Navegando a:", link.getAttribute("href"));
    });
  });
  // Obtener el año actual
const currentYear = new Date().getFullYear();

// Seleccionar todos los elementos con la clase "year"
const yearElements = document.querySelectorAll(".year");

// Insertar el año en cada uno
yearElements.forEach(el => {
  el.textContent = currentYear;
});
});
