// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const updatedTeam = {
    competingTeam: eachMatch.competing_team,
    competingTeamLogo: eachMatch.competing_team_logo,
    date: eachMatch.date,
    firstInnings: eachMatch.first_innings,
    id: eachMatch.id,
    manOfTheMatch: eachMatch.man_of_the_match,
    matchStatus: eachMatch.match_status,
    result: eachMatch.result,
    secondInnings: eachMatch.second_innings,
    umpires: eachMatch.umpires,
    venue: eachMatch.venue,
  }
  const {competingTeam, competingTeamLogo, result, matchStatus} = updatedTeam

  const status = matchStatus === 'Won' ? 'color1' : 'color2'
  return (
    <li className="list">
      <div>
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="image6"
        />
      </div>
      <div>
        <p>{competingTeam}</p>
      </div>
      <div>
        <p>{result}</p>
      </div>
      <div>
        <p className={status}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
