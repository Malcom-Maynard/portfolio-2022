import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoA from "../../assets/images/Amari-1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope,faCode} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



//Defining a side bar to be used on the website
//Inculdes: icons, links to outside resources 
const Sidebar = () => (

    <div className='nav-bar'> 
        
        <Link className='logo' to='/'>
            <img  src = {LogoA} alt="logo"></img>
            
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/"> 
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about" className="about-link"> 
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"> 
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills"> 
                <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="blank" rel="noreferrer" href = "https://www.linkedin.com/in/amari-maynard-79495b221/">
                    <FontAwesomeIcon icon ={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>


            <li>
                <a target="blank" rel="noreferrer" href = "https://github.com/Malcom-Maynard">
                    <FontAwesomeIcon icon ={faGithub} color="#4d4d4e"/>
                </a>
            </li>

        </ul>
    </div>


)
export default Sidebar