import Card from "./Card"



const SectionOne = () => {

  const Cards = [
    { src: "/images/card1.png", plantName: "Cactus Plant", price: "Price(6$)" },
    { src: "/images/card2.webp", plantName: "Aloe Vera", price: "Price(13$)" },
    { src: "/images/plant.png", plantName: "Snake Plant", price: "Price(5$)" },
    { src: "/images/card3.png", plantName: "Spider Plant", price: "Price(8$)" },
    { src: "/images/card4.png", plantName: "Peace Lily", price: "Price(12$)" },
    { src: "/images/card5.png", plantName: "ZZ Plant", price: "Price(6$)" },
    { src: "/images/card6.png", plantName: "Fiddle Leaf Fig", price: "Price(7$)" },
    { src: "/images/card7.webp", plantName: "Money Tree", price: "Price(9$)" }
  ];
  
  return (
    <>
    <div className='Section-one'>

<h1 className='secOne-h1'>What we offer to you</h1>

<div className="Cards-Div">

{Cards.map((card,index)=> <Card props={card} key={index}/> )}

</div>




    </div>
    
    
    
    </>
  )
}

export default SectionOne