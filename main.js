const input =document.getElementById('input')
const searchButton = document.getElementById('search')
const cityName = document.getElementsByClassName('cityName')[0]
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')
const tempara = document.getElementById('feels')
const farenh=document.getElementById('farhenneit')
const cloud = document.getElementById('cloud')
const sectionTwo = document.getElementsByClassName('section-two')[0]
const cityNa = document.getElementById('cit');




const myFetchApi = async (data)=>{
    try {
        const myApi = `https://api.weatherapi.com/v1/current.json?key=c266a5bc38894bea8d994326231412&q=${data}`
        const fetchTheApi = await fetch(myApi)
        if(!fetchTheApi.ok){
            throw new Error(`city ${data} not found`);
        }
        const turnToJson = await fetchTheApi.json()
        DisplayData(turnToJson)
        
    } catch (error) {
        alert(error)
        return null;
    }
}

searchButton.addEventListener('click' , ()=>{
    if(input.value === ''){
        alert('Please enter a city')
    }else{
         
        myFetchApi(input.value)
        sectionTwo.style.visibility = 'visible'
      
    }
   
})


const DisplayData = (dat)=>{
   const country = dat.location?.country
   cityName.textContent = country

   const humi = dat.current?.humidity
   humidity.textContent = humi
  
 
   const temparat = dat.current?.feelslike_c
   tempara.innerHTML =temparat+ "&deg;";

   const far = dat.current?.feelslike_f
   farenh.textContent = far 

   const win = dat.current?.wind_kph
   wind.textContent = win
   
   const clouds = dat.current?.cloud
   cloud.textContent = clouds

   const cite = dat.location?.name
   cityNa.textContent = cite
    

  
   

}