import {
  Pagination as PaginationWrapper,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  total: number | null;
}

export default function Pagination({
  currentPage,
  total,
  pageSize,
}: PaginationProps) {
  const totalPages = Math.ceil((total ?? 0) / pageSize);
  const maxVisiblePages = 5;

  const getStartPage = () => {
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    // Calculate the initial starting page based on the current page and max visible pages
    const initialStartPage = currentPage - halfVisiblePages;

    // Ensure the start page is within valid bounds (1 <= startPage <= totalPages - maxVisiblePages + 1)
    const startPage = Math.max(
      1,
      Math.min(initialStartPage, totalPages - maxVisiblePages + 1)
    );

    return startPage;
  };

  const getEndPage = () => {
    // The end page is simply the start page plus max visible pages minus 1, ensuring it doesn't exceed total pages
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    return endPage;
  };

  const startPage = getStartPage();
  const endPage = getEndPage();

  return (
    <div className="mt-4 flex justify-center">
      <PaginationWrapper>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${currentPage - 1}`}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
          {Array.from(
            { length: endPage - startPage + 1 },
            (_, index) => startPage + index
          ).map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={`?page=${pageNumber}`}
                isActive={currentPage === pageNumber}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          {endPage < totalPages && <PaginationEllipsis />}
          <PaginationItem>
            <PaginationNext
              href={`?page=${currentPage + 1}`}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationWrapper>
    </div>
  );
}