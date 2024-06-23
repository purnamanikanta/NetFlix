import React from 'react'
import  {useSearchParams}  from 'react-router-dom'
import { Card } from '../components'
import {useFetch} from '../hooks/useFetch'
import {useTitle} from '../hooks/useTitle';

export const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q")
  console.log(queryTerm)
  const PageTitle=useTitle(`Search InPut Data ${queryTerm}`)

  const {data:movieList} = useFetch(apiPath, queryTerm);

  return (
    <section className='p-16 m-auto'>
      <section className='grid justify-items-center mb-2 text-gray-400'>
        <p>{movieList.length===0 ? `No data this ${queryTerm}` : `search data ${queryTerm}`}</p>
      </section>
    <main>
      <div className='flex flex-wrap justify-center'>
      {movieList.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
      ))}
      </div>
    </main>
  </section> 
  )
}


