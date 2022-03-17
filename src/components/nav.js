import "./style/nav.scss"

export default function Nav() {
    return(
        <nav>
        
            <div className="nav__home-button"></div>
            <div className="nav__line-decorator"></div>
            <div className="nav__items">
                <ul>
                    <li><span>01</span> Home</li>
                    <li><span>02</span> Destination</li>
                    <li><span>03</span> Crew</li>
                    <li><span>04</span> Technology</li>
                </ul>
            </div>
        </nav>
    )
}