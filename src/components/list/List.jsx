import { Link } from "react-router-dom"
import "./List.css"

export const List = (props) => {
    return <li><Link to={`/${props.listTitle === "home" ? "" : props.listTitle}`}>{props.listTitle}</Link></li>
}


export default List