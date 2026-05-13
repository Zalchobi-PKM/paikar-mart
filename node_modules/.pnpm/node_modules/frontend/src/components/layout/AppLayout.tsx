import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

export default function AppLayout() {
  return (
    <div className="min-h-screen w-full flex justify-center" style={{ background: "#060612" }}>
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-[40%] right-[25%] w-72 h-72 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[20%] left-[25%] w-64 h-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Mobile container */}
      <div className="relative w-full min-h-screen flex flex-col" style={{ maxWidth: "480px", background: "var(--pm-gradient)" }}>
        <Navbar />
        <main className="relative z-10 flex-1 pt-14 pb-20 overflow-y-auto">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
}