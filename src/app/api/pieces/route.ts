import { NextResponse } from "next/server";
import { pieces } from "@/lib/pieces";

// GET /api/pieces
// Devuelve todas las piezas de la colección.
// NextResponse.json() convierte el array en una respuesta HTTP con Content-Type: application/json
export async function GET() {
  return NextResponse.json(pieces);
}
