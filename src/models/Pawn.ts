import { Piece } from "./Piece";
import { Board } from "../Board";

export class Pawn extends Piece {
	isValidMove(
		[sx, sy]: [number, number],
		[ex, ey]: [number, number],
		board: Board
	): boolean {
		const dir = this.color === "white" ? -1 : 1;
		return sx + dir === ex && sy === ey;
	}
}
