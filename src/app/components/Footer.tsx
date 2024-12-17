import Link from "next/link"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
<footer>

<div >
  <h2>Feel free to contact us</h2>
</div>

    <div className="footer-icon">
<FaFacebook className="fb"/>
<FaTwitter className="twiter"/>
<FaInstagram className="insta"/>
<FaLinkedin className="linkdin"/>
    </div>
  


<div>
<nav>
            <ul>
                <li><Link href="/" className="Link">Home</Link></li>
                <li><Link href="about" className="Link">About</Link></li>
                <li><Link href="services" className="Link">Services</Link></li>
            </ul>
        </nav>
</div>

<div className="copyright"><p>
Copyright © 2024 Organic. All rights reserved. Muhammad Shahroz
    </p></div>

</footer>   
    
    
    
    </>
  )
}

export default Footer