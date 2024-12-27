import { useNavigate, useParams } from "react-router-dom"

const MovieDescription=({movies})=>{
    const {id} = useParams()

    const found =  movies.find((el,i,t)=> el.id == id)
    const navigate = useNavigate()
    return(
        <div>
            <h1>{found.title}</h1>
            <p>{found.description}</p>
            <iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button onClick={()=>navigate('/')}>Hezni</button>
        </div>
    )
}

export default MovieDescription