export interface ProductItem {
  id: string;
  name: string;
  casNo?: string;
  category: 'industrial' | 'specialty' | 'food';
  subcategory: string;
  packingType: string;
  description: string;
  applications: string[];
  image?: string;
  popular?: boolean;
}

export interface CategoryDetail {
  slug: string;
  name: string;
  category: 'industrial' | 'specialty' | 'food';
  heroSubtitle: string;
  description: string;
  bannerImage: string;
  products: ProductItem[];
}

export const ALL_CATEGORIES_DATA: CategoryDetail[] = [
  // INDUSTRIAL CHEMICALS (11 Categories)
  {
    slug: 'mining-chemicals',
    name: 'Mining Chemicals',
    category: 'industrial',
    heroSubtitle: 'Flotation Reagents, Frothers & Extraction Solvents',
    description: 'High-efficiency mining flotation reagents, frothers, and gold extraction chemicals optimized for sulfide and oxide ore recovery.',
    bannerImage: '/xelassets/xelgs/banner-3.png',
    products: [
      {
        id: 'activated-carbon',
        name: 'Activated Carbon',
        casNo: '7440-44-0',
        category: 'industrial',
        subcategory: 'Mining Chemicals',
        packingType: 'Small & Big Bags (25kg - 1000kg)',
        description: 'High-adsorption gold recovery activated carbon for CIP/CIL processing plants.',
        applications: ['Gold Recovery', 'Water Treatment', 'Air Purification'],
        popular: true
      },
      {
        id: 'caustic-soda-flakes',
        name: 'Caustic Soda Liquid / Flakes',
        casNo: '1310-73-2',
        category: 'industrial',
        subcategory: 'Mining Chemicals',
        packingType: 'IBC Tank, Iso Tank, Drums, 25kg Bags',
        description: 'Sodium Hydroxide industrial grade for ore pH control and leaching.',
        applications: ['Bayer Process', 'pH Control', 'Chemical Synthesis']
      },
      {
        id: 'mibc',
        name: 'Methyl Isobutyl Carbinol (MIBC)',
        casNo: '108-11-2',
        category: 'industrial',
        subcategory: 'Mining Chemicals',
        packingType: 'IBC Tank, Drum, Iso Tank',
        description: 'Leading froth flotation reagent for copper, lead, zinc, and coal mining.',
        applications: ['Mineral Flotation', 'Coal Washing', 'Solvent Extraction'],
        popular: true
      },
      {
        id: 'mibk',
        name: 'Methyl Isobutyl Ketone (MIBK)',
        casNo: '108-10-1',
        category: 'industrial',
        subcategory: 'Mining Chemicals',
        packingType: 'Drum, IBC Tank',
        description: 'High-boiling solvent for rare earth metal separation and tantalum-niobium refining.',
        applications: ['Rare Earth Extraction', 'Solvent Refining', 'Coatings']
      },
      {
        id: 'mek',
        name: 'Methyl Ethyl Ketone (MEK)',
        casNo: '78-93-3',
        category: 'industrial',
        subcategory: 'Mining Chemicals',
        packingType: 'Drum, IBC Tank',
        description: 'Fast-evaporating solvent for metal extraction and resin formulations.',
        applications: ['Metal Extraction', 'Dewaxing Oils', 'Adhesives']
      }
    ]
  },
  {
    slug: 'pulp-and-paper-chemicals',
    name: 'Pulp & Paper Chemicals',
    category: 'industrial',
    heroSubtitle: 'Bleaching Agents, Sizing Agents & Retention Aids',
    description: 'Specialized chemical formulations designed to enhance paper strength, brightness, water resistance, and machine operating efficiency.',
    bannerImage: '/xelassets/xelgs/banner-2.png',
    products: [
      {
        id: 'sodium-chlorate',
        name: 'Sodium Chlorate',
        casNo: '7775-09-9',
        category: 'industrial',
        subcategory: 'Pulp & Paper Chemicals',
        packingType: '25kg / 1000kg Jumbo Bags',
        description: 'Primary raw material for Chlorine Dioxide generation in ECF paper pulp bleaching.',
        applications: ['Pulp Bleaching', 'Herbicide Synthesis', 'Oxidizing Agent']
      },
      {
        id: 'hydrogen-peroxide',
        name: 'Hydrogen Peroxide (50% / 70%)',
        casNo: '7722-84-1',
        category: 'industrial',
        subcategory: 'Pulp & Paper Chemicals',
        packingType: 'IBC Tank, Drums, Iso Tank',
        description: 'Eco-friendly bleaching agent for mechanical and recycled paper pulp whitening.',
        applications: ['De-inking Recycled Paper', 'Pulp Bleaching', 'Wastewater Treatment']
      },
      {
        id: 'alkenyl-succinic-anhydride',
        name: 'Alkenyl Succinic Anhydride (ASA)',
        casNo: '26544-38-7',
        category: 'industrial',
        subcategory: 'Pulp & Paper Chemicals',
        packingType: 'Drum, IBC Tank',
        description: 'Internal paper sizing agent providing water resistance to fine paper grades.',
        applications: ['Internal Paper Sizing', 'Packaging Board Water Resistance']
      }
    ]
  },
  {
    slug: 'leather-chemicals',
    name: 'Leather Chemicals',
    category: 'industrial',
    heroSubtitle: 'Tanning Syntans, Fatliquors & Finishing Auxiliaries',
    description: 'High performance chrome and vegetable tanning agents, syntans, fatliquors, and finishing resins for premium leather processing.',
    bannerImage: '/xelassets/xelgs/banner-1.png',
    products: [
      {
        id: 'basic-chromium-sulfate',
        name: 'Basic Chromium Sulfate (BCS)',
        casNo: '39380-78-4',
        category: 'industrial',
        subcategory: 'Leather Chemicals',
        packingType: '25kg Kraft Bags',
        description: 'Standard chrome tanning agent for wet-blue hide stabilization and high shrinkage temperature.',
        applications: ['Chrome Tanning', 'Dyeing Fixative', 'Leather Manufacturing']
      },
      {
        id: 'sodium-formate',
        name: 'Sodium Formate',
        casNo: '141-53-7',
        category: 'industrial',
        subcategory: 'Leather Chemicals',
        packingType: '25kg Bags',
        description: 'Neutralizing and masking agent for chrome tanning in leather tanneries.',
        applications: ['Leather Neutralization', 'De-icing Agent', 'Reducing Agent']
      }
    ]
  },
  {
    slug: 'textile-chemicals',
    name: 'Textile Chemicals',
    category: 'industrial',
    heroSubtitle: 'Pre-treatment, Dyeing Auxiliaries & Softeners',
    description: 'Comprehensive range of scouring agents, levelling agents, dye fixatives, and silicone softeners for textile fiber processing.',
    bannerImage: '/xelassets/xelgs/banner-4.png',
    products: [
      {
        id: 'sodium-hydrosulfite',
        name: 'Sodium Hydrosulfite (88% / 90%)',
        casNo: '7775-14-6',
        category: 'industrial',
        subcategory: 'Textile Chemicals',
        packingType: '50kg Iron Drums',
        description: 'Powerful reducing agent used in vat dyeing and reduction clearing of polyester blends.',
        applications: ['Vat Dyeing', 'Textile Bleaching', 'Reduction Clearing']
      },
      {
        id: 'acetic-acid',
        name: 'Glacial Acetic Acid (99.8%)',
        casNo: '64-19-7',
        category: 'industrial',
        subcategory: 'Textile Chemicals',
        packingType: 'IBC Tank, Drum, Iso Tank',
        description: 'pH regulator and dye bath buffer for reactive and acid dye fixation.',
        applications: ['Textile Dyeing', 'Chemical Intermediate', 'Solvent']
      }
    ]
  },
  {
    slug: 'personal-care-chemicals',
    name: 'Personal Care Chemicals',
    category: 'industrial',
    heroSubtitle: 'Surfactants, Emulsifiers & Conditioning Agents',
    description: 'Mild surfactants, emollient esters, rheology modifiers, and conditioning agents for cosmetics, skincare, and haircare.',
    bannerImage: '/xelassets/xelgs/banner-5.png',
    products: [
      {
        id: 'sles',
        name: 'Sodium Lauryl Ether Sulfate (SLES 70%)',
        casNo: '68585-34-2',
        category: 'industrial',
        subcategory: 'Personal Care Chemicals',
        packingType: '170kg / 220kg Drums, IBC',
        description: 'Anionic surfactant offering high foam, cleansing, and emulsifying properties for shampoos & body washes.',
        applications: ['Shampoos', 'Liquid Soaps', 'Cosmetic Formulations'],
        popular: true
      },
      {
        id: 'capb',
        name: 'Cocamidopropyl Betaine (CAPB 30%)',
        casNo: '61789-40-0',
        category: 'industrial',
        subcategory: 'Personal Care Chemicals',
        packingType: '200kg Drums, IBC Tank',
        description: 'Amphoteric co-surfactant reducing irritation and enhancing foam viscosity.',
        applications: ['Facial Cleansers', 'Baby Shampoos', 'Shower Gels']
      }
    ]
  },
  {
    slug: 'soaps-and-detergents-chemicals',
    name: 'Soaps & Detergents Chemicals',
    category: 'industrial',
    heroSubtitle: 'Builders, Surfactants & Optical Brighteners',
    description: 'Raw materials for household and industrial laundry powders, liquid detergents, dishwashers, and hard surface cleaners.',
    bannerImage: '/xelassets/xelgs/banner-1.png',
    products: [
      {
        id: 'labsa',
        name: 'Linear Alkyl Benzene Sulfonic Acid (LABSA 96%)',
        casNo: '27176-87-0',
        category: 'industrial',
        subcategory: 'Soaps & Detergents Chemicals',
        packingType: '210kg Drums, IBC Tank',
        description: 'Primary active surfactant used in laundry washing powders and detergent liquids.',
        applications: ['Detergent Powder', 'Liquid Cleaners', 'Industrial Washers'],
        popular: true
      },
      {
        id: 'sodium-tripolyphosphate',
        name: 'Sodium Tripolyphosphate (STPP)',
        casNo: '7758-29-4',
        category: 'industrial',
        subcategory: 'Soaps & Detergents Chemicals',
        packingType: '25kg Bags',
        description: 'Builder agent preventing water hardness ions from precipitating dirt back onto fabrics.',
        applications: ['Water Softening', 'Detergent Builder', 'Ceramics']
      }
    ]
  },
  {
    slug: 'rubber-and-plastics-chemicals',
    name: 'Rubber & Plastics Chemicals',
    category: 'industrial',
    heroSubtitle: 'Vulcanization Accelerators, Antioxidants & Modifiers',
    description: 'Accelerators, antioxidants, blowing agents, and impact modifiers enhancing rubber elasticity and polymer thermal stability.',
    bannerImage: '/xelassets/xelgs/banner-2.png',
    products: [
      {
        id: 'zinc-oxide',
        name: 'Zinc Oxide (Rubber Grade 99.5%)',
        casNo: '1314-13-2',
        category: 'industrial',
        subcategory: 'Rubber & Plastics Chemicals',
        packingType: '25kg Bags',
        description: 'Activator for rubber vulcanization enhancing crosslinking density and tensile strength.',
        applications: ['Tire Manufacturing', 'Rubber Goods', 'Plastics Heat Stabilizer']
      },
      {
        id: 'cbs-accelerator',
        name: 'N-Cyclohexyl-2-benzothiazole sulfenamide (CBS / CZ)',
        casNo: '95-33-0',
        category: 'industrial',
        subcategory: 'Rubber & Plastics Chemicals',
        packingType: '25kg Bags',
        description: 'Delayed action vulcanization accelerator for NR, SBR, and BR rubber compounds.',
        applications: ['Tires & Conveyor Belts', 'Molded Rubber Components']
      }
    ]
  },
  {
    slug: 'glass-and-ceramics-chemicals',
    name: 'Glass & Ceramics Chemicals',
    category: 'industrial',
    heroSubtitle: 'Fluxing Agents, Glaze Colorants & Opacifiers',
    description: 'High purity minerals, fluxing salts, and oxide colorants used in container glass, ceramic tiles, sanitaryware, and glazes.',
    bannerImage: '/xelassets/xelgs/banner-3.png',
    products: [
      {
        id: 'soda-ash-dense',
        name: 'Soda Ash Dense (Sodium Carbonate)',
        casNo: '497-19-8',
        category: 'industrial',
        subcategory: 'Glass & Ceramics Chemicals',
        packingType: '25kg / 1000kg Bags',
        description: 'Essential fluxing agent lowering silica melting temperature in glass manufacturing.',
        applications: ['Flat & Container Glass', 'Ceramic Frits', 'Detergent Builder']
      },
      {
        id: 'zirconium-silicate',
        name: 'Zirconium Silicate (Zircon Flour / Opacifier)',
        casNo: '10101-52-7',
        category: 'industrial',
        subcategory: 'Glass & Ceramics Chemicals',
        packingType: '25kg Bags',
        description: 'High-grade opacifier for ceramic tile glazes, sanitaryware, and refractory molds.',
        applications: ['Ceramic Glazes', 'Refractory Lining', 'Precision Casting']
      }
    ]
  },
  {
    slug: 'paints-and-solvents-chemicals',
    name: 'Paints & Solvents Chemicals',
    category: 'industrial',
    heroSubtitle: 'Coalescing Agents, Resin Solvents & Pigment Dispersants',
    description: 'High-purity aromatic and aliphatic solvents, acrylic coalescing agents, and anti-skinning additives for industrial coatings.',
    bannerImage: '/xelassets/xelgs/banner-4.png',
    products: [
      {
        id: 'titanium-dioxide',
        name: 'Titanium Dioxide Rutile (TiO2)',
        casNo: '13463-67-7',
        category: 'industrial',
        subcategory: 'Paints & Solvents Chemicals',
        packingType: '25kg Bags',
        description: 'Premium white pigment providing maximum opacity, whiteness, and exterior weatherability.',
        applications: ['Architectural Paint', 'Industrial Coatings', 'Plastics']
      },
      {
        id: 'butyl-acetate',
        name: 'n-Butyl Acetate (99.5%)',
        casNo: '123-86-4',
        category: 'industrial',
        subcategory: 'Paints & Solvents Chemicals',
        packingType: 'Drum, Iso Tank',
        description: 'Medium evaporating solvent for nitrocellulose lacquers, polyurethane coatings, and inks.',
        applications: ['Wood Lacquers', 'Automotive Refinish', 'Flexographic Inks']
      }
    ]
  },
  {
    slug: 'food-chemicals',
    name: 'Food Chemicals',
    category: 'industrial',
    heroSubtitle: 'Acidulants, Preservatives & Emulsifiers',
    description: 'Food grade additives, preservatives, pH buffers, and humectants compliant with FCC and Codex Alimentarius standards.',
    bannerImage: '/xelassets/xelgs/banner-5.png',
    products: [
      {
        id: 'citric-acid-monohydrate',
        name: 'Citric Acid Monohydrate / Anhydrous',
        casNo: '5949-29-1',
        category: 'industrial',
        subcategory: 'Food Chemicals',
        packingType: '25kg Paper Bags',
        description: 'Natural acidulant and antioxidant synergist for beverages, confectionery, and preserves.',
        applications: ['Soft Drinks', 'Jams & Candies', 'Pharmaceutical Syrups']
      },
      {
        id: 'sodium-benzoate',
        name: 'Sodium Benzoate (Food Grade)',
        casNo: '532-32-1',
        category: 'industrial',
        subcategory: 'Food Chemicals',
        packingType: '25kg Bags',
        description: 'Antimicrobial preservative inhibiting yeast and mold growth in acidic foods.',
        applications: ['Carbonated Drinks', 'Sauces & Pickles', 'Cosmetics Preservative']
      }
    ]
  },
  {
    slug: 'polyurethane-chemicals',
    name: 'Polyurethane Chemicals',
    category: 'industrial',
    heroSubtitle: 'Polyols, Isocyanates & Foam Catalysts',
    description: 'Raw materials for rigid, flexible, and microcellular polyurethane foams, adhesives, sealants, and elastomeric soles.',
    bannerImage: '/xelassets/xelgs/banner-1.png',
    products: [
      {
        id: 'polymeric-mdi',
        name: 'Polymeric MDI (Isocyanate)',
        casNo: '9016-87-9',
        category: 'industrial',
        subcategory: 'Polyurethane Chemicals',
        packingType: '250kg Steel Drums, Iso Tank',
        description: 'Isocyanate component used with polyols for rigid insulation foam and sandwich panels.',
        applications: ['Rigid Insulation Foam', 'Refrigerators', 'Structural Adhesives']
      },
      {
        id: 'polyether-polyol',
        name: 'Polyether Polyol (Conventional 3000 MW)',
        casNo: '9082-00-2',
        category: 'industrial',
        subcategory: 'Polyurethane Chemicals',
        packingType: '210kg Drums, Flexitank',
        description: 'Triol polyol used for flexible slabstock foam for furniture, bedding, and automotive seats.',
        applications: ['Mattresses & Cushions', 'Automotive Seating', 'Shoe Soles']
      }
    ]
  },

  // SPECIALTY CHEMICALS (16 Categories)
  {
    slug: 'acrylate',
    name: 'Acrylate',
    category: 'specialty',
    heroSubtitle: 'Monomers, Methacrylates & Engineering Resins',
    description: 'Essential acrylic monomers utilized in emulsion polymerization for pressure sensitive adhesives, latex paints, and acrylic sheets.',
    bannerImage: '/xelassets/xelgs/banner-4.png',
    products: [
      {
        id: '2-eha',
        name: '2-Ethylhexyl Acrylate (2-EHA)',
        casNo: '103-11-7',
        category: 'specialty',
        subcategory: 'Acrylate',
        packingType: 'Drum, Iso Tank',
        description: 'Monomer used for pressure-sensitive adhesives, outdoor architectural coatings, and leather softeners.',
        applications: ['Adhesives & Tapes', 'Architectural Paint', 'Textile Coating'],
        popular: true
      },
      {
        id: 'butyl-acrylate',
        name: 'Butyl Acrylate',
        casNo: '141-32-2',
        category: 'specialty',
        subcategory: 'Acrylate',
        packingType: 'Drum, Iso Tank',
        description: 'Key monomer for producing acrylic latex paint, sealants, caulks, and paper coatings.',
        applications: ['Emulsion Polymers', 'Paper Coatings', 'Leather Finishing']
      },
      {
        id: 'methyl-acrylate',
        name: 'Methyl Acrylate',
        casNo: '96-33-3',
        category: 'specialty',
        subcategory: 'Acrylate',
        packingType: 'Drum, Iso Tank',
        description: 'Volatile acrylic monomer for acrylic fiber synthesis and thermoplastic modifiers.',
        applications: ['Acrylic Fibers', 'Polish Resins', 'Adhesives']
      },
      {
        id: 'methacrylic-acid',
        name: 'Methacrylic Acid (MAA)',
        casNo: '79-41-4',
        category: 'specialty',
        subcategory: 'Acrylate',
        packingType: 'Drum',
        description: 'Carboxylic monomer for superabsorbent polymers, carboxylated latices, and adhesives.',
        applications: ['Superabsorbent Polymers', 'Specialty Resins']
      },
      {
        id: 'pmma',
        name: 'Polymethyl Methacrylate (PMMA)',
        casNo: '9011-14-7',
        category: 'specialty',
        subcategory: 'Acrylate',
        packingType: 'Bag',
        description: 'Transparent engineering thermoplastic alternative to glass.',
        applications: ['Optical Lenses', 'Glazing', 'Automotive Lights']
      }
    ]
  },
  {
    slug: 'glycols',
    name: 'Glycols',
    category: 'specialty',
    heroSubtitle: 'Mono, Di & Tri Ethylene Glycols',
    description: 'High purity glycol solvents used in PET resin synthesis, industrial antifreezes, heat transfer fluids, and gas dehydration.',
    bannerImage: '/xelassets/xelgs/banner-2.png',
    products: [
      {
        id: 'meg',
        name: 'Monoethylene Glycol (MEG)',
        casNo: '107-21-1',
        category: 'specialty',
        subcategory: 'Glycols',
        packingType: 'Drum, Iso Tank, Flexitank',
        description: 'Vital chemical intermediate for polyester fiber, PET bottle resin, and automotive coolant.',
        applications: ['PET Resin', 'Polyester Fiber', 'Antifreeze Coolant']
      },
      {
        id: 'deg',
        name: 'Diethylene Glycol (DEG)',
        casNo: '111-46-6',
        category: 'specialty',
        subcategory: 'Glycols',
        packingType: 'Drum, Iso Tank',
        description: 'Solvent for unsaturated polyester resins, plasticizers, and natural gas dehydration.',
        applications: ['Unsaturated Polyester Resins', 'Gas Drying', 'Printing Inks']
      }
    ]
  },
  {
    slug: 'glycols-ether',
    name: 'Glycols (Ether)',
    category: 'specialty',
    heroSubtitle: 'Butyl Glycol & Ethoxy Glycol Solvents',
    description: 'Versatile glycol ether solvents combining alcohol and ether functionality for paints, cleaners, and electronic chemicals.',
    bannerImage: '/xelassets/xelgs/banner-3.png',
    products: [
      {
        id: 'ethylene-glycol-monobutyl-ether',
        name: 'Butyl Glycol (BG / Ethylene Glycol Monobutyl Ether)',
        casNo: '111-76-2',
        category: 'specialty',
        subcategory: 'Glycols (Ether)',
        packingType: 'Drum, Iso Tank',
        description: 'Coalescing solvent for waterborne coatings, printing inks, and industrial surface degreasers.',
        applications: ['Waterborne Paints', 'Metal Degreasers', 'Household Cleaners']
      }
    ]
  },
  {
    slug: 'plasticizer',
    name: 'Plasticizer',
    category: 'specialty',
    heroSubtitle: 'DOP, DINP & Eco-friendly Ester Modifiers',
    description: 'Phthalate and non-phthalate plasticizers providing flexibility, elongation, and workability to PVC and polymer compounds.',
    bannerImage: '/xelassets/xelgs/banner-1.png',
    products: [
      {
        id: 'dop',
        name: 'Dioctyl Phthalate (DOP / DEHP)',
        casNo: '117-81-7',
        category: 'specialty',
        subcategory: 'Plasticizer',
        packingType: 'Drum, Iso Tank, Flexitank',
        description: 'General purpose primary plasticizer for PVC cables, flooring, synthetic leather, and hoses.',
        applications: ['PVC Cable Compounds', 'Artificial Leather', 'Hoses & Pipes']
      },
      {
        id: 'dotp',
        name: 'Dioctyl Terephthalate (DOTP - Non-Phthalate)',
        casNo: '6422-86-2',
        category: 'specialty',
        subcategory: 'Plasticizer',
        packingType: 'Drum, Flexitank',
        description: 'Eco-friendly non-phthalate plasticizer compliant with REACH and food contact regulations.',
        applications: ['Medical PVC Tubing', 'Toys & Food Packaging', 'Flooring']
      }
    ]
  },
  {
    slug: 'solvents',
    name: 'Solvents',
    category: 'specialty',
    heroSubtitle: 'High Purity Aromatic & Aliphatic Solvents',
    description: 'Industrial grade hydrocarbon, alcohol, ketone, and ester solvents for extraction, cleaning, and chemical synthesis.',
    bannerImage: '/xelassets/xelgs/banner-5.png',
    products: [
      {
        id: 'ipa',
        name: 'Isopropanol (Isopropyl Alcohol - IPA 99.9%)',
        casNo: '67-63-0',
        category: 'specialty',
        subcategory: 'Solvents',
        packingType: 'Drum, Iso Tank',
        description: 'High purity solvent and disinfectant for pharmaceuticals, electronics, and sanitizers.',
        applications: ['Hand Sanitizers', 'Pharmaceutical Extraction', 'Electronic Cleaning']
      },
      {
        id: 'cyclohexanone',
        name: 'Cyclohexanone (99.8%)',
        casNo: '108-94-1',
        category: 'specialty',
        subcategory: 'Solvents',
        packingType: 'Drum, Iso Tank',
        description: 'Organic solvent used in Caprolactam and Nylon 6 manufacture, as well as PVC adhesives.',
        applications: ['Nylon Raw Material', 'Pesticide Formulations', 'PVC Cement']
      }
    ]
  },
  {
    slug: 'other-speciality-items',
    name: 'Other Speciality Items',
    category: 'specialty',
    heroSubtitle: 'Custom Fine Chemicals & Performance Additives',
    description: 'Specialized chemical additives including silane coupling agents, UV stabilizers, and custom synthesized organic compounds.',
    bannerImage: '/xelassets/xelgs/banner-2.png',
    products: [
      {
        id: 'silane-coupling-agent',
        name: 'Silane Coupling Agent (KH-550 / Gamma-APTES)',
        casNo: '919-30-2',
        category: 'specialty',
        subcategory: 'Other Speciality Items',
        packingType: '200kg Drums',
        description: 'Amino-functional silane improving adhesion between inorganic substrates and organic polymers.',
        applications: ['Glass Fiber Reinforcement', 'Foundry Resins', 'Sealants']
      }
    ]
  },
  {
    slug: 'phosphorous-derivatives',
    name: 'Phosphorous Derivatives',
    category: 'specialty',
    heroSubtitle: 'Phosphorus Trichloride, Oxychloride & Acid Solvents',
    description: 'High reactivity phosphorus intermediates for flame retardants, plasticizers, pharmaceuticals, and agrochemicals.',
    bannerImage: '/xelassets/xelgs/banner-3.png',
    products: [
      {
        id: 'phosphorus-trichloride',
        name: 'Phosphorus Trichloride (PCl3)',
        casNo: '7719-12-2',
        category: 'specialty',
        subcategory: 'Phosphorous Derivatives',
        packingType: 'Iso Tank, Drums',
        description: 'Key chemical intermediate for phosphites, organophosphorus pesticides, and water treatment agents.',
        applications: ['Agrochemical Synthesis', 'Pharmaceutical Intermediates']
      }
    ]
  },
  {
    slug: 'phosphites-derivatives',
    name: 'Phosphites Derivatives',
    category: 'specialty',
    heroSubtitle: 'Triphenyl Phosphite & Antioxidant Additives',
    description: 'Organophosphite secondary antioxidants and color stabilizers for polyolefins, PVC, and synthetic rubbers.',
    bannerImage: '/xelassets/xelgs/banner-4.png',
    products: [
      {
        id: 'triphenyl-phosphite',
        name: 'Triphenyl Phosphite (TPP)',
        casNo: '101-02-0',
        category: 'specialty',
        subcategory: 'Phosphites Derivatives',
        packingType: '200kg Drums',
        description: 'Secondary antioxidant and heat stabilizer for PVC, alkyd resins, and epoxy formulations.',
        applications: ['Polymer Heat Stabilizer', 'Alkyd Resin Modifier']
      }
    ]
  },
  {
    slug: 'phosphate-esters-transesters',
    name: 'Phosphate Esters & Transesters',
    category: 'specialty',
    heroSubtitle: 'Triethyl Phosphate & Flame Retardant Esters',
    description: 'Halogenated and non-halogenated phosphate esters serving as fire retardants and hydraulic fluids.',
    bannerImage: '/xelassets/xelgs/banner-1.png',
    products: [
      {
        id: 'triethyl-phosphate',
        name: 'Triethyl Phosphate (TEP)',
        casNo: '78-40-0',
        category: 'specialty',
        subcategory: 'Phosphate Esters & Transesters',
        packingType: 'Drum, Iso Tank',
        description: 'High-efficiency flame retardant additive, solvent, and ethylating reagent.',
        applications: ['PU Rigid Foam Flame Retardant', 'Organic Synthesis']
      }
    ]
  },
  {
    slug: 'bitterants',
    name: 'Bitterants',
    category: 'specialty',
    heroSubtitle: 'Denatonium Benzoate & Aversive Additives',
    description: 'Ultra-bitter chemical compounds used as aversive agents to prevent accidental ingestion of household toxins.',
    bannerImage: '/xelassets/xelgs/banner-5.png',
    products: [
      {
        id: 'denatonium-benzoate',
        name: 'Denatonium Benzoate (Bitrex)',
        casNo: '3734-33-6',
        category: 'specialty',
        subcategory: 'Bitterants',
        packingType: '1kg / 25kg Drums',
        description: 'The bitterest chemical compound known, added to ethanol, antifreeze, and detergents to prevent poisoning.',
        applications: ['Denatured Alcohol', 'Antifreeze Aversive', 'Child Safety Detergents']
      }
    ]
  },
  {
    slug: 'phosgene-derivatives',
    name: 'Phosgene Derivatives',
    category: 'specialty',
    heroSubtitle: 'Chloroformates & Carbonate Intermediates',
    description: 'Chiral and aliphatic chloroformates for pharmaceutical API synthesis, polycarbonate resins, and carbamates.',
    bannerImage: '/xelassets/xelgs/banner-2.png',
    products: [
      {
        id: 'methyl-chloroformate',
        name: 'Methyl Chloroformate',
        casNo: '79-22-1',
        category: 'specialty',
        subcategory: 'Phosgene Derivatives',
        packingType: 'Specialized Drum, Iso Tank',
        description: 'Key organic reagent for carbamate pesticide and pharmaceutical synthesis.',
        applications: ['Agrochemical Synthesis', 'Pharmaceutical APIs']
      }
    ]
  },
  {
    slug: 'agrochemicals-intermediate',
    name: 'Agrochemicals Intermediate',
    category: 'specialty',
    heroSubtitle: 'Pesticide, Fungicide & Herbicide Building Blocks',
    description: 'Intermediates used in synthesizing organophosphate, carbamate, and triazole crop protection products.',
    bannerImage: '/xelassets/xelgs/banner-3.png',
    products: [
      {
        id: '2-4-dichlorophenol',
        name: '2,4-Dichlorophenol (2,4-DCP)',
        casNo: '120-83-2',
        category: 'specialty',
        subcategory: 'Agrochemicals Intermediate',
        packingType: 'Drum, Iso Tank',
        description: 'Crucial intermediate for 2,4-D herbicide production.',
        applications: ['Selective Herbicide Synthesis', 'Disinfectants']
      }
    ]
  },
  {
    slug: 'biocides',
    name: 'Biocides',
    category: 'specialty',
    heroSubtitle: 'Isothiazolinone & Water Treatment Antimicrobials',
    description: 'Broad-spectrum antimicrobials preventing bacterial, fungal, and algal growth in cooling towers, paints, and paper mills.',
    bannerImage: '/xelassets/xelgs/banner-4.png',
    products: [
      {
        id: 'cmit-mit',
        name: 'Isothiazolinone (CMIT / MIT 14%)',
        casNo: '26172-55-4',
        category: 'specialty',
        subcategory: 'Biocides',
        packingType: '250kg Drum, IBC Tank',
        description: 'Broad-spectrum microbicide for industrial water cooling, metalworking fluids, and latex preservation.',
        applications: ['Cooling Tower Water Treatment', 'In-can Paint Preservative']
      }
    ]
  },
  {
    slug: 'organic-chemicals',
    name: 'Organic Chemicals',
    category: 'specialty',
    heroSubtitle: 'Base Organic Building Blocks & Fine Reagents',
    description: 'Fundamental aliphatic, aromatic, and heterocyclic organic intermediates for fine chemical synthesis.',
    bannerImage: '/xelassets/xelgs/banner-1.png',
    products: [
      {
        id: 'maleic-anhydride',
        name: 'Maleic Anhydride (MA Briquettes)',
        casNo: '108-31-6',
        category: 'specialty',
        subcategory: 'Organic Chemicals',
        packingType: '25kg Bags',
        description: 'Organic compound for unsaturated polyester resins, alkyd resins, and lubricating oil additives.',
        applications: ['Unsaturated Polyester Resins', 'Agricultural Chemicals']
      }
    ]
  },
  {
    slug: 'xanthate-chemicals',
    name: 'Xanthate Chemicals',
    category: 'specialty',
    heroSubtitle: 'Potassium & Sodium Xanthate Collectors',
    description: 'Highly effective sulfide ore collectors used in base metal flotation circuits worldwide.',
    bannerImage: '/xelassets/xelgs/banner-5.png',
    products: [
      {
        id: 'pibx',
        name: 'Potassium Isobutyl Xanthate (PIBX 90%)',
        casNo: '13001-46-2',
        category: 'specialty',
        subcategory: 'Xanthate Chemicals',
        packingType: '850kg Wooden Boxes, Drums',
        description: 'Strong collector for flotation of copper, lead, zinc, and nickel sulfide minerals.',
        applications: ['Sulfide Mineral Flotation', 'Mining Ore Beneficiation']
      }
    ]
  },
  {
    slug: 'fertilizers-chemicals',
    name: 'Fertilizers Chemicals',
    category: 'specialty',
    heroSubtitle: 'Calcium Nitrate, MAP & Soluble Plant Nutrients',
    description: 'High-solubility agricultural fertilizers providing essential N, P, K, and Ca nutrients for fertigation and hydroponics.',
    bannerImage: '/xelassets/xelgs/banner-2.png',
    products: [
      {
        id: 'calcium-nitrate-agri',
        name: 'Calcium Nitrate',
        casNo: '10124-37-5',
        category: 'specialty',
        subcategory: 'Fertilizers Chemicals',
        packingType: '25kg Bags',
        description: 'Fully water-soluble fertilizer delivering instant calcium and nitrate nitrogen.',
        applications: ['Drip Fertigation', 'Hydroponics', 'Foliar Spray']
      },
      {
        id: 'map-agri',
        name: 'Mono Ammonium Phosphate (MAP 12-61-0)',
        casNo: '7722-76-1',
        category: 'specialty',
        subcategory: 'Fertilizers Chemicals',
        packingType: '25kg Bags',
        description: 'Concentrated soluble phosphate fertilizer for root establishment.',
        applications: ['Irrigation Systems', 'Soluble Fertilizer Blends']
      }
    ]
  },
  {
    slug: 'pharma-and-intermediates',
    name: 'Pharma & Intermediates',
    category: 'specialty',
    heroSubtitle: 'API Building Blocks & High-Purity Synthesis Reagents',
    description: 'GMP-compliant and high-purity chemical intermediates for active pharmaceutical ingredient (API) manufacturing.',
    bannerImage: '/xelassets/xelgs/banner-3.png',
    products: [
      {
        id: 'para-amino-phenol',
        name: 'Para Amino Phenol (PAP)',
        casNo: '123-30-8',
        category: 'specialty',
        subcategory: 'Pharma & Intermediates',
        packingType: '25kg Bags / Drums',
        description: 'Primary intermediate for Paracetamol / Acetaminophen active pharmaceutical synthesis.',
        applications: ['Paracetamol Synthesis', 'Hair Dyes']
      }
    ]
  },

  // FOOD PRODUCTS (1 Category)
  {
    slug: 'food-products',
    name: 'Food Products',
    category: 'food',
    heroSubtitle: 'Indian Basmati Rice, Spices, Teas & Edible Oils',
    description: 'Fast-moving consumer packaged food products manufactured under international quality standards.',
    bannerImage: '/xelassets/xelgs/banner-5.png',
    products: [
      {
        id: 'basmati-rice',
        image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=600&h=400',
        name: 'Premium Basmati Rice',
        category: 'food',
        subcategory: 'Grains & Rice',
        packingType: '5kg, 10kg, 25kg, 50kg Bags',
        description: 'Aromatic, long-grain aged Basmati rice harvested from Himalayan foothills.',
        applications: ['Retail Exports', 'HORECA Sector', 'Institutional Supply'],
        popular: true
      },
      {
        id: 'non-basmati-rice',
        image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=600&h=400',
        name: 'Non-Basmati Rice (IR64 / Parboiled)',
        category: 'food',
        subcategory: 'Grains & Rice',
        packingType: '25kg, 50kg PP Bags',
        description: 'High nutrition non-basmati rice varieties processed for global grain distribution.',
        applications: ['Bulk Food Exports', 'Commercial Catering']
      },
      {
        id: 'tea',
        image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=600&h=400',
        name: 'Assam & Darjeeling Indian Teas',
        category: 'food',
        subcategory: 'Beverages',
        packingType: 'Tin, Pouch, Paper Box',
        description: 'Pure Orthodox and CTC teas harvested from top Indian gardens.',
        applications: ['Retail Tea Brands', 'Hot Beverages']
      },
      {
        id: 'spices',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600&h=400',
        name: 'Whole & Ground Indian Spices',
        category: 'food',
        subcategory: 'Spices',
        packingType: 'Pouches, Jars, Tin Cans',
        description: 'Steam-sterilized aromatic Indian spices preserving natural essential oils.',
        applications: ['Seasonings', 'Retail Spice Jars']
      }
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = ALL_CATEGORIES_DATA.flatMap(c => c.products);
