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

// Bienvenida con íconos personalizados
function mostrarBienvenida() {
  const contenido = `
    <div class="card p-3 bienvenida">
      <h2>BIENVENIDO</h2>
      <p>Seleccione una opción para continuar</p>
      <div class="opciones-principales">
        <div class="opcion-circulo" data-cat="balance">
          <img src="assets/images/Energia.jpeg" alt="Balance" class="icono-img">
          <span class="texto">Balance de Energía</span>
        </div>
        <div class="opcion-circulo" data-cat="herramientas">
          <img src="assets/images/Herramienta.png" alt="Herramientas" class="icono-img">
          <span class="texto">Herramientas</span>
        </div>
        <div class="opcion-circulo" data-cat="ventas">
          <img src="assets/images/Grafica.png" alt="Ventas" class="icono-img">
          <span class="texto">Ventas</span>
        </div>
        <div class="opcion-circulo" data-cat="cumplimiento">
          <img src="assets/images/Cumplimiento.png" alt="Cumplimiento" class="icono-img">
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

// Vista ejecutiva con banner superior y recuadros
function abrirVista(categoria) {
  let contenido = `
    <div class="banner-superior">
      <div class="banner-logo" onclick="mostrarBienvenida()">
        <img src="assets/images/logo.png" alt="Logo">
      </div>
      <div class="banner-menu">
        <button onclick="toggleMenu()">Menú ▾</button>
        <div class="banner-menu-opciones">
          <a href="#" onclick="abrirVista('balance')">Balance de Energía</a>
          <a href="#" onclick="abrirVista('herramientas')">Herramientas</a>
          <a href="#" onclick="abrirVista('ventas')">Ventas</a>
          <a href="#" onclick="abrirVista('cumplimiento')">Cumplimiento</a>
        </div>
      </div>
    </div>
  `;

  if(categoria === 'balance') {
    contenido += `
      <div class="card p-3 bienvenida" style="margin-top:80px">
        <h2>Balance de Energía</h2>
        <p>Seleccione la estación:</p>
        <div class="opciones-vista">
          <div class="opcion-recuadro" onclick="mostrarReporte('13gas_be')">13 GAS</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('bexica_be')">Bexica</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('coacalco_be')">Consorcio GNV - Coacalco</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('ecatepec_be')">Consorcio GNV - Ecatepec</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('tlanepantla_be')">Consorcio GNV - Tlanepantla</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('landsegen_be')">Landsegen</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('wigas_be')">WIGAS</div>
        </div>
      </div>`;
  } else if(categoria === 'herramientas') {
    contenido += `
      <div class="card p-3 bienvenida" style="margin-top:80px">
        <h2>Herramientas de Análisis</h2>
        <p>Seleccione la estación:</p>
        <div class="opciones-vista">
          <div class="opcion-recuadro" onclick="mostrarReporte('13gas_tool')">13 GAS</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('wigas_tool')">WIGAS</div>
        </div>
      </div>`;
  } else if(categoria === 'ventas') {
    contenido += `
      <div class="card p-3 bienvenida" style="margin-top:80px">
        <h2>Ventas</h2>
        <p>Seleccione el reporte:</p>
        <div class="opciones-vista">
          <div class="opcion-recuadro" onclick="mostrarReporte('13gas_vd')">13 GAS</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('landsegen_vd')">Landsegen</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('wigas_vd')">WIGAS</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('ventxcliente_trimes')">Global - Ventas por Cliente</div>
        </div>
      </div>`;
  } else if(categoria === 'cumplimiento') {
    contenido += `
      <div class="card p-3 bienvenida" style="margin-top:80px">
        <h2>Cumplimiento</h2>
        <p>Seleccione el reporte:</p>
        <div class="opciones-vista">
          <div class="opcion-recuadro" onclick="mostrarReporte('json_tool')">JSON Mensual</div>
        </div>
      </div>`;
  }

  document.getElementById('contenedor').innerHTML = contenido;
}

// Reportes Power BI
function mostrarReporte(estacion) {
  let src = '';

  // Aquí van los if con las URLs de Power BI (igual que antes)
  // ...

  document.getElementById('contenedor').innerHTML =
    '<div class="banner-superior">' +
      '<div class="banner-logo" onclick="mostrarBienvenida()">' +
        '<img src="assets/images/logo.png" alt="Logo">' +
      '</div>' +
      '<div class="banner-menu">' +
        '<button onclick="toggleMenu()">Menú ▾</button>' +
        '<div class="banner-menu-opciones">' +
          '<a href="#" onclick="abrirVista(\'balance\')">Balance de Energía</a>' +
          '<a href="#" onclick="abrirVista(\'herramientas\')">Herramientas</a>' +
          '<a href="#" onclick="abrirVista(\'ventas\')">Ventas</a>' +
          '<a href="#" onclick="abrirVista(\'cumplimiento\')">Cumplimiento</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="card p-3" style="margin-top:80px">' +
      '<iframe src="'+src+'" width="1140" height="541.25" frameborder="0" allowFullScreen="true"></iframe>' +
    '</div>';
}

console.log("Portal listo: banner superior fijo, recuadros dinámicos y iframes actualizados");
