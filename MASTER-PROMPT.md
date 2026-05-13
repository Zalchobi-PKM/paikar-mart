\# Paikar Mart — Master Prompt (Clean Version)



\*\*Project Name:\*\* Paikar Mart  

\*\*Type:\*\* Bangladeshi All-in-One Super App (Marketplace + Social + Services + Wallet)



\### 🎯 Core Vision

একটাই অ্যাপ — Social করো, কিনো, বেচো, দেখো, পড়ো।  

পাইকারি (B2B), খুচরা (B2C), কাছের দোকান, সার্ভিস, রাইড শেয়ার, ডিজিটাল প্রোডাক্ট — সব এক জায়গায়।



\### 👥 User Roles

\- Buyer  

\- B2B Seller (পাইকারি)  

\- B2C Seller (খুচরা)  

\- Nearby Shop  

\- Service Provider  

\- Digital Seller  

\- Ride Provider



\### 🗄️ Main Entities

\- Product (title, price, images, seller\_type, stock, location, etc.)

\- Order

\- UserProfile (role, wallet\_balance, shop\_name, followers, etc.)



\### 🎨 Design System (Strict Rules)

\- Deep Dark Theme (Navy + Purple gradient background)

\- Glassmorphism UI (backdrop-blur, rgba white 0.07-0.12)

\- Primary Accent: Orange (#f97316)

\- Mobile-first, max-width \~480px centered

\- Bengali UI text প্রাধান্য

\- Bottom Navigation + Floating Action Button



\### 📱 Core Pages (Phase 1)

\- `/` → Home (Banner + Quick Access + Product Feed)

\- `/shop` → Shop Page

\- `/sell` → Sell Page

\- `/wallet` → PK Wallet

\- `/profile` → User Profile

\- `/feed` → Social Product Feed



\### 📁 Preferred File Structure
src/

├── components/

│   ├── layout/          (AppLayout, Navbar, BottomNav)

│   ├── home/            (Hero, QuickAccessGrid, BannerSlider, ProductCard)

│   ├── feed/

│   └── ui/

├── pages/

│   ├── Home.jsx

│   ├── Shop.jsx

│   ├── Sell.jsx

│   ├── Wallet.jsx

│   ├── Profile.jsx

│   └── portals/         (B2B, B2C, Ride, Nearby, Services etc.)

├── entities/

├── hooks/

└── lib/
-----------------------------------
--------------------------------------
### 🔧 Tech Stack

\- React 18 + Vite + TypeScript (preferred)

\- TailwindCSS + Glassmorphism

\- React Router DOM v6

\- Lucide React (icons)

\- Framer Motion (animations)

\- TanStack Query (data fetching)



\---

