import React from "react";

const ranges = [
  { min: 1, max: 15, letter: "B" },
  { min: 16, max: 30, letter: "I" },
  { min: 31, max: 45, letter: "N" },
  { min: 46, max: 60, letter: "G" },
  { min: 61, max: 75, letter: "O" }
];

function BingoNumber({ number }) {
  const matchedRange = ranges.find(r => number >= r.min && number <= r.max);
  if (!matchedRange) {
    return null;
  }

  return (
    <div>
      {matchedRange.letter}
      {number}
    </div>
  );
}

export default BingoNumber;
