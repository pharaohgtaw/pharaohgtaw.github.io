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
      id: 11,
      name: "Test",
      price: 12222,
      gender: "female",
      categoryId: 1,
      colors: {
        white: "https://i.imgur.com/x5wmcxh.png",
        platinum: "https://picsum.photos/400?random=16"
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
