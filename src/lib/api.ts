import { Piece, pieces } from "./pieces";

export async function getPieces(): Promise<Piece[]> {
  return pieces;
}

export async function getPiece(slug: string): Promise<Piece | null> {
  return pieces.find((p) => p.slug === slug) ?? null;
}
