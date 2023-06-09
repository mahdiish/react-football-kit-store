import { useDispatch, useSelector } from "react-redux";
import { changeLeague, changeLocation, changeSearchTerm } from "../store";

function Form() {
  const dispatch = useDispatch();
  const { league, location, searchTerm } = useSelector((state) => {
    return {
      league: state.form.league,
      location: state.form.location,
      searchTerm: state.form.searchTerm,
    };
  });

  const handleLeagueChange = (event) => {
    dispatch(changeLeague(event.target.value));
  };

  const handleLocationChange = (event) => {
    dispatch(changeLocation(event.target.value));
  };

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div>
      <select onChange={handleLeagueChange} value={league}>
        <option>All Leagues</option>
        <option>Premier League</option>
        <option>LaLiga</option>
        <option>Bundesliga</option>
        <option>Serie A</option>
      </select>

      <select value={location} onChange={handleLocationChange}>
        <option>Home & Away</option>
        <option>Home</option>
        <option>Away</option>
      </select>

      <input value={searchTerm} onChange={handleSearchTermChange} />
    </div>
  );
}

export default Form;
