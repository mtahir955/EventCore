"use client";

import { useState } from "react";
import { Heart, MapPin, Calendar, Users, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  location: string;
  date: string;
  time: string;
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#212121] shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Price Tag */}
        <div className="absolute top-4 right-4 rounded-full bg-white dark:bg-black px-3 py-1 text-sm font-semibold text-black dark:text-white shadow-md">
          {event.price}
        </div>

        {/* Heart Icon */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 left-4 h-8 w-8 rounded-full bg-white/80 dark:bg-black/60 p-0 hover:bg-white dark:hover:bg-black"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            className={`h-4 w-4 ${
              isLiked
                ? "fill-red-500 text-red-500"
                : "text-gray-600 dark:text-gray-300"
            }`}
          />
        </Button>

        {/* Plus Icon */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-black/80 dark:bg-white/80 p-0 text-white dark:text-black hover:bg-black dark:hover:bg-white"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          Host By: {event.host}
        </p> */}
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white group-hover:text-[#D19537] transition-colors">
          {event.title}
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {event.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
            <Calendar className="ml-4 mr-2 h-4 w-4" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            {/* <Users className="mr-2 h-4 w-4" />
            {event.audience} */}
            <Clock className="ml-4 mr-2 h-4 w-4" />
            {event.time}
          </div>
        </div>
      </div>
    </div>
  );
}
