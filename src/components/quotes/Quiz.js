import React from 'react'
import { getAllQuotes } from '../../lib/api'
function Quiz() {
  const [quotes, setQuotes] = React.useState(null)
  const [theOptionsArray, setTheOptionsArray] = React.useState([])
  const [newQuote, setNewQuote] = React.useState({
    text: '',
    author: '',
  })
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllQuotes()
        setQuotes(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  let item
  React.useEffect(()=> {
    const getRandomQuote = async () => {  
      // get random index value
      try {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        // get random item
        item = quotes[randomIndex]  
        setNewQuote(item)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomQuote()
  }, [quotes])
  

  let optionsArray = []
  const randomOptionsNumber = Math.floor(Math.random() * 4)

  React.useEffect(()=> {
    const getRandomQuotes = async () => {  
      try {
        const randomQuoteOne = quotes[Math.floor(Math.random() * quotes.length)]
        console.log(randomQuoteOne.author)
        const randomQuoteTwo = quotes[Math.floor(Math.random() * quotes.length)]
        console.log(randomQuoteTwo.author)
        const randomQuoteThree = quotes[Math.floor(Math.random() * quotes.length)]
        console.log(randomQuoteThree.author)

        if (randomOptionsNumber === 0) {
          return optionsArray = [randomQuoteOne.author, randomQuoteTwo.author, randomQuoteThree.author, newQuote.author]
        } else if (randomOptionsNumber === 1){
          return optionsArray = [randomQuoteOne.author, newQuote.author, randomQuoteThree.author, randomQuoteTwo.author]
        } else if (randomOptionsNumber === 2) {
          optionsArray = [randomQuoteOne.author, randomQuoteTwo.author, newQuote.author, randomQuoteThree.author]
        } else if (randomOptionsNumber === 3) {
          return optionsArray = [newQuote.author, randomQuoteTwo.author, randomQuoteThree.author, randomQuoteOne.author]
        }
      } catch (err) {
        console.log(err)
      }
    }
    getRandomQuotes()
    setTheOptionsArray(optionsArray[0])
    setTheOptionsArray(...theOptionsArray + optionsArray[1])
    console.log(optionsArray)
  }, [newQuote])
  
  // console.log(getRandomQuote)
  return (
    <>
      <section className="hero is-fullheight-with-navbar is-info">
        <div className="container">
          <h1 className="title is-center">Guess who Said the Quote!</h1>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-content">{newQuote.text}</div>
          </div>
        </div>
        <div className="container">
          <p>This works</p>
          <p>{theOptionsArray}</p>
          <button>{optionsArray[0]}</button>
          <button>{optionsArray[1]}</button>
          <button>{optionsArray[2]}</button>
          <button>{optionsArray[3]}</button>
        </div>
      </section>
    </>
  )
}
export default Quiz