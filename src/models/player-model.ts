

export interface PlayerModel {
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    statistics: {
    overall: number;
    Pace: number;
    Shooting: number;
    Passing: number;
    Dribbling: number;
    Defending: number;
    Physical: number;
}};
