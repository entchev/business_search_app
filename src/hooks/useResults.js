import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'london',
        },
      })
      setResults(response.data.businesses)
    } catch (e) {
      setErrorMsg('Something went wrong..')
    }
  }

  useEffect(() => {
    searchApi('Denis')
  }, [])

  return [searchApi, results, errorMsg]
}
