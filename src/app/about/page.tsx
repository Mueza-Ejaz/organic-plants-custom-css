// pages/about.js
import Image from 'next/image';
const About = () => {
  return (
    <div className="container2">
      <h1>About Us</h1>
      <div className="content">
        <Image src="/images/plant.png" alt="Plants" width={400} height={400} className="image" />
        <p>
          Welcome to our online flower and plant shop! Nature's beauty is just a click away. 
          We offer a wide variety of flowers and plants that will bring a touch of nature to your home. 
          Our mission is to deliver the joy of nature to everyone, and we take pride in providing high-quality 
          products to our customers.
        </p>
      </div>
    </div>
  );
};

export default About;
