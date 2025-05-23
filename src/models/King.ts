import { Piece } from "./Piece";
import { Board } from "../Board";

export class King extends Piece {
	isValidMove(
		[sx, sy]: [number, number],
		[ex, ey]: [number, number],
		board: Board
	): boolean {
		const dx = Math.abs(ex - sx);
		const dy = Math.abs(ey - sy);
		return dx <= 1 && dy <= 1;
	}
}
