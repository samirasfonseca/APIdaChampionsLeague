import { PlayerModel } from "../models/player-model";

export const findAllClubs = async (): Promise<PlayerModel[]> =>{
    return database;
};