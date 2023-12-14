
const input = document.getElementById('input')
const searchButton = document.getElementById('search')
const cityName = document.getElementsByClassName('cityName')[0]
const cityTime = document.getElementsByClassName('cityTime')[0]


const fetchData = async(city)=>{
    try{
        const api = `http://api.weatherapi.com/v1/current.json?key=36e749d63f644a4a976132349231112&q=${city}`
        const fetchApi = await fetch(api)
        const dataToJson = await fetchApi.json()
        displayData(dataToJson)
        

    }catch(error){
        console.log('error' + error)

    }
}

searchButton.addEventListener('click',()=>{
    fetchData(input.value)
})

const displayData = (data)=>{
    const city = data.location?.name
    cityName.textContent = city
}


