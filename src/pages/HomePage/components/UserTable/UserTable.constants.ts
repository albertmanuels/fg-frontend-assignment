import { columnIndex, filterWithLowerCase } from "@/components/Table/Table.utils";

export const columns = [
  columnIndex,
  {
    accessorKey: "id",
    header: "ID",
    minSize: 60
  },
  {
    accessorKey: "name",
    header: "Name",
    minSize: 100
  },
  {
    accessorKey: "email",
    header: "Email",
    minSize: 100
  },
  {
    accessorKey: "city",
    header: "City",
    filterFn: filterWithLowerCase,
    minSize: 100
  },
  {
    accessorKey: "company",
    header: "Company",
    filterFn: filterWithLowerCase,
    minSize: 100
  },
  {
    accessorKey: "phone",
    header: "Phone",
    minSize: 100
  },
  {
    accessorKey: "website",
    header: "Website",    
    minSize: 100
  },
]