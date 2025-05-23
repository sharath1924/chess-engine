import { Board } from "../src/Board";
import { Pawn } from "../src/models/Pawn";

test("White pawn moves forward by one", () => {
	const board = new Board();
	const pawn = new Pawn("white");
	board.placePiece(pawn, [6, 4]);
	expect(board.movePiece([6, 4], [5, 4])).toBe(true);
});

test("Black pawn moves forward by one", () => {
	const board = new Board();
	const pawn = new Pawn("black");
	board.placePiece(pawn, [1, 4]);
	expect(board.movePiece([1, 4], [2, 4])).toBe(true);
});
