const cityName = document.getElementsByClassName('cityName')[0];
const cityTime = document.getElementsByClassName('cityTime')[0];
const input = document.getElementById('input');
const search = document.getElementById('search');


// 36e749d63f644a4a976132349231112 my key

// const myApi = 'http://api.weatherapi.com/v1/current.json?key=36e749d63f644a4a976132349231112=London'

// fetch('http://api.weatherapi.com/v1/current.json?key=36e749d63f644a4a976132349231112&q=kigali')
// .then((response)=>response.json())
// .then((data)=>console.log())

   

const fetchData = async (city) => {
    try{
        const myApi = `http://api.weatherapi.com/v1/current.json?key=36e749d63f644a4a976132349231112&q=${city}`
        const fetchData = await fetch(myApi)
        const turnMyApiToJson = await fetchData.json();
        presentData(turnMyApiToJson)

        // console.log(turnMyApiToJson)
    }catch(error){
        console.log('error' + error)
    }
   }

   search.addEventListener('click', () => {
    fetchData(input.value);
   } )

   
   const presentData = (data)=>{
    const Name = data.location?.country
    cityName.textContent = Name;
    
   }