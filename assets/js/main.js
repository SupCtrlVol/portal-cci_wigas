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

function mostrarCategoria(categoria) {
  document.getElementById('contenedor').innerHTML =
    '<div class="card p-3 bienvenida"><h3>'+categoria+'</h3><p>Aquí iría el contenido de '+categoria+'</p></div>';
}
