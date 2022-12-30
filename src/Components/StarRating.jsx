import React from 'react'

const StarRating = ({rating,handleRating}) => {
    console.log(rating)
    const stars=(rating)=> {
        var tab= []
        for (let i=1;i<=5;i++){
            if(i<=rating){ 
                tab.push(<span style={{width:"100px", height:"40px", fontSize:"30px",color:"gold", cursor:"pointer"}} onClick={()=>handleRating(i)}>★</span>)
            }else{
                tab.push(<span style={{ width:"100px", height:"40px", fontSize:"30px", cursor:"pointer"}} onClick={()=>handleRating(i)} >★</span>)
            }
        }
        return tab
    }
  return (
    <div>
        {React.Children.toArray(stars(rating))}
        
    </div>
  )
}

export default StarRating