// API URL: https://catfact.ninja/fact
// CAT_IMAGE_URL = https://cataas.com/cat/says/hello?fontSize=50&fontColor=red

import './App.css'
import useCatImage from './hooks/useFirstWordFactRetrieval'
import useCatFact from './hooks/useCatFact'

const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { firstWord } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <>
      <main>
        <h1>Kitten App</h1>

        <button onClick={handleClick}>Get new fact</button>

        {fact && <p>{fact}</p>}
        {firstWord &&
          <img src={`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`} alt='Image of a cat with text' />}
      </main>
    </>
  )
}

export default App
