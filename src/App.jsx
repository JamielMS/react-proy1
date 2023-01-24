import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './json/quotes.json'
import colors from './json/colors.json'
import QuoteBox from './components/QuoteBox'

function App() {

  const randomElement =  arr =>{
    const indexRandom = Math.floor(Math.random() * arr.length);  
    return arr[indexRandom];
  } 

  const [quoteRandom, setQuoteRandom] = useState(randomElement(quotes));
  const [colorRandom, setColorRandom] = useState(randomElement(colors));

  //cambiando valor de estado
  const handleClick = () =>{
      setQuoteRandom(randomElement(quotes));
      setColorRandom(randomElement(colors));
  }

 


  return (

    <div style = {{backgroundColor:colorRandom}} className="App"> 
      <QuoteBox 
      colorRandom = {colorRandom}
      quoteRandom = {quoteRandom}
      handleClick = {handleClick}
      />
    </div>
  )
}

export default App
