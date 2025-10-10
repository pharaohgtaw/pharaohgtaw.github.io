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
  // Each category needs: id (number), name (string), color (optional hex)
  
  categories: [
    { id: 1, name: "Bags", color: "#1a1a1a" },
    { id: 2, name: "Belts", color: "#1a1a1a" },
    { id: 3, name: "Bracelets", color: "#1a1a1a" },
    { id: 4, name: "Chains", color: "#1a1a1a" },
    { id: 5, name: "Custom Pieces", color: "#1a1a1a" },
    { id: 6, name: "Earrings", color: "#1a1a1a" },
    { id: 7, name: "Glasses", color: "#1a1a1a" },
    { id: 8, name: "Grills", color: "#1a1a1a" },
    { id: 9, name: "Necklaces", color: "#1a1a1a" },
    { id: 10, name: "Rings", color: "#1a1a1a" },
    { id: 11, name: "Watches", color: "#1a1a1a" },
    { id: 12, name: "Perfumes", color: "#1a1a1a" }
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
    },
    {
      id: 17,
      name: "PHARAOH™| BB Simon Belts - Kiara from Heart Sign Collection",
      price: 5000,
      gender: "female",
      categoryId: 2,
      colors: {
        platinum: "https://i.imgur.com/UKIdnuX.png"
      }
    },
    {
      id: 18,
      name: "PHARAOH™| BB Simon Belts - Nyoka from Heart Sign Collection",
      price: 5000,
      gender: "female",
      categoryId: 2,
      colors: {
        red: "https://i.imgur.com/qBxF9y8.png"
      }
    },
    {
      id: 19,
      name: "PHARAOH™| BB Simon Belts - Classic Western Black/Volcano",
      price: 5000,
      gender: "female",
      categoryId: 2,
      colors: {
        black: "https://i.imgur.com/lFnVRp3.png"
      }
    },
    {
      id: 20,
      name: "PHARAOH™| BB Simon Belts - Trojan Classic-Coiled Serpent/Black Chrome",
      price: 5000,
      gender: "female",
      categoryId: 2,
      colors: {
        platinum: "https://i.imgur.com/JfWyJnG.png"
      }
    },
    {
      id: 21,
      name: "PHARAOH™| BB Simon Belts - Jack The Skeleton ",
      price: 5000,
      gender: "unisex",
      categoryId: 2,
      colors: {
        black: "https://i.imgur.com/nx6OkL1.png"
      }
    },
    {
      id: 22,
      name: "PHARAOH™| BB Simon Belts - Sally from the Custom Collection",
      price: 5000,
      gender: "unisex",
      categoryId: 2,
      colors: {
        black: "https://i.imgur.com/isxyDxo.png"
      }
    },
    {
      id: 23,
      name: "PHARAOH™| BB Simon Belts - The Trojan Gengar",
      price: 5000,
      gender: "unisex",
      categoryId: 2,
      colors: {
        black: "https://i.imgur.com/BBrNzom.png"
      }
    },
    {
      id: 24,
      name: "PHARAOH™| BB Simon Belts - Trojan Toxic",
      price: 5000,
      gender: "unisex",
      categoryId: 2,
      colors: {
        black: "https://i.imgur.com/n4HfbIf.png"
      }
    },
    {
      id: 26,
      name: "PHARAOH™| Hermes - Etriviere",
      price: 5000,
      gender: "female",
      categoryId: 2,
      colors: {
        brownish: "https://i.imgur.com/Q8CVtCC.png"
      }
    },
    {
      id: 27,
      name: "PHARAOH™| Cartier - Crocodile Leather and Palladium",
      price: 5000,
      gender: "male",
      categoryId: 2,
      colors: {
        black: "https://i.imgur.com/IxMF4fg.png"
      }
    },
    {
      id: 28,
      name: "PHARAOH™| 14K Gold 9.2mm Classic Miami Cuban",
      price: 9000,
      gender: "male",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/nMVC3Il.png"
      }
    },
    {
      id: 29,
      name: "PHARAOH™| 18K White Gold La Gourmette Toggle Bracelet",
      price: 9000,
      gender: "male",
      categoryId: 3,
      colors: {
        white: "https://i.imgur.com/J5HVNF0.png"
      }
    },
    {
      id: 30,
      name: "PHARAOH™| 18k 12mm Solid Cuban Bracelet 8.5” w/VVS Diamonds",
      price: 25000,
      gender: "male",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/gKjtTAe.png"
      }
    },
    {
      id: 31,
      name: "PHARAOH™| 18k Triple Row Double Franco Bracelet",
      price: 10000,
      gender: "male",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/KqkeRYO.png"
      }
    },
    {
      id: 32,
      name: "PHARAOH™| 18K Diamond Miami Cuban Bracelet w/6.10ctw",
      price: 23000,
      gender: "male",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/IhYT00G.png"
      }
    },
    {
      id: 33,
      name: "PHARAOH™| Stainless Steel Gold & Silver Link CZ Bracelet",
      price: 5000,
      gender: "male",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/ZCMUVzo.png"
      }
    },
    {
      id: 34,
      name: "PHARAOH™| Stainless Steel Gold and Black Textured Link Bracelet",
      price: 8000,
      gender: "male",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/ynm5att.png"
      }
    },
    {
      id: 35,
      name: "PHARAOH™| Classic Watch Links Stainless Steel Two-Tone Gold Plated Bracelet",
      price: 7000,
      gender: "male",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/1vrsmdo.png"
      }
    },
    {
      id: 36,
      name: "PHARAOH™|  Viper Full Pavé Diamond Bracelet",
      price: 15000,
      gender: "female",
      categoryId: 3,
      colors: {
        white: "https://i.imgur.com/EUlVqhJ.png"
      }
    },
    {
      id: 37,
      name: "PHARAOH™|  Viper 18k Rose Gold Bracelet",
      price: 7000,
      gender: "female",
      categoryId: 3,
      colors: {
        rose: "https://i.imgur.com/KTwQHcV.png"
      }
    },
    {
      id: 38,
      name: "PHARAOH™|  3-Piece Gold, Silver & Rose Gold Chain Bracelet Set",
      price: 7000,
      gender: "female",
      categoryId: 3,
      colors: {
        rose: "https://i.imgur.com/7xocgwn.png",
        silver: "https://i.imgur.com/7xocgwn.png",
        gold: "https://i.imgur.com/7xocgwn.png"
      }
    },
    {
      id: 39,
      name: "PHARAOH™| 18k Love Tennis Bracelet",
      price: 7000,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/wr2HXLu.png"
      }
    },
    {
      id: 40,
      name: "PHARAOH™| 18K 1.00ct Diamond Bracelet",
      price: 8500,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/dvqG0oo.png"
      }
    },
    {
      id: 41,
      name: "PHARAOH™| 14K 2.00CT Diamond Tennis Bracelet",
      price: 10000,
      gender: "female",
      categoryId: 3,
      colors: {
        white: "https://i.imgur.com/m1sTPsY.png"
      }
    },
    {
      id: 42,
      name: "PHARAOH™| Round Halo White & Emerald Linked Bracelet",
      price: 18000,
      gender: "female",
      categoryId: 3,
      colors: {
        green: "https://i.imgur.com/KAVPnQa.png"
      }
    },
    {
      id: 43,
      name: "PHARAOH™| 18k Rose Gold 6mm Prong-Set Round CZ Tennis Bracelet",
      price: 10000,
      gender: "female",
      categoryId: 3,
      colors: {
        rose: "https://i.imgur.com/Pj9Ake2.png"
      }
    },
    {
      id: 44,
      name: "PHARAOH™| 18k White Gold Medium Popcorn Horsebit Diamond Bracelet 7.25",
      price: 10000,
      gender: "female",
      categoryId: 3,
      colors: {
        white: "https://i.imgur.com/u4KPEmW.png"
      }
    },
    {
      id: 45,
      name: "PHARAOH™| 18K Baguette Diamond Square Cluster 8'' w/8.50ctw",
      price: 24000,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/hSZOgPv.png"
      }
    },
    {
      id: 46,
      name: "PHARAOH™| 14K Baguette&Round cut Diamond Baller Medium Bangle w/8.15ctw",
      price: 15000,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/MoK9wrh.png"
      }
    },
    {
      id: 47,
      name: "PHARAOH™| 10mm Miami Cuban Link Bracelet, Black Plated ",
      price: 8000,
      gender: "female",
      categoryId: 3,
      colors: {
        black: "https://i.imgur.com/YTWCc88.png"
      }
    },
    {
      id: 48,
      name: "PHARAOH™| 14K Gold Teddy Bear Bracelet",
      price: 8000,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/802HCGM.png"
      }
    },
    {
      id: 49,
      name: "PHARAOH™| 18K Round Halo Linked Bracelet w/VVS Diamonds",
      price: 30000,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/lL2y63M.png"
      }
    },
    {
      id: 50,
      name: "PHARAOH™| 14k Yellow Gold Bangle Bracelet Collection",
      price: 10000,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/LoX1ZuT.png"
      }
    },
    {
      id: 51,
      name: "PHARAOH™| 18k Yellow Gold Perlée Sweet Clovers Diamond Bracelet",
      price: 14000,
      gender: "female",
      categoryId: 3,
      colors: {
        pink: "https://i.imgur.com/lVVswBF.png"
      }
    },
    {
      id: 52,
      name: "PHARAOH™| 18K Yellow Gold Bouton Dor Bracelet w/ Chrysoprase, Diamond, Onyx",
      price: 17000,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/JMPHVuD.png"
      }
    },
    {
      id: 53,
      name: "PHARAOH™| 18k Yellow Gold Vintage Agate Alhambra Bracelet",
      price: 8000,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/ikQPLaS.png"
      }
    },
    {
      id: 54,
      name: "PHARAOH™| 18k Yellow Gold Perlée Couleurs Diamond Bracelet",
      price: 23500,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/DqNM8U1.png"
      }
    },
    {
      id: 55,
      name: "PHARAOH™| 18k Rose Gold Perlée Couleurs Diamond Bracelet",
      price: 23500,
      gender: "female",
      categoryId: 3,
      colors: {
        rose: "https://i.imgur.com/Yc3N1j3.png"
      }
    },
    {
      id: 56,
      name: "PHARAOH™| 18k White Gold Perlée Diamond Bracelet",
      price: 26000,
      gender: "female",
      categoryId: 3,
      colors: {
        white: "https://i.imgur.com/313S7sS.png"
      }
    },
    {
      id: 57,
      name: "PHARAOH™| 18K Yellow Gold Lucky Alhambra bracelet w/4 motifs",
      price: 7500,
      gender: "female",
      categoryId: 3,
      colors: {
        gold: "https://i.imgur.com/s8PQ4QL.png"
      }
    },
    {
      id: 58,
      name: "PHARAOH™| Gucci - Republica Fashion w/30ct of Diamonds&30ct of Gold",
      price: 249000,
      gender: "unisex",
      categoryId: 2,
      colors: {
        platinum: "https://i.imgur.com/9F9nE1t.png"
      }
    },
    {
      id: 59,
      name: "PHARAOH™| Sitting Buddha Pendant - High-Grade 316L Stainless Steel",
      price: 8000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        silver: "https://i.imgur.com/aucgpLd.png"
      }
    },
    {
      id: 60,
      name: "PHARAOH™| 14K Gold High-End Green Jade Buddha Pendent w/Swarovski Crystals",
      price: 8500,
      gender: "unisex",
      categoryId: 4,
      colors: {
        green: "https://i.imgur.com/Y873old.png"
      }
    },
    {
      id: 61,
      name: "PHARAOH™| 14K Gold High-End Black Jade Buddha Pendent w/Swarovski Crystals",
      price: 8500,
      gender: "unisex",
      categoryId: 4,
      colors: {
        black: "https://i.imgur.com/loeGajG.png"
      }
    },
    {
      id: 62,
      name: "PHARAOH™| 14K Gold High-End Brown Jade Buddha Pendent w/S1 Diamonds",
      price: 8500,
      gender: "unisex",
      categoryId: 4,
      colors: {
        brownish: "https://i.imgur.com/dwJl7e5.png"
      }
    },
    {
      id: 63,
      name: "PHARAOH™| 14K Yellow Gold U-Link Design Necklace",
      price: 6000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/1rrWHN1.png"
      }
    },
    {
      id: 64,
      name: "PHARAOH™| 10k Illusion Diamond Tennis Necklace w/3.00ct Diamonds",
      price: 10000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        white: "https://i.imgur.com/9fW827e.png"
      }
    },
    {
      id: 65,
      name: "PHARAOH™| 10KY Diamond Solid Link Miami Cuban Chain w/45.05ct Diamonds",
      price: 35000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/aevtACK.png"
      }
    },
    {
      id: 66,
      name: "PHARAOH™| 10KR+W Diamond 3D Miami Cuban Chain w/42.65ct Diamonds",
      price: 33000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/gbp3nUg.png"
      }
    },
    {
      id: 67,
      name: "PHARAOH™| 14KW 10KY Diamond Baguette Gucci Link w/60.50CTW Diamonds",
      price: 58000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        white: "https://i.imgur.com/m3cwvrp.png"
      }
    },
    {
      id: 68,
      name: "PHARAOH™| 1KG Miami Cuban VS Diamond Chain",
      price: 150000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/TYYvE9z.png"
      }
    },
    {
      id: 69,
      name: "PHARAOH™| 14k White Gold SI2/VS2 Diamond Tennis Chain with Cross Pendant",
      price: 13000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        white: "https://i.imgur.com/tkqUHlI.png"
      }
    },
    {
      id: 70,
      name: "PHARAOH™| 14KR Herbal Medecine Leaf Necklace w/0.15CTW Diamond",
      price: 10000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        rose: "https://i.imgur.com/mG7xzoh.png"
      }
    },
    {
      id: 71,
      name: "PHARAOH™| 14Kw Star Of David Necklace w/0.20CTW Diamond",
      price: 10000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        white: "https://i.imgur.com/5z44iLX.png"
      }
    },
    {
      id: 72,
      name: "PHARAOH™| 14K Gold Tag with Mirror Chain",
      price: 8000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/5gGjb8q.png"
      }
    },
    {
      id: 73,
      name: "PHARAOH™| 18K Gold 11.5mm White Pave Lite Miami Cuban",
      price: 45000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/rXVfx68.png"
      }
    },
    {
      id: 74,
      name: "PHARAOH™| 14K Gold Tube Cross Necklace",
      price: 10000,
      gender: "unisex",
      categoryId: 1,
      colors: {
        gold: "https://i.imgur.com/bMyHrEq.png"
      }
    },
    {
      id: 75,
      name: "PHARAOH™| 14K Tri-color Gold Rosary Inspired Necklace",
      price: 8000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/1KsSOMt.png"
      }
    },
    {
      id: 76,
      name: "PHARAOH™| 14k Yellow Gold 0.50cttw Jesus Head Pendant and 3mm Solid Rope Chain",
      price: 12000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/HPUqazS.png"
      }
    },
    {
      id: 77,
      name: "PHARAOH™| 14k White Gold Link Necklace with Handcuff Lock",
      price: 8000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        white: "https://i.imgur.com/JRXslxu.png"
      }
    },
    {
      id: 78,
      name: "PHARAOH™| 10KY 1.25CTW Diamond 1.25ct Spider Pendant And 24” Rope Chain Bundle",
      price: 15000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/vpWho7B.png"
      }
    },
    {
      id: 79,
      name: "PHARAOH™| 18Kt Yellow Gold  Fleur De Lis Pendant Chain w/0.45ct Diamonds",
      price: 19000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/z6ydu4G.png"
      }
    },
    {
      id: 80,
      name: "PHARAOH™| 18k Yellow Gold 4.56ctw Majestic Prancing Horse Pendant",
      price: 23000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/JYlLp1g.png"
      }
    },
    {
      id: 81,
      name: "PHARAOH™| 18k Yellow Gold 2.65ctw Diamond Mario w/ Guns Pendant",
      price: 15000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/0UTxNDZ.png"
      }
    },
    {
      id: 82,
      name: "PHARAOH™| 14k Yellow Gold Gutta Lyfe Pendant - Large",
      price: 12000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/dukYDe9.png"
      }
    },
    {
      id: 83,
      name: "PHARAOH™| 14k Yellow Gold Skull King With Enamel Detailing",
      price: 12000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/3igroXv.png"
      }
    },
    {
      id: 84,
      name: "PHARAOH™| 14KY+W 1.35CTW Diamond Herbal Hemp Medicine Leaf 3D ",
      price: 8000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/NSGT1yu.png"
      }
    },
    {
      id: 85,
      name: "PHARAOH™| 14k Praying Pendant and Solid Chain Combo",
      price: 17000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/kF9EvJm.png"
      }
    },
    {
      id: 86,
      name: "PHARAOH™| 14K 0.54-0.57CT D-MILLIONAIRE CHARM",
      price: 16000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        platinum: "https://i.imgur.com/CYmtx2t.png"
      }
    },
    {
      id: 87,
      name: "PHARAOH™| 18K White Gold 2.03ct D-NBA-NEVER BROKE AGAIN",
      price: 25000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/CxLMCcO.png"
      }
    },
    {
      id: 88,
      name: "PHARAOH™| 18K Yellow-gold Shqiponja Dykrenare - Necklace",
      price: 10000,
      gender: "unisex",
      categoryId: 4,
      colors: {
        gold: "https://i.imgur.com/zJ7YdHr.png"
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
  brownish: '#35301c',
  red: '#FF0000'
};
