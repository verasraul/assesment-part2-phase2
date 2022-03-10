import { useState, useEffect } from 'react';
import { Cats } from '../services/Constants';


export default function GetCats(){
    const [cats, setCats] = useState([]);
    
    const fetchData = async () => {
        try {
          const response = await Cats();
          setCats(response.data[0]);
          // console.log(setCats);
        } catch (error) {
          console.log(error);
        }
      }
    console.log(fetchData);
    useEffect(() => {
      fetchData();
    }, [])


    return(
          <div className='cats'>
          <img src= { cats.url }/>
          <br></br>
          <button onClick = {fetchData}>
            Generate Cat Image
          </button>
        </div>
    )
}










