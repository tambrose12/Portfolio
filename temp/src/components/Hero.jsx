import imageURL from '../assets/TALogo.png'

export default function Hero() {


    return (
        <div className='hero' id='home'>
            <a href='https://www.linkedin.com/in/taylorambrose'><img src={imageURL} alt="logo" id='logo' className='md:w-32 lg:w-48' /></a>
            <h2>Full-Stack Software Engineer / Web Developer</h2>
            <br />
            <h2 id="hello">Hello! My name is</h2>
            <h1>Taylor Ambrose</h1>


        </div>
    )
}

