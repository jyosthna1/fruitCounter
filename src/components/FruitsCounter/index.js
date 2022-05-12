// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="background">
        <div className="white-card">
          <h1 className="head">
            Bob ate <span className="count">{mango} </span>Mangoes
            <span className="count"> {banana} </span>Bananas
          </h1>
          <div className="fruits-flex">
            <div className="mango-flex">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image"
                alt="mango"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onMangoIncrement}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="mango-flex">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-image"
                alt="banana"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onBananaIncrement}
                >
                  Eat Bananas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
