"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function EventFilters() {
  const [eventStatus, setEventStatus] = useState("Event Status");
  const [location, setLocation] = useState("Location");
  const [price, setPrice] = useState("Price");
  const [mode, setMode] = useState("Mode");

  const baseClasses =
    "w-full rounded-full justify-between bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300";

  return (
    <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Event Status */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className={baseClasses}>
            {eventStatus}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-white dark:bg-[#212121]"
        >
          <DropdownMenuItem onClick={() => setEventStatus("Upcoming")}>
            Upcoming
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setEventStatus("Live")}>
            Live
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setEventStatus("Completed")}>
            Completed
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Location */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className={baseClasses}>
            {location}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-white dark:bg-[#212121]"
        >
          <DropdownMenuItem onClick={() => setLocation("California")}>
            California
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLocation("New York")}>
            New York
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLocation("Texas")}>
            Texas
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Price */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className={baseClasses}>
            {price}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-white dark:bg-[#212121]"
        >
          <DropdownMenuItem onClick={() => setPrice("Free")}>
            Free
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPrice("$0 - $50")}>
            $0 - $50
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPrice("$50 - $100")}>
            $50 - $100
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPrice("$100+")}>
            $100+
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Mode */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className={baseClasses}>
            {mode}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-white dark:bg-[#212121]"
        >
          <DropdownMenuItem onClick={() => setMode("Online")}>
            Online
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode("In-Person")}>
            In-Person
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode("Hybrid")}>
            Hybrid
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
