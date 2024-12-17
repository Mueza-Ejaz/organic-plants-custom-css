import Image from "next/image"


const Card = ({props}:any) => {
  return (

<div className="Card-Contailner">
<div className="image-div"><Image src={props.src} alt="card1" height={250} width={280}/></div>

<div className="btn-name-price">
    
    <div><button className="buybtn">Buy Now</button></div>

<div className="Price-Name">
<div className="plantName">{props.plantName}</div>
<div className="price">{props.price}</div>
</div>


</div>

</div>
  )
}

export default Card