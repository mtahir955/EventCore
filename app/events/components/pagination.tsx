"use client";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const base =
    "h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#212121] bg-transparent";

  // Generate visible page numbers (up to 5 pages around the current)
  const visiblePages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 2 && page <= currentPage + 2)
  );

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Prev Button */}
      <Button
        variant="outline"
        size="sm"
        className={base}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </Button>

      {/* Page Numbers */}
      {visiblePages.map((page, idx) => (
        <Button
          key={idx}
          variant={page === currentPage ? "default" : "outline"}
          size="sm"
          className={`h-10 w-10 rounded-lg ${
            page === currentPage
              ? "bg-[#D19537] text-white hover:bg-[#B8832F]"
              : base
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        className={base}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </Button>
    </div>
  );
}
