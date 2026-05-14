import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Sell from '@/pages/Sell'
import Wallet from '@/pages/Wallet'
import Profile from '@/pages/Profile'
import Feed from '@/pages/Feed'
import Cart from '@/pages/Cart'
import Notifications from '@/pages/Notifications'
import B2BPortal from '@/pages/portal/B2BPortal'
import B2CPortal from '@/pages/portal/B2CPortal'
import NearbyPortal from '@/pages/portal/NearbyPortal'
import ServicesPortal from '@/pages/portal/ServicesPortal'
import DigitalPortal from '@/pages/portal/DigitalPortal'
import RidePortal from '@/pages/portal/RidePortal'

const NotFound = () => (
  <div className="fixed inset-0 flex items-center justify-center" style={{ background: "var(--pm-bg)" }}>
    <div className="flex flex-col items-center gap-3 text-white">
      <p className="text-6xl font-bold" style={{ color: "var(--pm-accent)" }}>404</p>
      <p className="text-lg">পেজটি পাওয়া যায়নি</p>
      <a href="/" className="text-sm underline" style={{ color: "var(--pm-accent)" }}>হোমে ফিরে যান</a>
    </div>
  </div>
)

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/"                  element={<Home />}          />
          <Route path="/shop"              element={<Shop />}          />
          <Route path="/sell"              element={<Sell />}          />
          <Route path="/wallet"            element={<Wallet />}        />
          <Route path="/profile"           element={<Profile />}       />
          <Route path="/feed"              element={<Feed />}          />
          <Route path="/cart"              element={<Cart />}          />
          <Route path="/notifications"     element={<Notifications />} />
          <Route path="/portal/b2b"        element={<B2BPortal />}     />
          <Route path="/portal/b2c"        element={<B2CPortal />}     />
          <Route path="/portal/nearby"     element={<NearbyPortal />}  />
          <Route path="/portal/services"   element={<ServicesPortal />}/>
          <Route path="/portal/digital"    element={<DigitalPortal />} />
          <Route path="/portal/ride"       element={<RidePortal />}    />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App