import useGetAllUsers from "@/services/hooks/useGetAllUsers";

const useUserTable = () => {
  const { data: fetchedData, isLoading, isError, error } = useGetAllUsers();
  const data =
    (fetchedData &&
      fetchedData.map((user) => ({
        ...user,
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
        company: user.company.name,
        phone: user.phone,
        website: user.website,
      }))) ||
    [];

  return {
    data,
    isLoading,
    isError,
    error
  }
}

export default useUserTable