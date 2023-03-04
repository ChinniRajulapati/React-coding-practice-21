import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderAnswer = () => {
    const {eachFaq} = this.props
    const {answerText} = eachFaq
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button onClick={this.onToggle} className="btn" type="button">
        <img src={image} className="plus-image" alt={altText} />
      </button>
    )
  }

  render() {
    const {eachFaq} = this.props
    const {questionText} = eachFaq
    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
