import AddMovie from "./AddMovie"
import CardMovie from "./CardMovie"
import FilterMovies from "./FilterMovies"

const ListMovie=({movies,search,njoum,setNjoum,setSearch,setMovies})=>{
    var x =   movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating >= njoum)
    return(
        <div>
                  <FilterMovies setSearch={setSearch} setNjoum={setNjoum} search={search} njoum={njoum}/>
                  <AddMovie movies={movies} setMovies={setMovies}/>

                  <div className="centerDiv">
                        {
                        x.length == 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovie el={el}/>)
                            // .map((el,i,t)=> <CardMovie el={el}/>)
                        }
                  </div>
        </div>
       
    )
}

export default ListMovie