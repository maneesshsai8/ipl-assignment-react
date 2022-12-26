// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const filterData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplTeams: filterData, isLoading: false})
  }

  homeCard = iplTeams => (
    <div className="card1">
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="image2"
        />
        <h1>Ipl DashBoard</h1>
      </div>
      <div>
        <ul>
          {iplTeams.map(each => (
            <TeamCard key={each.id} eachTeam={each} />
          ))}
        </ul>
      </div>
    </div>
  )

  render() {
    const {iplTeams, isLoading} = this.state
    return (
      <div className="bg-cont">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.homeCard(iplTeams)
        )}
      </div>
    )
  }
}

export default Home
