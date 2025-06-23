interface Rook {
  id: string;
  position: {
    x: number;
    y: number;
  };
  color: "white" | "black";
  isCastlingEligible?: boolean;
}
