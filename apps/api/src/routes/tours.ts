import { Router, Request, Response } from 'express'

const router = Router()

const tours = [
  {
    id: '1',
    name: 'Shimla Heritage Tour',
    description: 'Explore the colonial architecture and history of Shimla',
    price: 5999,
    duration: 3,
    image: 'https://via.placeholder.com/300x200?text=Shimla+Heritage',
    rating: 4.5,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Adventure in Himalayas',
    description: 'Thrilling trekking and outdoor activities',
    price: 8999,
    duration: 5,
    image: 'https://via.placeholder.com/300x200?text=Adventure',
    rating: 4.8,
    reviews: 89,
  },
]

router.get('/', (req: Request, res: Response) => {
  const { search, minPrice, maxPrice } = req.query

  let filtered = tours

  if (search) {
    filtered = filtered.filter((tour) =>
      tour.name.toLowerCase().includes((search as string).toLowerCase())
    )
  }

  if (minPrice) {
    filtered = filtered.filter((tour) => tour.price >= Number(minPrice))
  }

  if (maxPrice) {
    filtered = filtered.filter((tour) => tour.price <= Number(maxPrice))
  }

  res.json(filtered)
})

router.get('/:id', (req: Request, res: Response) => {
  const tour = tours.find((t) => t.id === req.params.id)
  if (!tour) {
    return res.status(404).json({ error: 'Tour not found' })
  }
  res.json(tour)
})

export default router
