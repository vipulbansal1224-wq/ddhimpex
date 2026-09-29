export interface Product {
  id: string;
  name: string;
  casNo?: string;
  category: 'industrial' | 'specialty' | 'food';
  subcategory: string;
  packingType: string;
  description: string;
  applications: string[];
  popular?: boolean;
}

export const PRODUCTS_DATA: Product[] = [
  // Mining Chemicals
  {
    id: 'activated-carbon',
    name: 'Activated Carbon',
    casNo: '7440-44-0',
    category: 'industrial',
    subcategory: 'Mining Chemicals',
    packingType: 'Small & Big Bags (25kg - 1000kg)',
    description: 'High-adsorption capacity activated carbon specialized for gold recovery, water treatment, and mineral processing.',
    applications: ['Gold CIP/CIL Extraction', 'Water Purification', 'Air & Gas Treatment'],
    popular: true
  },
  {
    id: 'caustic-soda-flakes',
    name: 'Caustic Soda Liquid / Flakes',
    casNo: '1310-73-2',
    category: 'industrial',
    subcategory: 'Mining Chemicals',
    packingType: 'IBC, Drum, Iso Tank, Small & Big Bags',
    description: 'Industrial grade Sodium Hydroxide used for ore processing, pH control, and chemical synthesis.',
    applications: ['Bauxite Refining (Bayer Process)', 'pH Neutralization', 'Chemical Manufacturing'],
    popular: true
  },
  {
    id: 'caustic-soda-pearls',
    name: 'Caustic Soda Pearls',
    casNo: '1310-73-2',
    category: 'industrial',
    subcategory: 'Mining Chemicals',
    packingType: 'Small & Big Bags',
    description: 'High purity spherical caustic soda pearls with low dust content and fast solubility.',
    applications: ['Mining Leaching', 'Detergent Production', 'Paper Pulping']
  },
  {
    id: 'mibc',
    name: 'Methyl Isobutyl Carbinol (MIBC)',
    casNo: '108-11-2',
    category: 'industrial',
    subcategory: 'Mining Chemicals',
    packingType: 'IBC Tank, Drum, Iso Tank',
    description: 'Premium frother used extensively in mineral flotation processes for copper, lead, zinc, and coal extraction.',
    applications: ['Sulfide Ore Flotation', 'Coal Washing', 'Organic Synthesis'],
    popular: true
  },
  {
    id: 'mibk',
    name: 'Methyl Isobutyl Ketone (MIBK)',
    casNo: '108-10-1',
    category: 'industrial',
    subcategory: 'Mining Chemicals',
    packingType: 'Drum, IBC Tank',
    description: 'High boiling organic solvent used in rare earth extraction, tantalum-niobium separation, and industrial coatings.',
    applications: ['Rare Earth Extraction', 'Solvent Extraction', 'Paints & Coatings']
  },
  {
    id: 'mek',
    name: 'Methyl Ethyl Ketone (MEK)',
    casNo: '78-93-3',
    category: 'industrial',
    subcategory: 'Mining Chemicals',
    packingType: 'Drum, IBC Tank',
    description: 'Versatile liquid solvent with fast evaporation rate for extraction processes and resin formulations.',
    applications: ['Metal Extraction', 'Dewaxing Oils', 'Adhesives']
  },

  // Fertilizers Chemicals
  {
    id: 'calcium-nitrate',
    name: 'Calcium Nitrate',
    casNo: '10124-37-5',
    category: 'industrial',
    subcategory: 'Fertilizers Chemicals',
    packingType: 'Bag, Drum (25kg - 1000kg)',
    description: 'Fully water-soluble fertilizer providing essential Calcium and Nitrate Nitrogen for high yield crop production.',
    applications: ['Hydroponics', 'Foliar Spray', 'Wastewater Odor Control'],
    popular: true
  },
  {
    id: 'potassium-nitrate',
    name: 'Potassium Nitrate',
    casNo: '7757-79-1',
    category: 'industrial',
    subcategory: 'Fertilizers Chemicals',
    packingType: 'Bag, Drum, Pail',
    description: 'High-grade crystalline soluble fertilizer ideal for high-value horticultural crops requiring chloride-free nutrition.',
    applications: ['Fertigation', 'Specialty Agriculture', 'Industrial Glass']
  },
  {
    id: 'dicalcium-phosphate',
    name: 'Di-Calcium Phosphate',
    casNo: '7757-93-9',
    category: 'industrial',
    subcategory: 'Fertilizers Chemicals',
    packingType: 'Bag, Drum, Pail',
    description: 'High phosphorus and calcium source suitable for animal feed supplements and soil enrichment.',
    applications: ['Animal Feed Additive', 'Fertilizer Blends', 'Pharmaceutical Excipient']
  },
  {
    id: 'tri-sodium-phosphate',
    name: 'Tri Sodium Phosphate (TSP)',
    casNo: '7601-54-9',
    category: 'industrial',
    subcategory: 'Fertilizers Chemicals',
    packingType: 'Bag, Drum, Pail',
    description: 'Industrial builder, cleaning agent, and phosphate nutrient source for industrial applications.',
    applications: ['Water Treatment', 'Detergent Manufacturing', 'Phosphate Formulations']
  },
  {
    id: 'mono-ammonium-phosphate',
    name: 'Mono Ammonium Phosphate (MAP)',
    casNo: '7722-76-1',
    category: 'industrial',
    subcategory: 'Fertilizers Chemicals',
    packingType: 'Bag, Drum',
    description: 'Highly concentrated source of phosphorus and nitrogen, soluble for liquid fertilization and fire retardant use.',
    applications: ['Drip Irrigation', 'Dry Fire Extinguishers', 'Agricultural Fertilizers'],
    popular: true
  },

  // Specialty Chemicals - Acrylates & Glycols
  {
    id: '2-eha',
    name: '2-Ethylhexyl Acrylate (2-EHA)',
    casNo: '103-11-7',
    category: 'specialty',
    subcategory: 'Acrylate',
    packingType: 'Drum, Iso Tank',
    description: 'Monomer used in copolymerization for pressure-sensitive adhesives, paints, textiles, and latex coatings.',
    applications: ['Pressure Sensitive Adhesives', 'Architectural Coatings', 'Textile Processing'],
    popular: true
  },
  {
    id: 'butyl-acrylate',
    name: 'Butyl Acrylate',
    casNo: '141-32-2',
    category: 'specialty',
    subcategory: 'Acrylate',
    packingType: 'Drum, Iso Tank',
    description: 'Essential acrylic monomer used for producing paints, sealants, caulks, paper coatings, and textile finishes.',
    applications: ['Acrylic Emulsions', 'Leather Finishing', 'Paper & Packaging']
  },
  {
    id: 'methyl-acrylate',
    name: 'Methyl Acrylate',
    casNo: '96-33-3',
    category: 'specialty',
    subcategory: 'Acrylate',
    packingType: 'Drum, Iso Tank',
    description: 'Reactive volatile monomer utilized in the manufacturing of acrylic fibers, thermoplastic resins, and polishes.',
    applications: ['Acrylic Fiber Production', 'Chemical Intermediates', 'Adhesive Monomers']
  },
  {
    id: 'methacrylic-acid',
    name: 'Methacrylic Acid (MAA)',
    casNo: '79-41-4',
    category: 'specialty',
    subcategory: 'Acrylate',
    packingType: 'Drum',
    description: 'Organic compound used in the synthesis of methacrylate esters and emulsion polymers.',
    applications: ['Superabsorbent Polymers', 'Resin Modifiers', 'Adhesives']
  },
  {
    id: 'pmma',
    name: 'Polymethyl Methacrylate (PMMA)',
    casNo: '9011-14-7',
    category: 'specialty',
    subcategory: 'Acrylate',
    packingType: 'Bag',
    description: 'Transparent engineering thermoplastic used as a lightweight, shatter-resistant alternative to glass.',
    applications: ['Optical Lenses', 'Automotive Light Covers', 'Architectural Glazing']
  },

  // FMCG / Food Products
  {
    id: 'basmati-rice',
    name: 'Premium Basmati Rice',
    category: 'food',
    subcategory: 'Grains & Rice',
    packingType: 'Jute Bag, PP Bag, Non-Woven Bag (5kg, 10kg, 20kg, 50kg)',
    description: 'Aromatic, long-grain Indian Basmati rice aged to perfection, offering exceptional flavor and fluffy texture.',
    applications: ['Culinary Exports', 'Retail Packaging', 'Food Service & Hospitality'],
    popular: true
  },
  {
    id: 'non-basmati-rice',
    name: 'Non-Basmati Rice (IR64 / Parboiled / Sona Masoori)',
    category: 'food',
    subcategory: 'Grains & Rice',
    packingType: 'PP Bag, Jute Bag (25kg, 50kg)',
    description: 'High-quality non-basmati rice varieties selected for high grain yield, strength, and nutritional value.',
    applications: ['Global Food Distribution', 'Institutional Catering', 'Bulk Exports']
  },
  {
    id: 'tea',
    name: 'Assam & Darjeeling Pure Indian Tea',
    category: 'food',
    subcategory: 'Beverages',
    packingType: 'Pouch, Tin, Canister, Paper Box, Bulk Sack',
    description: 'Fine Orthodox and CTC teas harvested from top Indian gardens, delivering rich aroma and full-bodied taste.',
    applications: ['Retail Brands', 'Blended Teas', 'Hot Beverage Services']
  },
  {
    id: 'coffee',
    name: 'Instant & Roasted Coffee Beans',
    category: 'food',
    subcategory: 'Beverages',
    packingType: 'Tin, Sachet, Stick Packs, Glass Jar, Bulk Bag',
    description: 'Arabica and Robusta premium coffee products processed under stringent international quality controls.',
    applications: ['Beverage Retail', 'Vending Formulations', 'HORECA Sector']
  },
  {
    id: 'tomato-paste',
    name: 'Concentrated Tomato Paste (28-30% Brix)',
    category: 'food',
    subcategory: 'Processed Foods',
    packingType: 'Can, Pouch, Glass Jar, Tetra Pak, Aseptic Drum',
    description: 'Rich, deep-red double concentrated tomato paste manufactured from vine-ripened tomatoes.',
    applications: ['Sauce Manufacturing', 'Food Processing', 'Consumer Packs'],
    popular: true
  },
  {
    id: 'sunflower-oil',
    name: 'Refined Sunflower Oil',
    casNo: '8001-21-6',
    category: 'food',
    subcategory: 'Edible Oils',
    packingType: 'Bottle, Jar, Pouch, Gallon, Tetra Pak, Flexitank',
    description: 'Pure, light refined sunflower oil high in Vitamin E and unsaturated healthy fats.',
    applications: ['Cooking & Frying', 'Food Manufacturing', 'Retail Grocery Brands']
  },
  {
    id: 'lentils',
    name: 'Pulses & Lentils (Yellow / Red / Chickpeas)',
    category: 'food',
    subcategory: 'Grains & Pulses',
    packingType: 'Bag, Foil Pack (1kg, 5kg, 25kg)',
    description: 'Double-cleaned, high-protein pulses sourced from fertile agricultural belts.',
    applications: ['Food Retailing', 'Nutritional Diets', 'Export Markets']
  },
  {
    id: 'spices',
    name: 'Whole & Ground Indian Spices (Turmeric, Cumin, Chili, Cardamom)',
    category: 'food',
    subcategory: 'Spices',
    packingType: 'Bag, Pouch, Jar, Tin Can',
    description: 'Pure, steam-sterilized aromatic Indian spices preserving natural essential oils and vibrant color.',
    applications: ['Seasonings', 'Food Processing', 'Consumer Spice Jars'],
    popular: true
  }
];

export const CHEMICAL_CATEGORIES = [
  'Mining Chemicals',
  'Fertilizers Chemicals',
  'Acrylate',
  'Pulp & Paper Chemicals',
  'Leather Chemicals',
  'Textile Chemicals',
  'Personal Care Chemicals',
  'Soaps & Detergents Chemicals',
  'Rubber & Plastics Chemicals',
  'Paints & Solvents Chemicals',
  'Food Chemicals',
  'Polyurethane Chemicals',
  'Speciality Chemicals'
];
