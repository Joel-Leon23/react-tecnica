import { useState, useEffect } from 'react'
import getFact from '../services/facts'

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getFact().then(fact => setFact(fact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

export default useCatFact
