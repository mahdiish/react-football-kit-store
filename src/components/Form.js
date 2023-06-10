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
    <div className="flex flex-row justify-between px-3 my-5">
      <div className="flex flex-row justify-between mr-4 w-8/12 sm:w-4/6 sm:mr-6">
        <select
          onChange={handleLeagueChange}
          value={league}
          className="text-black w-1/2 mr-3 sm:mr-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option>All Leagues</option>
          <option>Premier League</option>
          <option>LaLiga</option>
          <option>Bundesliga</option>
          <option>Serie A</option>
        </select>

        <select
          value={location}
          onChange={handleLocationChange}
          className="text-black w-1/2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option>Home & Away</option>
          <option>Home</option>
          <option>Away</option>
        </select>
      </div>
      <input
        placeholder="Search team..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="text-orange-500 w-4/12 sm:w-2/6 px-2 h-9 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}

export default Form;
