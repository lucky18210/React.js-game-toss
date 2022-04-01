// Write your code here

import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalScore: 0,
    totalHeads: 0,
    totalTails: 0,
  }

  onClickTossCoin = () => {
    const getNum = Math.floor(Math.random() * 2)
    if (getNum === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalScore: prevState.totalScore + 1,
        totalHeads: prevState.totalHeads + 1,
      }))
    } else if (getNum === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalScore: prevState.totalScore + 1,
        totalTails: prevState.totalTails + 1,
      }))
    }
  }

  render() {
    const {isHead, totalScore, totalHeads, totalTails} = this.state
    const srcImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <div className="header-container">
            <h1 className="game-heading">Coin Toss Game</h1>
            <p className="game-sub-heading">Heads (or) Tails </p>
          </div>
          <div className="image-container">
            <img
              src={srcImage}
              alt="toss result"
              className="heads-tails-image"
            />
          </div>
          <div className="toss-coin-button-container">
            <button
              className="toss-coin-button"
              type="button"
              onClick={this.onClickTossCoin}
            >
              Toss Coin
            </button>
          </div>
          <div className="scores-container">
            <div className="total-score-container">
              <p className="score-status">Total: {totalScore}</p>
            </div>
            <div className="total-score-container">
              <p className="score-status">Heads: {totalHeads}</p>
            </div>
            <div className="total-score-container">
              <p className="score-status">Tails: {totalTails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
