import { useEffect, useState } from 'react'

const useCatImage = ({ fact }) => {
  const [firstWord, setFirstWord] = useState()
  useEffect(() => {
    if (!fact) {
      return
    }
    setFirstWord(fact.split(' ')[0] || '')
  }, [fact])
  return { firstWord }
}

export default useCatImage
