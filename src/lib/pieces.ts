export type Hotspot = {
  x: number;
  y: number;
};

export type ProcessStep = {
  title: string;
  description: string;
  image: string;
};

export type Piece = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  image: string;
  heroImage?: string;
  hotspot: Hotspot;
  description: string;
  year: number;
  technique: string;
  material: string;
  dimensions: string;
  collections: string[];
  process?: ProcessStep[];
};

export const pieces: Piece[] = [
  {
    id: "mug-green",
    slug: "mug-green",
    name: "Green Tiles Mug",
    category: "Mug",
    price: 44,
    image: "/images/pieces/card_piece_1.png",
    heroImage: "/images/pieces/pdp-hero-mug.png",
    hotspot: { x: 16, y: 70 },
    description: "A morning ritual in ceramic form. Inspired by old tiled walls and the warmth of a kitchen that smells like coffee.",
    year: 2023,
    technique: "Hand-built, majolica glaze",
    material: "Stoneware",
    dimensions: "10 × 8 cm",
    collections: ["new"],
    process: [
      { title: "Wedging", description: "Knead the clay until it's smooth and pliable, with no cracks. Then shape it into a ball sized for the mug you have in mind.", image: "/images/pieces/mug-process-1.jpg" },
      { title: "Pinch method", description: "Press your thumb into the center of the ball and pinch outward, slowly working the walls upward until the mug shape forms.", image: "/images/pieces/mug-process-2.jpg" },
      { title: "Drying & firing", description: "Leave the piece to dry completely, then fire it in the kiln for the first time.", image: "/images/pieces/mug-process-3.jpg" },
      { title: "Slip painting", description: "Paint the mug with slip, applying no more than two coats so the color comes out just right.", image: "/images/pieces/mug-process-4.jpg" },
    ],
  },
  {
    id: "vase-strawberry",
    slug: "vase-strawberry",
    name: "Strawberry Vase",
    category: "Vase",
    price: 52,
    salePrice: 38,
    image: "/images/pieces/card_piece_2.png",
    heroImage: "/images/pieces/pdp-hero-fresa.png",
    hotspot: { x: 31, y: 57 },
    description: "Sweet and a little absurd. Because why not put a strawberry on your shelf? It holds flowers, pens, or just takes up beautiful space.",
    year: 2024,
    technique: "Wheel-thrown, underglaze",
    material: "Earthenware",
    dimensions: "15 × 10 cm",
    collections: ["new", "sale"],
    process: [
      { title: "Raw clay", description: "Earthenware clay is prepared and shaped on the wheel.", image: "/images/pieces/card_piece_2.png" },
      { title: "Shaping", description: "The strawberry silhouette emerges slowly as the clay is pulled upward.", image: "/images/pieces/card_piece_2.png" },
      { title: "Underglaze", description: "Red and green underglazes are painted by hand before firing.", image: "/images/pieces/card_piece_2.png" },
      { title: "Final firing", description: "A second firing at 1060°C seals the colors and gives the piece its shine.", image: "/images/pieces/card_piece_2.png" },
    ],
  },
  {
    id: "cat-vase",
    slug: "cat-vase",
    name: "Cat Vase",
    category: "Vase",
    price: 58,
    image: "/images/pieces/card_piece_3.png",
    heroImage: "/images/pieces/pdp-hero-gato.png",
    hotspot: { x: 53, y: 67 },
    description: "Every studio needs a cat. This one holds water and never knocks things off the shelf.",
    year: 2023,
    technique: "Hand-sculpted, matte glaze",
    material: "Stoneware",
    dimensions: "18 × 12 cm",
    collections: [],
    process: [
      { title: "Sketching", description: "The cat's form is sketched and translated into a 3D clay structure.", image: "/images/pieces/card_piece_3.png" },
      { title: "Sculpting", description: "Each detail — ears, tail, paws — is hand-sculpted separately and attached.", image: "/images/pieces/card_piece_3.png" },
      { title: "Bisque firing", description: "First firing hardens the piece before any glaze is applied.", image: "/images/pieces/card_piece_3.png" },
      { title: "Matte glaze", description: "A soft matte white glaze is applied to give the cat its clean, modern finish.", image: "/images/pieces/card_piece_3.png" },
    ],
  },
  {
    id: "mini-chair",
    slug: "mini-chair",
    name: "Tiny Chair",
    category: "Sculpture",
    price: 39,
    salePrice: 28,
    image: "/images/pieces/card_piece_4.png",
    heroImage: "/images/pieces/pdp-hero-silla.png",
    hotspot: { x: 72, y: 57 },
    description: "A chair for nobody. A sculpture that makes you wonder who it's waiting for.",
    year: 2024,
    technique: "Hand-built, textured glaze",
    material: "Stoneware",
    dimensions: "12 × 6 cm",
    collections: ["sale"],
    process: [
      { title: "Clay slabs", description: "Flat slabs of stoneware are cut and assembled into the chair's structure.", image: "/images/pieces/card_piece_4.png" },
      { title: "Assembly", description: "Legs, seat and back are joined with slip and smoothed by hand.", image: "/images/pieces/card_piece_4.png" },
      { title: "Texturing", description: "A fabric-like texture is pressed into the surface before drying.", image: "/images/pieces/card_piece_4.png" },
      { title: "Glaze firing", description: "Fired at high temperature to achieve the distinctive textured finish.", image: "/images/pieces/card_piece_4.png" },
    ],
  },
  {
    id: "ice-cream-cup",
    slug: "ice-cream-cup",
    name: "Ice Cream Cup",
    category: "Cup",
    price: 36,
    salePrice: 26,
    image: "/images/pieces/card_piece_5.png",
    heroImage: "/images/pieces/pdp-hero-cup.png",
    hotspot: { x: 86, y: 68 },
    description: "An homage to summer afternoons. Holds pens, small flowers, or just sits on your desk looking happy.",
    year: 2022,
    technique: "Wheel-thrown, relief pattern",
    material: "Earthenware",
    dimensions: "9 × 7 cm",
    collections: ["new", "sale"],
    process: [
      { title: "Throwing", description: "The cup is thrown on the wheel from a ball of earthenware clay.", image: "/images/pieces/card_piece_5.png" },
      { title: "Relief pattern", description: "A waffle-cone pattern is carved into the surface while still wet.", image: "/images/pieces/card_piece_5.png" },
      { title: "Drying", description: "Slow-dried to avoid cracking before the bisque firing.", image: "/images/pieces/card_piece_5.png" },
      { title: "Final glaze", description: "A warm yellow glaze is applied and fired to bring the ice cream look to life.", image: "/images/pieces/card_piece_5.png" },
    ],
  },
];
