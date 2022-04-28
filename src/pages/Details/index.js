import {useParams, Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import {Container} from './styles'
import {APIKey} from '../../config/key'

function Details(){

    const {id} = useParams()
    //console.log(id)
    
    const [movie, setMovies] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(()=>{
       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
         
           const {title, poster_path, overview, release_date} = data 
           
           const movie = {
               id,
               title,
               sinopse: overview,
               image: `${image_path}${poster_path}`,
               releaseDate:release_date,
           }
           setMovies(movie)
           console.log(movie)
        })
    },[id])

    return(
        <Container>
            <div className='movie'>
                <img src={movie.image} alt={movie.sinopse}></img>
                <div className='details'>
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className='release-date'>Release data: {movie.releaseDate}</span>
                    <Link to="/"> <button>Go Back</button></Link>
                   
                </div>
            </div>
        </Container>
    )
}
export default Details