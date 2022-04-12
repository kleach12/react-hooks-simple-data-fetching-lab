import React, {useState, useEffect} from "react";

function App (){
  const [dogImg, setDogImg] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message)
        setDogImg(data.message)
        setLoading(true)
    })

    }, [])

    if (!loading) return <p>Loading...</p>
return(
  <img alt = "A Random Dog" src={dogImg}/>
)
}

export default App
