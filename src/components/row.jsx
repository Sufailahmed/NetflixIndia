
import React, { useEffect, useState } from 'react'
import instents from '../instents';
import './row.css'

function Row({title,fetchUrl}) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [allmovies,setallmovies]=useState([])
 
  const fetchData=async()=>{
    const response= await instents.get(fetchUrl)
    const {data}=response
 
    setallmovies(data.results)
  }
  useEffect(() => {

    fetchData();
    
    },[]);
   
  return (
    <div className='row'>
        <h2 style={{color:"white",marginTop:"20px"}}>{title}</h2>
        <div className='movie_row'>
          {
            allmovies?.map(item=>(
              <img src={`${base_url}${item.poster_path}`} alt="" className='movie'/>
            ))
          }
        </div>
        
        
        </div>
  )
}

export default Row