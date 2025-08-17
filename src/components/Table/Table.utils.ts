import type { Row } from '@tanstack/react-table';

export const filterWithLowerCase = <TData>(
  row: Row<TData>,
  columnId: string,
  filterValue: unknown
): boolean => {
  const cellValue = String(row.getValue(columnId)).toLowerCase();
  
  if (Array.isArray(filterValue)) {
    return filterValue.some(v => cellValue.includes(String(v).toLowerCase()));
  }
  
  return cellValue.includes(String(filterValue).toLowerCase());
};

export const generateUniqueOptions = <TData>(
  data: TData[],
  key: keyof TData,
  formatValue?: (value: string) => string
) => {
  if (!data || data.length === 0) return [];
  
  const uniqueValues = [
    ...new Set(
      data
        .map(row => row[key])
        .filter(Boolean)
        .map(value => String(value))
    )
  ];
  
  return uniqueValues.map(value => ({
    label: value,
    value: formatValue ? formatValue(value) : value.toLowerCase(),
  }));
};