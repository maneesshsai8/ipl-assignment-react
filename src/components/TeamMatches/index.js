// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamProfile: [], isLoading: true}

  componentDidMount() {
    this.getTeamSchedule()
  }

  getTeamSchedule = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const filterData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamProfile: filterData, isLoading: false})
  }

  getTeamSch = (teamBannerUrl, latestMatchDetails, recentMatches) => (
    <div className="card3">
      <div className="card2">
        <div>
          <img src={teamBannerUrl} alt="team banner" className="image3" />
        </div>
        <div>
          <LatestMatch latestMatch={latestMatchDetails} />
        </div>
        <ul className="un-list">
          {recentMatches.map(each => (
            <MatchCard key={each.id} eachMatch={each} />
          ))}
        </ul>
      </div>
    </div>
  )

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    let background = ''
    switch (id) {
      case 'KKR':
        background = 'bg-cont3'
        break
      case 'RCB':
        background = 'bg-cont2'
        break
      case 'KXP':
        background = 'bg-cont4'
        break
      case 'CSK':
        background = 'bg-cont5'
        break
      case 'RR':
        background = 'bg-cont6'
        break
      case 'MI':
        background = 'bg-cont7'
        break
      case 'SH':
        background = 'bg-cont8'
        break

      default:
        background = 'bg-cont9'
        break
    }
    const {teamProfile, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamProfile

    return (
      <div className={background}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getTeamSch(teamBannerUrl, latestMatchDetails, recentMatches)
        )}
      </div>
    )
  }
}

export default TeamMatches
