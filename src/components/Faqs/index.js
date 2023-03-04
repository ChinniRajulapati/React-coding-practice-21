import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="inner-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-lists">
          {faqsList.map(eachFaq => (
            <FaqItem eachFaq={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
