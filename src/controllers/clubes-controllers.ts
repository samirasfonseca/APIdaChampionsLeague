import { Request, response, Response } from "express"

export const getClubs =async(req: Request, res: Response) =>{

    const Response = await service.getClubsService();

    res.status(response.statusCode).json(response.body);
}