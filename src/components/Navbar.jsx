
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["Destinations", "/destinations"],
    ["My Bookings", "/bookings"],
  ];

  const navLinks = (
    <>
      {links.map(([name, path]) => (
        <NavLink
          key={path}
          to={path}
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `block rounded-lg px-3 py-2 text-sm font-semibold ${
              isActive ? "bg-teal-50 text-teal-800" : "text-slate-600 hover:text-teal-700"
            }`
          }
        >
          {name}
        </NavLink>
      ))}
      <Link
        to="/destinations"
        onClick={() => setOpen(false)}
        className="rounded-xl bg-teal-800 px-5 py-3 text-center text-sm font-bold text-white hover:bg-teal-900"
      >
        Explore Trips →
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <nav className="container flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Compass className="text-teal-800" size={30} />
          <span className="text-xl font-extrabold">wander<span className="text-teal-700">ly.</span></span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">{navLinks}</div>
        <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && <div className="container grid gap-2 border-t py-4 md:hidden">{navLinks}</div>}
    </header>
  );
}
