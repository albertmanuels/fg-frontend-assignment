import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import type { DataTableProps } from './Table.types';
import Pagination from './components/Pagination';
import { Input } from '../ui/input';
import { useState } from 'react';

const DataTable = <TData, TValue>({
  data,
  columns,
  isLoading = false,
  error = null,
  search = {
    placeholder: 'Search by email...',
    targetColumn: 'email',
  },
}: DataTableProps<TData, TValue>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
    },
  });

  const renderSearchbar = () => {
    return (
      <div className="flex items-center py-4">
        <Input
          className="max-w-sm"
          placeholder={search.placeholder}
          value={(table.getColumn(search.targetColumn)?.getFilterValue() as string) ?? ''}
          onChange={(e) => table.getColumn(search.targetColumn)?.setFilterValue(e.target.value)}
        />
      </div>
    );
  };

  const renderTableBody = () => {
    if (error) {
      return (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center text-red-600">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm">Error: {error}</span>
            </div>
          </TableCell>
        </TableRow>
      );
    }

    if (isLoading) {
      return Array.from({ length: 5 }).map((_, index) => (
        <TableRow key={`loading-${index}`}>
          {columns.map((_, colIndex) => (
            <TableCell key={`loading-cell-${colIndex}`} className="h-12">
              <div className="animate-pulse bg-gray-200 rounded h-4 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ));
    }

    if (table.getRowModel().rows.length > 0) {
      return table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
          ))}
        </TableRow>
      ));
    }

    return (
      <TableRow>
        <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
          No results found.
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div>
      {renderSearchbar()}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader className="bg-gray-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>{renderTableBody()}</TableBody>
        </Table>
      </div>
      <Pagination table={table} />
    </div>
  );
};

export default DataTable;
