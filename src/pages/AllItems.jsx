import { useLoaderData } from "react-router";
import AllToys from "../components/AllToys";

const AllItems = () => {
  const toys = useLoaderData().data;

  return (
    <div>
      <AllToys toys={toys}></AllToys>
    </div>
  );
};

export default AllItems;
