import Container from 'react-bootstrap/Container';
import "../css/Section.min.css";
import background from "./img/mainBack.jpg"
import SwiperSec from "./SwiperSec"
import ContactMe from "./ContactMe"
import AboutMe from "./AboutMe"
import SwiperChat from './SwiperChat';



 function Section(){
    return(
        <>  
        <Container fluid className='text-center px-0'>
            <section className='vh-100' style={{ 
                        backgroundImage: `url(${background})`
                      }}
                    id ="Home">
                
            </section>

            <AboutMe/>
            
            <section className='vh-100' id ="wantTobe">
                <SwiperSec/>
            </section>

            <section className='vh-100 bg-secondary' id ="contactMe">
                <ContactMe></ContactMe>
            </section>
        </Container>
         </>
    )
}

export default Section;