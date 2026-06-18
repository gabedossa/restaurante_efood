import type { Restaurant } from '../types'

const BASE_URL = 'https://api-ebac.vercel.app/api/efood'

interface ApiDish {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
}

interface ApiRestaurant {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  avaliacao: number
  destacado: boolean
  cardapio: ApiDish[]
}

function mapRestaurant(r: ApiRestaurant): Restaurant {
  return {
    id: r.id,
    name: r.titulo,
    description: r.descricao,
    logo: r.capa,
    coverImage: r.capa,
    rating: r.avaliacao,
    featured: r.destacado,
    tags: [{ id: r.id, name: r.tipo }],
    menu: r.cardapio.map((d) => ({
      id: d.id,
      name: d.nome,
      description: d.descricao,
      price: d.preco,
      photo: d.foto,
      serve: d.porcao,
    })),
  }
}

export async function fetchRestaurants(): Promise<Restaurant[]> {
  const res = await fetch(`${BASE_URL}/restaurantes`)
  if (!res.ok) throw new Error('Erro ao buscar restaurantes')
  const data: ApiRestaurant[] = await res.json()
  return data.map(mapRestaurant)
}

export async function fetchRestaurant(id: number): Promise<Restaurant> {
  const res = await fetch(`${BASE_URL}/restaurantes/${id}`)
  if (!res.ok) throw new Error('Restaurante não encontrado')
  const data: ApiRestaurant = await res.json()
  return mapRestaurant(data)
}
