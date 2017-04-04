import { Console } from './console';

export class Game {
    id: number;
    name: string;
    playability: number;
    playabilityScoresCount: number;
    graphics: number;
    graphicsScoresCount: number;
    interest: number;
    interestScoresCount: number;
    gameFranchise: {
        id: number,
        name: string
    }
    consoles: Console[];
}
