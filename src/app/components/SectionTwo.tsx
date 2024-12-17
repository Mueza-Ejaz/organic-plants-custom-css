import Image from "next/image"

const Section2 = () => {
  return (
    <>
  
    <h1 className="Section2-h1">Our Gallery View</h1>

    <div className='SectionTwo'>



    <div className="image1">
      <Image src="/images/gallery5.png" alt="images" width={490} height={495}></Image>
    </div>



    <div className="images4">
      <div>
      <Image src="/images/gallery1.png" alt="images" width={350} height={240}></Image>
      <Image src="/images/gallery2.png" alt="images" width={350} height={240}></Image>
      </div>

      <div>
      <Image src="/images/gallery3.png" alt="images" width={350} height={240}></Image>
      <Image src="/images/gallery4.png" alt="images" width={350} height={240}></Image>
      </div>

    </div>




  </div>
    
    
    
    </>
  )
}

export default Section2