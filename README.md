# PaikarMart 🛍️

বাংলাদেশের সেরা অল-ইন-ওয়ান সুপার অ্যাপ — Social করো, কিনো, বেচো, দেখো, পড়ো।

## 🚀 Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite + TypeScript |
| Styling | TailwindCSS + Glassmorphism |
| Routing | React Router DOM v6 |
| State/Data | TanStack Query |
| Icons | Lucide React |
| Animation | Framer Motion |
| Theme | next-themes (dark) |
| Backend | Express + TypeScript |
| Package Manager | pnpm (monorepo) |

## 📁 Project Structure
paikarmart/
├── frontend/          # React + Vite
│   └── src/
│       ├── components/
│       │   ├── layout/      # AppLayout, Navbar, BottomNav
│       │   ├── home/        # HeroSection, QuickAccessGrid, BannerSlider,
│       │   │                # CategoryBar, FeaturedCategories,
│       │   │                # ProductCard, RecommendedProducts
│       │   └── ui/          # Shadcn UI components
│       ├── pages/
│       │   ├── Home.tsx
│       │   ├── Shop.tsx
│       │   ├── Sell.tsx
│       │   ├── Wallet.tsx
│       │   ├── Profile.tsx
│       │   ├── HomeFeed.tsx
│       │   ├── Cart.tsx
│       │   └── Notifications.tsx
│       ├── hooks/
│       │   └── use-toast.ts
│       └── app/
│           ├── router.tsx
│           └── providers.tsx
└── backend/           # Express + TypeScript
## ✅ Phase 1 — Done (14 May 2026)

### Foundation
- ✅ Monorepo setup (pnpm workspace)
- ✅ Frontend: Vite + React 18 + TypeScript
- ✅ Backend: Express + TypeScript + tsx
- ✅ TailwindCSS + Shadcn UI configured
- ✅ Dark Glassmorphism theme (Navy + Purple gradient)
- ✅ CSS variables (`--pm-*`) system
- ✅ Mobile-first layout (max-width 480px centered)
- ✅ `@` path alias configured

### Layout & Navigation
- ✅ AppLayout (gradient bg + ambient blobs)
- ✅ Navbar (top bar + logo + search)
- ✅ BottomNav (5 tabs — হোম, শপ, বেচো, ওয়ালেট, প্রোফাইল)

### Pages
- ✅ Home (HeroSection + QuickAccessGrid + FeaturedCategories + RecommendedProducts)
- ✅ Shop (Search + Filter chips + ProductCard grid)
- ✅ Sell (Product form — seller type selector)
- ✅ Wallet (Balance card + Quick actions + Transactions)
- ✅ Profile (User info + Menu + Stats)
- ✅ HomeFeed (Social feed — PostCard + Category filter)
- ✅ Cart (Items + Quantity control + Order summary)
- ✅ Notifications (Filter tabs + Notification list)

### Components
- ✅ HeroSection (Welcome card + Auto banner slider)
- ✅ QuickAccessGrid (3×5 icon tiles — 15 shortcuts)
- ✅ BannerSlider (Auto-rotate with dots)
- ✅ FeaturedCategories (Horizontal scroll)
- ✅ CategoryBar (Filter chips)
- ✅ ProductCard (Image + Badge + Wishlist + Price + Cart)
- ✅ RecommendedProducts (2-column grid)

### UI System
- ✅ Shadcn UI components (40+ components)
- ✅ Toast notification system
- ✅ Dark theme tokens

## 🔲 Phase 2 — Coming Soon

### Pages & Portals
- [ ] `/portal/b2b` — B2B পাইকারি পোর্টাল
- [ ] `/portal/b2c` — B2C খুচরা পোর্টাল
- [ ] `/portal/ride` — রাইড শেয়ার
- [ ] `/portal/nearby` — কাছের দোকান
- [ ] `/portal/services` — সার্ভিস মার্কেটপ্লেস
- [ ] `/product/:id` — প্রোডাক্ট ডিটেইল
- [ ] `/checkout` — চেকআউট ফ্লো
- [ ] `/orders` — অর্ডার ট্র্যাকিং

### Features
- [ ] Auth System (Login + Register)
- [ ] Real API Integration (Backend)
- [ ] Search Results Page
- [ ] Theme Toggle (Dark/Light)
- [ ] PWA (manifest.json)
- [ ] Seller Onboarding
- [ ] PK Wallet Top-up Flow

## 🏃 Run Locally

```bash
pnpm install
pnpm dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 👤 Maintained by
Munna × Claude (Anthropic)
Last Updated: 14 May 2026