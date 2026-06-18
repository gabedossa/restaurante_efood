import { useState, useEffect } from 'react'
import type { Restaurant } from '../types'
import { fetchRestaurant } from '../services/api'

interface State {
  data: Restaurant | null
  loading: boolean
  error: string | null
}

export function useRestaurant(id: number) {
  const [state, setState] = useState<State>({ data: null, loading: true, error: null })

  useEffect(() => {
    fetchRestaurant(id)
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : 'Erro desconhecido'
        setState({ data: null, loading: false, error: message })
      })
  }, [id])

  return state
}
