import type { ComponentType } from "react";

import type { Column } from "@tanstack/react-table";

export interface FilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title: string;
  options: {
    label: string;
    value: string;
    icon?: ComponentType<{ className?: string }>;
  }[];
  isDisabled?: boolean;
}