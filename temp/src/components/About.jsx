import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
import { DiSqllite } from 'react-icons/di'
import { SiJavascript, SiVite } from 'react-icons/si'



export default function About() {


    return (
        <section id="about">
            <h2><SiJavascript /> <FaReact /> <SiVite /> <FaPython /> <SiFlask /> <DiSqllite /> <FaCss3 /> <FaHtml5 /></h2>
            <h2 className='header'>A Little Bit About Me...</h2>
            <p> I am passionate about solving problems with Web Development and Design.</p>

            <p>I enjoy thinking through complex problems, and the rewarding feeling of overcoming challenges. Creating functional web applications brings me a great deal of satisfaction. Experienced in application development with Python, JavaScript, React, Flask, HTML, CSS, SQLite and SQLAlchemy. Understanding of the HTTP Request-Response Cycle. Interested in pursuing a career that can create a positive impact on the future.</p>


            <p>I possess a background in the mortgage and financial industry, where strong skills in detail-oriented documentation review and communicating complex product and government guidelines to teams were frequently demonstrated. My former position required me to carefully examine my work and find solutions to problems. This skillset will allow me to be a valuable asset in almost any line of work, including Software Engineering and Web Development.</p>
        </section >
    )
}