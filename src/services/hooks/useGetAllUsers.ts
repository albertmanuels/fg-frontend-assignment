import { keepPreviousData, useQuery, type UseQueryResult } from '@tanstack/react-query'

import { API_URL } from '@/config/environment'
import { FIVE_MINUTES } from '@/constants/globals'

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserResponse  {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const useGetAllUsers = (): UseQueryResult<UserResponse[], Error> => {
  const query = useQuery({
    placeholderData: keepPreviousData,
    queryFn: async () => {
      const response = await fetch(`${API_URL}/users`)
      if (!response.ok) throw new Error('Network response was not ok')
      return response.json()
    },
    queryKey: ['get-all-users'],
    staleTime: FIVE_MINUTES
  })
  return query
}

export default useGetAllUsers