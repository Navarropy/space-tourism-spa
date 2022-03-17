import "./style/page-title.scss"

export default function PageTitle(props) {
    return(
        <div className="page-title">
            <span className="page-title__count">{props.count}</span>
            <h2 className="page-title__title">{props.title}</h2>
        </div>
    )
}