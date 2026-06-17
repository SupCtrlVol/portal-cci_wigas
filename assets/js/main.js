function entrarPortal() {
  const inicio = document.getElementById('inicio');
  const balance = document.getElementById('balance');

  inicio.classList.add('hidden');
  balance.style.display = 'flex';
  setTimeout(() => {
    balance.classList.add('visible');
    mostrarBienvenida();
  }, 300);
}

// Bienvenida inicial (sin banner, clase inicio-view)
function mostrarBienvenida() {
  const contenido = `
    <div class="card p-3 bienvenida inicio-view">
      <h2>BIENVENIDO</h2>
      <p>Seleccione una opción para continuar</p>
      <div class="opciones-principales">
        <div class="opcion-circulo" data-cat="balance">
          <img src="assets/images/Energia.png?v=5" alt="Balance" class="icono-img">
          <span class="texto multilinea">Balance<br>de Energía</span>
        </div>
        <div class="opcion-circulo" data-cat="herramientas">
          <img src="assets/images/Herramienta.png?v=5" alt="Herramientas" class="icono-img">
          <span class="texto">Herramientas</span>
        </div>
        <div class="opcion-circulo" data-cat="ventas">
          <img src="assets/images/Grafica.png?v=5" alt="Ventas" class="icono-img">
          <span class="texto">Ventas</span>
        </div>
        <div class="opcion-circulo" data-cat="cumplimiento">
          <img src="assets/images/Cumplimiento.png?v=5" alt="Cumplimiento" class="icono-img">
          <span class="texto">Cumplimiento</span>
        </div>
      </div>
    </div>
  `;
  document.getElementById('contenedor').innerHTML = contenido;

  document.querySelectorAll('.opcion-circulo').forEach(opcion => {
    opcion.addEventListener('click', () => {
      seleccionarOpcion(opcion);
      abrirVista(opcion.dataset.cat);
    });
  });
}

function seleccionarOpcion(elemento) {
  const opciones = document.querySelectorAll('.opcion-circulo');
  opciones.forEach(op => op.classList.remove('seleccionado'));
  elemento.classList.add('seleccionado');
}

// Función para desplegar/ocultar menú del banner
function toggleMenu() {
  const menu = document.querySelector('.banner-menu');
  menu.classList.toggle('open');
}

// ====== Banner superior ======
function renderBanner() {
  return `
    <div class="banner-superior">
      <div class="banner-blanco">
        <div class="banner-logo">
          <img src="assets/images/logo.png" alt="Logo" onclick="mostrarBienvenida()">
        </div>
      </div>
      <div class="banner-rojo">
        <div class="banner-menu">
          <button onclick="toggleMenu()">Menú</button>
          <div class="banner-menu-opciones">
            <a href="#" onclick="mostrarCategorias()">Categorías</a>
            <a href="#" onclick="mostrarAcuses('13 GAS')">Acuses</a>
            <a href="#" onclick="mostrarReporte('wigas_be')">Reportes</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleMenu() {
  document.querySelector('.banner-menu').classList.toggle('open');
}

// ====== Pantalla de bienvenida ======
function mostrarBienvenida() {
  let contenido = `
    <div class="card p-3 bienvenida inicio-view">
      <h2>Bienvenido al Portal CCI Wigas</h2>
      <p>Seleccione una opción para continuar:</p>
      <div class="opciones-principales">
        <div class="opcion-circulo" onclick="mostrarCategorias()">
          <img src="assets/images/categorias.png" class="icono-img">
          <span>Categorías</span>
        </div>
        <div class="opcion-circulo" onclick="mostrarAcuses('13 GAS')">
          <img src="assets/images/acuses.png" class="icono-img">
          <span>Acuses</span>
        </div>
        <div class="opcion-circulo" onclick="mostrarReporte('wigas_be')">
          <img src="assets/images/reportes.png" class="icono-img">
          <span>Reportes</span>
        </div>
      </div>
    </div>
  `;
  document.getElementById('contenedor').innerHTML = contenido;
}

// ====== Mostrar categorías ======
function mostrarCategorias() {
  let contenido = renderBanner();
  contenido += `
    <div class="card p-3 bienvenida banner-view">
      <h2>Categorías</h2>
      <p>Seleccione una estación:</p>
      <div class="opciones-vista">
        <div class="opcion-recuadro" onclick="mostrarReporte('13gas_be')">13 GAS BE</div>
        <div class="opcion-recuadro" onclick="mostrarReporte('wigas_be')">WIGAS BE</div>
        <div class="opcion-recuadro" onclick="mostrarReporte('13gas_vd')">13 GAS Ventas</div>
        <div class="opcion-recuadro" onclick="mostrarReporte('wigas_vd')">WIGAS Ventas</div>
        <div class="opcion-recuadro" onclick="mostrarReporte('13gas_tool')">13 GAS Tool</div>
        <div class="opcion-recuadro" onclick="mostrarReporte('wigas_tool')">WIGAS Tool</div>
        <div class="opcion-recuadro" onclick="mostrarReporte('json_tool')">Cumplimiento JSON</div>
      </div>
    </div>
  `;
  document.getElementById('contenedor').innerHTML = contenido;
}

// ====== Mostrar acuses ======
async function mostrarAcuses(estacion) {
  const response = await fetch('assets/pdf/acuses/metadata.json');
  const metadata = await response.json();
  const ejercicios = Object.keys(metadata[estacion]);

  let contenido = renderBanner();
  contenido += `
    <div class="card p-3 bienvenida banner-view">
      <h2>Acuses ${estacion}</h2>
      <p>Seleccione el año:</p>
      <div class="opciones-vista">`;

  ejercicios.forEach(ejercicio => {
    contenido += `
      <div class="card opcion-recuadro" onclick="mostrarAcusesPorEjercicio('${estacion}', '${ejercicio}')">
        <h4 class="texto">${ejercicio}</h4>
      </div>`;
  });

  contenido += `</div></div>`;
  document.getElementById('contenedor').innerHTML = contenido;
}

// ====== Mostrar acuses por ejercicio ======
async function mostrarAcusesPorEjercicio(estacion, ejercicio) {
  const response = await fetch('assets/pdf/acuses/metadata.json');
  const metadata = await response.json();
  const meses = metadata[estacion][ejercicio];

  let contenido = renderBanner();
  contenido += `
    <div class="card p-3 bienvenida banner-view">
      <h2>Acuses ${estacion} - ${ejercicio}</h2>
      <p>Seleccione el mes:</p>`;

  for (const mes in meses) {
    contenido += `
      <div class="card p-2 mb-3 opcion-recuadro">
        <h4 class="texto">${mes}</h4>
        <div class="opciones-vista">`;

    meses[mes].forEach(pdf => {
      contenido += `
        <div class="opcion-recuadro">
          <a href="assets/pdf/acuses/${estacion}/${ejercicio}/${pdf}" target="_blank" class="texto">${pdf}</a>
        </div>`;
    });

    contenido += `</div></div>`;
  }

  contenido += `</div>`;
  document.getElementById('contenedor').innerHTML = contenido;
}

// ====== Reportes Power BI ======
function mostrarReporte(estacion) {
  let src = '';

  if(estacion === 'wigas_be') {
    src = "https://app.powerbi.com/reportEmbed?reportId=40572fd5-d90b-441b-acac-30eae98e545b&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === '13gas_be') {
    src = "https://app.powerbi.com/reportEmbed?reportId=56676f9f-5b2a-48bb-9e70-01bcba832eb2&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === '13gas_vd') {
    src = "https://app.powerbi.com/reportEmbed?reportId=3a0bd50d-1c22-47a5-93e6-64724f740208&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'wigas_vd') {
    src = "https://app.powerbi.com/reportEmbed?reportId=094fff5e-dbe2-459c-9c5a-b189dcac71e9&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === '13gas_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=318743fa-05d5-40a5-b0db-11ae78c595e5&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'wigas_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=02fe3d46-7d4e-41a2-84a5-f863b364643a&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'json_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=71c98777-7533-4821-b145-4ad8c9cc2e9d&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  }

  document.getElementById('contenedor').innerHTML =
    renderBanner() +
    '<div class="card p-3 bienvenida banner-view">' +
      '<iframe src="'+src+'" width="1140" height="541.25" frameborder="0" allowFullScreen="true"></iframe>' +
    '</div>';
}

// ====== Inicializar ======
document.addEventListener('DOMContentLoaded', mostrarBienvenida);

console.log("Portal listo: bienvenida con clase inicio-view, categorías y reportes con clase banner-view, acuses integrados desde metadata.json");

