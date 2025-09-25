"use client";
import { EventFilters } from "../components/event-filters";
import { EventCard } from "../components/event-card";
import { Pagination } from "../components/pagination";

const events = [
  {
    id: 1,
    title: "Starry Nights Music Fest",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-JKv8YY0TIIh30SYK4yHkLzLK5WWegl.jpeg",
    price: "$99.99",
    host: "Eric Gryzbowski",
    location: "California",
    date: "13 June 2025",
    audience: "150 Audience",
    time: "08:00 PM - 09:00 PM",
  },
  {
    id: 2,
    title: "Starry Nights Music Fest",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ff2ccd6179f4d0604a066b8fd23a5f4933e4077-HzUp8sgJcqGW0T7Q80XNuq0QcfMBon.png",
    price: "$99.99",
    host: "Eric Gryzbowski",
    location: "California",
    date: "13 June 2025",
    audience: "150 Audience",
    time: "08:00 PM - 09:00 PM",
  },
  {
    id: 3,
    title: "Starry Nights Music Fest",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b112e96ec04d346fcc66b1d1159b2a1e15f9c927-CPyMJQkvJNWULRfG4xkS1pY5wUf6Fj.png",
    price: "$99.99",
    host: "Eric Gryzbowski",
    location: "California",
    date: "13 June 2025",
    audience: "150 Audience",
    time: "08:00 PM - 09:00 PM",
  },
  {
    id: 4,
    title: "Starry Nights Music Fest",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b58c2eee2dce26882ed2a1a5fce4c8580b6e521f.png-K59LIGXskPmaTNvTXhT1ar3AJvtffs.jpeg",
    price: "$99.99",
    host: "Eric Gryzbowski",
    location: "California",
    date: "13 June 2025",
    audience: "150 Audience",
    time: "08:00 PM - 09:00 PM",
  },
  {
    id: 5,
    title: "Starry Nights Music Fest",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ff2ccd6179f4d0604a066b8fd23a5f4933e4077-HzUp8sgJcqGW0T7Q80XNuq0QcfMBon.png",
    price: "$99.99",
    host: "Eric Gryzbowski",
    location: "California",
    date: "13 June 2025",
    audience: "150 Audience",
    time: "08:00 PM - 09:00 PM",
  },
  {
    id: 6,
    title: "Starry Nights Music Fest",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-JKv8YY0TIIh30SYK4yHkLzLK5WWegl.jpeg",
    price: "$99.99",
    host: "Eric Gryzbowski",
    location: "California",
    date: "13 June 2025",
    audience: "150 Audience",
    time: "08:00 PM - 09:00 PM",
  },
];

export function EventsSection() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full outline px-3 py-2 text-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-[#D19537]"></span>
          <span className="text-gray-700 dark:text-gray-300">Events</span>
        </div>
      </div>

      <div className="mb-12">
        <h1 className="mb-4 text-5xl font-bold text-black dark:text-white">
          Explore <span className="italic text-[#D19537]">Events</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          Discover a variety of events designed to inspire, educate, and connect
          you with like-minded individuals.
        </p>
      </div>

      <EventFilters />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <Pagination />
    </main>
  );
}
