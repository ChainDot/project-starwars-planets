import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [end, setEnd] = useState([]);

  const hangleChangePageClick = () => {
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/planets/?page=${nextPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error: could not load data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPlanets((el) => el.concat(data.results));
        setEnd(data.next);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [nextPage]);

  return (
    <section className="container py-5">
      <h1 className="mb-5 text-center">List of Star Wars Planets</h1>
      <div className="row">
        {loading && <p>Loading in progress...</p>}
        {error && <p>{error}</p>}
        <Card planets={planets} />
      </div>
      {end === null ? (
        <h3 className="bg-dark text-white py-5 text-center">
          These are all the Planets you gonna find in the Star Wars Universe
        </h3>
      ) : (
        <button
          type="button"
          class="btn btn-primary btn-sm"
          onClick={hangleChangePageClick}
        >
          Next
        </button>
      )}
    </section>
  );
};

export default App;
