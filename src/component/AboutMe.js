


export default function AboutMe(){
    return(
        <section className='bg-secondary vh-100 d-flex justify-content-around align-items-center' id='aboutMe'>
        <div id="tv" className='shadow box-shadow-inset d-flex flex-column justify-content-center'>
            <h2>Skill</h2>
            <p>스킬 1</p>
            <p>스킬 2</p>
            <p>스킬 3</p>
        </div>
        <div id="tv" className='shadow box-shadow-inset d-flex flex-column justify-content-center'>
        <h2>Profile</h2>
            <p>프로필 1</p>
            <p>프로필 2</p>
            <p>프로필 3</p>
        </div>
        <div id="tv" className='shadow box-shadow-inset d-flex flex-column justify-content-center'>
        <h2>Carrer</h2>
            <p>커리어 1</p>
            <p>커리어 2</p>
            <p>커리어 3</p>
        </div>
    </section>
    )
}