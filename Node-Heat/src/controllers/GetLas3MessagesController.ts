import { Request, Response } from 'express';
import { GetLas3MessagesService } from '../services/GetLas3MessagesService';

class GetLas3MessagesController {
  async handle(request: Request, response: Response) {

    const service = new GetLas3MessagesService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetLas3MessagesController };
