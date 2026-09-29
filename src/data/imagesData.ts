export interface CategoryMedia {
  sliderImages: string[];
  productImages: { [productId: string]: string };
}

export const CATEGORY_MEDIA: { [categorySlug: string]: CategoryMedia } = {
  'mining-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'activated-carbon': 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=600&q=80',
      'caustic-soda-flakes': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      'mibc': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
      'mibk': 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
      'mek': 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80'
    }
  },
  'pulp-and-paper-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'sodium-chlorate': 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
      'hydrogen-peroxide': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
      'alkenyl-succinic-anhydride': 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80'
    }
  },
  'leather-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'basic-chromium-sulfate': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
      'sodium-formate': 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80'
    }
  },
  'textile-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'sodium-hydrosulfite': 'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=600&q=80',
      'acetic-acid': 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80'
    }
  },
  'personal-care-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608248597260-24422e1b1063?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'sles': 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      'capb': 'https://images.unsplash.com/photo-1608248597260-24422e1b1063?auto=format&fit=crop&w=600&q=80'
    }
  },
  'soaps-and-detergents-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'labsa': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      'sodium-tripolyphosphate': 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?auto=format&fit=crop&w=600&q=80'
    }
  },
  'rubber-and-plastics-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'zinc-oxide': 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=600&q=80',
      'cbs-accelerator': 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80'
    }
  },
  'glass-and-ceramics-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'soda-ash-dense': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
      'zirconium-silicate': 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80'
    }
  },
  'paints-and-solvents-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'titanium-dioxide': 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80',
      'butyl-acetate': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80'
    }
  },
  'food-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'citric-acid-monohydrate': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      'sodium-benzoate': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80'
    }
  },
  'polyurethane-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'polymeric-mdi': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      'polyether-polyol': 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=600&q=80'
    }
  },
  'acrylate': {
    sliderImages: [
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      '2-eha': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
      'butyl-acrylate': 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
      'methyl-acrylate': 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80',
      'methacrylic-acid': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      'pmma': 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80'
    }
  },
  'glycols': {
    sliderImages: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'meg': 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
      'deg': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    }
  },
  'glycols-ether': {
    sliderImages: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'ethylene-glycol-monobutyl-ether': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80'
    }
  },
  'plasticizer': {
    sliderImages: [
      'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'dop': 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=600&q=80',
      'dotp': 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80'
    }
  },
  'solvents': {
    sliderImages: [
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'ipa': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
      'cyclohexanone': 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80'
    }
  },
  'fertilizers-chemicals': {
    sliderImages: [
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'calcium-nitrate-agri': 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
      'map-agri': 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80'
    }
  },
  'food-products': {
    sliderImages: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {
      'basmati-rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
      'non-basmati-rice': 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=600&q=80',
      'tea': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
      'spices': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80'
    }
  }
};

export const EPC_MEDIA: { [branchSlug: string]: CategoryMedia } = {
  'engineering-services': {
    sliderImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {}
  },
  'technology-process-evaluation': {
    sliderImages: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {}
  },
  'technology-know-how': {
    sliderImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {}
  },
  'turnkey-epc-projects': {
    sliderImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {}
  },
  'engineering': {
    sliderImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {}
  },
  'procurement': {
    sliderImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    productImages: {}
  }
};
