import { Piece } from "./Piece";
import { Board } from "../Board";

export class Rook extends Piece {
	isValidMove(
		[sx, sy]: [number, number],
		[ex, ey]: [number, number],
		board: Board
	): boolean {
		return sx === ex || sy === ey;
	}
}
