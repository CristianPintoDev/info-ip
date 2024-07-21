# Buscador de Informacon y Mapa de Ubicación Mediante una direccion IP 

## Descripción

Esta aplicación web permite al usuario ingresar una dirección IP y obtener información detallada sobre la misma, incluyendo su ubicación geográfica. La aplicación muestra esta información en un mapa interactivo utilizando la librería Leaflet y OpenStreetMap.

## Funcionalidad

1. **Ingreso de IP**: El usuario ingresa una dirección IP en el campo de texto del formulario.
2. **Búsqueda de Información**: Al enviar el formulario, la aplicación realiza una solicitud a la API de geolocalización de IP para obtener información sobre la IP ingresada.
3. **Visualización de Datos**: La información de la IP se muestra en la página como un objeto JSON, incluyendo la latitud y longitud de la ubicación.
4. **Mapa Interactivo**: La ubicación de la IP se muestra en un mapa interactivo utilizando Leaflet. El mapa permite:
   - Visualizar un marcador en la ubicación aproximada.
   - Mostrar un popup con la latitud y longitud.
   - Añadir un popup al hacer clic en cualquier parte del mapa.

## Tecnologías Utilizadas

- **HTML**: Estructura de la página web.
- **CSS**: Estilos para la presentación de la página.
- **JavaScript**: Lógica de la aplicación, manejo de eventos y manipulación del DOM.
- **Leaflet**: Librería JavaScript para mapas interactivos.
- **OpenStreetMap**: Proveedor de mapas utilizado por Leaflet.
- **RapidAPI**: Servicio para la obtención de datos de geolocalización de IP.