
import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Users, MapPin, Trash2 } from "lucide-react";

export default function MyBookings() {
  const [bookings, setBookings] = useState(() =>
    JSON.parse(localStorage.getItem("bookings") || "[]")
  );

  function cancelBooking(id) {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    const updated = bookings.filter(booking => booking.id !== id);
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  }

  return (
    <div className="container section">
      <h1 className="text-3xl font-extrabold text-slate-900">My Bookings</h1>
      <p className="mt-2 text-slate-500">Manage your upcoming adventures in India.</p>

      {!bookings.length ? (
        <div className="mt-10 rounded-2xl border border-dashed p-10 text-center">
          <MapPin size={38} className="mx-auto text-teal-700" />
          <h2 className="mt-4 text-xl font-bold">No bookings yet</h2>
          <p className="mt-2 text-slate-500">Your next adventure is waiting for you.</p>
          <Link to="/destinations" className="mt-5 inline-block rounded-xl bg-teal-800 px-5 py-3 font-semibold text-white">
            Explore destinations
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-5">
          {bookings.map(booking => (
            <article key={booking.id} className="overflow-hidden rounded-2xl border bg-white sm:flex">
              <img
                src={booking.image}
                alt={booking.packageName}
                className="h-52 w-full object-cover sm:h-auto sm:w-56"
              />
              <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
                <div>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                    {booking.status || "Confirmed"}
                  </span>
                  <h2 className="mt-3 text-xl font-bold">{booking.packageName}</h2>
                  <p className="mt-2 text-sm text-slate-500">Booked by {booking.name}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1"><CalendarDays size={16} /> {booking.date}</span>
                    <span className="flex items-center gap-1"><Users size={16} /> {booking.travellers} traveller(s)</span>
                  </div>
                  <p className="mt-3 text-lg font-extrabold text-teal-800">
                    ₹{Number(booking.total).toLocaleString("en-IN")}
                  </p>
                </div>
                <button
                  onClick={() => cancelBooking(booking.id)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                  <Trash2 size={16} /> Cancel booking
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
