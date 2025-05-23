import { Piece } from "./models/Piece";

export class Board {
	grid: (Piece | null)[][];

	constructor() {
		this.grid = Array.from({ length: 8 }, () => Array(8).fill(null));
	}

	placePiece(piece: Piece, position: [number, number]) {
		this.grid[position[0]][position[1]] = piece;
	}

	movePiece(start: [number, number], end: [number, number]): boolean {
		const piece = this.grid[start[0]][start[1]];
		if (!piece) return false;
		if (piece.isValidMove(start, end, this)) {
			this.grid[end[0]][end[1]] = piece;
			this.grid[start[0]][start[1]] = null;
			return true;
		}
		return false;
	}
}
