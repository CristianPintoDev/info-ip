
const OPTIONS = {
    method: 'GET',
    
    params: {
      format: 'json',
      language: 'en'
    },
    headers: {
        'x-rapidapi-key': '', //ingresar la clave de rapidapi
        'x-rapidapi-host': 'ip-geo-location.p.rapidapi.com'
    }
  }



const fetchIpInfo = ip => {
    return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}`, OPTIONS)
    .then(res=>res.json())
    .catch(err=>console.error(err))
}

const $form=document.querySelector('#form')
const $input=document.querySelector('#input')
const $submit=document.querySelector('#submit')
const $resultado=document.querySelector('#resultado')


$form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    const {value} = $input

    if (!value) return

    $submit.setAttribute('disable', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo= await fetchIpInfo(value)

    if (ipInfo){
        $resultado.innerHTML=JSON.stringify(ipInfo, null, 2)
        const latitud=ipInfo.location.latitude
        const longitud=ipInfo.location.longitude
        const map = L.map('map').setView([latitud, longitud], 13);

        // Añade la capa de OpenStreetMap al mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        
        
        // Añadir un marcador en el mapa
        const marker = L.marker([latitud, longitud]).addTo(map);
        marker.bindPopup(`<b>Ubicacion aproximada</b><br>${latitud},${longitud}</br>`).openPopup();
        
        
        // Añadir un popup que aparece al hacer clic en el mapa
        const popup = L.popup();
        function onMapClick(e) {
            popup
            .setLatLng(e.latlng)
            .setContent('You clicked the map at ' + e.latlng.toString())
            .openOn(map);
        }
        map.on('click', onMapClick);
    }

    $submit.removeAttribute('disable')
    $submit.removeAttribute('aria-busy')
})