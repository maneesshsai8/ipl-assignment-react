// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="image1" />
        <p className="para">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
