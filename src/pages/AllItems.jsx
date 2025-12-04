import { useState } from "react";
import { useLoaderData } from "react-router";
import AllToys from "../components/AllToys";

const AllItems = () => {
  const toysData = useLoaderData().data;
  const [toys, setToys] = useState(toysData);
  const [filterText, setFilterText] = useState("");

  const handleSort = (order) => {
    const sortedToys = [...toys].sort((a, b) => {
      if (order === "asc") {
        return a.toyName > b.toyName ? 1 : -1;
      } else if (order === "desc") {
        return a.toyName < b.toyName ? 1 : -1;
      }
      return 0;
    });
    setToys(sortedToys);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterText(value);
    const filteredToys = toysData.filter((toy) =>
      toy.toyName.toLowerCase().includes(value.toLowerCase())
    );
    setToys(filteredToys);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-white tracking-wide my-5">
        All Toys
        <div className="w-28 h-1 mx-auto mt-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
      </h1>
      <div className="controls mb-4 flex justify-center items-center gap-4 mt-5">
        <input
          type="text"
          placeholder="Search toys..."
          value={filterText}
          onChange={handleFilter}
          className="input input-bordered outline-0"
        />

        <button
          onClick={() => handleSort("asc")}
          className="btn btn-sm btn-primary"
        >
          Sort A-Z
        </button>
        <button
          onClick={() => handleSort("desc")}
          className="btn btn-sm btn-primary"
        >
          Sort Z-A
        </button>
      </div>
      <AllToys toys={toys} />
    </div>
  );
};

export default AllItems;
