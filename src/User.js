// Lec-50  start Dynamic Routing
import {withRouter} from 'react-router-dom'
function User(props)
{
    console.warn(props)
    return(
    <div><h1>User No {props.match.params.id}</h1>
    <h1>User Name {props.match.params.name}</h1></div>

    )
}

export default  (User);

// Lec-50 end Dynamic Routing
