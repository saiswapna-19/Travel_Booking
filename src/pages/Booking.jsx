
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { getPackage } from "../data/data.js";

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = getPackage(id);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", travellers: 1,
  });
  const [error, setError] = useState("");

  if (!pkg) {
    return (
      <div className="container section text-center">
        <h2 className="text-2xl font-bold">Package not found</h2>
        <Link to="/destinations" className="mt-4 inline-block text-teal-700">
          Explore trips →
        </Link>
      </div>
    );
  }

  const total = Number(pkg.price) * Number(form.travellers);

  function handleSubmit(e) {
    e.preventDefault();

    if (new Date(form.date + "T00:00:00") < new Date(new Date().toDateString())) {
      setError("Please select today or a future travel date.");
      return;
    }

    const booking = {
      ...form,
      id: Date.now(),
      packageId: pkg.id,
      packageName: pkg.title || `${pkg.name} Getaway`,
      image: pkg.image,
      price: Number(pkg.price),
      total,
      status: "Confirmed",
    };

    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...bookings, booking]));
    navigate("/bookings");
  }

  return (
    <div className="container section">
      <h1 className="text-3xl font-extrabold">Book your trip</h1>
      <p className="mt-2 text-slate-500">Complete your details to reserve your getaway.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border bg-white p-6">
          {[
            ["name", "Full name", "text"],
            ["email", "Email address", "email"],
            ["phone", "Phone number", "tel"],
          ].map(([key, label, type]) => (
            <label key={key} className="block text-sm font-semibold text-slate-700">
              {label}
              <input
                required
                type={type}
                value={form[key]}
                onChange={e => setForm({ ...form, [key]: e.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-teal-700"
                placeholder={label}
              />
            </label>
          ))}

          <label className="block text-sm font-semibold text-slate-700">
            Travel date
            <input
              required
              type="date"
              min={new Date().toLocaleDateString("en-CA")}
              value={form.date}
              onChange={e => setForm({ ...form, date: e.target.value })}
              className="mt-2 w-full rounded-xl border border-slate-300 p-3"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Number of travellers
            <select
              value={form.travellers}
              onChange={e => setForm({ ...form, travellers: Number(e.target.value) })}
              className="mt-2 w-full rounded-xl border border-slate-300 p-3"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? "traveller" : "travellers"}</option>
              ))}
            </select>
          </label>

          {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

          <button className="w-full rounded-xl bg-teal-800 p-3 font-bold text-white hover:bg-teal-900">
            Confirm booking · ₹{total.toLocaleString("en-IN")}
          </button>
        </form>

        <aside className="h-fit overflow-hidden rounded-2xl border bg-white shadow-sm">
          <img src={pkg.image} alt={pkg.name} className="h-48 w-full object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-bold">{pkg.title || `${pkg.name} Getaway`}</h2>
            <p className="mt-2 text-sm text-slate-500">{pkg.days} days · {form.travellers} traveller(s)</p>
            <div className="mt-5 space-y-3 border-t pt-4 text-sm">
              <p className="flex justify-between gap-3"><span>Price per traveller</span><span>₹{Number(pkg.price).toLocaleString("en-IN")}</span></p>
              <p className="flex justify-between gap-3"><span>Travellers</span><span>× {form.travellers}</span></p>
              <p className="flex justify-between gap-3 border-t pt-3 text-base font-extrabold"><span>Total</span><span className="text-teal-800">₹{total.toLocaleString("en-IN")}</span></p>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-500"><CheckCircle size={15} className="text-teal-700" /> Demo booking · No payment required</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
