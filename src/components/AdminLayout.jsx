import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/Logo.png";
import {
  LayoutDashboard,
  Layers,
  Sparkles,
  LogOut,
  ExternalLink,
  Menu,
  X,
  MessageSquare,
  Quote,
} from "lucide-react";

export default function AdminLayout() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

const navItems = [
  {
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Services",
    to: "/admin/services",
    icon: Layers,
  },
  {
    name: "Case Studies",
    to: "/admin/case-studies",
    icon: Sparkles,
  },
  {
    name: "Enquiries",
    to: "/admin/enquiries",
    icon: MessageSquare,
  },
  {
    name: "Testimonials",
    to: "/admin/testimonials",
    icon: Quote,
  },
];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100 flex font-sans">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-[#161616] border-r border-gray-800 shrink-0">
        <div className="p-6 border-b border-gray-800">
          <Link to="/" target="_blank" className="block">
            <img src={logo} alt="Promaxify" className="h-8 w-auto object-contain" />
          </Link>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-widest uppercase text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded">
              Admin Portal
            </span>
            <Link
              to="/"
              target="_blank"
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
            >
              View Site <ExternalLink size={12} />
            </Link>
          </div>
        </div>

        {/* Navigation Modules (Strictly 3 Modules) */}
        <nav className="p-4 flex-1 space-y-1.5">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-500">
            Modules
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#ff7a00] text-white shadow-lg shadow-orange-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* User Card & Logout */}
        <div className="p-4 border-t border-gray-800">
          <div className="bg-[#1e1e1e] p-3 rounded-xl flex items-center justify-between">
            <div className="truncate pr-2">
              <p className="text-sm font-semibold text-white truncate">
                {admin?.username || "Admin"}
              </p>
              <p className="text-xs text-gray-500 truncate">{admin?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-2 hover:bg-red-500/10 text-gray-400 hover:text-red-400 rounded-lg transition"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-[#161616] border-b border-gray-800 px-6 flex items-center justify-between lg:justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              className="text-xs font-semibold bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 transition"
            >
              Live Website <ExternalLink size={13} />
            </Link>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#161616] border-b border-gray-800 p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold ${
                      isActive
                        ? "bg-[#ff7a00] text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.name}
                </NavLink>
              );
            })}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/10 rounded-xl"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}

        {/* Body Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}