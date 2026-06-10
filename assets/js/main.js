// Función para pasar de inicio al balance
function entrarPortal() {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('balance').style.display = 'flex';
}

// Función para mostrar reportes
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

console.log("Portal con todos los reportes integrado");
