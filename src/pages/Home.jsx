
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ShieldCheck, Headphones, Star } from "lucide-react";
import { destinations, packages } from "../data/data.js";
import DestinationCard from "../components/DestinationCard.jsx";
import PackageCard from "../components/PackageCard.jsx";

export default function Home() {
  return (
    <div className="bg-white text-slate-800">

      {/* Hero Section */}
      <section
        className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,30,35,0.55), rgba(5,30,35,0.65)), url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        <div className="container py-24 text-center text-white">

          <span className="inline-block rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
            🇮🇳 Discover Incredible India
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Your Next Great Adventure Starts Here
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Explore India's beautiful beaches, peaceful hill stations,
            historic cities, and unforgettable destinations with travel
            packages designed for you.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-7 py-4 font-bold text-white transition hover:bg-teal-400"
            >
              Explore Destinations <ArrowRight size={18} />
            </Link>

            <Link
              to="/bookings"
              className="rounded-xl border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-teal-950"
            >
              My Bookings
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/90">
            <span>✓ Beautiful destinations</span>
            <span>✓ Easy booking</span>
            <span>✓ Memorable experiences</span>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="border-b border-slate-100 bg-white">
        <div className="container grid gap-7 py-8 sm:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Amazing Places",
              text: "Discover destinations across India",
            },
            {
              icon: ShieldCheck,
              title: "Easy Booking",
              text: "Plan your next holiday with ease",
            },
            {
              icon: Headphones,
              title: "Travel Assistance",
              text: "Get help with your travel plans",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
                <Icon size={26} />
              </div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container section">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-teal-700">
              Explore India
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Popular Destinations
            </h2>
            <p className="mt-3 text-slate-500">
              Discover places you'll never forget.
            </p>
          </div>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 font-bold text-teal-700 hover:text-teal-900"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </section>

      {/* Featured Packages */}
      <section className="bg-slate-50">
        <div className="container section">
          <div className="mb-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-teal-700">
              Handpicked for You
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Featured Travel Packages
            </h2>
            <p className="mt-3 text-slate-500">
              Find a trip that matches your travel dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-16">
        <div className="rounded-3xl bg-teal-950 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <Star className="mx-auto mb-5 text-amber-300" size={32} />

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Your India Adventure Awaits
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-teal-100">
            From the Himalayas to tropical beaches, discover the beauty
            of India and make memories that last a lifetime.
          </p>

          <Link
            to="/destinations"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-teal-950 transition hover:bg-teal-50"
          >
            Plan Your Trip <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
