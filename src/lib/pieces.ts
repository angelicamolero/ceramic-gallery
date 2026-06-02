export type Hotspot = {
  x: number;
  y: number;
};

export type Piece = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  hotspot: Hotspot;
  description: string;
  year: number;
  technique: string;
  material: string;
  dimensions: string;
};

export const pieces: Piece[] = [
  {
    id: "mug-green",
    slug: "mug-green",
    name: "Green Tiles Mug",
    category: "Mug",
    price: 44,
    image: "/images/pieces/card_piece_1.png",
    hotspot: { x: 16, y: 70 },
    description: "A morning ritual in ceramic form. Inspired by old tiled walls and the warmth of a kitchen that smells like coffee.",
    year: 2023,
    technique: "Hand-built, majolica glaze",
    material: "Stoneware",
    dimensions: "10 × 8 cm",
  },
  {
    id: "vase-strawberry",
    slug: "vase-strawberry",
    name: "Strawberry Vase",
    category: "Vase",
    price: 52,
    image: "/images/pieces/card_piece_2.png",
    hotspot: { x: 31, y: 57 },
    description: "Sweet and a little absurd. Because why not put a strawberry on your shelf? It holds flowers, pens, or just takes up beautiful space.",
    year: 2024,
    technique: "Wheel-thrown, underglaze",
    material: "Earthenware",
    dimensions: "15 × 10 cm",
  },
  {
    id: "cat-vase",
    slug: "cat-vase",
    name: "Cat Vase",
    category: "Vase",
    price: 58,
    image: "/images/pieces/card_piece_3.png",
    hotspot: { x: 53, y: 67 },
    description: "Every studio needs a cat. This one holds water and never knocks things off the shelf.",
    year: 2023,
    technique: "Hand-sculpted, matte glaze",
    material: "Stoneware",
    dimensions: "18 × 12 cm",
  },
  {
    id: "mini-chair",
    slug: "mini-chair",
    name: "Tiny Chair",
    category: "Sculpture",
    price: 39,
    image: "/images/pieces/card_piece_4.png",
    hotspot: { x: 72, y: 57 },
    description: "A chair for nobody. A sculpture that makes you wonder who it's waiting for.",
    year: 2024,
    technique: "Hand-built, textured glaze",
    material: "Stoneware",
    dimensions: "12 × 6 cm",
  },
  {
    id: "ice-cream-cup",
    slug: "ice-cream-cup",
    name: "Ice Cream Cup",
    category: "Cup",
    price: 36,
    image: "/images/pieces/card_piece_5.png",
    hotspot: { x: 86, y: 68 },
    description: "An homage to summer afternoons. Holds pens, small flowers, or just sits on your desk looking happy.",
    year: 2022,
    technique: "Wheel-thrown, relief pattern",
    material: "Earthenware",
    dimensions: "9 × 7 cm",
  },
];
