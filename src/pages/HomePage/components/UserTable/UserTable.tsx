import DataTable from '@/components/Table/Table';

import { columns } from './UserTable.constants';
import useUserTable from './UserTable.hook';

const UserTable = () => {
  const { data, isLoading, error } = useUserTable();

  return (
    <DataTable
      data={data}
      columns={columns}
      isLoading={isLoading}
      error={error?.message}
      search={{
        placeholder: 'Search by email...',
        targetColumn: 'email',
      }}
      filterOptions={[
        {
          label: 'City',
          columnKey: 'city',
        },
        {
          label: 'Company',
          columnKey: 'company',
        },
      ]}
    />
  );
};

export default UserTable;
