import imageUrl from '../assets/RecipeBox.jpeg'
import imageUrl2 from '../assets/F1-Flask-Paced.png'
import imageUrl3 from '../assets/HabitStat.png'
import imageUrl4 from '../assets/GCU-CLI.png'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
import { DiSqllite } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'


export default function Projects() {


    return (
        <section className='project-section' id='projects'>
            <h2><SiJavascript /> <FaReact /> <FaPython /> <SiFlask /> <DiSqllite /> <FaCss3 /> <FaHtml5 /></h2>
            <h2>My Projects...</h2>
            <div className='projects'>
                <a href="https://github.com/tambrose12/Recipe-Box"><img className='projectImg' src={imageUrl} alt="RecipeBox-Thumbnail" /></a>

                <a href="https://github.com/tambrose12/F1-Flask-Paced"><img className='projectImg' src={imageUrl2} alt="F1-Flask-Paced-Thumbnail" /></a>

                <a href="https://github.com/tambrose12/HabitStat"><img className='projectImg' src={imageUrl3} alt="HabitStat-Thumbnail" /></a>

                <a href="https://github.com/tambrose12/GitClassyU-CLI"><img className='projectImg' src={imageUrl4} alt="GCU-CLI-Thumbnail" /></a>
            </div>
        </section>
    )
}