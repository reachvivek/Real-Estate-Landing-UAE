import fs from 'fs';

const content = `export const mockProperties = [
  {
    id: 1,
    title: "Luxury Downtown Penthouse",
    address: "123 Skyline Ave, New York, NY 10001",
    price: 2500000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
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
    amenities: ["Pool", "Gym", "Parking", "Security", "Garden"],
    description: "Stunning penthouse with panoramic city views. Features include marble floors, chef's kitchen, and private terrace.",
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    location: { lat: 40.7128, lng: -74.0060 },
    yearBuilt: 2020,
    listedDate: "2025-01-15",
    verified: true
  },
  {
    id: 2,
    title: "Modern Family Home",
    address: "456 Oak Street, Los Angeles, CA 90001",
    price: 1200000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
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
    amenities: ["Garage", "Backyard", "Fireplace", "Smart Home"],
    description: "Beautiful family home in quiet neighborhood. Open floor plan with modern upgrades throughout.",
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 234-5678",
      email: "michael@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    location: { lat: 34.0522, lng: -118.2437 },
    yearBuilt: 2018,
    listedDate: "2025-02-01",
    verified: true
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    address: "789 Main St, Chicago, IL 60601",
    price: 1800,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: true,
    tags: ["budget", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800"
    ],
    amenities: ["WiFi", "Laundry", "Parking"],
    description: "Perfect starter home with all utilities included. Walking distance to public transit.",
    agent: {
      name: "Emma Davis",
      phone: "+1 (555) 345-6789",
      email: "emma@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    location: { lat: 41.8781, lng: -87.6298 },
    yearBuilt: 2015,
    listedDate: "2025-03-10",
    verified: true
  },
  {
    id: 4,
    title: "Waterfront Condo",
    address: "321 Marina Blvd, Miami, FL 33101",
    price: 1850000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1900,
    type: "sale",
    category: "Apartment",
    status: "available",
    featured: true,
    tags: ["luxury", "expat-friendly", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
    ],
    amenities: ["Pool", "Beach Access", "Gym", "Concierge", "Valet"],
    description: "Breathtaking ocean views from every room. High-end finishes and resort-style amenities. Perfect for international buyers.",
    agent: {
      name: "Carlos Rodriguez",
      phone: "+1 (555) 456-7890",
      email: "carlos@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    location: { lat: 25.7617, lng: -80.1918 },
    yearBuilt: 2021,
    listedDate: "2025-02-15",
    verified: true
  },
  {
    id: 5,
    title: "Suburban Ranch House",
    address: "555 Elm Drive, Austin, TX 78701",
    price: 685000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    type: "sale",
    category: "House",
    status: "available",
    featured: true,
    tags: ["recently-added"],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
    ],
    amenities: ["Garage", "Backyard", "Deck", "Updated Kitchen"],
    description: "Charming single-story ranch with large backyard perfect for entertaining.",
    agent: {
      name: "Jennifer White",
      phone: "+1 (555) 567-8901",
      email: "jennifer@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    location: { lat: 30.2672, lng: -97.7431 },
    yearBuilt: 2010,
    listedDate: "2025-03-01",
    verified: true
  },
  {
    id: 6,
    title: "Downtown Loft",
    address: "888 Industrial Way, Seattle, WA 98101",
    price: 3200,
    bedrooms: 2,
    bathrooms: 1,
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
    amenities: ["High Ceilings", "Exposed Brick", "WiFi", "Pet Friendly"],
    description: "Industrial-chic loft in the heart of downtown. Perfect for urban professionals.",
    agent: {
      name: "David Park",
      phone: "+1 (555) 678-9012",
      email: "david@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    location: { lat: 47.6062, lng: -122.3321 },
    yearBuilt: 2016,
    listedDate: "2025-03-12",
    verified: true
  },
  {
    id: 7,
    title: "Mountain View Estate",
    address: "100 Summit Ridge, Denver, CO 80202",
    price: 3200000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4800,
    type: "sale",
    category: "House",
    status: "available",
    featured: true,
    tags: ["luxury", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
    ],
    amenities: ["Mountain Views", "Home Theater", "Wine Cellar", "3-Car Garage", "Hot Tub"],
    description: "Spectacular mountain estate with unobstructed views. Custom built with luxury finishes throughout.",
    agent: {
      name: "Amanda Foster",
      phone: "+1 (555) 789-0123",
      email: "amanda@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=16"
    },
    location: { lat: 39.7392, lng: -104.9903 },
    yearBuilt: 2022,
    listedDate: "2025-01-20",
    verified: true
  },
  {
    id: 8,
    title: "Historic Brownstone",
    address: "234 Heritage Lane, Boston, MA 02101",
    price: 1950000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3100,
    type: "sale",
    category: "House",
    status: "pending",
    featured: false,
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800"
    ],
    amenities: ["Original Details", "Updated Kitchen", "Rooftop Deck", "Parking"],
    description: "Beautifully restored brownstone maintaining original charm with modern updates.",
    agent: {
      name: "Robert Thompson",
      phone: "+1 (555) 890-1234",
      email: "robert@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    location: { lat: 42.3601, lng: -71.0589 },
    yearBuilt: 1895,
    listedDate: "2025-02-20",
    verified: true
  },
  {
    id: 9,
    title: "Beachfront Villa",
    address: "777 Ocean Drive, San Diego, CA 92101",
    price: 4500000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3800,
    type: "sale",
    category: "House",
    status: "available",
    featured: true,
    tags: ["luxury", "recently-added"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800"
    ],
    amenities: ["Private Beach", "Infinity Pool", "Outdoor Kitchen", "Smart Home", "Elevator"],
    description: "Stunning contemporary villa with direct beach access. Floor-to-ceiling windows throughout.",
    agent: {
      name: "Lisa Martinez",
      phone: "+1 (555) 901-2345",
      email: "lisa@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    location: { lat: 32.7157, lng: -117.1611 },
    yearBuilt: 2023,
    listedDate: "2025-01-25",
    verified: true
  },
  {
    id: 10,
    title: "Urban High-Rise",
    address: "999 Sky Tower, Atlanta, GA 30303",
    price: 2800,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["expat-friendly"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800"
    ],
    amenities: ["Pool", "Gym", "Doorman", "Parking", "City Views"],
    description: "Modern high-rise living with premium amenities. Walk to restaurants and entertainment. Perfect for expats.",
    agent: {
      name: "Marcus Johnson",
      phone: "+1 (555) 012-3456",
      email: "marcus@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    location: { lat: 33.7490, lng: -84.3880 },
    yearBuilt: 2019,
    listedDate: "2025-03-08",
    verified: true
  },
  {
    id: 11,
    title: "Country Farmhouse",
    address: "444 Farm Road, Nashville, TN 37201",
    price: 825000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2900,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800"
    ],
    amenities: ["Barn", "5 Acres", "Fireplace", "Wrap-around Porch"],
    description: "Charming farmhouse on 5 acres with modern updates. Perfect for country living.",
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    location: { lat: 36.1627, lng: -86.7816 },
    yearBuilt: 2008,
    listedDate: "2025-02-28",
    verified: true
  },
  {
    id: 12,
    title: "Garden Apartment",
    address: "222 Park Avenue, Portland, OR 97201",
    price: 2200,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 750,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
    ],
    amenities: ["Garden Access", "Updated Kitchen", "Pet Friendly", "Laundry"],
    description: "Quiet garden-level apartment in charming neighborhood. Recently renovated.",
    agent: {
      name: "Emma Davis",
      phone: "+1 (555) 345-6789",
      email: "emma@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    location: { lat: 45.5152, lng: -122.6784 },
    yearBuilt: 2012,
    listedDate: "2025-03-15",
    verified: true
  },
  {
    id: 13,
    title: "Lakefront Retreat",
    address: "555 Lakeshore Drive, Minneapolis, MN 55401",
    price: 1450000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2500,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
    ],
    amenities: ["Private Dock", "Lake Views", "Deck", "Boat House", "Fireplace"],
    description: "Serene lakefront property with private dock. Year-round beauty and recreation.",
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 234-5678",
      email: "michael@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    location: { lat: 44.9778, lng: -93.2650 },
    yearBuilt: 2014,
    listedDate: "2025-02-10",
    verified: true
  },
  {
    id: 14,
    title: "Executive Townhome",
    address: "888 Madison Court, Washington DC, 20001",
    price: 1650000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: ["expat-friendly"],
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ],
    amenities: ["Rooftop Terrace", "Garage", "Smart Home", "Modern Kitchen"],
    description: "Contemporary townhome in prime location. Walk to shops and Metro. Ideal for international professionals.",
    agent: {
      name: "Jennifer White",
      phone: "+1 (555) 567-8901",
      email: "jennifer@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    location: { lat: 38.9072, lng: -77.0369 },
    yearBuilt: 2020,
    listedDate: "2025-02-25",
    verified: true
  },
  {
    id: 15,
    title: "Artist Loft Space",
    address: "321 Gallery Street, Philadelphia, PA 19101",
    price: 2600,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 1100,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
    ],
    amenities: ["High Ceilings", "Natural Light", "Hardwood Floors", "Exposed Brick"],
    description: "Inspiring loft space perfect for artists and creatives. Abundant natural light.",
    agent: {
      name: "David Park",
      phone: "+1 (555) 678-9012",
      email: "david@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    location: { lat: 39.9526, lng: -75.1652 },
    yearBuilt: 2011,
    listedDate: "2025-03-11",
    verified: true
  },
  {
    id: 16,
    title: "Golf Course Villa",
    address: "777 Fairway Lane, Phoenix, AZ 85001",
    price: 2100000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3600,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: ["luxury"],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
    ],
    amenities: ["Golf Course Views", "Pool", "Outdoor Kitchen", "3-Car Garage", "Wine Room"],
    description: "Luxury villa overlooking championship golf course. Resort-style living at its finest.",
    agent: {
      name: "Carlos Rodriguez",
      phone: "+1 (555) 456-7890",
      email: "carlos@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    location: { lat: 33.4484, lng: -112.0740 },
    yearBuilt: 2021,
    listedDate: "2025-01-30",
    verified: true
  },
  {
    id: 17,
    title: "River View Condo",
    address: "444 Riverfront Plaza, Pittsburgh, PA 15222",
    price: 575000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1300,
    type: "sale",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1600566753376-0a8e04535c61?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
    ],
    amenities: ["River Views", "Concierge", "Gym", "Parking", "Storage"],
    description: "Modern condo with stunning river views. Premium building with excellent amenities.",
    agent: {
      name: "Amanda Foster",
      phone: "+1 (555) 789-0123",
      email: "amanda@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=16"
    },
    location: { lat: 40.4406, lng: -79.9959 },
    yearBuilt: 2017,
    listedDate: "2025-03-05",
    verified: true
  },
  {
    id: 18,
    title: "Suburban Colonial",
    address: "666 Maple Avenue, Charlotte, NC 28202",
    price: 495000,
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2600,
    type: "sale",
    category: "House",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
    ],
    amenities: ["Backyard", "2-Car Garage", "Updated Bathrooms", "Deck"],
    description: "Classic colonial in established neighborhood. Well-maintained with recent updates.",
    agent: {
      name: "Robert Thompson",
      phone: "+1 (555) 890-1234",
      email: "robert@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    location: { lat: 35.2271, lng: -80.8431 },
    yearBuilt: 2005,
    listedDate: "2025-03-02",
    verified: true
  },
  {
    id: 19,
    title: "Sky Loft Penthouse",
    address: "111 Cloud Nine, Las Vegas, NV 89101",
    price: 3500,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["expat-friendly"],
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ],
    amenities: ["Strip Views", "Pool", "Gym", "Concierge", "Valet Parking"],
    description: "Breathtaking penthouse with Las Vegas Strip views. Ultimate luxury living with relocation assistance.",
    agent: {
      name: "Lisa Martinez",
      phone: "+1 (555) 901-2345",
      email: "lisa@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    location: { lat: 36.1699, lng: -115.1398 },
    yearBuilt: 2022,
    listedDate: "2025-03-13",
    verified: true
  },
  {
    id: 20,
    title: "Historic Warehouse Loft",
    address: "333 Industrial Blvd, Detroit, MI 48201",
    price: 425000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    type: "sale",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
    ],
    amenities: ["Exposed Brick", "High Ceilings", "Parking", "Pet Friendly"],
    description: "Converted warehouse loft with original character. Open floor plan with modern amenities.",
    agent: {
      name: "Marcus Johnson",
      phone: "+1 (555) 012-3456",
      email: "marcus@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    location: { lat: 42.3314, lng: -83.0458 },
    yearBuilt: 2013,
    listedDate: "2025-02-18",
    verified: true
  },
  {
    id: 21,
    title: "Hillside Craftsman",
    address: "999 Oak Hill Road, San Francisco, CA 94102",
    price: 2750000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    type: "sale",
    category: "House",
    status: "pending",
    featured: false,
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
    ],
    amenities: ["Bay Views", "Original Details", "Updated Kitchen", "Garden"],
    description: "Beautiful craftsman with stunning bay views. Period details lovingly preserved.",
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    location: { lat: 37.7749, lng: -122.4194 },
    yearBuilt: 1920,
    listedDate: "2025-02-22",
    verified: true
  },
  {
    id: 22,
    title: "Riverside Apartment",
    address: "222 Water Street, New Orleans, LA 70112",
    price: 1950,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    type: "rent",
    category: "Apartment",
    status: "available",
    featured: false,
    tags: ["budget"],
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    ],
    amenities: ["Balcony", "Updated Kitchen", "Laundry", "Parking"],
    description: "Charming apartment overlooking the Mississippi River. Walk to French Quarter.",
    agent: {
      name: "Emma Davis",
      phone: "+1 (555) 345-6789",
      email: "emma@realestate.com",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    location: { lat: 29.9511, lng: -90.0715 },
    yearBuilt: 2016,
    listedDate: "2025-03-14",
    verified: true
  }
];

export const mockLeads = [
  {
    id: 1,
    name: "John Anderson",
    email: "john.anderson@email.com",
    phone: "+1 (555) 111-2222",
    status: "hot",
    score: 95,
    source: "Website",
    interestedIn: "Luxury Downtown Penthouse",
    budget: 2500000,
    notes: "Very interested, wants to schedule viewing ASAP",
    lastContact: "2025-01-18",
    createdAt: "2025-01-15",
    tags: ["High Priority", "Cash Buyer"]
  },
  {
    id: 2,
    name: "Lisa Martinez",
    email: "lisa.m@email.com",
    phone: "+1 (555) 222-3333",
    status: "warm",
    score: 70,
    source: "Referral",
    interestedIn: "Modern Family Home",
    budget: 1200000,
    notes: "Looking to relocate from out of state",
    lastContact: "2025-01-16",
    createdAt: "2025-01-10",
    tags: ["Relocating", "First Time Buyer"]
  },
  {
    id: 3,
    name: "Robert Kim",
    email: "r.kim@email.com",
    phone: "+1 (555) 333-4444",
    status: "cold",
    score: 45,
    source: "Social Media",
    interestedIn: "General Inquiry",
    budget: 800000,
    notes: "Just browsing, not ready to buy yet",
    lastContact: "2025-01-05",
    createdAt: "2025-01-03",
    tags: ["Early Stage"]
  },
  {
    id: 4,
    name: "Patricia Stevens",
    email: "p.stevens@email.com",
    phone: "+1 (555) 444-5555",
    status: "hot",
    score: 92,
    source: "Website",
    interestedIn: "Beachfront Villa",
    budget: 4500000,
    notes: "Cash buyer, wants immediate closing",
    lastContact: "2025-01-19",
    createdAt: "2025-01-17",
    tags: ["High Priority", "Cash Buyer", "Urgent"]
  },
  {
    id: 5,
    name: "David Chen",
    email: "d.chen@email.com",
    phone: "+1 (555) 555-6666",
    status: "warm",
    score: 75,
    source: "Open House",
    interestedIn: "Mountain View Estate",
    budget: 3200000,
    notes: "Interested in luxury properties, flexible timeline",
    lastContact: "2025-01-17",
    createdAt: "2025-01-12",
    tags: ["Luxury Buyer", "Flexible"]
  },
  {
    id: 6,
    name: "Michelle Rodriguez",
    email: "m.rodriguez@email.com",
    phone: "+1 (555) 666-7777",
    status: "hot",
    score: 88,
    source: "Referral",
    interestedIn: "Golf Course Villa",
    budget: 2100000,
    notes: "Pre-approved, ready to make offer",
    lastContact: "2025-01-18",
    createdAt: "2025-01-14",
    tags: ["Pre-Approved", "Ready to Buy"]
  },
  {
    id: 7,
    name: "James Wilson",
    email: "j.wilson@email.com",
    phone: "+1 (555) 777-8888",
    status: "warm",
    score: 68,
    source: "Website",
    interestedIn: "Historic Brownstone",
    budget: 1950000,
    notes: "Interested in historic properties",
    lastContact: "2025-01-15",
    createdAt: "2025-01-08",
    tags: ["Historic Interest"]
  },
  {
    id: 8,
    name: "Sandra Kim",
    email: "s.kim@email.com",
    phone: "+1 (555) 888-9999",
    status: "cold",
    score: 40,
    source: "Social Media",
    interestedIn: "Rental Properties",
    budget: 3000,
    notes: "Looking for rental apartment",
    lastContact: "2025-01-10",
    createdAt: "2025-01-05",
    tags: ["Rental", "Early Stage"]
  },
  {
    id: 9,
    name: "Thomas Brown",
    email: "t.brown@email.com",
    phone: "+1 (555) 999-0000",
    status: "warm",
    score: 72,
    source: "Open House",
    interestedIn: "Lakefront Retreat",
    budget: 1450000,
    notes: "Looking for vacation property",
    lastContact: "2025-01-16",
    createdAt: "2025-01-11",
    tags: ["Vacation Home", "Flexible Timeline"]
  },
  {
    id: 10,
    name: "Emily Davis",
    email: "e.davis@email.com",
    phone: "+1 (555) 000-1111",
    status: "hot",
    score: 90,
    source: "Website",
    interestedIn: "Executive Townhome",
    budget: 1650000,
    notes: "Relocating for work, needs quick close",
    lastContact: "2025-01-19",
    createdAt: "2025-01-16",
    tags: ["Relocating", "Urgent", "Corporate"]
  },
  {
    id: 11,
    name: "Michael Thompson",
    email: "m.thompson@email.com",
    phone: "+1 (555) 111-2223",
    status: "warm",
    score: 65,
    source: "Referral",
    interestedIn: "Suburban Colonial",
    budget: 495000,
    notes: "First time buyer, needs financing guidance",
    lastContact: "2025-01-14",
    createdAt: "2025-01-09",
    tags: ["First Time Buyer", "Needs Financing"]
  },
  {
    id: 12,
    name: "Angela Martinez",
    email: "a.martinez@email.com",
    phone: "+1 (555) 222-3334",
    status: "cold",
    score: 35,
    source: "Social Media",
    interestedIn: "General Inquiry",
    budget: 500000,
    notes: "Just starting to look",
    lastContact: "2025-01-08",
    createdAt: "2025-01-04",
    tags: ["Early Stage"]
  },
  {
    id: 13,
    name: "Christopher Lee",
    email: "c.lee@email.com",
    phone: "+1 (555) 333-4445",
    status: "hot",
    score: 85,
    source: "Website",
    interestedIn: "Waterfront Condo",
    budget: 1850000,
    notes: "Investment property buyer, multiple purchases",
    lastContact: "2025-01-18",
    createdAt: "2025-01-13",
    tags: ["Investor", "Repeat Client"]
  },
  {
    id: 14,
    name: "Jennifer White",
    email: "j.white@email.com",
    phone: "+1 (555) 444-5556",
    status: "warm",
    score: 78,
    source: "Open House",
    interestedIn: "Country Farmhouse",
    budget: 825000,
    notes: "Looking for property with land",
    lastContact: "2025-01-17",
    createdAt: "2025-01-12",
    tags: ["Rural Property", "Land"]
  },
  {
    id: 15,
    name: "Daniel Garcia",
    email: "d.garcia@email.com",
    phone: "+1 (555) 555-6667",
    status: "warm",
    score: 73,
    source: "Referral",
    interestedIn: "River View Condo",
    budget: 575000,
    notes: "Downsizing from larger home",
    lastContact: "2025-01-15",
    createdAt: "2025-01-10",
    tags: ["Downsizing", "Empty Nester"]
  }
];

export const mockAgents = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    specialization: "Luxury Residential",
    phone: "+1 (555) 123-4567",
    email: "sarah@realestate.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "With over 12 years of experience in luxury real estate, Sarah has helped countless clients find their dream homes.",
    propertiesSold: 124,
    rating: 4.9,
    languages: ["English", "Spanish"],
    verified: true
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Real Estate Agent",
    specialization: "Commercial & Residential",
    phone: "+1 (555) 234-5678",
    email: "michael@realestate.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Michael specializes in both commercial and residential properties, bringing a unique perspective to every transaction.",
    propertiesSold: 98,
    rating: 4.8,
    languages: ["English", "Mandarin", "Cantonese"],
    verified: true
  },
  {
    id: 3,
    name: "Emma Davis",
    title: "Real Estate Agent",
    specialization: "First-Time Buyers",
    phone: "+1 (555) 345-6789",
    email: "emma@realestate.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Emma is passionate about helping first-time buyers navigate the real estate market with confidence.",
    propertiesSold: 87,
    rating: 4.9,
    languages: ["English", "French"],
    verified: true
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    title: "Senior Real Estate Agent",
    specialization: "Waterfront Properties",
    phone: "+1 (555) 456-7890",
    email: "carlos@realestate.com",
    avatar: "https://i.pravatar.cc/150?img=8",
    bio: "Carlos has deep expertise in waterfront and coastal properties, with a proven track record of success.",
    propertiesSold: 112,
    rating: 4.9,
    languages: ["English", "Spanish", "Portuguese"],
    verified: true
  },
  {
    id: 5,
    name: "Lisa Martinez",
    title: "Real Estate Agent",
    specialization: "Investment Properties",
    phone: "+1 (555) 901-2345",
    email: "lisa@realestate.com",
    avatar: "https://i.pravatar.cc/150?img=10",
    bio: "Lisa helps investors build their real estate portfolios with strategic property acquisitions.",
    propertiesSold: 95,
    rating: 4.8,
    languages: ["English", "Spanish"],
    verified: true
  },
  {
    id: 6,
    name: "David Park",
    title: "Real Estate Agent",
    specialization: "Urban Lofts & Condos",
    phone: "+1 (555) 678-9012",
    email: "david@realestate.com",
    avatar: "https://i.pravatar.cc/150?img=13",
    bio: "David specializes in urban living spaces and helps clients find the perfect city home.",
    propertiesSold: 76,
    rating: 4.7,
    languages: ["English", "Korean"],
    verified: true
  }
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "Top 10 Neighborhoods for Families in 2025",
    excerpt: "Discover the best family-friendly neighborhoods with excellent schools, parks, and community amenities.",
    author: "Sarah Johnson",
    date: "2025-03-15",
    readTime: "5 min read",
    category: "Market Insights",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    slug: "top-10-neighborhoods-families-2025"
  },
  {
    id: 2,
    title: "First-Time Home Buyer's Complete Guide",
    excerpt: "Everything you need to know about buying your first home, from financing to closing.",
    author: "Emma Davis",
    date: "2025-03-12",
    readTime: "8 min read",
    category: "Buyer Tips",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    slug: "first-time-home-buyer-guide"
  },
  {
    id: 3,
    title: "Luxury Real Estate Market Trends Q1 2025",
    excerpt: "An in-depth analysis of the luxury property market and what buyers can expect this quarter.",
    author: "Carlos Rodriguez",
    date: "2025-03-08",
    readTime: "6 min read",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    slug: "luxury-market-trends-q1-2025"
  },
  {
    id: 4,
    title: "How to Stage Your Home for a Quick Sale",
    excerpt: "Professional tips on staging your property to attract buyers and maximize your selling price.",
    author: "Lisa Martinez",
    date: "2025-03-05",
    readTime: "7 min read",
    category: "Seller Tips",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    slug: "staging-home-quick-sale"
  },
  {
    id: 5,
    title: "Investment Properties: What to Look For",
    excerpt: "Key factors to consider when purchasing rental properties and building your real estate portfolio.",
    author: "Michael Chen",
    date: "2025-03-01",
    readTime: "10 min read",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    slug: "investment-properties-guide"
  },
  {
    id: 6,
    title: "Urban Living: The Rise of Smart Homes",
    excerpt: "Exploring how smart home technology is transforming urban living spaces and property values.",
    author: "David Park",
    date: "2025-02-28",
    readTime: "6 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
    slug: "smart-homes-urban-living"
  }
];

export const mockAnalytics = {
  revenue: {
    total: 18750000,
    monthlyGrowth: 15.3,
    data: [
      { month: "Jan", amount: 2400000 },
      { month: "Feb", amount: 2800000 },
      { month: "Mar", amount: 3200000 },
      { month: "Apr", amount: 2900000 },
      { month: "May", amount: 3450000 },
      { month: "Jun", amount: 4000000 }
    ]
  },
  properties: {
    total: 248,
    sold: 64,
    pending: 28,
    available: 156,
    avgDaysOnMarket: 32,
    avgPrice: 1425000
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
    { name: "Sarah Johnson", deals: 24, revenue: 5800000, conversionRate: 18.5 },
    { name: "Michael Chen", deals: 21, revenue: 4900000, conversionRate: 16.2 },
    { name: "Emma Davis", deals: 18, revenue: 3600000, conversionRate: 15.8 },
    { name: "Carlos Rodriguez", deals: 16, revenue: 4200000, conversionRate: 14.5 },
    { name: "Lisa Martinez", deals: 14, revenue: 3400000, conversionRate: 13.9 }
  ],
  propertyTypes: [
    { type: "House", count: 102, avgPrice: 1850000 },
    { type: "Apartment", count: 98, avgPrice: 975000 },
    { type: "Condo", count: 32, avgPrice: 725000 },
    { type: "Townhome", count: 16, avgPrice: 1250000 }
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
    price: 49,
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
    price: 199,
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
`;

fs.writeFileSync('d:/Anonymous/RealEstate/Project/frontend/lib/data/mockData.ts', content);
console.log('Successfully updated mockData.ts with tags, agents, and blog posts');
