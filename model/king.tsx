interface King {
    id: string;
    position: {
        x: number;
        y: number;
    };
    color: "white" | "black";
    isInCheck?: boolean; // Indicates if the king is currently in check
    isCastlingEligible?: boolean; // Indicates if the king can castle
}