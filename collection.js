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
    { id: 1, name: "Rings" },
    { id: 2, name: "Necklaces" },
    { id: 3, name: "Bracelets" },
    { id: 4, name: "Watches" },
    { id: 5, name: "Earrings" },
    { id: 6, name: "New Category" },
    { id: 7, name: "Newest Category" }
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
      name: "Diamond Ring",
      price: 15000,
      discountPrice: 12000,
      gender: "female",
      categoryId: 1,
      colors: {
        white: "https://picsum.photos/400?random=1",
        gold: "https://picsum.photos/400?random=2",
        silver: "https://picsum.photos/400?random=3"
      }
    },
    {
      id: 2,
      name: "Royal Necklace",
      price: 25000,
      gender: "female",
      categoryId: 2,
      colors: {
        gold: "https://picsum.photos/400?random=4",
        silver: "https://picsum.photos/400?random=5",
        bronze: "https://picsum.photos/400?random=6"
      }
    },
    {
      id: 3,
      name: "Gold Watch",
      price: 12000,
      discountPrice: 9500,
      gender: "male",
      categoryId: 4,
      colors: {
        gold: "https://picsum.photos/400?random=7",
        black: "https://picsum.photos/400?random=8",
        silver: "https://picsum.photos/400?random=9"
      }
    },
    {
      id: 4,
      name: "Sapphire Ring",
      price: 18000,
      gender: "female",
      categoryId: 1,
      colors: {
        blue: "https://picsum.photos/400?random=10",
        white: "https://picsum.photos/400?random=11",
        gold: "https://picsum.photos/400?random=12"
      }
    },
    {
      id: 5,
      name: "Pearl Earrings",
      price: 8500,
      gender: "female",
      categoryId: 5,
      colors: {
        white: "https://picsum.photos/400?random=13",
        pink: "https://picsum.photos/400?random=14",
        black: "https://picsum.photos/400?random=15"
      }
    },
    {
      id: 6,
      name: "Emerald Bracelet",
      price: 22000,
      discountPrice: 18500,
      gender: "unisex",
      categoryId: 3,
      colors: {
        green: "https://picsum.photos/400?random=16",
        gold: "https://picsum.photos/400?random=17",
        silver: "https://picsum.photos/400?random=18"
      }
    },
    {
      id: 7,
      name: "Emerald Bracelet 2",
      price: 22000,
      discountPrice: 18500,
      gender: "unisex",
      categoryId: 3,
      colors: {
        green: "https://picsum.photos/400?random=16",
        gold: "https://picsum.photos/400?random=17",
        silver: "https://picsum.photos/400?random=18"
      }
    },
    {
      id: 8,
      name: "Emerald Bracelet 3",
      price: 22000,
      discountPrice: 18500,
      gender: "unisex",
      categoryId: 3,
      colors: {
        green: "https://picsum.photos/400?random=16",
        gold: "https://picsum.photos/400?random=17",
        silver: "https://picsum.photos/400?random=18"
      }
    },
    {
      id: 9,
      name: "Emerald Bracelet 4",
      price: 22000,
      gender: "unisex",
      categoryId: 3,
      colors: {
        green: "https://picsum.photos/400?random=16",
        gold: "https://picsum.photos/400?random=17",
        silver: "https://picsum.photos/400?random=18"
      }
    },
    {
      id: 10,
      name: "Orologio di Errorino",
      price: 10000,
      gender: "male",
      categoryId: 6,
      colors: {
        brownish: "https://media.discordapp.net/attachments/1401610513187733749/1424783874831155291/Orologio.png?ex=68e534e2&is=68e3e362&hm=9d30771a6e3a047bfe8ec783ff5c9d391659e00dd07aaed506dbb6ece6361f69&=&format=webp&quality=lossless",
        white: "https://picsum.photos/400?random=16",
        gold: "https://picsum.photos/400?random=16"
      }
    },
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
    },
    {
      id: 12,
      name: "PHARAOH™ 18K White Gold, Diamond, Sapphire Two Butterfly Between Finger Ring",
      price: 10000,
      discountPrice: 5000,
      gender: "female",
      categoryId: 1,
      colors: {
        white: "https://picsum.photos/400?random=13"
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
