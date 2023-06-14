import { Link } from "react-router-dom";
import { useGetAllCountriesQuery } from "../features/api/apiSlice";
import Details from "./Details";

const Homepage = () => {
  const { data } = useGetAllCountriesQuery();

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden gap-12 px-10 mt-12">
      {data
        .map((country) => {
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
        })
        .slice(0, 10)}
    </article>
  );
};

export default Homepage;

{
  /* <section
            className="text-white bg-dark-blue rounded-md"
            key={country.population}
          >
            <img className="w-full" src={country.flags.svg} />
            <h2 className="font-semibold text-xl"> {country.name.common}</h2>
            <p>
              <span className="text-white font-semibold">Population</span>{" "}
              {country.population}{" "}
            </p>
            <p>
              <span className="text-white font-semibold">Region</span>{" "}
              {country.region}{" "}
            </p>
            <p>
              <span className="text-white font-semibold">Capital</span>{" "}
              {country.capital}{" "}
            </p>
          </section> */
}
