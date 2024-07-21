
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
    }

    $submit.removeAttribute('disable')
    $submit.removeAttribute('aria-busy')
})