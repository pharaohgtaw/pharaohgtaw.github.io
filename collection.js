// PHARAOH JEWELRY COLLECTION
// Easy-to-edit collection data - modify categories and products here

const collection = {
  // ============================================
  // PAYMENT INFO
  // ============================================
  routingNumber: "1234567890",
  
  // ============================================
  // CATEGORIES
  // ============================================
  // Add or remove categories as needed
  // Each category needs: id (number), name (string)
  
  categories: [
    { id: 1, name: "Bags" },
    { id: 2, name: "Belts" },
    { id: 3, name: "Bracelets" },
    { id: 4, name: "Chains" },
    { id: 5, name: "Custom Pieces" },
    { id: 6, name: "Earrings" },
    { id: 7, name: "Glasses" },
    { id: 8, name: "Grills" },
    { id: 9, name: "Necklaces" },
    { id: 10, name: "Rings" },
    { id: 11, name: "Watches" },
    { id: 12, name: "Perfumes" }
  ],

  // ============================================
  // PRODUCTS
  // ============================================
  // Each product needs:
  // - id: unique number
  // - name: product name
  // - price: regular price
  // - discountPrice: sale price (optional - remove if no discount)
  // - gender: "male", "female", or "unisex"
  // - categoryId: must match a category id above
  // - colors: object with color names and their image URLs
  
  products: [
    {
      id: 1,
      name: "PHARAOH™| Intrecciato Leather Wristlet Bag",
      price: 7000,
      gender: "male",
      categoryId: 1,
      colors: {
        brownish: "https://i.imgur.com/Dv1lZEc.png"
      }
    },
    {
      id: 2,
      name: "PHARAOH™| Pine Green Braided Calfskin Zipper Chest - Waist Bag",
      price: 7000,
      gender: "male",
      categoryId: 1,
      colors: {
        green: "https://i.imgur.com/AhqhSq5.png"
      }
    },
    {
      id: 3,
      name: "PHARAOH™| Gucci - GG Shoulder Bag With Leather Details",
      price: 15000,
      gender: "male",
      categoryId: 1,
      colors: {
        brownish: "https://i.imgur.com/X1zM7pZ.png"
      }
    },
    {
      id: 4,
      name: "PHARAOH™| Black leather shoulder bag w/hand-stitched seams&gold lettering",
      price: 10000,
      gender: "male",
      categoryId: 1,
      colors: {
        black: "https://i.imgur.com/CMTXDS9.png"
      }
    },
    {
      id: 5,
      name: "PHARAOH™| Black leather shoulder bag V2 w/hand-stitched seams&black lettering",
      price: 10000,
      gender: "male",
      categoryId: 1,
      colors: {
        black: "https://i.imgur.com/Ij6quSl.png"
      }
    },
    {
      id: 6,
      name: "PHARAOH™| Intrecciato Leather Wristlet Clutch Bag",
      price: 8500,
      gender: "male",
      categoryId: 1,
      colors: {
        black: "https://i.imgur.com/6qlI768.png"
      }
    },
    {
      id: 7,
      name: "PHARAOH™| Studds Handbag",
      price: 7000,
      gender: "female",
      categoryId: 1,
      colors: {
        black: "https://i.imgur.com/SePIEYX.png"
      }
    },
    {
      id: 8,
      name: "PHARAOH™| Lacing Bag Handbag",
      price: 7000,
      gender: "female",
      categoryId: 1,
      colors: {
        black: "https://i.imgur.com/Yq6sqP0.png"
      }
    },
    {
      id: 9,
      name: "PHARAOH™| Moloch Pentagram Backpack black",
      price: 7000,
      gender: "female",
      categoryId: 1,
      colors: {
        black: "https://i.imgur.com/CMtH1Rb.png"
      }
    },
    {
      id: 10,
      name: "PHARAOH™| Maplesage Handbag red-black",
      price: 10000,
      gender: "female",
      categoryId: 1,
      colors: {
        black: "https://i.imgur.com/veGZGKG.png"
      }
    },
    {
      id: 11,
      name: "PHARAOH™| Warren Plaid Handbag black-red",
      price: 10000,
      gender: "female",
      categoryId: 1,
      colors: {
        black: "https://i.imgur.com/b89WkOR.png"
      }
    },
    {
      id: 12,
      name: "PHARAOH™| Toiletry Bag multicolour",
      price: 7000,
      gender: "female",
      categoryId: 1,
      colors: {
        white: "https://i.imgur.com/Ismbn5j.png"
      }
    },
    {
      id: 13,
      name: "PHARAOH™| Hermès - Metallic Birkin 25",
      price: 15500,
      gender: "female",
      categoryId: 1,
      colors: {
        gold: "https://i.imgur.com/DQzYHLa.png"
      }
    },
    {
      id: 14,
      name: "PHARAOH™| Chanel - Diamond Forever Diamond Forever | 334 diamonds, 18K white gold strap",
      price: 261,
      gender: "female",
      categoryId: 1,
      colors: {
        white: "https://i.imgur.com/seIiGer.png"
      }
    },
    {
      id: 15,
      name: "PHARAOH™| Hermès - Fabourg Birkin",
      price: 300000,
      gender: "female",
      categoryId: 1,
      colors: {
        white: "https://i.imgur.com/vW9tlt0.png"
      }
    },
    {
      id: 16,
      name: "PHARAOH™| Herbag Zip Cabine Shoulder Bag",
      price: 5000,
      gender: "female",
      categoryId: 1,
      colors: {
        brownish: "https://i.imgur.com/8AqZlUL.png"
      }
    }
  ]
};

// Available color names and their hex codes
// Add new colors here if needed
const colorHex = {
  white: '#ffffff',
  gold: '#ffd700',
  silver: '#c0c0c0',
  bronze: '#cd7f32',
  blue: '#0f52ba',
  pink: '#ffc0cb',
  black: '#000000',
  green: '#50c878',
  rose: '#ff66cc',
  platinum: '#e5e4e2',
  brownish: '#35301c'
};
