import Image from "next/image";

export type FeaturedPiece = {
  image: string;
  name: string;
  price: number;
};

type Props = {
  piece: FeaturedPiece;
};

export default function FeaturedCard({ piece }: Props) {
  return (
    <div className="border border-black/20 bg-white p-3 w-[180px]">
      <div className="relative h-[140px] w-full">
        <Image
          src={piece?.image}
          alt={piece?.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-2 text-sm text-black">
        {piece?.name}
      </div>

      <div className="text-sm text-black/70">
        ${piece?.price}
      </div>
    </div>
  );
}
