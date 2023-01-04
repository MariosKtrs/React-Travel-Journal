
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faGlobe)

export default function Header() {
    return(
        <div className="header">
            <FontAwesomeIcon icon={faGlobe} className="globe-icon"/>     
            <p className="header-desc">My Travel Journal.</p>
        </div>
    )
}