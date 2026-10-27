
import { Link } from "react-router-dom";
import { MapPin, Star, Clock, ArrowUpRight } from "lucide-react";

export default function DestinationCard({ destination }) {
  const d = destination;
  if (!d) return null;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/packages/${d.id}`} className="relative block overflow-hidden">
        <img
          src={d.image}
          alt={d.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-teal-800">
          {d.type}
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1.5 text-sm font-bold">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          {d.rating}
        </span>
      </Link>

      <div className="p-5">
        <p className="flex items-center gap-1 text-sm text-slate-500">
          <MapPin size={15} className="text-teal-700" />
          {d.region}
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">{d.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {d.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <Clock size={16} /> {d.days} days
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-500">Starting from</p>
            <p className="text-xl font-extrabold text-teal-800">
              ₹{Number(d.price).toLocaleString("en-IN")}
            </p>
          </div>
          <Link
            to={`/packages/${d.id}`}
            className="flex items-center gap-1 rounded-lg bg-teal-800 px-3 py-2.5 text-sm font-semibold text-white hover:bg-teal-900"
          >
            Explore <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
