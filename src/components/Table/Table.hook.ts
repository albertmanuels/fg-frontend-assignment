import { useState } from 'react'

import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnFiltersState,
} from '@tanstack/react-table';

import type { DataTableProps } from './Table.types';

const useTable = <TData, TValue>(props: DataTableProps<TData, TValue>) => {
  const { data, columns, maxHeight = "md" } = props;
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const getMaxHeightClass = () => {
    switch (maxHeight) {
      case 'sm':
        return 'max-h-48';
      case 'md':
        return 'max-h-72';
      case 'lg':
        return 'max-h-96';
      case 'xl':
        return 'max-h-screen';
      default:
        return 'max-h-72';
    }
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return {
    table,
    getMaxHeightClass
  }
}

export default useTable