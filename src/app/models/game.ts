import { Console } from './console';
import { GameFranchise } from './gameFranchise'

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
