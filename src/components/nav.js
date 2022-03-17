import "./style/nav.scss"
import Logo from "./logo"
import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <nav>
        
            <div className="nav__home-button">
                <Link to="/"><Logo /></Link>
            </div>
            <div className="nav__line-decorator"></div>
            <div className="nav__items">
                <ul>
                    <li className="--active-item">
                        <Link to="/"><span>01</span> Home</Link>
                    </li>
                    <li>
                        <Link to="/Destination"><span>02</span> Destination</Link>
                    </li>
                    <li>
                        <Link to="/Crew"><span>03</span> Crew</Link>
                    </li>
                    <li>
                        <Link to="/Technology"><span>03</span> Technology</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}