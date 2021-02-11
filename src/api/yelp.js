import axios from 'axios'
import yelpApi from '../../yelpApi'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${yelpApi.apiKey}`,
  },
})
