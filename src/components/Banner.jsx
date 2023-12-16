import React, { useEffect, useState } from 'react'
import instents from '../instents'
import './banner.css'

function Banner({ fetchUrl }) {
  const base_url = "https://image.tmdb.org/t/p/original";

  const [moviebanner,setmoviebanner]=useState([])
  const fetchData = async () => {
    const response = await instents.get(fetchUrl);
    const { data } = response;
    setmoviebanner(data.results[Math.floor(Math.random()*data.results.length)])

  }
  useEffect(() => {

    fetchData();

  }, []);

  return (
    <div>
      <div style={{ height: "650px",
       backgroundImage: `url(${base_url}${moviebanner.backdrop_path})`,
       backgroundPosition:"center",
       marginTop:"20px",
      backgroundSize:"cover",
      margin:"10px"}}>
        <div className='banner_content' >
          <h2 style={{color:"white"}}>{moviebanner?.name}</h2>
          <button className='btn btn-danger'>Play <i class="fa-solid fa-play bg-transparent"></i></button>
          <button className='btn border-white ms-3 more'>More Info <i class="fa-solid fa-caret-down bg-transparent"></i></button>
          <h5 style={{color:"white"}}>{moviebanner?.overview?.slice(0,200)}...</h5>

        </div>
      </div>

    </div>
  )
}

export default Banner