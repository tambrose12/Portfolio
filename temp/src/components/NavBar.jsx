import { BsGithub } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { FaMedium } from 'react-icons/fa'

export default function NavBar() {

    return (
        <nav className="navbar">
            <div id="nav-left">
                <a href='#home'>
                    Home
                </a>
                <a href='#about'>
                    About
                </a>
                <a href='#projects'>
                    Projects
                </a>
                <a href='#resume'>
                    Resume
                </a>
            </div>
            <div id="nav-right">
                <a href='https://www.linkedin.com/in/taylorambrose'>
                    <ImLinkedin />
                </a>
                <a href='https://github.com/tambrose12'>
                    <BsGithub />
                </a>
                <a href='https://medium.com/@taykesby'>
                    <FaMedium />
                </a>
            </div>
        </nav>
    )
}