import { NextResponse } from "next/server";
import { pieces } from "@/lib/pieces";

// GET /api/pieces/[slug]
// Busca una pieza por su slug. Si no existe, devuelve 404.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const piece = pieces.find((p) => p.slug === slug);

  if (!piece) {
    return NextResponse.json({ error: "Piece not found" }, { status: 404 });
  }

  return NextResponse.json(piece);
}
