import { CAT_FACT_URL } from '../consts/endpoints'

async function getFact () {
  const res = await fetch(CAT_FACT_URL)
  const data = await res.json()
  const { fact } = data
  return fact
}

export default getFact
