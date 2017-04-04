import { Console } from './console';
import { GameFranchise } from './gameFranchise'

export class Game {
    id: number;
    name: string;
    playability: number;
    graphics: number;
    interest: number;
    gameFranchise: GameFranchise;
    consoles: Console[];
}
