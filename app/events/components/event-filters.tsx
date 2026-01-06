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

interface EventFiltersProps {
  onFilterChange: (filters: {
    status: string;
    location: string;
    price: string;
    mode: string;
  }) => void;
}

export function EventFilters({ onFilterChange }: EventFiltersProps) {
  const [eventStatus, setEventStatus] = useState("Event Status");
  const [location, setLocation] = useState("Location");
  const [price, setPrice] = useState("Price");
  const [mode, setMode] = useState("Mode");

  const baseClasses =
    "w-full rounded-full justify-between bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300";

  const handleSelect = (filterType: string, value: string) => {
    if (filterType === "status") setEventStatus(value);
    if (filterType === "location") setLocation(value);
    if (filterType === "price") setPrice(value);
    if (filterType === "mode") setMode(value);

    onFilterChange({
      status: filterType === "status" ? value : eventStatus,
      location: filterType === "location" ? value : location,
      price: filterType === "price" ? value : price,
      mode: filterType === "mode" ? value : mode,
    });
  };

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
          <DropdownMenuItem onClick={() => handleSelect("status", "Upcoming")}>
            Upcoming
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("status", "Live")}>
            Live
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("status", "Completed")}>
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
          <DropdownMenuItem onClick={() => handleSelect("location", "Alabama")}>
            Alabama
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Alaska")}>
            Alaska
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Arizona")}>
            Arizona
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Arkansas")}
          >
            Arkansas
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "California")}
          >
            California
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Colorado")}
          >
            Colorado
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Connecticut")}
          >
            Connecticut
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Delaware")}
          >
            Delaware
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Florida")}>
            Florida
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Georgia")}>
            Georgia
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Hawaii")}>
            Hawaii
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Idaho")}>
            Idaho
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Illinois")}
          >
            Illinois
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Indiana")}>
            Indiana
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Iowa")}>
            Iowa
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Kansas")}>
            Kansas
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Kentucky")}
          >
            Kentucky
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Louisiana")}
          >
            Louisiana
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Maine")}>
            Maine
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Maryland")}
          >
            Maryland
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Massachusetts")}
          >
            Massachusetts
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Michigan")}
          >
            Michigan
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Minnesota")}
          >
            Minnesota
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Mississippi")}
          >
            Mississippi
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Missouri")}
          >
            Missouri
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Montana")}>
            Montana
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Nebraska")}
          >
            Nebraska
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Nevada")}>
            Nevada
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "New Hampshire")}
          >
            New Hampshire
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "New Jersey")}
          >
            New Jersey
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "New York")}
          >
            New York
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "North Carolina")}
          >
            North Carolina
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "North Dakota")}
          >
            North Dakota
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Ohio")}>
            Ohio
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Oklahoma")}
          >
            Oklahoma
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Oregon")}>
            Oregon
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Pennsylvania")}
          >
            Pennsylvania
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Rhode Island")}
          >
            Rhode Island
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "South Carolina")}
          >
            South Carolina
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "South Dakota")}
          >
            South Dakota
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Tennessee")}
          >
            Tennessee
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Texas")}>
            Texas
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Utah")}>
            Utah
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Vermont")}>
            Vermont
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Virginia")}
          >
            Virginia
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Washington")}
          >
            Washington
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "West Virginia")}
          >
            West Virginia
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("location", "Wisconsin")}
          >
            Wisconsin
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("location", "Wyoming")}>
            Wyoming
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
          <DropdownMenuItem onClick={() => handleSelect("price", "Free")}>
            Free
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("price", "$0 - $50")}>
            $0 - $50
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("price", "$50 - $100")}>
            $50 - $100
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("price", "$100+")}>
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
          <DropdownMenuItem onClick={() => handleSelect("mode", "Online")}>
            Online
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("mode", "In-Person")}>
            In-Person
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("mode", "Hybrid")}>
            Hybrid
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";

// interface EventFiltersProps {
//   onFilterChange: (filters: {
//     status: string;
//     location: string;
//     price: string;
//     mode: string;
//   }) => void;
// }

// export function EventFilters({ onFilterChange }: EventFiltersProps) {
//   const [eventStatus, setEventStatus] = useState("Event Status");
//   const [location, setLocation] = useState("Location");
//   const [price, setPrice] = useState("Price");
//   const [mode, setMode] = useState("Mode");

//   const baseClasses =
//     "w-full rounded-full justify-between bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300";

//   const handleSelect = (filterType: string, value: string) => {
//     if (filterType === "status") setEventStatus(value);
//     if (filterType === "location") setLocation(value);
//     if (filterType === "price") setPrice(value);
//     if (filterType === "mode") setMode(value);

//     onFilterChange({
//       status: filterType === "status" ? value : eventStatus,
//       location: filterType === "location" ? value : location,
//       price: filterType === "price" ? value : price,
//       mode: filterType === "mode" ? value : mode,
//     });
//   };

//   return (
//     <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
//       {/* Event Status */}
//       <DropdownMenu>
//         <DropdownMenuTrigger>
//           <Button variant="outline" className={baseClasses}>
//             {eventStatus}
//             <ChevronDown className="h-4 w-4 ml-2" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent
//           align="start"
//           className="bg-white dark:bg-[#212121]"
//         >
//           <DropdownMenuItem onClick={() => handleSelect("status", "Upcoming")}>
//             Upcoming
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => handleSelect("status", "Live")}>
//             Live
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => handleSelect("status", "Completed")}>
//             Completed
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       {/* Location */}
//       <DropdownMenu>
//         <DropdownMenuTrigger>
//           <Button variant="outline" className={baseClasses}>
//             {location}
//             <ChevronDown className="h-4 w-4 ml-2" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent
//           align="start"
//           className="bg-white dark:bg-[#212121]"
//         >
//           <DropdownMenuItem
//             onClick={() => handleSelect("location", "California")}
//           >
//             California
//           </DropdownMenuItem>
//           <DropdownMenuItem
//             onClick={() => handleSelect("location", "New York")}
//           >
//             New York
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => handleSelect("location", "Texas")}>
//             Texas
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       {/* Price */}
//       <DropdownMenu>
//         <DropdownMenuTrigger>
//           <Button variant="outline" className={baseClasses}>
//             {price}
//             <ChevronDown className="h-4 w-4 ml-2" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent
//           align="start"
//           className="bg-white dark:bg-[#212121]"
//         >
//           <DropdownMenuItem onClick={() => handleSelect("price", "Free")}>
//             Free
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => handleSelect("price", "$0 - $50")}>
//             $0 - $50
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => handleSelect("price", "$50 - $100")}>
//             $50 - $100
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => handleSelect("price", "$100+")}>
//             $100+
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       {/* Mode */}
//       <DropdownMenu>
//         <DropdownMenuTrigger>
//           <Button variant="outline" className={baseClasses}>
//             {mode}
//             <ChevronDown className="h-4 w-4 ml-2" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent
//           align="start"
//           className="bg-white dark:bg-[#212121]"
//         >
//           <DropdownMenuItem onClick={() => handleSelect("mode", "Online")}>
//             Online
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => handleSelect("mode", "In-Person")}>
//             In-Person
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => handleSelect("mode", "Hybrid")}>
//             Hybrid
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }
