import { library } from '@fortawesome/fontawesome-svg-core'
import {faLocationPin} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faLocationPin)


export default function Cards (props) {
    return(
        <div className="card">
            <a className="wiki-link" href={props.wiki}>
                <img className="location-image" src={process.env.PUBLIC_URL +`/images/${props.imagePath}`}/> 
            </a>
            <div className ="info">
                <div className="location-line">
                    <FontAwesomeIcon icon={faLocationPin} className="location-pin"/>    
                    <p className="country">{props.country}</p>
                    <a href={props.googleMaps} target="_blank">View on Google Maps</a>
                </div>
            <h1>{props.location}</h1>
            <p className="date">{props.date}</p>
            <p className="description">{props.description}</p>
            </div>
        </div>
    )
}