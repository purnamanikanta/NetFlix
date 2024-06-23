
import { Card } from '../components'
import {useFetch} from '../hooks/useFetch'
import {useTitle} from '../hooks/useTitle';


export const MovieList = ({apiPath,title}) => {
  const{data:movieList} = useFetch(apiPath);
  const PageTitle=useTitle(`${title}`)

  return (
    <section className='p-16 m-auto'>
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

