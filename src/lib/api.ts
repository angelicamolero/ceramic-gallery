import { Piece } from "./pieces";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getPieces(): Promise<Piece[]> {
  const res = await fetch(`${BASE_URL}/api/pieces`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch pieces");

  return res.json();
}

export async function getPiece(slug: string): Promise<Piece | null> {
  const res = await fetch(`${BASE_URL}/api/pieces/${slug}`, {
    next: { revalidate: 3600 },
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch piece");

  return res.json();
}
