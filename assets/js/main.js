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
      <div id="contenido-categoria"></div>
    </div>
  `;
  document.getElementById('contenedor').innerHTML = contenido;

  document.querySelectorAll('.opcion-circulo').forEach(opcion => {
    opcion.addEventListener('click', () => {
      seleccionarOpcion(opcion);
      mostrarCategoria(opcion.dataset.cat);
    });
  });
}

function seleccionarOpcion(elemento) {
  const opciones = document.querySelectorAll('.opcion-circulo');
  opciones.forEach(op => op.classList.remove('seleccionado'));
  elemento.classList.add('seleccionado');
}

// Categorías principales
function mostrarCategoria(categoria) {
  let contenido = '';

  if(categoria === 'balance') {
    contenido = `
      <h3>Balance de Energía / Ventas y Distribución</h3>
      <div class="sidebar">
        <a href="#" onclick="mostrarReporte('13gas_be')">13 GAS</a>
        <a href="#" onclick="mostrarReporte('bexica_be')">Bexica</a>
        <a href="#" onclick="mostrarReporte('coacalco_be')">Consorcio GNV - Coacalco</a>
        <a href="#" onclick="mostrarReporte('ecatepec_be')">Consorcio GNV - Ecatepec</a>
        <a href="#" onclick="mostrarReporte('tlanepantla_be')">Consorcio GNV - Tlanepantla</a>
        <a href="#" onclick="mostrarReporte('landsegen_be')">Landsegen</a>
        <a href="#" onclick="mostrarReporte('wigas_be')">WIGAS</a>
      </div>`;
  } else if(categoria === 'herramientas') {
    contenido = `
      <h3>Herramientas de Análisis</h3>
      <div class="sidebar">
        <a href="#" onclick="mostrarReporte('13gas_tool')">13 GAS - Herramienta</a>
        <a href="#" onclick="mostrarReporte('wigas_tool')">WIGAS - Herramienta</a>
      </div>`;
  } else if(categoria === 'ventas') {
    contenido = `
      <h3>Ventas</h3>
      <div class="sidebar">
        <a href="#" onclick="mostrarReporte('13gas_vd')">13 GAS</a>
        <a href="#" onclick="mostrarReporte('landsegen_vd')">Landsegen</a>
        <a href="#" onclick="mostrarReporte('wigas_vd')">WIGAS</a>
        <a href="#" onclick="mostrarReporte('ventxcliente_trimes')">Global - Ventas por Cliente</a>
      </div>`;
  } else if(categoria === 'cumplimiento') {
    contenido = `
      <h3>Cumplimiento</h3>
      <div class="sidebar">
        <a href="#" onclick="mostrarReporte('json_tool')">JSON Mensual</a>
      </div>`;
  }

  document.getElementById('contenido-categoria').innerHTML = contenido;
}

// Reportes Power BI
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

  document.getElementById('contenido-categoria').innerHTML =
    '<div class="card p-3"><iframe src="'+src+'" width="1140" height="541.25" frameborder="0" allowFullScreen="true"></iframe></div>';
}

console.log("Portal listo: iframes actualizados para Balance de Energía, Ventas, Herramientas y Cumplimiento");
