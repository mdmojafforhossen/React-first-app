import React, { useState } from 'react'
import {faqsData} from './Data'
import Faq from './Faq'

const Faqs = () => {
    const [faqs, setFaqs] = useState(faqsData)
  return (
    <div>
        <section>
            {faqs.map((faq ,index)=>(
                <Faq key={index} {...faq} />
            ))}
        </section>
    </div>
  )
}

export default Faqs
