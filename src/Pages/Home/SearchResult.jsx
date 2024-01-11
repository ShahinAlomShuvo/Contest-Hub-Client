import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import ContestCard from "../../Components/Shared/ContestCard";
import SectionHeader from "../../Components/Shared/SectionHeader";

const SearchResult = ({ value }) => {
  const axiosPublic = useAxiosPublic();
  console.log(value);

  const { isPending, data: searchResult = [] } = useQuery({
    queryKey: ["searchResult"],
    queryFn: async () => {
      if (value) {
        const res = await axiosPublic.get(`/searchContest/?value=${value}`);
        return res.data;
      }
    },
  });

  return (
    <div className='bg-base-200 py-10'>
      <SectionHeader title={"Search Result"}></SectionHeader>
      <div className='grid grid-cols-1 md:grid-cols-4  container mx-auto gap-10'>
        {searchResult?.map((items) => (
          <ContestCard
            key={items._id}
            items={items}
            isPending={isPending}
          ></ContestCard>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
