import type { ColumnDef } from "@tanstack/react-table";
import type { ClassNameValue } from "tailwind-merge";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
  error?: string | null;
  search?: { 
    placeholder: string; 
    targetColumn: keyof TData | string;
  };
  filterOptions?: Array<{
    label: string;
    columnKey: string;
  }>
  withBorderBody?: boolean;
  className?: ClassNameValue
}
