import Chessboard from "./components/chessboard";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex-1 flex items-center justify-center">
        <div className="h-screen max-w-screen max-h-screen p-24">
          <Chessboard />
        </div>
      </div>
    </div>
  );
}
