import { Link, useParams } from "react-router-dom";
import { useGetAllCountriesQuery } from "../features/api/apiSlice";

const CountryDetails = () => {
  const { name } = useParams();
  const { data } = useGetAllCountriesQuery();

  if (!data) {
    return (
      <h1 className="text-2xl text-white grid place-items-center align-middle">
        Loading...
      </h1>
    );
  }

  const selectedCountry = data.find((country) => country.name.common === name);

  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags,
  } = selectedCountry;

  if (!selectedCountry) {
    return <h1>Country not found</h1>;
  }

  return (
    <article className="text-white grid place-items-center grid-cols-3 mt-44">
      <div>
        <Link to="/">
          <h5 className="pl-12 mb-20 text-2xl rounded-md ">Back</h5>
        </Link>
        <img className="pl-12 w-4/5" src={flags.svg} />
      </div>

      <div className="mr-34 text-xl ">
        <h2 className="text-2xl font-extrabold mb-8">
          {selectedCountry.name.common}{" "}
        </h2>
        <h4 className="font-semibold">
          Native Name: <span className="font-light">{nativeName} </span>
        </h4>
        <h4 className="font-semibold">
          Population: <span className="font-light">{population} </span>{" "}
        </h4>
        <h4 className="font-semibold">
          Region: <span className="font-light">{region} </span>{" "}
        </h4>
        <h4 className="font-semibold">
          Sub Region: <span className="font-light">{subregion} </span>{" "}
        </h4>
        <h4 className="font-semibold">
          Capital: <span className="font-light">{capital}</span>{" "}
        </h4>
      </div>
      <div className="text-xl">
        <h4 className="font-semibold">
          Top Level Domain <span className="font-light">{tld} </span>
        </h4>
        <h4 className="font-semibold">
          Currencies:
          <span className="font-light">
            {Object.values(currencies)
              .map((currency) => currency.name)
              .join(", ")}
          </span>
        </h4>
        <h4 className="font-semibold">
          Languages:{" "}
          <span className="font-light">
            {Object.values(languages).join(", ")}{" "}
          </span>
        </h4>
      </div>
      <div className="col-span-3 grid place-items-center mt-8">
        <h4 className="font-semibold text-xl text-center text-white">
          Border Countries:{" "}
          <span className="bg-dark-blue p-3">{borders.join(" ")} </span>
        </h4>
      </div>
    </article>
  );
};

export default CountryDetails;
