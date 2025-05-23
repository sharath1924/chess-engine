import { Board } from "../src/Board";
import { King } from "../src/models/King";

test("King moves one square diagonally", () => {
	const board = new Board();
	const king = new King("white");
	board.placePiece(king, [4, 4]);
	expect(board.movePiece([4, 4], [5, 5])).toBe(true);
});

test("King fails to move more than one square", () => {
	const board = new Board();
	const king = new King("white");
	board.placePiece(king, [4, 4]);
	expect(board.movePiece([4, 4], [6, 6])).toBe(false);
});
