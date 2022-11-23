import Container from 'react-bootstrap/Container';
import "../css/Section.min.css";
import background from "./img/mainBack.jpg"

 function Section(){
    return(
        <>
        <Container fluid className='text-center px-0'>
            <section className='vh-100' style={{ 
                        backgroundImage: `url(${background})`
                      }}
                    id ="Home">
                <h1>first</h1>
            </section>


            <section className='bg-secondary vh-100 d-flex justify-content-around align-items-center' id='aboutMe'>
                <div id="tv" className='shadow box-shadow-inset d-flex flex-column justify-content-center'>
                    <h2>Skill</h2>
                    <p>스킬 1</p>
                    <p>스킬 1</p>
                    <p>스킬 1</p>
                </div>
                <div id="tv" className='shadow box-shadow-inset'></div>
                <div id="tv" className='shadow box-shadow-inset'></div>
            </section>




            <section className='vh-100' id ="wantTobe">
                <h1>third</h1>
            </section>

            <section className='vh-100 bg-secondary' id ="contactMe">
                <h1>contactMe</h1>
            </section>
        </Container>
         </>
    )
}

export default Section;