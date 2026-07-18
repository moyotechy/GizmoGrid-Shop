import headphone from "../assets/headphone2.png";
import speaker from "../assets/speaker.png";
import earphones from "../assets/GX1EARPHONES.png";

const products = [
  {
    id: 1,
    slug: "quantum-x9-headphones",
    category: "headphones",
    name: "Quantum X9 Headphones",
    price: 899,
    image: headphone,

    description:
      "Experience premium sound with immersive wireless technology and exceptional comfort.",

    features:
      "The Quantum X9 delivers crystal-clear audio with deep bass, active noise cancellation, Bluetooth 5.3, and up to 40 hours of battery life. Designed for music lovers who demand premium quality and comfort.",

    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Ear Cushions" },
      { quantity: 1, item: "USB-C Charging Cable" },
      { quantity: 1, item: "Travel Case" },
      { quantity: 1, item: "User Manual" },
    ],

    gallery: [
      headphone,
      headphone,
      headphone,
    ],
  },

  {
    id: 2,
    slug: "zx9-speaker",
    category: "speakers",
    name: "ZX9 Speaker",
    price: 1299,
    image: speaker,

    description:
      "A premium wireless speaker with room-filling sound and powerful bass.",

    features:
      "Designed to produce exceptional sound with rich bass and crystal-clear vocals. Perfect for home entertainment and parties.",

    includes: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Power Cable" },
      { quantity: 1, item: "Remote Control" },
      { quantity: 1, item: "User Manual" },
    ],

    gallery: [
      speaker,
      speaker,
      speaker,
    ],
  },

  {
    id: 3,
    slug: "yx1-earphones",
    category: "earphones",
    name: "YX1 Earphones",
    price: 199,
    image: earphones,

    description:
      "Compact wireless earphones with premium sound quality.",

    features:
      "Enjoy deep bass, crystal-clear vocals, touch controls, and IPX5 water resistance in a lightweight design.",

    includes: [
      { quantity: 2, item: "Earphones" },
      { quantity: 3, item: "Silicone Tips" },
      { quantity: 1, item: "Charging Case" },
      { quantity: 1, item: "USB-C Cable" },
    ],

    gallery: [
      earphones,
      earphones,
      earphones,
    ],
  },
];

export default products;