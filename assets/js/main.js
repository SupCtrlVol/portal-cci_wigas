// Función para mostrar reportes en el contenedor central
function mostrarReporte(estacion) {
  let src = '';
  if(estacion === 'ecatepec') {
    src = "https://app.powerbi.com/reportEmbed?reportId=2ddebbce-cdf0-4477-aa9a-e0436612e147&autoAuth=true";
  } else if(estacion === 'naucalpan') {
    src = "https://app.powerbi.com/reportEmbed?reportId=7ae09a8b-e08f-46c7-b5d4-400fba0c5231&autoAuth=true";
  } else if(estacion === 'ventas') {
    src = "https://app.powerbi.com/reportEmbed?reportId=9a54a13b-b1ba-46c0-9d9a-7f36a9bf40e5&autoAuth=true";
  } else if(estacion === 'eca_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=449c2a0f-a1be-4fa6-827b-4500ab1b609f&autoAuth=true";
  } else if(estacion === 'nau_tool') {
    src = "https://app.powerbi.com/reportEmbed?reportId=a4e021aa-4281-4f9b-a2fe-07d03d43871d&autoAuth=true";
  }

  // Reemplaza el contenido del contenedor con el reporte seleccionado
  document.getElementById('contenedor').innerHTML =
    '<div class="card p-3"><iframe src="'+src+'" width="100%" height="600" frameborder="0" allowFullScreen="true"></iframe></div>';
}

console.log("Sidebar dinámico listo");

