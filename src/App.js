import React,{useState} from 'react'

const App = () => {
    const [lat,setLat]=useState('')
    const [long,setLong]=useState('')
    const [hemsiphere,setHemisphere]=useState('');
    const [month,setMonth]=useState( new Date().getMonth()+1)

    function handleSubmit(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)

                if(position.coords.latitude>0){
                    setHemisphere("Northern Hemisphere")
                }
                else if(position.coords.latitude<0){
                    setHemisphere("Southern Hemisphere")
                }
                else{
                    setHemisphere("Equator")
                }

            })
        }

    }
  return (
    <div>
        <h1>Weather App</h1>
        <h2>Latitude:{lat}</h2>
        <h2>Longitude:{long}</h2>
        <h2>Hemisphere:{hemsiphere}</h2>
        <button onClick={handleSubmit}>Get Location</button>

        {
           hemsiphere!=="" && (
            (hemsiphere==="Northern Hemisphere" && (month>=4 && month<=10))|| 
            (hemsiphere==="Southern Hemisphere" && (month<4 || month>10)) )
           && (
            <div>
                <h1>It's Summer</h1>      
            </div>
           )
      }

      {
           hemsiphere!=="" && ((hemsiphere==="Northern Hemisphere" && (month<4 || month>10))  ||(hemsiphere==="Southern Hemisphere" && (month>=4 && month<=10)))

           && (
            <div>
                <h1>It's Winter</h1>     
            </div>
           )
      }


    </div>
  )
}

export default App