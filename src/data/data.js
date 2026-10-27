
export const destinations = [
  {
    id: "goa",
    name: "Goa",
    region: "West India",
    type: "Beach",
    days: 4,
    price: 8999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Relax on beautiful beaches, enjoy water sports, and explore Portuguese heritage.",
  },
  {
    id: "kerala",
    name: "Alleppey, Kerala",
    region: "South India",
    type: "Nature",
    days: 5,
    price: 12999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    description:
      "Cruise through peaceful backwaters, enjoy houseboats, and discover lush greenery.",
  },
  {
    id: "manali",
    name: "Manali, Himachal Pradesh",
    region: "North India",
    type: "Mountains",
    days: 5,
    price: 14999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    description:
      "Experience Himalayan scenery, mountain adventures, and beautiful valleys.",
  },
  {
    id: "jaipur",
    name: "Jaipur, Rajasthan",
    region: "West India",
    type: "Heritage",
    days: 3,
    price: 7999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Discover royal palaces, historic forts, colorful markets, and Rajasthani cuisine.",
  },
  {
    id: "agra",
    name: "Agra, Uttar Pradesh",
    region: "North India",
    type: "Heritage",
    days: 2,
    price: 5999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    description:
      "Visit the iconic Taj Mahal and explore India's rich Mughal history.",
  },
  {
    id: "ooty",
    name: "Ooty, Tamil Nadu",
    region: "South India",
    type: "Nature",
    days: 3,
    price: 7499,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Enjoy misty hills, tea gardens, scenic train rides, and cool mountain weather.",
  },
  {
    id: "darjeeling",
    name: "Darjeeling, West Bengal",
    region: "East India",
    type: "Mountains",
    days: 4,
    price: 9999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore tea plantations, mountain viewpoints, and charming Himalayan streets.",
  },
  {
    id: "varanasi",
    name: "Varanasi, Uttar Pradesh",
    region: "North India",
    type: "Spiritual",
    days: 3,
    price: 6999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    description:
      "Experience the sacred Ganges, ancient temples, and the evening Ganga Aarti.",
  },
  {
    id: "kashmir",
    name: "Srinagar, Kashmir",
    region: "North India",
    type: "Nature",
    days: 5,
    price: 17999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Enjoy Dal Lake, houseboats, mountain views, gardens, and beautiful valleys.",
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    region: "Islands",
    type: "Beach",
    days: 6,
    price: 22999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    description:
      "Discover turquoise waters, tropical beaches, snorkeling, and island adventures.",
  },
];

export const packages = destinations.map((destination) => ({
  ...destination,
  title: `${destination.days}-Day ${destination.name} Getaway`,
  itinerary: [
    `Day 1: Arrival and explore ${destination.name}`,
    `Day 2: Discover popular attractions and local culture`,
    ...(destination.days >= 3
      ? ["Day 3: Enjoy local experiences and sightseeing"]
      : []),
    ...(destination.days >= 4
      ? ["Day 4: Explore nearby attractions and enjoy free time"]
      : []),
    ...(destination.days >= 5
      ? ["Day 5: Discover more highlights and local cuisine"]
      : []),
    ...(destination.days >= 6
      ? ["Day 6: Relax, shop, and depart"]
      : []),
  ],
  inclusions: [
    "Accommodation",
    "Local sightseeing",
    "Travel assistance",
    "Selected activities",
  ],
}));

export function getPackage(id) {
  return packages.find((item) => item.id === id);
}
