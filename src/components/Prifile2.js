import prifile_photo2 from "../download (1).jpg"
import prifile_photo3 from "../download (2).jpg"
import prifile_photo4 from "../download.jpg"
import prifile_photo5 from "../images (1).jpg"
import prifile_photo6 from "../images (2).jpg"
import prifile_photo7 from "../images (3).jpg"
import prifile_photo8 from "../images (4).jpg"
import prifile_photo9 from "../images (5).jpg"
import prifile_photo10 from "../istockphoto-856599656-612x612.jpg"
import prifile_photo11 from "../samanta.jpg"
import {faSquareEnvelope} from "@fortawesome/free-solid-svg-icons"
import {useNavigate} from "react-router-dom"
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"
function Profile1() {
  const negivate=useNavigate();
  const clickBack=()=>{
    negivate("/profile6")
  }
  const clickNext=()=>{
    negivate("/profile7")
    
  }
  return (
    <div className="App">
      <h1><span>Thousand</span> of lives changed</h1>
                   <p>Hear it from the ones who have been on this journey already</p>
      <div className='containt'>
        <div className='character_image'>
        <Link to="/profile6"><img src={prifile_photo2} className='character_image1' /></Link> 
        <Link to="/profile2"><img src={prifile_photo3}  className='character_image2'/></Link>
        <Link to="/profile3"><img src={prifile_photo4}  className='character_image3'/></Link>
        <Link to="/profile4"> <img src={prifile_photo5}  className='character_image4'/></Link>
        <Link to="/profile5 "><img src={prifile_photo6}  className='character_image5'/></Link>
       
        
        



            
        </div>
        <div className='button'>
        <a href="#" onClick={clickBack}>&#8249;</a>
    </div>

                <div className='middle'>
                   
                  <div className='middle_ander'>
                        <div className='left'>
                            <img src={prifile_photo10}/>
                              <span>Alia Advani</span>
                              <div className='brandname'>
                              <FontAwesomeIcon icon={faSquareEnvelope} className="icon"/>
                                <span className="brand__name">Socieate Generl</span>

                              </div>
                        </div>
                        <div className='right'>
                            <p><FontAwesomeIcon icon={faYoutube} className="icon"/> Watch Testimonial</p>
                            Alia Advani, known professionally as Kiara Advani, is an Indian actress who works 
                            in Hindi and Telugu language films. After making her acting debut in the comedy film 
                            Fugly, she played MS Dhoni's wife in the sports biopic M.S. Dhoni: The Untold Story.<br/><br/>
                            <span>Read More..</span>
                        </div>

                  </div>
                  <button>Read More Testimonial</button>    


      </div>
                 
      <div className='button'>
        <a href="#" onClick={clickNext}>&#8250;</a> 
    </div>
            <div className="character_image12 ">
                <Link to="/profile7"> <img src={prifile_photo11} className='character_image1' /></Link>
                <Link to="/profile8"><img src={prifile_photo7}  className='character_image2'/></Link>
                <Link to="/profile9"> <img src={prifile_photo8}  className='character_image3'/></Link>
                <Link to="/"> <img src={prifile_photo9}  className='character_image4'/></Link>
                <Link to="/profile1"> <img src={prifile_photo10}  className='character_image5'/></Link>



            </div>  
      </div>
      
               
    </div>
  );
}

export default Profile1;
