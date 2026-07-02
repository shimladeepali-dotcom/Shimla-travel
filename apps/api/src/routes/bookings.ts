import { Router, Request, Response } from 'express'
import { authenticate, AuthRequest } from '../middleware/auth.js'

const router = Router()

const bookings: any[] = []

router.post('/', authenticate, (req: AuthRequest, res: Response) => {
  try {
    const { tourId, startDate, quantity } = req.body

    if (!tourId || !startDate || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const booking = {
      id: Date.now().toString(),
      userId: req.userId,
      tourId,
      startDate,
      quantity,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    bookings.push(booking)
    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' })
  }
})

router.get('/', authenticate, (req: AuthRequest, res: Response) => {
  const userBookings = bookings.filter((b) => b.userId === req.userId)
  res.json(userBookings)
})

export default router
