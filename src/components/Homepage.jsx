import { Link } from "react-router-dom";
import { useGetAllCountriesQuery } from "../features/api/apiSlice";
import Details from "./Details";
import { useState } from "react";

const Homepage = () => {
  const { data } = useGetAllCountriesQuery();
  const [page, setPage] = useState(0);

  if (!data) {
    return (
      <h1 className="text-white text-2xl flex justify-center items-center h-screen">
        Loading...
      </h1>
    );
  }
  const countriesPerPage = 20;
  const startIndex = page * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;
  const countriesToDisplay = data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden gap-12 px-10 mt-12">
      {countriesToDisplay.map((country) => {
        const { name, population, region, capital, flags } = country;
        return (
          <>
            <Link
              to={`/details/${name.common}`}
              element={<Details />}
              key={population}
            >
              <section className="text-white bg-dark-blue rounded-md">
                <img className="h-[340px] md:h-64 w-full" src={flags.svg} />
                <div className="mt-3 p-5">
                  <h2 className="font-semibold text-2xl"> {name.common}</h2>
                  <p className="mb-2 mt-4 font-light">
                    <span className="text-white font-semibold">
                      Population:
                    </span>{" "}
                    {population}{" "}
                  </p>
                  <p className="font-light">
                    <span className="text-white font-semibold">Region:</span>{" "}
                    {region}{" "}
                  </p>
                  <p className="mt-2 mb-4 font-light">
                    <span className="text-white font-semibold">Capital:</span>{" "}
                    {capital}{" "}
                  </p>
                </div>
              </section>
            </Link>
          </>
        );
      })}
      <div className="flex text-white text-3xl justify-center items-center">
        <button onClick={handleNextPage}>Next</button>
      </div>
    </article>
  );
};

export default Homepage;
