import { useState, useEffect } from 'react'
import type { Restaurant } from '../types'
import { fetchRestaurants } from '../services/api'

interface State {
  data: Restaurant[]
  loading: boolean
  error: string | null
}

export function useRestaurants() {
  const [state, setState] = useState<State>({ data: [], loading: true, error: null })

  useEffect(() => {
    fetchRestaurants()
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : 'Erro desconhecido'
        setState({ data: [], loading: false, error: message })
      })
  }, [])

  return state
}
