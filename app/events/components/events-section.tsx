"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { EventFilters } from "../components/event-filters";
import { EventCard } from "../components/event-card";
import { Pagination } from "../components/pagination";
import { API_BASE_URL } from "../../../config/apiConfig";
// import { HOST_Tenant_ID } from "@/config/hostTenantId";
import { resolveFileUrl } from "@/utils/resolveFileUrl";

interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  location: string;
  date: string;
  time: string;
  status: string;
  mode: string;
}

export function EventsSection() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    status: "Event Status",
    location: "Location",
    price: "Price",
    mode: "Mode",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  /* ───────── FETCH ALL EVENTS ───────── */
  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/events/all`, {
          // headers: {
          //   "x-tenant-id": HOST_Tenant_ID,
          // },
        });

        const apiEvents = res.data?.data?.events || [];
        const mappedEvents = apiEvents.map((event: any) => ({
          ...event,
          image: resolveFileUrl(event.image),
        }));

        setEvents(mappedEvents);
      } catch (error) {
        console.error("Failed to fetch events", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllEvents();
  }, []);

  /* ───────── FILTER LOGIC ───────── */
  const filteredEvents = events.filter((event) => {
    return (
      (filters.status === "Event Status" || event.status === filters.status) &&
      (filters.location === "Location" ||
        event.location === filters.location) &&
      (filters.price === "Price" || event.price === filters.price) &&
      (filters.mode === "Mode" || event.mode === filters.mode)
    );
  });

  /* ───────── PAGINATION ───────── */
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* Heading */}
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

      {/* Filters */}
      <EventFilters onFilterChange={setFilters} />

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {loading ? (
          <p className="text-gray-600 dark:text-gray-300">Loading events...</p>
        ) : currentEvents.length > 0 ? (
          currentEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300">
            No events match your filters.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}

//code before integration

// "use client";
// import { useState } from "react";
// import { EventFilters } from "../components/event-filters";
// import { EventCard } from "../components/event-card";
// import { Pagination } from "../components/pagination";

// const events = [
//   {
//     id: 1,
//     title: "Starry Nights Music Fest",
//     description:
//       "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-JKv8YY0TIIh30SYK4yHkLzLK5WWegl.jpeg",
//     price: "$99.99",
//     location: "California",
//     date: "13 June 2025",
//     time: "08:00 PM - 09:00 PM",
//     status: "Upcoming",
//     mode: "Online",
//   },
//   {
//     id: 2,
//     title: "Business Growth Summit",
//     description: "Learn from top industry leaders about scaling your business.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ff2ccd6179f4d0604a066b8fd23a5f4933e4077-HzUp8sgJcqGW0T7Q80XNuq0QcfMBon.png",
//     price: "Free",
//     location: "New York",
//     date: "21 June 2025",
//     time: "10:00 AM - 04:00 PM",
//     status: "Live",
//     mode: "In-Person",
//   },
//   {
//     id: 3,
//     title: "Tech Future Expo",
//     description: "Explore the future of technology with top innovators.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b112e96ec04d346fcc66b1d1159b2a1e15f9c927-CPyMJQkvJNWULRfG4xkS1pY5wUf6Fj.png",
//     price: "$50 - $100",
//     location: "Texas",
//     date: "5 July 2025",
//     time: "09:00 AM - 06:00 PM",
//     status: "Completed",
//     mode: "Hybrid",
//   },
//   {
//     id: 4,
//     title: "Yoga & Wellness Retreat",
//     description: "A day of peace, meditation, and rejuvenation.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b58c2eee2dce26882ed2a1a5fce4c8580b6e521f.png-K59LIGXskPmaTNvTXhT1ar3AJvtffs.jpeg",
//     price: "$0 - $50",
//     location: "California",
//     date: "10 July 2025",
//     time: "07:00 AM - 02:00 PM",
//     status: "Upcoming",
//     mode: "In-Person",
//   },
//   {
//     id: 5,
//     title: "Startup Pitch Night",
//     description:
//       "Watch startups pitch to investors and network with entrepreneurs.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ff2ccd6179f4d0604a066b8fd23a5f4933e4077-HzUp8sgJcqGW0T7Q80XNuq0QcfMBon.png",
//     price: "$100+",
//     location: "New York",
//     date: "15 August 2025",
//     time: "06:00 PM - 10:00 PM",
//     status: "Live",
//     mode: "Hybrid",
//   },
//   {
//     id: 6,
//     title: "AI & Blockchain Conference",
//     description: "The biggest conference on AI, blockchain, and future tech.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-JKv8YY0TIIh30SYK4yHkLzLK5WWegl.jpeg",
//     price: "$50 - $100",
//     location: "Texas",
//     date: "25 August 2025",
//     time: "09:00 AM - 05:00 PM",
//     status: "Completed",
//     mode: "Online",
//   },
//   {
//     id: 7,
//     title: "Creative Branding Workshop",
//     description:
//       "A hands-on session for designers and entrepreneurs to build strong brand identities.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event-branding-workshop.png",
//     price: "$49.99",
//     location: "Los Angeles",
//     date: "1 September 2025",
//     time: "11:00 AM - 04:00 PM",
//     status: "Upcoming",
//     mode: "In-Person",
//   },
//   {
//     id: 8,
//     title: "Remote Work Mastery",
//     description:
//       "Learn productivity hacks and communication tools for distributed teams.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event-remote-work.png",
//     price: "Free",
//     location: "Online",
//     date: "3 September 2025",
//     time: "06:00 PM - 07:30 PM",
//     status: "Upcoming",
//     mode: "Online",
//   },
// ];

// export function EventsSection() {
//   const [filters, setFilters] = useState({
//     status: "Event Status",
//     location: "Location",
//     price: "Price",
//     mode: "Mode",
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const eventsPerPage = 4;

//   // ✅ Filter Logic
//   const filteredEvents = events.filter((event) => {
//     return (
//       (filters.status === "Event Status" || event.status === filters.status) &&
//       (filters.location === "Location" ||
//         event.location === filters.location) &&
//       (filters.price === "Price" || event.price === filters.price) &&
//       (filters.mode === "Mode" || event.mode === filters.mode)
//     );
//   });

//   // ✅ Pagination Logic
//   const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
//   const startIndex = (currentPage - 1) * eventsPerPage;
//   const endIndex = startIndex + eventsPerPage;
//   const currentEvents = filteredEvents.slice(startIndex, endIndex);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <main className="mx-auto max-w-7xl px-6 py-12">
//       {/* Heading */}
//       <div className="mb-8">
//         <div className="inline-flex items-center rounded-full outline px-3 py-2 text-sm">
//           <span className="mr-2 h-2 w-2 rounded-full bg-[#D19537]"></span>
//           <span className="text-gray-700 dark:text-gray-300">Events</span>
//         </div>
//       </div>

//       <div className="mb-12">
//         <h1 className="mb-4 text-5xl font-bold text-black dark:text-white">
//           Explore <span className="italic text-[#D19537]">Events</span>
//         </h1>
//         <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
//           Discover a variety of events designed to inspire, educate, and connect
//           you with like-minded individuals.
//         </p>
//       </div>

//       {/* Filters */}
//       <EventFilters onFilterChange={setFilters} />

//       {/* Events Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//         {currentEvents.length > 0 ? (
//           currentEvents.map((event) => (
//             <EventCard key={event.id} event={event} />
//           ))
//         ) : (
//           <p className="text-gray-600 dark:text-gray-300">
//             No events match your filters.
//           </p>
//         )}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       )}
//     </main>
//   );
// }
