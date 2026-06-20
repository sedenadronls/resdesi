import type { MenuCategory, SignatureDish, Review } from "../types/menu.types";

export const menu: MenuCategory[] = [
  {
    id: "soup-veg-starter",
    label: "Soup & Veg Starter",
    items: [
      { name: "Veg Manchurian", price: "75 / 120" },
      { name: "Paneer Manchurian", price: "135 / 225" },
      { name: "Paneer Chilli", price: "135 / 225" },
      { name: "Veg Manchow Soup", price: "90" },
      { name: "Hot & Sour Soup", price: "90" },
      { name: "Tomato Soup", price: "90" },
      { name: "Sweet Corn Veg Soup", price: "90" },
    ],
  },
  {
    id: "non-veg-starter",
    label: "Non-Veg Starter",
    items: [
      { name: "Chicken Lolipop", price: "210 / 330", chefPick: true },
      { name: "Chicken Chilli Lolipop", price: "165 / 270" },
      { name: "Chicken Chilli", price: "165 / 240" },
      { name: "Hot Garlic Chicken Dry", price: "270", chefPick: true },
      { name: "Chicken Noodles Soup", price: "75" },
      { name: "Chicken Manchow Soup", price: "90" },
    ],
  },
  {
    id: "indian-mancourse-veg",
    label: "Indian Mancourse · Veg",
    items: [
      { name: "Paneer Kadhai", price: "180 / 255" },
      { name: "Paneer Do Pyaza", price: "180 / 255" },
      { name: "Paneer Masala", price: "165 / 240" },
      { name: "Paneer Butter Masala", price: "180 / 255" },
    ],
  },
  {
    id: "mancourse-non-veg",
    label: "Mancourse · Non-Veg",
    items: [
      { name: "Chicken Butter Masala", price: "210 / 345", chefPick: true },
      { name: "Chicken Masala", price: "195 / 230" },
      { name: "Chicken Kadhai", price: "210 / 345" },
      { name: "Chicken Do Pyaza", price: "195 / 330" },
      { name: "Egg Masala", price: "105 / 150" },
      { name: "Egg Do Pyaza", price: "120 / 180" },
    ],
  },
  {
    id: "veg-noodles-rice",
    label: "Veg Noodles & Rice",
    items: [
      { name: "Veg Hakka Noodles", price: "50 / 75" },
      { name: "Paneer Hakka Noodles", price: "90 / 135" },
      { name: "Veg Szechwan Garlic Noodles", price: "90 / 135" },
      { name: "Paneer Chilli Garlic Noodles", price: "105 / 150" },
      { name: "Veg Fried Rice", price: "75 / 120" },
      { name: "Paneer Fried Rice", price: "105 / 150" },
      { name: "Szechwan Fried Rice", price: "75 / 120" },
      { name: "Jeera Rice", price: "90" },
      { name: "Steam Rice", price: "75" },
      { name: "Roti", price: "9" },
      { name: "Butter Roti", price: "15" },
      { name: "Lachha Paratha", price: "45" },
    ],
  },
  {
    id: "non-veg-noodles-rice",
    label: "Non-Veg Noodles & Rice",
    items: [
      { name: "Chicken Noodles", price: "105 / 150" },
      { name: "Egg Noodles", price: "75 / 135" },
      { name: "Egg Chicken Noodles", price: "105 / 165" },
      { name: "Chicken Chilli Garlic Noodles", price: "105 / 180", chefPick: true },
      { name: "Chicken Szechwan Fried Rice", price: "105 / 165" },
      { name: "Egg Fried Rice", price: "105 / 150" },
      { name: "Egg Chicken Fried Rice", price: "120 / 195" },
    ],
  },
  {
    id: "maggi",
    label: "Maggi",
    items: [
      { name: "Plain Maggi", price: "75" },
      { name: "Masala Maggi", price: "105" },
      { name: "Vegetable Maggi", price: "90" },
      { name: "Paneer Chilli Maggi", price: "150" },
      { name: "Chicken Maggi", price: "150" },
    ],
  },
  {
    id: "high-protein",
    label: "High Protein Diet",
    items: [
      { name: "Soya Protein Diet Bowl (25g)", price: "75" },
      { name: "Chicken Rice Protein Bowl (30g)", price: "120" },
    ],
  },
  {
    id: "specialty-biryani",
    label: "Specialty Biryani",
    items: [
      { name: "Desi Dhuaah Dam Chicken Biryani", price: "150", chefPick: true },
    ],
  },
];

export const signatureDishes: SignatureDish[] = [
  {
    name: "Chicken Lolipop",
    description: "Crispy frenched drumettes, double-fried, dragon-fire glaze.",
    price: "₹ 210 / 330",
  },
  {
    name: "Hot Garlic Chicken Dry",
    description: "Charred garlic, dry red chilli, smoking hot wok toss.",
    price: "₹ 270",
  },
  {
    name: "Desi Dhuaah Dam Chicken Biryani",
    description: "Slow-sealed dum biryani, smoked at the table.",
    price: "₹ 150",
  },
  {
    name: "Chicken Butter Masala",
    description: "Tandoor chicken in a velvet butter-tomato gravy.",
    price: "₹ 210 / 345",
  },
  {
    name: "Paneer Chilli Garlic Noodles",
    description: "Hand-tossed noodles, smoked garlic, Szechwan heat.",
    price: "₹ 105 / 150",
  },
  {
    name: "Veg Manchurian",
    description: "Crisp veg balls in a glossy Indo-Chinese gravy.",
    price: "₹ 75 / 120",
  },
];

export const reviews: Review[] = [
  {
    name: "Ananya R.",
    role: "Regular Guest",
    quote: "The Chilli Lolipop alone is worth the trip. Service is warm, plating is gorgeous.",
    initial: "A",
  },
  {
    name: "Rohit S.",
    role: "Food Blogger",
    quote: "Finally a place that does both cuisines justice — the Dum Biryani smoke reveal is theatre.",
    initial: "R",
  },
  {
    name: "Priya M.",
    role: "Weekend Regular",
    quote: "Paneer Butter Masala here is better than most pure North Indian places I've tried.",
    initial: "P",
  },
  {
    name: "Kabir D.",
    role: "First-time Visitor",
    quote: "Loved the ambience — feels premium without being stiff. Hot Garlic Chicken is fire.",
    initial: "K",
  },
];
