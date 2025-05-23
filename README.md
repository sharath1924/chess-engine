# Chess Engine – TypeScript

This is a simple chess engine built using TypeScript. It focuses on validating moves for core chess pieces using object-oriented design. Jest is used for testing.

## What This Project Includes

- A board representation
- Piece classes: King, Rook, and Pawn
- Logic for validating moves
- Test cases for each piece

## Setup and Usage

Install the required dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

## Folder Structure

```
chess-engine/
├── src/
│   ├── Board.ts
│   └── models/
│       ├── Piece.ts
│       ├── King.ts
│       ├── Rook.ts
│       └── Pawn.ts
├── tests/
│   ├── King.test.ts
│   └── Pawn.test.ts
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## About

The project was created to demonstrate clean and modular code for a simplified chess engine. It can be extended to support more pieces or features.




