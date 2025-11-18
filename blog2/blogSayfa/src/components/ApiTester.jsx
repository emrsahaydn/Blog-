import { useState } from 'react'
import axios from 'axios'
import useAppSettings from '../hooks/useAppSettings.js'

const ApiTester = () => {
  const { content } = useAppSettings()
  const { apiTester } = content.contact
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleRequest = async () => {
    try {
      setStatus('loading')
      setMessage('')
      await axios.post('https://reqres.in/api/users', {
        name: 'Emir Şahin Aydın',
        job: 'Frontend Developer',
      })
      setStatus('success')
      setMessage(apiTester.success)
    } catch (error) {
      console.error('API error', error)
      setStatus('error')
      setMessage(apiTester.error)
    }
  }

  return (
    <div className="rounded-2xl bg-white p-6 dark:bg-white/5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink dark:text-white">{apiTester.title}</p>
          {message && (
            <p
              className={`text-xs font-medium ${
                status === 'success' ? 'text-green-500' : 'text-rose-400'
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <button
          onClick={handleRequest}
          disabled={status === 'loading'}
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary/90 disabled:opacity-60"
        >
          {status === 'loading' ? '...' : apiTester.button}
        </button>
      </div>
    </div>
  )
}

export default ApiTester

