import React,{ useState, useEffect } from "react";

function App(){
const [dogImg, setDogImg] = useState();
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res)=>res.json())
    .then((data) => {
        setDogImg(data.message);
        setIsLoaded(true)
    })
},[])

if (isLoaded) return <img src={dogImg} alt='A Random Dog'></img>;

return <p>Loading...</p>



}

export default App;