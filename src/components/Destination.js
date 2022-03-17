import PageTitle from "./PageTitle"
import "./style/Destinations.scss"

export default function Destination() {
    return(
        <>
            <PageTitle count="02" title="Pick Your Destination" />
            <div className="destinations">
                <div className="destinations-nav"></div>
            </div>
        </>
    )
}