import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';

const FilterMovies=({setSearch,setNjoum,search,njoum})=>{
    const handleReset=()=>{
        setSearch('')
        setNjoum(0)
    }
    return(
        <div>
            <input value={search} type="text" onChange={(e)=> setSearch(e.target.value)}/>
            <Rating value={njoum} onChange={(e)=> setNjoum(e.target.value)}/>    
            <Button variant='warning' onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default FilterMovies