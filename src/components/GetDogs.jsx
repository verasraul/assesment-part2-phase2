import { useState, useEffect } from 'react';
import { Dogs } from '../services/Constants';


export default function GetDogs(){
    const [dogs, setdogs] = useState([]);
    
    const fetchData = async () => {
        try {
          const response = await Dogs();
          setdogs(response.message);
          // console.log(setdogs);
        } catch (error) {
          console.log(error);
        }
      }
    console.log(fetchData);
    useEffect(() => {
      fetchData();
    }, [])


    return(
          <div>
          <img src= { dogs }/>
          <br></br>
          <button onClick= {fetchData}>
            Generate Dog Image
          </button>
        </div>
    )
}


