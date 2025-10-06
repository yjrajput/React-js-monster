import { useState } from 'react'
import styles from './Accordian.module.css'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const accordionData = [
    {
      title: 'What is HTML?',
      description:
        'HTML stands for HyperText Markup Language and is the fundamental language used to create and structure web pages. It uses a system of tags to mark up content like text, images, and links, telling web browsers how to display it and form the basic layout and structure of a website. HTML is the backbone of the internet, often used alongside CSS for styling and JavaScript for interactivity.'
    },
    {
      title: 'What is CSS?',
      description:
        'CSS, which stands for Cascading Style Sheets, is a stylesheet language used in web development to control the presentation and formatting of HTML documents. It is one of the three core technologies of the World Wide Web, alongside HTML and JavaScript.'
    },
    {
      title: 'What is JavaScript?',
      description:
        'JS, or JavaScript, is a high-level, interpreted programming language primarily known for bringing interactivity to web pages. It is one of the three core technologies of the World Wide Web, working alongside HTML (for content structure) and CSS (for styling).'
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className={styles.container}>
      {accordionData.map((item, index) => (
        <div key={index} className={styles.item}>
          <div
            className={styles.header}
            onClick={() => toggleAccordion(index)}
          >
            <div>{item.title}</div>
            <p>{activeIndex === index ? '-' : '+'}</p>
          </div>
          {activeIndex === index && (
            <div className={styles.content}>
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
