export type Hotspot = {
    x: number; // 0..100 (% del ancho de la imagen)
    y: number; // 0..100 (% del alto de la imagen)
  };
  
  export type Piece = {
    id: string;
    name: string;
    price: number;
    image: string;
    hotspot: Hotspot;
  };
  
  export const pieces: Piece[] = [
    {
      id: "mug-green",
      name: "Green Tiles Mug",
      price: 44,
      image: "/images/pieces/card_piece_1.png",
      hotspot: { x: 16, y: 70 },
    },
    {
      id: "vase-strawberry",
      name: "Strawberry Vase",
      price: 52,
      image: "/images/pieces/card_piece_2.png",
      hotspot: { x: 31, y: 57 },
    },
    {
      id: "cat-vase",
      name: "Cat Vase",
      price: 58,
      image: "/images/pieces/card_piece_3.png",
      hotspot: { x: 53, y: 67 },
    },
    {
      id: "mini-chair",
      name: "Tiny Chair",
      price: 39,
      image: "/images/pieces/card_piece_4.png",
      hotspot: { x: 72, y: 57 },
    },
    {
      id: "ice-cream-cup",
      name: "Ice Cream Cup",
      price: 36,
      image: "/images/pieces/card_piece_5.png",
      hotspot: { x: 86, y: 68 },
    },
  ];
  