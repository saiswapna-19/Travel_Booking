
import { useMemo, useState } from "react";
import { destinations } from "../data/data.js";
import DestinationCard from "../components/DestinationCard.jsx";

export default function Destinations() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("recommended");

  const regions = [...new Set(destinations.map(d => d.region))];
  const types = [...new Set(destinations.map(d => d.type))];

  const filtered = useMemo(() => {
    const result = destinations.filter(d =>
      `${d.name} ${d.region} ${d.description}`
        .toLowerCase().includes(search.toLowerCase()) &&
      (!region || d.region === region) &&
      (!type || d.type === type)
    );

    if (sort === "price") result.sort((a, b) => a.price - b.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [search, region, type, sort]);

  return (
    <div className="container section">
      <h1 className="mb-3 text-3xl font-bold">Explore India 🇮🇳</h1>
      <p className="mb-6 text-slate-600">Find your perfect Indian getaway.</p>

      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <input
          className="rounded-xl border p-3"
          placeholder="Search destinations..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select className="rounded-xl border p-3" value={region} onChange={e => setRegion(e.target.value)}>
          <option value="">All regions</option>
          {regions.map(r => <option key={r}>{r}</option>)}
        </select>

        <select className="rounded-xl border p-3" value={type} onChange={e => setType(e.target.value)}>
          <option value="">All trip types</option>
          {types.map(t => <option key={t}>{t}</option>)}
        </select>

        <select className="rounded-xl border p-3" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="recommended">Recommended</option>
          <option value="price">Price: Low to High</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <p className="mb-5 text-slate-600">{filtered.length} destinations found</p>

      {filtered.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-lg font-semibold">No destinations found.</p>
          <button
            onClick={() => { setSearch(""); setRegion(""); setType(""); setSort("recommended"); }}
            className="mt-3 rounded-lg bg-teal-700 px-4 py-2 text-white"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
