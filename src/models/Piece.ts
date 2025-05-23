import { Board } from "../Board";

export abstract class Piece {
	constructor(public color: "white" | "black") {}

	abstract isValidMove(
		start: [number, number],
		end: [number, number],
		board: Board
	): boolean;
}
