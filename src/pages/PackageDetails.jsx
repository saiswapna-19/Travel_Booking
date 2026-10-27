
import { Link, useParams } from "react-router-dom";
import { MapPin, Star, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { getPackage } from "../data/data.js";

export default function PackageDetails() {
  const { id } = useParams();
  const pkg = getPackage(id);

  if (!pkg) {
    return (
      <div className="container section text-center">
        <h2 className="text-2xl font-bold">Package not found</h2>
        <Link to="/destinations" className="mt-4 inline-block text-teal-700">
          Explore destinations →
        </Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <img
        src={pkg.image}
        alt={pkg.name}
        className="h-64 w-full rounded-2xl object-cover sm:h-96"
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <section>
          <p className="flex items-center gap-2 text-sm text-teal-700">
            <MapPin size={16} /> {pkg.region}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {pkg.title || `${pkg.name} Getaway`}
          </h1>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1"><Star size={16} className="text-amber-500" /> {pkg.rating} rating</span>
            <span className="flex items-center gap-1"><Clock size={16} /> {pkg.days} days</span>
            <span>{pkg.type}</span>
          </div>

          <p className="mt-6 leading-7 text-slate-600">{pkg.description}</p>

          <h2 className="mt-8 text-2xl font-bold">Your trip itinerary</h2>
          <div className="mt-4 space-y-3">
            {(pkg.itinerary || []).length ? pkg.itinerary.map((day, i) => (
              <div key={i} className="flex gap-4 rounded-xl border p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-50 font-bold text-teal-800">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">Day {i + 1}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {typeof day === "string" ? day : day.title || day.description || `Explore ${pkg.name}`}
                  </p>
                </div>
              </div>
            )) : <p className="text-slate-500">Explore local attractions and enjoy your trip.</p>}
          </div>

          <h2 className="mt-8 text-2xl font-bold">What's included</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {(pkg.inclusions || ["Accommodation", "Local sightseeing", "Travel assistance"]).map((item, i) => (
              <p key={i} className="flex items-center gap-2 text-slate-600">
                <CheckCircle size={18} className="text-teal-700" /> {item}
              </p>
            ))}
          </div>
        </section>

        <aside className="h-fit rounded-2xl border bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <p className="text-sm text-slate-500">Package price per person</p>
          <p className="mt-1 text-3xl font-extrabold text-teal-800">
            ₹{Number(pkg.price).toLocaleString("en-IN")}
          </p>
          <p className="mt-2 text-sm text-slate-500">{pkg.days} days · India</p>
          <Link
            to={`/book/${pkg.id}`}
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-teal-800 px-5 py-3 font-bold text-white hover:bg-teal-900"
          >
            Book this trip <ArrowRight size={18} />
          </Link>
          <p className="mt-4 text-center text-xs text-slate-500">
            Plan your next unforgettable getaway.
          </p>
        </aside>
      </div>
    </div>
  );
}
