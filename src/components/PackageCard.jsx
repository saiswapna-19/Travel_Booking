
import { Link } from "react-router-dom";
import { Star, Clock, ArrowRight } from "lucide-react";

export default function PackageCard({ pkg }) {
  if (!pkg) return null;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/packages/${pkg.id}`} className="block overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title || pkg.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
            {pkg.type}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold">
            <Star size={15} className="fill-amber-400 text-amber-400" />
            {pkg.rating}
          </span>
        </div>

        <h3 className="mt-3 text-xl font-bold text-slate-900">
          {pkg.title || `${pkg.name} Getaway`}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {pkg.description}
        </p>

        <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <Clock size={16} /> {pkg.days} days
        </p>

        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-slate-500">Starting from</p>
            <p className="text-xl font-extrabold text-teal-800">
              ₹{Number(pkg.price).toLocaleString("en-IN")}
            </p>
          </div>
          <Link
            to={`/packages/${pkg.id}`}
            className="flex items-center gap-2 rounded-lg bg-teal-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-900"
          >
            View trip <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
