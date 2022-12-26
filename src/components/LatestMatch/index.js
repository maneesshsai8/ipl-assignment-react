// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const updateMatch = {
    competingTeam: latestMatch.competing_team,
    competingTeamLogo: latestMatch.competing_team_logo,
    date: latestMatch.date,
    firstInnings: latestMatch.first_innings,
    id: latestMatch.id,
    manOfTheMatch: latestMatch.man_of_the_match,
    matchStatus: latestMatch.match_status,
    result: latestMatch.result,
    secondInnings: latestMatch.second_innings,
    umpires: latestMatch.umpires,
    venue: latestMatch.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = updateMatch
  return (
    <div>
      <h1>Latest Matches</h1>
      <div className="card4">
        <div>
          <p className="para2">{competingTeam}</p>
          <p className="para2">{date}</p>
          <p className="para2">{venue}</p>
          <p className="para2">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="image5"
          />
        </div>
        <div>
          <p className="para3">First Innings</p>
          <p className="para3">{firstInnings}</p>
          <p className="para3">Second Innings</p>
          <p className="para3">{secondInnings}</p>
          <p className="para3">Man Of The Match</p>
          <p className="para3">{manOfTheMatch}</p>
          <p className="para3">Umpires</p>
          <p className="para3">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
