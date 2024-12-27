import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const CardMovie=({el})=>{
    const [isShowMore, setShowMore] = useState(false)
    return(
        <Card style={{ width: '18rem' }}>
      <Link to={`/MovieDescription/${el.id}`}>
         <Card.Img style={{width :"286px", height :"406px"}} variant="top" src={el.posterURL}  />
      </Link>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {isShowMore ? el.description : el.description.slice(0,80)}
          <button className={isShowMore ? 'ahmer' : 'akther'} style={{    border: "none",backgroundColor: "white"}} onClick={()=> setShowMore(!isShowMore)}>{isShowMore ? "Show less" : "...Show more"}</button>  
        </Card.Text>
        <Rating name="read-only" value={el.rating} readOnly />
   
      </Card.Body>
    </Card>
    )
}

export default CardMovie