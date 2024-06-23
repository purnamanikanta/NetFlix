import React from 'react'
import { MovieDetail,MovieList,PageNotFound,Search} from "../pages";
import { Routes ,Route } from "react-router-dom"; 



export const AllRoutes = () => {
  return (
    <section className='max-w-screen-2xl md' >
       <main className='dark:bg-slate-800'>
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>}/>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>}/>
            <Route path="movies/top_rated" element={<MovieList apiPath="movie/top_rated" title="TopRated"/>}/>
            <Route path="search" element={<Search apiPath="search/movie"/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </main>
    </section>
   
  )
}


