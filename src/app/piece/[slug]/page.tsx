import { notFound } from "next/navigation";
import { getPiece } from "@/lib/api";
import PieceDetail from "@/components/piece/PieceDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PiecePage({ params }: Props) {
  const { slug } = await params;
  const piece = await getPiece(slug);

  if (!piece) notFound();

  return <PieceDetail piece={piece} />;
}
