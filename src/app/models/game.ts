import { Console } from './console';

export class Game {
    id: number;
    name: string;
    playability: number;
    graphics: number;
    interest: number;
    gameFranchise: {
        id: number,
        name: string
    }
    consoles: Console[];
}
