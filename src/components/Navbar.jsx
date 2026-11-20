import { NavLink } from "react-router-dom"
import { Home, Heart, Phone, Shield } from "lucide-react"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            DreamNest
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-indigo-600 shadow-md"
                  : "text-white/90 hover:bg-white/15 hover:text-white"
              }`
            }
          >
            <Home className="w-4 h-4" />
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-indigo-600 shadow-md"
                  : "text-white/90 hover:bg-white/15 hover:text-white"
              }`
            }
          >
            <Heart className="w-4 h-4" />
            Favorites
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-indigo-600 shadow-md"
                  : "text-white/90 hover:bg-white/15 hover:text-white"
              }`
            }
          >
            <Phone className="w-4 h-4" />
            Contact
          </NavLink>

          <NavLink
            to="/admin-login"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ml-2 ${
                isActive
                  ? "bg-rose-500 text-white shadow-md"
                  : "bg-rose-500/90 text-white hover:bg-rose-500"
              }`
            }
          >
            <Shield className="w-4 h-4" />
            Admin
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
