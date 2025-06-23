import { createPawn } from "@model/pawn";

export default function Chessboard() {
  function setupPieces() {}

  return (
    <>
      <div className="grid grid-cols-8 gap-0 border-2 border-gray-800 w-full h-full">
        {Array.from({ length: 64 }, (_, index) => {
          const row = Math.floor(index / 8);
          const col = index % 8;
          const isLight = (row + col) % 2 === 0;

          return (
            <div
              key={index}
              className={`flex items-center justify-center text-2xl cursor-pointer hover:bg-opacity-70 aspect-square ${
                isLight ? "bg-amber-100" : "bg-amber-800"
              }`}
            ></div>
          );
        })}
      </div>
    </>
  );
}
