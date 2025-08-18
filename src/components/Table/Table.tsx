import { flexRender } from '@tanstack/react-table';
import { X } from 'lucide-react';

import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import useTable from './Table.hook';
import { generateUniqueOptions } from './Table.utils';
import { Button } from '../ui/button';

import type { DataTableProps } from './Table.types';

const DataTable = <TData, TValue>(props: DataTableProps<TData, TValue>) => {
  const {
    data,
    columns,
    isLoading = false,
    error = null,
    search = {
      placeholder: 'Search by name...',
      targetColumn: 'name' as keyof TData,
    },
    filterOptions = [],
  } = props;
  const { table } = useTable<TData, TValue>(props);

  const renderSearchbar = () => {
    return (
      <Input
        className="w-full sm:max-w-sm"
        placeholder={search.placeholder}
        value={(table.getColumn(String(search.targetColumn))?.getFilterValue() as string) ?? ''}
        onChange={(e) => table.getColumn(String(search.targetColumn))?.setFilterValue(e.target.value)}
        disabled={isLoading}
      />
    );
  };

  const renderFilter = () => {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
      <div className="flex items-center gap-2 flex-wrap">
        {filterOptions.length > 0 &&
          filterOptions.map((filter) => {
            if (table.getColumn(filter.columnKey as string)) {
              return (
                <Filter
                  key={filter.columnKey as string}
                  column={table.getColumn(filter.columnKey as string)}
                  title={filter.label}
                  options={generateUniqueOptions(data, filter.columnKey as keyof TData)}
                  isDisabled={isLoading}
                />
              );
            }
            return null;
          })}

        {isFiltered && (
          <Button variant="ghost" size="sm" onClick={() => table.resetColumnFilters()}>
            Reset <X />
          </Button>
        )}
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

    if (table.getRowModel().rows.length) {
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
      <div className="flex flex-col sm:flex-row sm:items-center py-4 gap-2">
        {renderSearchbar()}
        {renderFilter()}
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader className="bg-gray-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
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
