import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

export default function AppLayout() {
  return (
    <div 
      className="min-h-screen w-full flex justify-center overflow-x-hidden" 
      style={{ background: "#060612" }}
    >
      {/* Ambient blobs - responsive */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Orange blob */}
        <div 
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 rounded-full opacity-20 md:opacity-30"
          style={{ 
            width: "clamp(200px, 50vw, 400px)",
            height: "clamp(200px, 50vw, 400px)",
            background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)", 
            filter: "blur(60px)" 
          }} 
        />
        
        {/* Purple blob */}
        <div 
          className="absolute top-[30%] right-[15%] rounded-full opacity-15 md:opacity-20"
          style={{ 
            width: "clamp(150px, 40vw, 300px)",
            height: "clamp(150px, 40vw, 300px)",
            background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)", 
            filter: "blur(60px)" 
          }} 
        />
        
        {/* Blue blob */}
        <div 
          className="absolute bottom-[15%] left-[15%] rounded-full opacity-15 md:opacity-20"
          style={{ 
            width: "clamp(140px, 35vw, 280px)",
            height: "clamp(140px, 35vw, 280px)",
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)", 
            filter: "blur(60px)" 
          }} 
        />
      </div>

      {/* Main container - responsive */}
      <div 
        className="relative w-full max-w-[480px] min-h-screen flex flex-col md:max-w-2xl lg:max-w-4xl" 
        style={{ background: "var(--pm-gradient)" }}
      >
        {/* Header */}
        <Navbar />
        
        {/* Main content - scrollable */}
        <main 
          className="relative z-10 flex-1 pt-16 pb-24 md:pt-20 md:pb-8 px-2 sm:px-4 overflow-y-auto scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <Outlet />
        </main>
        
        {/* Footer - Bottom Nav */}
        <BottomNav />
      </div>
    </div>
  );
}
