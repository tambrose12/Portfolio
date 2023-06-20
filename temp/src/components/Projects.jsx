import imageUrl from '../assets/RecipeBox.jpeg'
import imageUrl2 from '../assets/F1-Flask-Paced.png'
import imageUrl3 from '../assets/HabitStat.png'
import imageUrl4 from '../assets/GCU-CLI.png'

export default function Projects() {



    return (
        <section className='project-section'>
            <h2>My Projects...</h2>
            <div className='projects'>
                <img src={imageUrl} alt="RecipeBox-Thumbnail" />
                <img src={imageUrl2} alt="F1-Flask-Paced-Thumbnail" />
                <img src={imageUrl3} alt="HabitStat-Thumbnail" />
                <img src={imageUrl4} alt="GCU-CLI-Thumbnail" />
            </div>
        </section>
    )
}