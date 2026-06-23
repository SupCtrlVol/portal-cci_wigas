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

// ====== Bienvenida inicial (sin banner, clase inicio-view) ======
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

// ====== Función para desplegar/ocultar menú del banner ======
function toggleMenu() {
  const menu = document.querySelector('.banner-menu');
  menu.classList.toggle('open');
}

// ====== Bloque modular del banner ======
function renderBanner() {
  return `
    <div class="banner-superior">
      <div class="banner-blanco">
        <div class="banner-logo" onclick="mostrarBienvenida()">
          <img src="assets/images/logo_blanco.webp?v=5" alt="Logo">
        </div>
      </div>
      <div class="banner-rojo">
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
    </div>
  `;
}

// ====== Vista ejecutiva con recuadros y banner (clase banner-view) ======
function abrirVista(categoria) {
  let contenido = renderBanner();

  if(categoria === 'balance') {
    contenido += `
      <div class="card p-3 bienvenida banner-view">
        <div class="breadcrumb">
          <img src="assets/images/Regresar.png" alt="Regresar" class="breadcrumb-icon" onclick="mostrarBienvenida()">
        </div>
        <h2 class="titulo-ejecutivo">Balance de Energía</h2>
        <p>Seleccione la estación:</p>
        <div class="opciones-vista">
          <div class="opcion-recuadro" onclick="mostrarReporte('13gas_be')">13 GAS</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('bexica_be')">BEXICA</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('coacalco_be')">CONSORCIO DE GNV Coacalco</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('ecatepec_be')">CONSORCIO DE GNV Ecatepec</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('tlanepantla_be')">CONSORCIO DE GNV Tlanepantla</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('landsegen_be')">LANDSEGEN</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('wigas_be')">WIGAS</div>
        </div>
      </div>`;
  } else if(categoria === 'herramientas') {
    contenido += `
      <div class="card p-3 bienvenida banner-view">
        <div class="breadcrumb">
          <img src="assets/images/Regresar.png" alt="Regresar" class="breadcrumb-icon" onclick="mostrarBienvenida()">
        </div>
        <h2 class="titulo-ejecutivo">Herramientas de Análisis</h2>
        <p>Seleccione la estación:</p>
        <div class="opciones-vista">
          <div class="opcion-recuadro" onclick="mostrarReporte('13gas_tool')">13 GAS</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('wigas_tool')">WIGAS</div>
        </div>
      </div>`;
  } else if(categoria === 'ventas') {
    contenido += `
      <div class="card p-3 bienvenida banner-view">
        <div class="breadcrumb">
          <img src="assets/images/Regresar.png" alt="Regresar" class="breadcrumb-icon" onclick="mostrarBienvenida()">
        </div>
        <h2 class="titulo-ejecutivo">Ventas</h2>
        <p>Seleccione el reporte:</p>
        <div class="opciones-vista">
          <div class="opcion-recuadro" onclick="mostrarReporte('13gas_vd')">13 GAS</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('landsegen_vd')">LANDSEGEN</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('wigas_vd')">WIGAS</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('ventxcliente_trimes')">GLOBAL Ventas por cliente</div>
        </div>
      </div>`;
  } else if(categoria === 'cumplimiento') {
    contenido += `
      <div class="card p-3 bienvenida banner-view">
        <div class="breadcrumb">
          <img src="assets/images/Regresar.png" alt="Regresar" class="breadcrumb-icon" onclick="mostrarBienvenida()">
        </div>
        <h2 class="titulo-ejecutivo">Cumplimiento</h2>
        <p>Seleccione el reporte:</p>
        <div class="opciones-vista">
          <div class="opcion-recuadro" onclick="mostrarAcuses('13 GAS')">Acuses 13 GAS</div>
          <div class="opcion-recuadro" onclick="mostrarAcuses('WIGAS')">Acuses WIGAS</div>
          <div class="opcion-recuadro" onclick="mostrarReporte('json_tool')">JSON Mensual</div>
        </div>
      </div>`;
  }

  document.getElementById('contenedor').innerHTML = contenido;
}

// ====== Breadcrumb fijo con botón regresar solo ícono ======
function renderBreadcrumb(estacion = null, ejercicio = null, mes = null) {
  let ruta = `<div class="breadcrumb">`;

  // Nivel Estación → regresar a Cumplimiento
  if (estacion && !ejercicio && !mes) {
    ruta += `<img src="assets/images/Regresar.png" alt="Regresar" 
              class="breadcrumb-icon" onclick="abrirVista('cumplimiento')">`;
  }

  // Nivel Año → regresar a Estación
  if (estacion && ejercicio && !mes) {
    ruta += `<img src="assets/images/Regresar.png" alt="Regresar" 
              class="breadcrumb-icon" onclick="mostrarAcuses('${estacion}')">`;
  }

  // Nivel Mes → regresar a Año
  if (estacion && ejercicio && mes) {
    ruta += `<img src="assets/images/Regresar.png" alt="Regresar" 
              class="breadcrumb-icon" onclick="mostrarAcusesPorEjercicio('${estacion}', '${ejercicio}')">`;
  }

  ruta += `</div>`;
  return ruta;
}

// ====== Acuses ======
async function mostrarAcuses(estacion) {
  const response = await fetch('assets/pdf/acuses/metadata.json');
  const metadata = await response.json();
  const ejercicios = Object.keys(metadata[estacion]);

  let contenido = renderBanner();
  contenido += renderBreadcrumb(estacion); 
  contenido += `
    <div class="card p-3 bienvenida banner-view">
      <h2 class="titulo-ejecutivo">Acuses ${estacion}</h2>
      <p>Seleccione el año:</p>
      <div class="opciones-vista">`;

  ejercicios.forEach(ejercicio => {
    contenido += `
      <div class="opcion-recuadro" onclick="mostrarAcusesPorEjercicio('${estacion}', '${ejercicio}')">
        ${ejercicio}
      </div>`;
  });

  contenido += `</div></div>`;
  document.getElementById('contenedor').innerHTML = contenido;
}

async function mostrarAcusesPorEjercicio(estacion, ejercicio) {
  const response = await fetch('assets/pdf/acuses/metadata.json');
  const metadata = await response.json();
  const meses = metadata[estacion][ejercicio];

  let contenido = renderBanner();
  contenido += renderBreadcrumb(estacion, ejercicio); 
  contenido += `
    <div class="card p-3 bienvenida banner-view">
      <h2 class="titulo-ejecutivo">Acuses ${estacion} - ${ejercicio}</h2>
      <p>Seleccione el mes:</p>
      <div class="opciones-vista">`;

  for (const mes in meses) {
    const pdf = meses[mes][0];
    contenido += `
      <div class="opcion-recuadro">
        <a href="assets/pdf/acuses/${estacion}/${ejercicio}/${pdf}" target="_blank" class="texto">${mes}</a>
      </div>`;
  }

  contenido += `</div></div>`;
  document.getElementById('contenedor').innerHTML = contenido;
}

// ====== Reportes Power BI ======
function mostrarReporte(estacion) {
  let src = '';

  // Balance de Energía
  if(estacion === '13gas_be') {
    src = "https://app.powerbi.com/reportEmbed?reportId=56676f9f-5b2a-48bb-9e70-01bcba832eb2&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'bexica_be') {
    src = "https://app.powerbi.com/reportEmbed?reportId=bd69620e-cb6f-4401-b25d-bd3c401c909c&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'coacalco_be') {
    src = "https://app.powerbi.com/reportEmbed?reportId=e3694e0a-353c-4957-98bc-5a7055e72f93&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'ecatepec_be') {
    src = "https://app.powerbi.com/reportEmbed?reportId=a011b09e-67fa-4c91-99bb-64563a0b35bf&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'tlanepantla_be') {
    src = "https://app.powerbi.com/reportEmbed?reportId=a011b09e-67fa-4c91-99bb-64563a0b35bf&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'landsegen_be') {
    src = "https://app.powerbi.com/reportEmbed?reportId=802df296-a9ee-42ed-b59c-00d0c5393b22&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'wigas_be') {
    src = "https://app.powerbi.com/reportEmbed?reportId=40572fd5-d90b-441b-acac-30eae98e545b&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";

  // Ventas
  } else if(estacion === '13gas_vd') {
    src = "https://app.powerbi.com/reportEmbed?reportId=3a0bd50d-1c22-47a5-93e6-64724f740208&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'landsegen_vd') {
    src = "https://app.powerbi.com/reportEmbed?reportId=8dfc39db-c41e-4e4c-b36c-4fbff34edf06&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'wigas_vd') {
    src = "https://app.powerbi.com/reportEmbed?reportId=094fff5e-dbe2-459c-9c5a-b189dcac71e9&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'ventxcliente_trimes') {
    src = "https://app.powerbi.com/reportEmbed?reportId=2b5357da-f62c-4575-8499-e7e666291b3d&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";

  // Herramientas
  } else if(estacion === '13gas_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=318743fa-05d5-40a5-b0db-11ae78c595e5&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'wigas_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=02fe3d46-7d4e-41a2-84a5-f863b364643a&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";

  // Cumplimiento
  } else if(estacion === 'json_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=71c98777-7533-4821-b145-4ad8c9cc2e9d&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  }

  document.getElementById('contenedor').innerHTML =
    renderBanner() +
    '<div class="card p-3 bienvenida banner-view">' +
      '<iframe src="'+src+'" width="1140" height="541.25" frameborder="0" allowFullScreen="true"></iframe>' +
    '</div>';
}

// ====== Inicialización ======
console.log("Portal listo: bienvenida con clase inicio-view, categorías y reportes con clase banner-view, acuses simplificados por mes");
