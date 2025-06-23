import { PieceType } from "./pieces";

export interface Pawn {
  id: string;
  position: {
    x: number;
    y: number;
  };
  color: "white" | "black";
  hasMoved: boolean;
  isPromoted?: boolean;
  promotedTo?: PieceType;
  icon?: string;
}

export function createPawn(
  id: string,
  position: { x: number; y: number },
  color: "white" | "black"
): Pawn {
  return {
    id,
    position,
    color,
    hasMoved: false,
    isPromoted: false,
    promotedTo: undefined,
    icon: `/pieces/pawn/pawn-${color}.svg`
  };
}
