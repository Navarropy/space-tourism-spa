import "./style/Home.scss"

import PageTitle from "./PageTitle"


export default function Home() {
    return(
        <>
            <PageTitle count="01" title="A Universe of Possibilites" />
            <div className="home__main">
                <div className="home__main__headline">
                    <div className="home__main__headline__sub-title">So you want to travel to</div>
                    <div className="home__main__headline__title">SPACE</div>
                    <div className="home__main__headline__text">Let’s face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
                </div>
                <div className="home__main__explore">
                    <div className="home__main__explore__button">Explore</div>
                </div>
            </div>
        </>
    )
}