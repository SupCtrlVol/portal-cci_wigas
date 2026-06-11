// Función para pasar de inicio al balance con animación
function entrarPortal() {
  const inicio = document.getElementById('inicio');
  const balance = document.getElementById('balance');

  // Ocultar inicio con fade-out
  inicio.classList.add('hidden');

  // Mostrar balance con fade-in
  balance.style.display = 'flex';
  setTimeout(() => {
    balance.classList.add('visible');
  }, 100);

  // Mostrar bienvenida y círculos inmediatamente
  mostrarBienvenida();
}

// Función para mostrar la bienvenida con círculos
function mostrarBienvenida() {
  const contenido = `
    <div class="card p-3 bienvenida">
      <h2>Bienvenido al Centro de Control de Información</h2>
      <p>Seleccione una opción para continuar</p>
      <div class="opciones-principales">
        <div class="opcion-circulo" onclick="mostrarCategoria('balance')">
          <span class="icono">⚡</span>
          <span class="texto">Balance de Energía / Ventas y Distribución</span>
        </div>
        <div class="opcion-circulo" onclick="mostrarCategoria('herramientas')">
          <span class="icono">🛠️</span>
          <span class="texto">Herramientas</span>
        </div>
        <div class="opcion-circulo" onclick="mostrarCategoria('ventas')">
          <span class="icono">📊</span>
          <span class="texto">Ventas</span>
        </div>
        <div class="opcion-circulo" onclick="mostrarCategoria('cumplimiento')">
          <span class="icono">✅</span>
          <span class="texto">Cumplimiento</span>
        </div>
      </div>
    </div>
  `;
  document.getElementById('contenedor').innerHTML = contenido;
}

// Función para mostrar categorías principales
function mostrarCategoria(categoria) {
  let contenido = '';

  if(categoria === 'balance') {
    contenido = `
      <div class="card p-3 bienvenida">
        <h3>Balance de Energía / Ventas y Distribución</h3>
        <p>Seleccione una estación:</p>
        <div class="sidebar">
          <a href="#" onclick="mostrarReporte('ecatepec')">13 GAS</a>
          <a href="#" onclick="mostrarReporte('bexica')">Bexica</a>
          <a href="#" onclick="mostrarReporte('coacalco')">Coacalco</a>
          <a href="#" onclick="mostrarReporte('ecatepecII')">Ecatepec II</a>
          <a href="#" onclick="mostrarReporte('tlanepantla')">Tlanepantla</a>
          <a href="#" onclick="mostrarReporte('naucalpan')">WIGAS</a>
          <a href="#" onclick="mostrarReporte('lr_almacenamiento')">Landsegen - Modelo de Almacenamiento</a>
        </div>
      </div>`;
  } else if(categoria === 'herramientas') {
    contenido = `
      <div class="card p-3 bienvenida">
        <h3>Herramientas de Análisis de Consumo</h3>
        <div class="sidebar">
          <a href="#" onclick="mostrarReporte('eca_tool')">13 GAS - Herramienta</a>
          <a href="#" onclick="mostrarReporte('nau_tool')">WIGAS - Herramienta</a>
        </div>
      </div>`;
  } else if(categoria === 'ventas') {
    contenido = `
      <div class="card p-3 bienvenida">
        <h3>Ventas</h3>
        <div class="sidebar">
          <a href="#" onclick="mostrarReporte('ventas')">Ventas por Cliente</a>
        </div>
      </div>`;
  } else if(categoria === 'cumplimiento') {
    contenido = `
      <div class="card p-3 bienvenida">
        <h3>Cumplimiento</h3>
        <div class="sidebar">
          <a href="#" onclick="mostrarReporte('json_tool')">JSON Mensual</a>
        </div>
      </div>`;
  }

  // Inyecta el contenido centrado en el contenedor
  document.getElementById('contenedor').innerHTML = contenido;
}

// Función para mostrar reportes según estación/categoría
function mostrarReporte(estacion) {
  let src = '';

  if(estacion === 'ecatepec') {
    src = "https://app.powerbi.com/reportEmbed?reportId=2ddebbce-cdf0-4477-aa9a-e0436612e147&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'naucalpan') {
    src = "https://app.powerbi.com/reportEmbed?reportId=7ae09a8b-e08f-46c7-b5d4-400fba0c5231&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'lr_almacenamiento') {
    src = "https://app.powerbi.com/reportEmbed?reportId=3a6273ad-43d8-414a-a41e-b084836f62e7&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'lr_ducto') {
    src = "https://app.powerbi.com/reportEmbed?reportId=ae66f102-55e0-4358-a5e4-8a8934a144d7&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'bexica') {
    src = "https://app.powerbi.com/reportEmbed?reportId=c2052364-3067-4665-bcdb-43e8bf3f8de7&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'ventas') {
    src = "https://app.powerbi.com/reportEmbed?reportId=9a54a13b-b1ba-46c0-9d9a-7f36a9bf40e5&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'coacalco') {
    src = "https://app.powerbi.com/reportEmbed?reportId=f4d6aaf9-dc93-4c70-8ce5-387b713cf9e5&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'ecatepecII') {
    src = "https://app.powerbi.com/reportEmbed?reportId=bfa5000f-acc4-4c55-b83b-0ee73fbbbd45&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'tlanepantla') {
    src = "https://app.powerbi.com/reportEmbed?reportId=6be45fc4-3d1c-4e4f-a545-92776b7392ea&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'eca_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=449c2a0f-a1be-4fa6-827b-4500ab1b609f&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'nau_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=a4e021aa-4281-4f9b-a2fe-07d03d43871d&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  } else if(estacion === 'json_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=71c98777-7533-4821-b145-4ad8c9cc2e9d&autoAuth=true&ctid=fed0588c-2eb2-4466-bb01-afd3795657ec";
  }

  // Reemplaza el contenido del contenedor con el reporte seleccionado
  document.getElementById('contenedor').innerHTML =
    '<div class="card p-3"><iframe src="'+src+'" width="100%" height="600" frameborder="0" allowFullScreen="true"></iframe></div>';
}

console.log("Portal ajustado: categorías y reportes integrados correctamente");
