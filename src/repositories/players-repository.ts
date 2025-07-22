import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-mode";


const database: PlayerModel[] = [
 {
    id: 1,
    name: "Ousmane Dembélé",
    club: "Paris Saint‑Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      overall: 90,
      Pace: 92,
      Shooting: 86,
      Passing: 88,
      Dribbling: 94,
      Defending: 40,
      Physical: 70
    }
  },
  {
    id: 2,
    name: "Willian Pacho",
    club: "Paris Saint‑Germain",
    nationality: "Ecuador",
    position: "Defender",
    statistics: {
      overall: 85,
      Pace: 78,
      Shooting: 45,
      Passing: 70,
      Dribbling: 60,
      Defending: 88,
      Physical: 90
    }
  },
  {
    id: 3,
    name: "João Neves",
    club: "Paris Saint‑Germain",
    nationality: "Portugal",
    position: "Midfielder",
    statistics: {
      overall: 88,
      Pace: 80,
      Shooting: 75,
      Passing: 90,
      Dribbling: 85,
      Defending: 82,
      Physical: 78
    }
  },
  {
    id: 4,
    name: "Khvicha Kvaratskhelia",
    club: "Paris Saint‑Germain",
    nationality: "Georgia",
    position: "Winger",
    statistics: {
      overall: 89,
      Pace: 90,
      Shooting: 84,
      Passing: 86,
      Dribbling: 93,
      Defending: 50,
      Physical: 75
    }
  },
  {
    id: 5,
    name: "Lamine Yamal",
    club: "Barcelona",
    nationality: "Spain",
    position: "Winger",
    statistics: {
      overall: 87,
      Pace: 91,
      Shooting: 85,
      Passing: 88,
      Dribbling: 92,
      Defending: 45,
      Physical: 72
    }
  }
];



export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (
    id:number
): Promise<PlayerModel | undefined> =>{
    return database.find( player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) =>{
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((p) => p,id === id);

  if(index !== -1){
    database.splice(index, 1);
    return true;
  };

  return false;
};

export const findAndModifyPlayer = async (
  id: number, 
  statistics: statisticsModel
): Promise<PlayerModel> => {
const playerIndex = database.findIndex( player =>player.id === id)

if(playerIndex !== -1){
  database[playerIndex].statistics = statistics;
};

return database[playerIndex];
};