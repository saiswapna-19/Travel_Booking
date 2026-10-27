
import { Link } from "react-router-dom";
import { Compass, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-white">
      <div className="container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold">
            <Compass className="text-teal-400" />
            wander<span className="text-teal-400">ly.</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Discover India's beautiful destinations and turn your travel dreams into unforgettable memories.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Explore</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <Link className="hover:text-teal-400" to="/">Home</Link>
            <Link className="hover:text-teal-400" to="/destinations">Destinations</Link>
            <Link className="hover:text-teal-400" to="/bookings">My Bookings</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Travel India</h3>
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={17} className="text-teal-400" /> Explore incredible India
          </p>
          <Link to="/destinations" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300">
            Discover trips <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Wanderly. All rights reserved.</p>
          <p>Made for your next adventure in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
