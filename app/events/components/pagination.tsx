"use client";

import { Button } from "@/components/ui/button";

export function Pagination() {
  const base =
    "h-10 w-10 rounded-lg border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#212121] bg-transparent";

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="default"
        size="sm"
        className="h-10 w-10 rounded-lg bg-[#D19537] text-white hover:bg-[#B8832F]"
      >
        1
      </Button>
      <Button variant="outline" size="sm" className={base}>
        2
      </Button>
      <Button variant="outline" size="sm" className={base}>
        3
      </Button>
      <span className="px-2 text-gray-400">...</span>
      <Button variant="outline" size="sm" className={base}>
        67
      </Button>
      <Button variant="outline" size="sm" className={base}>
        68
      </Button>
    </div>
  );
}
