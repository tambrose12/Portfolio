import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
import { DiSqllite } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { FaMedium } from 'react-icons/fa'
import ImageUrl from '../assets/Cert.png'



export default function Resume() {

    return (
        <section id='resume'>
            <h2><SiJavascript /> <FaReact /> <FaPython /> <SiFlask /> <DiSqllite /> <FaCss3 /> <FaHtml5 /></h2>

            <h2>My Resume...</h2>
            <a id='resume-link' href='https://docs.google.com/document/d/10pP9oZx0aJ45tsfEyMtSPcAyGBvUzvkjiM5pgGnJBQ8/edit?usp=sharing'>Click here to view my Resume in Google Docs</a>
            <br />
            <p id='links'>
                <a href='https://www.linkedin.com/in/taylorambrose'>
                    LinkedIn <ImLinkedin />
                </a>
                <br />
                <a href='https://github.com/tambrose12'>
                    GitHub <BsGithub />
                </a>
                <br />
                <a href='https://medium.com/@taykesby'>
                    Medium Blog<FaMedium />
                </a>
            </p>
            <br />

            <h3>Software Engineer / Web Developer</h3>
            <p>Full-Stack Software Engineer passionate about solving problems with web development and design. Experienced in Python, JavaScript, React, and Flask. Knowledgeable about HTML and CSS, as well as SQLite and SQLAlchemy. Interested in pursuing a career that can create a positive impact on the future.  Possess a background in the mortgage and financial industry where strong skills in detail-oriented documentation review and communicating complex product and government guidelines to teams were frequently demonstrated.</p>

            <br />

            <h3>Technical Skills</h3>
            <p>Python, JavaScript, React, Flask, SQLite, SQLAlchemy, HTML, CSS (custom, Semantic-UI, MaterialUI, and Bootstrap), GitHub, git version control.</p>

            <br />

            <h3>Experience</h3>
            <h4>CrossCountry Mortgage - Senior Underwriter  12/2016 - 01/2023</h4>
            <ul>
                <li>Reviewed mortgage loan files to ensure they met guideline and documentation requirements for approval.</li>
                <li>Verified that credit, income, assets, property, and any other applicable category were acceptable for borrowers to receive the loan they were applying for as a layer of risk mitigation for the company</li>
                <li>Formerly LendUS, LLC - acquired by CrossCountry Mortgage in 2022.</li>
                <li>Started at LendUS, LLC as a Loan Officer Assistant and was promoted to Underwriter in November 2019 with the same responsibilities as listed above.</li>
            </ul>

            <br />

            <h3>Education</h3>
            <h4>Flatiron School  01/2023 - 05/2023</h4>
            <p>Full Stack Web Development - Python, JavaScript, React, Flask, SQLite, SQLAlchemy, HTML, CSS.</p>
            <h4>SUNY Jamestown Community College</h4>
            <p>Associates Degree in Individual Studies. Phi Theta Kappa Honor Society student.</p>
            <br />

            <img id='cert' src={ImageUrl} alt="Cert-of-Completion" />
        </section>
    )
}