import { request, Request, Response } from "express";
import * as service from "../services/player-services";
import { noContent } from "../utils/http-helper";
import { statisticsModel } from "../models/statistics-mode";



export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await service.getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req:Request, res:Response) =>{
    const id = parseInt(req.params.id);
    const httpResponse = await service.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async(rreq:Request, res: Response)=>{
  
    
    const bodyValue = request.body;
    const httpResponse = await service.CreatePlayerService(bodyValue)
   

    if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export const deletePlayer = async (req:Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await service.deletePlayerService(id);
};

export const updatePlayer = async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    const bodyValue: statisticsModel = req.body;
    const httpResponse = await service.updatePlayerService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};