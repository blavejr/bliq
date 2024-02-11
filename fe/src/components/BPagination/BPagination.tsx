"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

interface BPaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
}

export default function BPagination({ currentPage, setPage }: BPaginationProps): React.ReactElement{
  const onPageChange = (page: number) => setPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  );
}
