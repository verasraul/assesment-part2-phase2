import axios from "axios";



export async function Cats(){
    const Result = await axios.get(`https://api.thecatapi.com/v1/images/search`)
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}



export async function Dogs(){
    const Result = await axios.get(`https://dog.ceo/api/breeds/image/random`)
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}

