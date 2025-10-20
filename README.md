# Real Estate Landing - UAE Property Platform

A modern, full-featured real estate platform for the UAE market built with Next.js 15, TypeScript, and Leaflet Maps. Browse properties across Dubai and Abu Dhabi with interactive maps, advanced search filters, and detailed property information.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### Property Listings
- **37+ Properties** across Dubai and Abu Dhabi
- **Multiple Property Types**: Apartments, Villas, Townhouses, Penthouses
- **Rent & Sale** listings with AED pricing
- **High-quality images** and detailed descriptions
- **Verified listings** badge system

### Interactive Maps
- **Leaflet.js Integration** for interactive property maps
- **Custom price markers** showing property prices
- **Popup cards** with property details (Airbnb-style)
- **Individual property location maps** with nearby amenities
- **Area highlighting** with 200m radius circles

### Advanced Search & Filters
- **Multi-criteria search**: City, Area, Property Type, Price Range
- **10 Dubai Areas**: Dubai Marina, JBR, Business Bay, Downtown, Arabian Ranches, Dubai Hills, Palm Jumeirah, JVC, Sports City, Silicon Oasis
- **5 Abu Dhabi Areas**: Corniche, Yas Island, Saadiyat Island, Al Raha Beach, Al Reef
- **Dynamic price ranges** for rent (yearly) and sale
- **Active filters display** with removable badges
- **URL-based filtering** - shareable search results

### Property Details
- **Comprehensive information**: Bedrooms, bathrooms, square footage, year built
- **Amenities list** with icons
- **Nearby locations** with distances:
  - Shopping malls
  - Metro stations
  - Schools
  - Hospitals
  - Supermarkets
  - Beaches & landmarks
- **Agent contact information** with profiles
- **Get Directions** link to Google Maps

### Additional Features
- **Agent Directory** with 6 UAE-based agents
- **Blog Section** with 6 real estate articles
- **Contact Page** with form, map, and FAQ
- **Responsive Design** - mobile, tablet, and desktop
- **View Modes**: Grid, List, and Map views
- **Sort Options**: Latest, Price, Size

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router and Turbopack
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - Accessible component library
- **Leaflet.js** - Interactive maps
- **Lucide Icons** - Modern icon set

### Backend (Planned)
- **Node.js** with Express
- **PostgreSQL** - Relational database
- **Prisma** - ORM
- **Stripe** - Payment processing (planned)

## 📁 Project Structure

```
Real-Estate-Landing-UAE/
├── frontend/
│   ├── app/
│   │   ├── page.tsx                 # Homepage with hero & search
│   │   ├── properties/
│   │   │   └── page.tsx             # Properties listing with filters
│   │   ├── property/[id]/
│   │   │   └── page.tsx             # Property detail page
│   │   ├── agents/
│   │   │   └── page.tsx             # Agents directory
│   │   ├── blog/
│   │   │   ├── page.tsx             # Blog listing
│   │   │   └── [slug]/page.tsx      # Blog detail
│   │   ├── contact/
│   │   │   └── page.tsx             # Contact page
│   │   └── layout.tsx               # Root layout
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Navigation header
│   │   │   └── Footer.tsx           # Footer with dev credits
│   │   ├── map/
│   │   │   ├── PropertyMap.tsx      # All properties map
│   │   │   └── PropertyLocationMap.tsx # Single property map
│   │   └── ui/                      # Shadcn/ui components
│   ├── lib/
│   │   └── data/
│   │       └── mockData.ts          # 37 properties, agents, blog posts
│   └── public/
│       └── fonts/                   # Lufga font family
├── backend/                         # (To be implemented)
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/reachvivek/Real-Estate-Landing-UAE.git
cd Real-Estate-Landing-UAE
```

2. **Install frontend dependencies**
```bash
cd frontend
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📊 Property Data

### Current Inventory
- **Total Properties**: 37
- **For Sale**: 17 properties
- **For Rent**: 20 properties

### Property Distribution by Type
- **Apartments**: 15
- **Villas (Houses)**: 14
- **Townhouses**: 5
- **Penthouses**: 3

### Price Ranges
**For Rent (Annual):**
- Budget: AED 45,000 - 100,000/year
- Mid-range: AED 180,000 - 320,000/year
- Luxury: AED 450,000 - 620,000/year

**For Sale:**
- Mid-range: AED 2M - 5M
- High-end: AED 5M - 10M
- Ultra-luxury: AED 10M - 15.5M

### Featured Locations

**Dubai (32 properties):**
- Dubai Marina (5)
- JBR - Jumeirah Beach Residence (3)
- Business Bay (4)
- Downtown Dubai (3)
- Arabian Ranches (3)
- Dubai Hills Estate (2)
- JVC - Jumeirah Village Circle (2)
- Dubai Sports City (2)
- Palm Jumeirah (2)
- Others (6)

**Abu Dhabi (5 properties):**
- Corniche
- Yas Island
- Saadiyat Island
- Al Raha Beach
- Al Reef

## 🎨 Design & UI

### Color Scheme
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Grey tones
- **Minimalist** and professional aesthetic

### Typography
- **Font Family**: Lufga (Custom)
- **Weights**: Regular, Medium, SemiBold, Bold

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 Key Functionalities

### Search Flow
1. User selects filters on homepage (City, Area, Type, Price)
2. Click Search → Redirects to `/properties?type=rent&city=dubai&area=jbr&propertyType=Apartment&price=200k-500k`
3. Properties page reads URL parameters
4. Filters are automatically applied
5. Active filters displayed as removable badges
6. Results update in real-time

### Map Integration
- **Properties Page**: Shows all filtered properties on map with price markers
- **Property Detail Page**: Shows individual property location with nearby amenities
- **Interactive Popups**: Click markers to see property cards
- **Get Directions**: Direct link to Google Maps

## 📝 Environment Variables

Create a `.env.local` file in the frontend directory:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=http://localhost:5000
# NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

## 🚧 Roadmap

### Phase 1 - MVP (Completed ✅)
- [x] Property listings with filters
- [x] Interactive maps (Leaflet)
- [x] Property detail pages
- [x] Agents directory
- [x] Blog section
- [x] Contact page
- [x] Responsive design
- [x] URL-based filtering

### Phase 2 - Backend (Planned)
- [ ] PostgreSQL database setup
- [ ] REST API with Express
- [ ] User authentication
- [ ] Property CRUD operations
- [ ] Image upload (Cloudinary/S3)
- [ ] Email notifications

### Phase 3 - Advanced Features (Planned)
- [ ] User accounts & saved searches
- [ ] Favorite properties
- [ ] Schedule viewings
- [ ] Mortgage calculator
- [ ] Property comparison
- [ ] Admin dashboard (CRM)
- [ ] Analytics dashboard
- [ ] Payment integration (Stripe)

## 👨‍💻 Developer

**Vivek Kumar Singh**
- Email: rogerthatvivek@gmail.com
- Location: Dubai, UAE
- Portfolio: [Your Portfolio URL]
- GitHub: [@reachvivek](https://github.com/reachvivek)

*Need a similar platform developed? Reach out to discuss your project!*

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Maps powered by [Leaflet](https://leafletjs.com/)
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

## 📞 Support

For support, email rogerthatvivek@gmail.com or open an issue in the repository.

---

**⭐ If you find this project useful, please consider giving it a star!**

Made with ❤️ in Dubai, UAE
