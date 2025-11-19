import axios from 'axios'

export const sendApiRequest = async () => {
  try {
    const response = await axios.post('https://reqres.in/api/users', {
      name: 'Emir Şahin Aydın',
      job: 'Frontend Developer',
    }, {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    })
    console.log('API request completed successfully', response.data)
  } catch (error) {
    console.error('API error', error)
  }
}

