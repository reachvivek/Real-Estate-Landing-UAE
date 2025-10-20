export const mockProperties = [
  {
    id: 1,
    title: "Luxury Penthouse in Dubai Marina",
    address: "Marina Promenade, Dubai Marina, Dubai",
    price: 8500000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 3200,
    type: "sale",
    category: "Apartment",
    status: "available",
    featured: true,
    tags: ["luxury", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
    ],
    amenities: ["Pool", "Gym", "Parking", "Security", "Beach Access"],
    description: "Stunning penthouse with panoramic marina views. Features include Italian marble floors, chef's kitchen, and private terrace overlooking the Dubai skyline.",
    agent: {
      name: "Sarah Al Mansoori",
      phone: "+971 50 123 4567",
      email: "sarah@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    location: { lat: 25.0772, lng: 55.1391 },
    yearBuilt: 2022,
    listedDate: "2025-03-15",
    verified: true,
    nearbyLocations: [
      { name: "Dubai Marina Mall", type: "mall", distance: "5 min walk" },
      { name: "DMCC Metro Station", type: "metro", distance: "8 min walk" },
      { name: "Dubai Marina Beach", type: "beach", distance: "3 min walk" },
      { name: "Spinneys Supermarket", type: "supermarket", distance: "4 min walk" },
      { name: "Marina Medical Centre", type: "hospital", distance: "10 min drive" },
      { name: "Dubai British School", type: "school", distance: "12 min drive" }
    ]
  },
  {
    id: 2,
    title: "Modern Villa in Arabian Ranches",
    address: "Arabian Ranches, Dubai",
    price: 6200000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5500,
    type: "sale",
    category: "House",
    status: "available",
    featured: true,
    tags: ["recently-added"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    amenities: ["Private Pool", "Garden", "Maid's Room", "Golf Course View"],
    description: "Spacious villa with golf course views. Perfect for families seeking luxury living in a gated community.",
    agent: {
      name: "Mohammed Hassan",
      phone: "+971 55 234 5678",
      email: "mohammed@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    location: { lat: 25.0543, lng: 55.2708 },
    yearBuilt: 2020,
    listedDate: "2025-03-12",
    verified: true,
    nearbyLocations: [
      { name: "Arabian Ranches Golf Club", type: "golf", distance: "2 min walk" },
      { name: "Ranches Souk", type: "mall", distance: "5 min drive" },
      { name: "GEMS Dubai American Academy", type: "school", distance: "8 min drive" },
      { name: "Arabian Ranches Medical Center", type: "hospital", distance: "7 min drive" },
      { name: "Carrefour Market", type: "supermarket", distance: "6 min drive" },
      { name: "Motor City", type: "landmark", distance: "10 min drive" }
    ]
  },
  {
    id: 3,
    title: "Studio Apartment in Business Bay",
    address: "Executive Tower, Business Bay, Dubai",
    price: 65000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 550,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: true,
    tags: ["budget", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800"
    ],
    amenities: ["WiFi", "Gym", "Parking", "24/7 Security"],
    description: "Modern studio apartment with city views. Fully furnished and ready to move in. Close to Dubai Mall and Burj Khalifa.",
    agent: {
      name: "Fatima Ahmed",
      phone: "+971 52 345 6789",
      email: "fatima@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    location: { lat: 25.1864, lng: 55.2662 },
    yearBuilt: 2018,
    listedDate: "2025-03-10",
    verified: true,
    nearbyLocations: [
      { name: "Dubai Mall", type: "mall", distance: "5 min drive" },
      { name: "Business Bay Metro Station", type: "metro", distance: "3 min walk" },
      { name: "Burj Khalifa", type: "landmark", distance: "7 min drive" },
      { name: "Carrefour Express", type: "supermarket", distance: "2 min walk" },
      { name: "Mediclinic Parkview Hospital", type: "hospital", distance: "15 min drive" },
      { name: "DIFC", type: "landmark", distance: "5 min drive" }
    ]
  },
  {
    id: 4,
    title: "Beachfront Apartment in JBR",
    address: "Jumeirah Beach Residence, Dubai",
    price: 4800000,
    bedrooms: 2,
    bathrooms: 3,
    sqft: 1800,
    type: "sale",
    category: "Apartment",
    status: "available",
    featured: true,
    tags: ["luxury", "expat-friendly", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
    ],
    amenities: ["Beach Access", "Pool", "Gym", "Concierge", "Parking"],
    description: "Breathtaking sea views from every room. Walking distance to The Beach and Marina Walk. Perfect for expats and investors.",
    agent: {
      name: "Ahmed Al Rashid",
      phone: "+971 56 456 7890",
      email: "ahmed@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    location: { lat: 25.0713, lng: 55.1347 },
    yearBuilt: 2021,
    listedDate: "2025-03-08",
    verified: true,
    nearbyLocations: [
      { name: "The Beach JBR", type: "mall", distance: "2 min walk" },
      { name: "JBR Beach", type: "beach", distance: "1 min walk" },
      { name: "Dubai Marina Metro Station", type: "metro", distance: "12 min walk" },
      { name: "Marina Walk", type: "landmark", distance: "8 min walk" },
      { name: "Carrefour Market", type: "supermarket", distance: "3 min walk" },
      { name: "Aster Hospital", type: "hospital", distance: "10 min drive" }
    ]
  },
  {
    id: 5,
    title: "Townhouse in Dubai Hills Estate",
    address: "Dubai Hills Estate, Dubai",
    price: 3850000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2800,
    type: "sale",
    category: "House",
    status: "available",
    featured: true,
    tags: ["recently-added"],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
    ],
    amenities: ["Private Garden", "Community Pool", "Playground", "Park View"],
    description: "Contemporary townhouse in the heart of Dubai Hills. Family-friendly community with excellent amenities.",
    agent: {
      name: "Layla Ibrahim",
      phone: "+971 54 567 8901",
      email: "layla@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    location: { lat: 25.1084, lng: 55.2491 },
    yearBuilt: 2021,
    listedDate: "2025-03-05",
    verified: true
  },
  {
    id: 6,
    title: "Apartment in Downtown Dubai",
    address: "Burj Khalifa District, Downtown Dubai",
    price: 180000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: true,
    tags: ["recently-added"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
    ],
    amenities: ["Burj View", "Pool", "Gym", "Concierge"],
    description: "Premium living in the heart of Downtown. Walk to Dubai Mall, Burj Khalifa, and Dubai Opera.",
    agent: {
      name: "Khaled Mahmoud",
      phone: "+971 58 678 9012",
      email: "khaled@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    location: { lat: 25.1972, lng: 55.2744 },
    yearBuilt: 2019,
    listedDate: "2025-03-03",
    verified: true
  },
  {
    id: 7,
    title: "Luxury Villa in Palm Jumeirah",
    address: "Frond M, Palm Jumeirah, Dubai",
    price: 18500000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8500,
    type: "sale",
    category: "House",
    status: "available",
    featured: true,
    tags: ["luxury", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
    ],
    amenities: ["Private Beach", "Infinity Pool", "Cinema", "Elevator", "Smart Home"],
    description: "Spectacular beachfront villa on Palm Jumeirah. Unparalleled luxury with stunning Dubai skyline views.",
    agent: {
      name: "Mariam Al Zaabi",
      phone: "+971 50 789 0123",
      email: "mariam@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=16"
    },
    location: { lat: 25.1124, lng: 55.1390 },
    yearBuilt: 2023,
    listedDate: "2025-03-01",
    verified: true
  },
  {
    id: 8,
    title: "Apartment in Abu Dhabi Corniche",
    address: "Corniche Road, Abu Dhabi",
    price: 2850000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    type: "sale",
    category: "Apartment",
    status: "pending",
    featured: false,
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800"
    ],
    amenities: ["Sea View", "Pool", "Gym", "Concierge"],
    description: "Elegant apartment with Corniche views. Prime Abu Dhabi location with beach access.",
    agent: {
      name: "Rashid Al Dhaheri",
      phone: "+971 50 890 1234",
      email: "rashid@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    location: { lat: 24.4689, lng: 54.3218 },
    yearBuilt: 2019,
    listedDate: "2025-02-28",
    verified: true
  },
  {
    id: 9,
    title: "Beachfront Villa in Emirates Hills",
    address: "Emirates Hills, Dubai",
    price: 25000000,
    bedrooms: 7,
    bathrooms: 8,
    sqft: 12000,
    type: "sale",
    category: "House",
    status: "available",
    featured: true,
    tags: ["luxury", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800"
    ],
    amenities: ["Golf View", "Pool", "Cinema", "Wine Cellar", "Staff Quarters"],
    description: "Ultra-luxury mansion in Dubai's most prestigious community. Golf course and lake views.",
    agent: {
      name: "Salim Al Maktoum",
      phone: "+971 55 901 2345",
      email: "salim@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    location: { lat: 25.0515, lng: 55.1815 },
    yearBuilt: 2024,
    listedDate: "2025-02-25",
    verified: true
  },
  {
    id: 10,
    title: "Apartment in Sharjah Al Majaz",
    address: "Al Majaz Waterfront, Sharjah",
    price: 95000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["expat-friendly", "budget"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800"
    ],
    amenities: ["Pool", "Gym", "Parking", "Waterfront View"],
    description: "Affordable waterfront living in Sharjah. Easy access to Dubai and family-friendly environment.",
    agent: {
      name: "Noura Al Qassimi",
      phone: "+971 52 012 3456",
      email: "noura@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    location: { lat: 25.3184, lng: 55.3772 },
    yearBuilt: 2018,
    listedDate: "2025-02-20",
    verified: true
  },
  {
    id: 11,
    title: "Villa in Al Barsha",
    address: "Al Barsha 1, Dubai",
    price: 4500000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4200,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800"
    ],
    amenities: ["Garden", "Maid's Room", "Covered Parking", "Park View"],
    description: "Spacious family villa near Mall of the Emirates. Excellent schools and amenities nearby.",
    agent: {
      name: "Sarah Al Mansoori",
      phone: "+971 50 123 4567",
      email: "sarah@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    location: { lat: 25.1124, lng: 55.1972 },
    yearBuilt: 2017,
    listedDate: "2025-02-18",
    verified: true
  },
  {
    id: 12,
    title: "Apartment in Ajman",
    address: "Ajman Pearl Towers, Ajman",
    price: 45000,
    bedrooms: 1,
    bathrooms: 2,
    sqft: 850,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
    ],
    amenities: ["Pool", "Gym", "Parking", "Sea View"],
    description: "Affordable beachfront living in Ajman. Great option for young professionals and small families.",
    agent: {
      name: "Fatima Ahmed",
      phone: "+971 52 345 6789",
      email: "fatima@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    location: { lat: 25.4052, lng: 55.5136 },
    yearBuilt: 2016,
    listedDate: "2025-02-15",
    verified: true
  },
  {
    id: 13,
    title: "Penthouse in Dubai Creek Harbour",
    address: "Creek Beach, Dubai Creek Harbour, Dubai",
    price: 12500000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5200,
    type: "sale",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["luxury"],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
    ],
    amenities: ["Creek View", "Private Pool", "Smart Home", "Concierge"],
    description: "Iconic penthouse overlooking Dubai Creek. Next generation waterfront living.",
    agent: {
      name: "Mohammed Hassan",
      phone: "+971 55 234 5678",
      email: "mohammed@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    location: { lat: 25.1848, lng: 55.3516 },
    yearBuilt: 2023,
    listedDate: "2025-02-12",
    verified: true
  },
  {
    id: 14,
    title: "Townhouse in Dubai South",
    address: "The Pulse, Dubai South",
    price: 1850000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2200,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: ["budget", "expat-friendly"],
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ],
    amenities: ["Garden", "Community Pool", "BBQ Area", "Parking"],
    description: "Modern townhouse near Al Maktoum Airport. Perfect for growing families and expats.",
    agent: {
      name: "Layla Ibrahim",
      phone: "+971 54 567 8901",
      email: "layla@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    location: { lat: 24.9467, lng: 55.1614 },
    yearBuilt: 2021,
    listedDate: "2025-02-10",
    verified: true
  },
  {
    id: 15,
    title: "Studio in Dubai Sports City",
    address: "Sports City, Dubai",
    price: 55000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
    ],
    amenities: ["Pool", "Gym", "Sports Facilities", "Parking"],
    description: "Affordable studio in sports-focused community. Great for active lifestyle enthusiasts.",
    agent: {
      name: "Khaled Mahmoud",
      phone: "+971 58 678 9012",
      email: "khaled@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    location: { lat: 25.0424, lng: 55.2144 },
    yearBuilt: 2015,
    listedDate: "2025-02-08",
    verified: true
  },
  {
    id: 16,
    title: "Golf Villa in Dubai Hills",
    address: "Dubai Hills Golf Estates, Dubai",
    price: 9800000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6500,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: ["luxury"],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
    ],
    amenities: ["Golf View", "Pool", "Garden", "Smart Home", "Driver's Room"],
    description: "Luxury golf villa with championship course views. Premium finishes throughout.",
    agent: {
      name: "Ahmed Al Rashid",
      phone: "+971 56 456 7890",
      email: "ahmed@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    location: { lat: 25.1084, lng: 55.2491 },
    yearBuilt: 2022,
    listedDate: "2025-02-05",
    verified: true
  },
  {
    id: 17,
    title: "Apartment in Ras Al Khaimah",
    address: "Al Marjan Island, Ras Al Khaimah",
    price: 1250000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: "sale",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1600566753376-0a8e04535c61?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
    ],
    amenities: ["Beach Access", "Pool", "Gym", "Parking"],
    description: "Island living at its best. Affordable beachfront property in RAK.",
    agent: {
      name: "Mariam Al Zaabi",
      phone: "+971 50 789 0123",
      email: "mariam@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=16"
    },
    location: { lat: 25.6872, lng: 55.7608 },
    yearBuilt: 2020,
    listedDate: "2025-02-03",
    verified: true
  },
  {
    id: 18,
    title: "Villa in Mirdif",
    address: "Mirdif, Dubai",
    price: 3200000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3800,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
    ],
    amenities: ["Garden", "Maid's Room", "Parking", "Community Pool"],
    description: "Family villa in established Dubai community. Close to schools and City Centre Mirdif.",
    agent: {
      name: "Rashid Al Dhaheri",
      phone: "+971 50 890 1234",
      email: "rashid@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    location: { lat: 25.2167, lng: 55.4167 },
    yearBuilt: 2016,
    listedDate: "2025-02-01",
    verified: true
  },
  {
    id: 19,
    title: "Penthouse in DIFC",
    address: "Gate Avenue, DIFC, Dubai",
    price: 250000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2400,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["expat-friendly", "luxury"],
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ],
    amenities: ["Burj View", "Concierge", "Gym", "Valet Parking"],
    description: "Prestigious DIFC living with Burj Khalifa views. Premium location for professionals.",
    agent: {
      name: "Salim Al Maktoum",
      phone: "+971 55 901 2345",
      email: "salim@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    location: { lat: 25.2138, lng: 55.2807 },
    yearBuilt: 2022,
    listedDate: "2025-01-28",
    verified: true
  },
  {
    id: 20,
    title: "Townhouse in Reem Island",
    address: "Al Reem Island, Abu Dhabi",
    price: 2650000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2600,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
    ],
    amenities: ["Garden", "Community Facilities", "Beach Access", "Parking"],
    description: "Contemporary townhouse on Reem Island. Modern Abu Dhabi living at its finest.",
    agent: {
      name: "Noura Al Qassimi",
      phone: "+971 52 012 3456",
      email: "noura@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    location: { lat: 24.4987, lng: 54.4079 },
    yearBuilt: 2020,
    listedDate: "2025-01-25",
    verified: true
  },
  {
    id: 21,
    title: "Villa in Jumeirah",
    address: "Jumeirah 1, Dubai",
    price: 15800000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8200,
    type: "sale",
    category: "House",
    status: "pending",
    featured: false,
    tags: ["luxury"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
    ],
    amenities: ["Beach View", "Pool", "Garden", "Staff Quarters"],
    description: "Prestigious Jumeirah villa close to the beach. Classic Dubai luxury living.",
    agent: {
      name: "Sarah Al Mansoori",
      phone: "+971 50 123 4567",
      email: "sarah@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    location: { lat: 25.2321, lng: 55.2573 },
    yearBuilt: 2018,
    listedDate: "2025-01-22",
    verified: true
  },
  {
    id: 22,
    title: "Apartment in Al Barari",
    address: "The Residences, Al Barari, Dubai",
    price: 120000,
    bedrooms: 2,
    bathrooms: 3,
    sqft: 1650,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    ],
    amenities: ["Garden View", "Pool", "Gym", "Spa"],
    description: "Botanical luxury in Dubai's greenest community. Peaceful sanctuary living.",
    agent: {
      name: "Fatima Ahmed",
      phone: "+971 52 345 6789",
      email: "fatima@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    location: { lat: 25.0857, lng: 55.2376 },
    yearBuilt: 2019,
    listedDate: "2025-01-20",
    verified: true
  },
  {
    id: 23,
    title: "Luxury Townhouse in JBR",
    address: "Jumeirah Beach Residence, Dubai",
    price: 280000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2200,
    type: "rent",
    category: "Townhouse",
    status: "available",
    featured: true,
    tags: ["luxury", "expat-friendly", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
    ],
    amenities: ["Beach Access", "Private Garden", "Maid's Room", "Pool", "Gym"],
    description: "Spacious townhouse with stunning beach views and private garden. Walking distance to The Beach and Marina Walk.",
    agent: {
      name: "Ahmed Al Rashid",
      phone: "+971 56 456 7890",
      email: "ahmed@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    location: { lat: 25.0720, lng: 55.1350 },
    yearBuilt: 2020,
    listedDate: "2025-03-18",
    verified: true,
    nearbyLocations: [
      { name: "The Beach JBR", type: "mall", distance: "3 min walk" },
      { name: "JBR Beach", type: "beach", distance: "2 min walk" },
      { name: "Dubai Marina Metro Station", type: "metro", distance: "10 min walk" },
      { name: "Carrefour Market", type: "supermarket", distance: "4 min walk" }
    ]
  },
  {
    id: 24,
    title: "Penthouse in Dubai Marina",
    address: "Princess Tower, Dubai Marina, Dubai",
    price: 450000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4500,
    type: "rent",
    category: "Penthouse",
    status: "available",
    featured: true,
    tags: ["luxury", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
    ],
    amenities: ["Private Pool", "Terrace", "Marina View", "Concierge", "Gym", "Parking"],
    description: "Stunning penthouse with panoramic marina and sea views. Features private pool terrace and luxury finishes throughout.",
    agent: {
      name: "Sarah Al Mansoori",
      phone: "+971 50 123 4567",
      email: "sarah@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    location: { lat: 25.0774, lng: 55.1395 },
    yearBuilt: 2022,
    listedDate: "2025-03-17",
    verified: true,
    nearbyLocations: [
      { name: "Dubai Marina Mall", type: "mall", distance: "6 min walk" },
      { name: "DMCC Metro Station", type: "metro", distance: "7 min walk" },
      { name: "Dubai Marina Beach", type: "beach", distance: "5 min walk" },
      { name: "Spinneys Supermarket", type: "supermarket", distance: "3 min walk" }
    ]
  },
  {
    id: 25,
    title: "Modern Townhouse in Arabian Ranches",
    address: "Arabian Ranches, Dubai",
    price: 320000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3200,
    type: "rent",
    category: "Townhouse",
    status: "available",
    featured: true,
    tags: ["expat-friendly", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    amenities: ["Private Pool", "Garden", "Maid's Room", "Golf Course View", "BBQ Area"],
    description: "Beautiful townhouse in gated community with golf course views. Perfect for families.",
    agent: {
      name: "Mohammed Hassan",
      phone: "+971 55 234 5678",
      email: "mohammed@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    location: { lat: 25.0545, lng: 55.2710 },
    yearBuilt: 2019,
    listedDate: "2025-03-16",
    verified: true,
    nearbyLocations: [
      { name: "Arabian Ranches Golf Club", type: "golf", distance: "3 min walk" },
      { name: "Ranches Souk", type: "mall", distance: "5 min drive" },
      { name: "GEMS Dubai American Academy", type: "school", distance: "8 min drive" },
      { name: "Carrefour Market", type: "supermarket", distance: "6 min drive" }
    ]
  },
  {
    id: 26,
    title: "Downtown Penthouse with Burj View",
    address: "Downtown Dubai, Dubai",
    price: 12500000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5800,
    type: "sale",
    category: "Penthouse",
    status: "available",
    featured: true,
    tags: ["luxury", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
    ],
    amenities: ["Private Pool", "Terrace", "Burj View", "Concierge", "Cinema", "Wine Cellar"],
    description: "Ultra-luxury penthouse with unobstructed Burj Khalifa views. Sky-high living at its finest.",
    agent: {
      name: "Layla Hassan",
      phone: "+971 54 567 8901",
      email: "layla@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    location: { lat: 25.1972, lng: 55.2744 },
    yearBuilt: 2023,
    listedDate: "2025-03-19",
    verified: true,
    nearbyLocations: [
      { name: "Dubai Mall", type: "mall", distance: "5 min walk" },
      { name: "Burj Khalifa Metro Station", type: "metro", distance: "3 min walk" },
      { name: "Burj Khalifa", type: "landmark", distance: "2 min walk" },
      { name: "Waitrose Supermarket", type: "supermarket", distance: "4 min walk" }
    ]
  },
  {
    id: 27,
    title: "Beachfront Townhouse in Palm Jumeirah",
    address: "Palm Jumeirah, Dubai",
    price: 7800000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4200,
    type: "sale",
    category: "Townhouse",
    status: "available",
    featured: true,
    tags: ["luxury", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
    ],
    amenities: ["Beach Access", "Private Pool", "Marina Berth", "Maid's Room", "Sea View"],
    description: "Exclusive beachfront townhouse on the Palm with private beach access and stunning sea views.",
    agent: {
      name: "Ahmed Al Rashid",
      phone: "+971 56 456 7890",
      email: "ahmed@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    location: { lat: 25.1124, lng: 55.1390 },
    yearBuilt: 2021,
    listedDate: "2025-03-15",
    verified: true,
    nearbyLocations: [
      { name: "Nakheel Mall", type: "mall", distance: "5 min drive" },
      { name: "Palm Jumeirah Beach", type: "beach", distance: "1 min walk" },
      { name: "The Pointe", type: "landmark", distance: "8 min drive" },
      { name: "Waitrose", type: "supermarket", distance: "6 min drive" }
    ]
  },
  {
    id: 28,
    title: "Luxury Villa in Jumeirah Village Circle",
    address: "Jumeirah Village Circle, Dubai",
    price: 550000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5000,
    type: "rent",
    category: "House",
    status: "available",
    featured: true,
    tags: ["luxury", "expat-friendly", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ],
    amenities: ["Private Pool", "Garden", "Maid's Room", "BBQ Area", "Gym", "Parking"],
    description: "Stunning 5-bedroom villa in JVC with private pool and lush garden. Perfect for families seeking space and luxury.",
    agent: {
      name: "Mohammed Hassan",
      phone: "+971 55 234 5678",
      email: "mohammed@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    location: { lat: 25.0599, lng: 55.2107 },
    yearBuilt: 2020,
    listedDate: "2025-03-20",
    verified: true,
    nearbyLocations: [
      { name: "Circle Mall", type: "mall", distance: "5 min drive" },
      { name: "JVC Park", type: "landmark", distance: "3 min walk" },
      { name: "GEMS International School", type: "school", distance: "6 min drive" },
      { name: "Carrefour Market", type: "supermarket", distance: "4 min drive" }
    ]
  },
  {
    id: 29,
    title: "Modern Villa in Dubai Hills Estate",
    address: "Dubai Hills Estate, Dubai",
    price: 480000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4200,
    type: "rent",
    category: "House",
    status: "available",
    featured: true,
    tags: ["expat-friendly", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    amenities: ["Private Pool", "Garden", "Maid's Room", "Golf Course View", "Smart Home"],
    description: "Contemporary villa with golf course views in Dubai Hills. Premium finishes and smart home technology.",
    agent: {
      name: "Sarah Al Mansoori",
      phone: "+971 50 123 4567",
      email: "sarah@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    location: { lat: 25.0949, lng: 55.2463 },
    yearBuilt: 2021,
    listedDate: "2025-03-19",
    verified: true,
    nearbyLocations: [
      { name: "Dubai Hills Mall", type: "mall", distance: "5 min drive" },
      { name: "Dubai Hills Golf Club", type: "golf", distance: "4 min drive" },
      { name: "JESS Dubai", type: "school", distance: "7 min drive" },
      { name: "Spinneys", type: "supermarket", distance: "5 min drive" }
    ]
  },
  {
    id: 30,
    title: "Spacious Apartment in Business Bay",
    address: "Executive Tower B, Business Bay, Dubai",
    price: 180000,
    bedrooms: 2,
    bathrooms: 3,
    sqft: 1400,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: true,
    tags: ["expat-friendly", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800"
    ],
    amenities: ["Pool", "Gym", "Parking", "24/7 Security", "Burj View"],
    description: "Spacious 2-bedroom apartment with stunning Burj Khalifa views. Modern finishes and excellent amenities.",
    agent: {
      name: "Fatima Ahmed",
      phone: "+971 52 345 6789",
      email: "fatima@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    location: { lat: 25.1870, lng: 55.2665 },
    yearBuilt: 2018,
    listedDate: "2025-03-18",
    verified: true,
    nearbyLocations: [
      { name: "Dubai Mall", type: "mall", distance: "6 min drive" },
      { name: "Business Bay Metro Station", type: "metro", distance: "2 min walk" },
      { name: "Burj Khalifa", type: "landmark", distance: "8 min drive" },
      { name: "Carrefour Express", type: "supermarket", distance: "3 min walk" }
    ]
  },
  {
    id: 31,
    title: "Elegant Apartment in Dubai Marina",
    address: "Marina Gate, Dubai Marina, Dubai",
    price: 220000,
    bedrooms: 2,
    bathrooms: 3,
    sqft: 1600,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: true,
    tags: ["expat-friendly", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
    ],
    amenities: ["Marina View", "Pool", "Gym", "Concierge", "Parking"],
    description: "Elegant 2-bedroom with marina views. Walking distance to Marina Walk and The Beach.",
    agent: {
      name: "Ahmed Al Rashid",
      phone: "+971 56 456 7890",
      email: "ahmed@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    location: { lat: 25.0780, lng: 55.1400 },
    yearBuilt: 2019,
    listedDate: "2025-03-17",
    verified: true,
    nearbyLocations: [
      { name: "Dubai Marina Mall", type: "mall", distance: "5 min walk" },
      { name: "DMCC Metro Station", type: "metro", distance: "6 min walk" },
      { name: "Marina Beach", type: "beach", distance: "8 min walk" },
      { name: "Spinneys", type: "supermarket", distance: "4 min walk" }
    ]
  },
  {
    id: 32,
    title: "Premium Villa in Dubai Sports City",
    address: "Dubai Sports City, Dubai",
    price: 380000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3800,
    type: "rent",
    category: "House",
    status: "available",
    featured: true,
    tags: ["budget", "expat-friendly"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ],
    amenities: ["Private Pool", "Garden", "Maid's Room", "Community Pool", "Sports Facilities"],
    description: "Family-friendly villa in Sports City with access to world-class sports facilities and community amenities.",
    agent: {
      name: "Layla Hassan",
      phone: "+971 54 567 8901",
      email: "layla@prestigeuae.com",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    location: { lat: 25.0381, lng: 55.2215 },
    yearBuilt: 2018,
    listedDate: "2025-03-16",
    verified: true,
    nearbyLocations: [
      { name: "Sports City Shopping Center", type: "mall", distance: "4 min drive" },
      { name: "Dubai Sports City Cricket Stadium", type: "landmark", distance: "5 min drive" },
      { name: "Victory Heights Community Centre", type: "school", distance: "6 min drive" },
      { name: "Zoom Supermarket", type: "supermarket", distance: "3 min drive" }
    ]
  }
];

export const mockLeads = [
  {
    id: 1,
    name: "Abdullah Al Hashimi",
    email: "abdullah.h@email.com",
    phone: "+971 50 111 2222",
    status: "hot",
    score: 95,
    source: "Website",
    interestedIn: "Luxury Penthouse in Dubai Marina",
    budget: 8500000,
    notes: "Very interested, wants to schedule viewing ASAP",
    lastContact: "2025-03-18",
    createdAt: "2025-03-15",
    tags: ["High Priority", "Cash Buyer"]
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria.s@email.com",
    phone: "+971 55 222 3333",
    status: "warm",
    score: 70,
    source: "Referral",
    interestedIn: "Modern Villa in Arabian Ranches",
    budget: 6200000,
    notes: "Expat relocating from Philippines",
    lastContact: "2025-03-16",
    createdAt: "2025-03-10",
    tags: ["Relocating", "Expat"]
  },
  {
    id: 3,
    name: "Raj Kumar",
    email: "raj.k@email.com",
    phone: "+971 52 333 4444",
    status: "cold",
    score: 45,
    source: "Social Media",
    interestedIn: "General Inquiry",
    budget: 2000000,
    notes: "Just browsing, not ready to buy yet",
    lastContact: "2025-03-05",
    createdAt: "2025-03-03",
    tags: ["Early Stage"]
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "s.williams@email.com",
    phone: "+971 56 444 5555",
    status: "hot",
    score: 92,
    source: "Website",
    interestedIn: "Beachfront Villa in Palm Jumeirah",
    budget: 18500000,
    notes: "British expat, cash buyer, wants immediate closing",
    lastContact: "2025-03-19",
    createdAt: "2025-03-17",
    tags: ["High Priority", "Cash Buyer", "Urgent", "Expat"]
  },
  {
    id: 5,
    name: "Mohammed Khalifa",
    email: "m.khalifa@email.com",
    phone: "+971 50 555 6666",
    status: "warm",
    score: 75,
    source: "Open House",
    interestedIn: "Villa in Emirates Hills",
    budget: 25000000,
    notes: "Local investor, interested in luxury properties",
    lastContact: "2025-03-17",
    createdAt: "2025-03-12",
    tags: ["Luxury Buyer", "Investor"]
  },
  {
    id: 6,
    name: "Priya Sharma",
    email: "priya.s@email.com",
    phone: "+971 54 666 7777",
    status: "hot",
    score: 88,
    source: "Referral",
    interestedIn: "Apartment in Dubai Creek Harbour",
    budget: 12500000,
    notes: "Pre-approved, ready to make offer",
    lastContact: "2025-03-18",
    createdAt: "2025-03-14",
    tags: ["Pre-Approved", "Ready to Buy"]
  },
  {
    id: 7,
    name: "James Anderson",
    email: "j.anderson@email.com",
    phone: "+971 55 777 8888",
    status: "warm",
    score: 68,
    source: "Website",
    interestedIn: "Townhouse in Dubai Hills Estate",
    budget: 3850000,
    notes: "American expat, interested in family properties",
    lastContact: "2025-03-15",
    createdAt: "2025-03-08",
    tags: ["Expat", "Family"]
  },
  {
    id: 8,
    name: "Fatima Al Mazrouei",
    email: "f.almazrouei@email.com",
    phone: "+971 50 888 9999",
    status: "cold",
    score: 40,
    source: "Social Media",
    interestedIn: "Rental Properties",
    budget: 95000,
    notes: "Looking for rental apartment in Sharjah",
    lastContact: "2025-03-10",
    createdAt: "2025-03-05",
    tags: ["Rental", "Early Stage"]
  },
  {
    id: 9,
    name: "Chen Wei",
    email: "chen.w@email.com",
    phone: "+971 52 999 0000",
    status: "warm",
    score: 72,
    source: "Open House",
    interestedIn: "Apartment in Business Bay",
    budget: 65000,
    notes: "Chinese expat looking for rental",
    lastContact: "2025-03-16",
    createdAt: "2025-03-11",
    tags: ["Rental", "Expat"]
  },
  {
    id: 10,
    name: "Emily Davis",
    email: "e.davis@email.com",
    phone: "+971 56 000 1111",
    status: "hot",
    score: 90,
    source: "Website",
    interestedIn: "Penthouse in DIFC",
    budget: 250000,
    notes: "Relocating for work, needs quick rental",
    lastContact: "2025-03-19",
    createdAt: "2025-03-16",
    tags: ["Relocating", "Urgent", "Corporate", "Expat"]
  },
  {
    id: 11,
    name: "Ahmed Saeed",
    email: "a.saeed@email.com",
    phone: "+971 50 111 2223",
    status: "warm",
    score: 65,
    source: "Referral",
    interestedIn: "Villa in Mirdif",
    budget: 3200000,
    notes: "First time buyer, needs financing guidance",
    lastContact: "2025-03-14",
    createdAt: "2025-03-09",
    tags: ["First Time Buyer", "Needs Financing"]
  },
  {
    id: 12,
    name: "Sofia Rodriguez",
    email: "sofia.r@email.com",
    phone: "+971 55 222 3334",
    status: "cold",
    score: 35,
    source: "Social Media",
    interestedIn: "General Inquiry",
    budget: 1500000,
    notes: "Just starting to look",
    lastContact: "2025-03-08",
    createdAt: "2025-03-04",
    tags: ["Early Stage"]
  },
  {
    id: 13,
    name: "Khalid Al Suwaidi",
    email: "k.alsuwaidi@email.com",
    phone: "+971 50 333 4445",
    status: "hot",
    score: 85,
    source: "Website",
    interestedIn: "Beachfront Apartment in JBR",
    budget: 4800000,
    notes: "Investment property buyer, multiple purchases planned",
    lastContact: "2025-03-18",
    createdAt: "2025-03-13",
    tags: ["Investor", "Repeat Client"]
  },
  {
    id: 14,
    name: "Jennifer Smith",
    email: "j.smith@email.com",
    phone: "+971 54 444 5556",
    status: "warm",
    score: 78,
    source: "Open House",
    interestedIn: "Townhouse in Dubai South",
    budget: 1850000,
    notes: "British expat looking for affordable family home",
    lastContact: "2025-03-17",
    createdAt: "2025-03-12",
    tags: ["Expat", "Family", "Budget"]
  },
  {
    id: 15,
    name: "Omar Hassan",
    email: "o.hassan@email.com",
    phone: "+971 50 555 6667",
    status: "warm",
    score: 73,
    source: "Referral",
    interestedIn: "Apartment in Abu Dhabi Corniche",
    budget: 2850000,
    notes: "Relocating from Dubai to Abu Dhabi",
    lastContact: "2025-03-15",
    createdAt: "2025-03-10",
    tags: ["Relocating", "Abu Dhabi"]
  }
];

export const mockAgents = [
  {
    id: 1,
    name: "Sarah Al Mansoori",
    title: "Senior Real Estate Consultant",
    specialization: "Luxury Residential",
    phone: "+971 50 123 4567",
    email: "sarah@prestigeuae.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "With over 12 years of experience in UAE luxury real estate, Sarah has helped hundreds of clients find their dream homes across Dubai and Abu Dhabi.",
    propertiesSold: 124,
    rating: 4.9,
    languages: ["English", "Arabic", "French"],
    verified: true
  },
  {
    id: 2,
    name: "Mohammed Hassan",
    title: "Real Estate Consultant",
    specialization: "Villas & Commercial",
    phone: "+971 55 234 5678",
    email: "mohammed@prestigeuae.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Mohammed specializes in premium villas and commercial properties across Emirates. Expert in Arabian Ranches and Dubai Hills.",
    propertiesSold: 98,
    rating: 4.8,
    languages: ["Arabic", "English", "Urdu"],
    verified: true
  },
  {
    id: 3,
    name: "Fatima Ahmed",
    title: "Property Consultant",
    specialization: "Expat Relocation",
    phone: "+971 52 345 6789",
    email: "fatima@prestigeuae.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Fatima specializes in helping expats find their perfect home in UAE. Expert in relocation support and visa assistance.",
    propertiesSold: 87,
    rating: 4.9,
    languages: ["Arabic", "English", "Hindi"],
    verified: true
  },
  {
    id: 4,
    name: "Ahmed Al Rashid",
    title: "Senior Property Consultant",
    specialization: "Waterfront & Beach Properties",
    phone: "+971 56 456 7890",
    email: "ahmed@prestigeuae.com",
    avatar: "https://i.pravatar.cc/150?img=8",
    bio: "Ahmed has deep expertise in waterfront properties including JBR, Dubai Marina, and Palm Jumeirah developments.",
    propertiesSold: 112,
    rating: 4.9,
    languages: ["Arabic", "English", "Russian"],
    verified: true
  },
  {
    id: 5,
    name: "Layla Ibrahim",
    title: "Property Consultant",
    specialization: "Investment Properties",
    phone: "+971 54 567 8901",
    email: "layla@prestigeuae.com",
    avatar: "https://i.pravatar.cc/150?img=9",
    bio: "Layla helps investors build profitable real estate portfolios across UAE with strategic property acquisitions.",
    propertiesSold: 95,
    rating: 4.8,
    languages: ["Arabic", "English", "Tagalog"],
    verified: true
  },
  {
    id: 6,
    name: "Khaled Mahmoud",
    title: "Property Consultant",
    specialization: "Downtown & Business Bay",
    phone: "+971 58 678 9012",
    email: "khaled@prestigeuae.com",
    avatar: "https://i.pravatar.cc/150?img=13",
    bio: "Khaled specializes in central Dubai properties with focus on Downtown Dubai and Business Bay developments.",
    propertiesSold: 76,
    rating: 4.7,
    languages: ["Arabic", "English"],
    verified: true
  }
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "Dubai Real Estate Market Report Q1 2025",
    excerpt: "Comprehensive analysis of Dubai's property market performance in early 2025, including price trends and investment opportunities.",
    author: "Sarah Al Mansoori",
    date: "2025-03-15",
    readTime: "8 min read",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    slug: "dubai-real-estate-market-q1-2025"
  },
  {
    id: 2,
    title: "Complete Guide to Buying Property in UAE as an Expat",
    excerpt: "Everything expats need to know about purchasing property in the UAE, from visa requirements to mortgage options.",
    author: "Fatima Ahmed",
    date: "2025-03-12",
    readTime: "10 min read",
    category: "Buyer Guide",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    slug: "expat-property-buying-guide-uae"
  },
  {
    id: 3,
    title: "Top 10 Family Communities in Dubai 2025",
    excerpt: "Discover the best family-friendly communities in Dubai with excellent schools, parks, and amenities.",
    author: "Mohammed Hassan",
    date: "2025-03-08",
    readTime: "7 min read",
    category: "Community Guide",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    slug: "top-family-communities-dubai-2025"
  },
  {
    id: 4,
    title: "Palm Jumeirah vs Dubai Marina: Which is Right for You?",
    excerpt: "Detailed comparison of two of Dubai's most prestigious waterfront locations for buyers and investors.",
    author: "Ahmed Al Rashid",
    date: "2025-03-05",
    readTime: "6 min read",
    category: "Location Comparison",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
    slug: "palm-jumeirah-vs-dubai-marina"
  },
  {
    id: 5,
    title: "UAE Mortgage Guide 2025: Rates and Requirements",
    excerpt: "Complete guide to securing a mortgage in the UAE, including interest rates, down payment requirements, and best lenders.",
    author: "Layla Ibrahim",
    date: "2025-03-01",
    readTime: "9 min read",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    slug: "uae-mortgage-guide-2025"
  },
  {
    id: 6,
    title: "Downtown Dubai Living: Everything You Need to Know",
    excerpt: "Comprehensive guide to living in Downtown Dubai, from amenities to property prices and lifestyle.",
    author: "Khaled Mahmoud",
    date: "2025-02-28",
    readTime: "8 min read",
    category: "Area Guide",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    slug: "downtown-dubai-living-guide"
  }
];

export const mockAnalytics = {
  revenue: {
    total: 485000000,
    monthlyGrowth: 15.3,
    data: [
      { month: "Jan", amount: 62000000 },
      { month: "Feb", amount: 72500000 },
      { month: "Mar", amount: 83000000 },
      { month: "Apr", amount: 75000000 },
      { month: "May", amount: 89500000 },
      { month: "Jun", amount: 103000000 }
    ]
  },
  properties: {
    total: 248,
    sold: 64,
    pending: 28,
    available: 156,
    avgDaysOnMarket: 32,
    avgPrice: 5850000
  },
  leads: {
    total: 486,
    hot: 68,
    warm: 195,
    cold: 223,
    conversionRate: 14.8,
    avgScore: 62
  },
  topAgents: [
    { name: "Sarah Al Mansoori", deals: 24, revenue: 189000000, conversionRate: 18.5 },
    { name: "Mohammed Hassan", deals: 21, revenue: 156000000, conversionRate: 16.2 },
    { name: "Fatima Ahmed", deals: 18, revenue: 98000000, conversionRate: 15.8 },
    { name: "Ahmed Al Rashid", deals: 16, revenue: 142000000, conversionRate: 14.5 },
    { name: "Layla Ibrahim", deals: 14, revenue: 87000000, conversionRate: 13.9 }
  ],
  propertyTypes: [
    { type: "Villa", count: 102, avgPrice: 8500000 },
    { type: "Apartment", count: 98, avgPrice: 3200000 },
    { type: "Townhouse", count: 32, avgPrice: 2400000 },
    { type: "Penthouse", count: 16, avgPrice: 12500000 }
  ],
  marketTrends: {
    inventoryDays: 32,
    priceGrowth: 8.5,
    salesVolume: 64,
    newListings: 42
  },
  stats: {
    propertiesSold: 1248,
    happyClients: 2156,
    yearsExperience: 15,
    expertAgents: 48
  }
};

export const mockPricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: 0,
    interval: "month",
    features: [
      "Up to 5 property listings",
      "Basic CRM features",
      "Email support",
      "Standard analytics"
    ],
    recommended: false
  },
  {
    id: 2,
    name: "Pro",
    price: 179,
    interval: "month",
    features: [
      "Unlimited property listings",
      "Advanced CRM with lead scoring",
      "Property description assistant",
      "Priority support",
      "Advanced analytics",
      "Custom branding"
    ],
    recommended: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: 729,
    interval: "month",
    features: [
      "Everything in Pro",
      "Multi-agent team management",
      "Property inquiry chatbot",
      "Market price predictions",
      "White-label solution",
      "Dedicated account manager",
      "API access"
    ],
    recommended: false
  }
];
