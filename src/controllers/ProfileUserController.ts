import { Request, Response } from 'express'
import { ProfileUserService } from '../services/ProfileUserSevice'

export class ProfileUserController {
  async handle(request: Request, response: Response){
    const service = new ProfileUserService()

    try {
      const result = await service.execute(request.user_id)
      return response.json(result)
    } catch (error) {
      return response.json({ error: error.message })
    }

  }
}