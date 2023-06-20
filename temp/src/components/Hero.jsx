import imageURL from '../assets/TALogo.png'

export default function Hero() {


    return (
        <div className='hero'>

            <h2 id="hello">Hello! My name is</h2>
            <h1>Taylor Ambrose</h1>
            <img src={imageURL} alt="logo" id='logo' />
            <h2>Full-Stack Software Engineer/Web Developer</h2>
        </div>
    )
}

