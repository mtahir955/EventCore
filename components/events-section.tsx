"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Star } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Starry Nights Music Fest",
    host: "Eric Gryzbowski",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    date: "13 June 2025",
    time: "08:00 PM - 09:00 PM",
    location: "California",
    attendees: "150 Audience",
    price: "$99.99",
    image: "/images/purple-venue.jpg",
  },
  {
    id: 2,
    title: "Starry Nights Music Fest",
    host: "Eric Gryzbowski",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    date: "13 June 2025",
    time: "08:00 PM - 09:00 PM",
    location: "California",
    attendees: "150 Audience",
    price: "$99.99",
    image: "/images/concert-crowd.jpg",
  },
  {
    id: 3,
    title: "Starry Nights Music Fest",
    host: "Eric Gryzbowski",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    date: "13 June 2025",
    time: "08:00 PM - 09:00 PM",
    location: "California",
    attendees: "150 Audience",
    price: "$99.99",
    image: "/images/blue-presentation.jpg",
  },
  {
    id: 4,
    title: "Starry Nights Music Fest",
    host: "Eric Gryzbowski",
    description:
      "A magical evening under the stars with live bands, food stalls, and an electric crowd.",
    date: "13 June 2025",
    time: "08:00 PM - 09:00 PM",
    location: "California",
    attendees: "150 Audience",
    price: "$99.99",
    image: "/images/modern-venue.jpg",
  },
];

export function EventsSection() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Explore Our{" "}
            <span className="text-[#D19537] italic">Top Events</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-[15px] max-w-2xl mx-auto">
            Explore our top events and discover the most exciting and
            must-attend experiences around you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event) => (
            <Card
              key={event.id}
              className="group overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Price tag in top right */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {event.price}
                  </span>
                </div>
                {/* Star icon in bottom right */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Star className="h-5 w-5 text-white fill-white" />
                  </div>
                </div>
                {/* Host info overlay */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-medium">
                    Host By : {event.host}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#D19537] transition-colors">
                  {event.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-row sm:flex-row justify-center lg:justify-start items-center sm:items-stretch text-center gap-3 sm:gap-4">
          <Link href="/events">
          <Button className="bg-[#D19537] hover:bg-[#B8832F] text-white px-8 py-3 rounded-full w-[130px] sm:w-auto">
            View All Events
          </Button>
          </Link>
          <Link href="/contact-us">
          <Button
            variant="outline"
            className="px-8 py-3 rounded-full border-[#D19537] text-[#D19537] hover:bg-[#D19537]/10 dark:hover:bg-[#D19537]/20 bg-transparent w-[130px] sm:w-auto"
          >
            Contact Now
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
