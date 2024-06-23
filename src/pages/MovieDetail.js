import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import {useTitle} from '../hooks/useTitle';

export const MovieDetail = () => {
  const params=useParams();
  
  const [data,setData]=useState({})

  const PageTitle=useTitle(`${data.title}`)
  const image=`https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  

  useEffect(()=>{
    async function fetchData(){
      const response=await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json()
      setData(data)
      console.log(data)
    }
    fetchData();
  },[])
  return (
    <section>
      <div className='flex flex-row flex-wrap py-6'>
      <div className='max-w-lg p-4'>
        <img src={image} alt={data.original_title}/>
      </div>
      <div className='max-w-2xl p-4'>
      <p className='dark:text-white'>{data.original_title}</p>
      <p className='text-wrap p-18 dark:text-white'>{data.overview}</p>
      {data.genres ?(<p> {data.genres.map((gen)=>(<button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-4' key={gen.id}>{gen.name}</button>))}</p>) : ""}
      <div>
        <div className=" mt-4 flex items-center">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className=" text-sm font-bold text-gray-900 dark:text-white">Rating : {data.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className=" text-sm font-medium text-gray-900  dark:text-white">Vote Count : {data.vote_count}</span>
        </div>
      </div>
      <p className=" m-2 text-sm font-medium text-gray-900  dark:text-white">
          Budget : {data.budget}
      </p>
      <p className="m-2 text-sm font-medium text-gray-900  dark:text-white">
      Revenue : {data.revenue}
      </p>
      <p className=" m-2 text-sm font-medium text-gray-900  dark:text-white">
      Release_date : {data.release_date}
      </p>
      <p className=" m-2 text-sm font-medium text-gray-900  dark:text-white">
      RunTime : {data.runtime}
      </p>
      </div>
      
    
      </div>
    </section>
  )
}


