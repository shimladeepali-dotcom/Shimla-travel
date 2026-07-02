import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const router = Router()

const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
})

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

const users: any[] = []

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, name } = RegisterSchema.parse(req.body)

    if (users.find((u) => u.email === email)) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = {
      id: Date.now().toString(),
      email,
      name,
      password: hashedPassword,
      role: 'user',
    }

    users.push(user)

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    )

    res.json({ token, user: { id: user.id, email, name } })
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' })
  }
})

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = LoginSchema.parse(req.body)

    const user = users.find((u) => u.email === email)
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    )

    res.json({ token, user: { id: user.id, email: user.email, name: user.name } })
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' })
  }
})

export default router
