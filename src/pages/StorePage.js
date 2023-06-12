import { useSelector } from "react-redux";
import Form from "../components/Form";
import KitItem from "../components/KitItem";
import { kitItems } from "../data/data";

function StorePage() {
  const { league, location, searchTerm } = useSelector((state) => {
    return {
      league: state.form.league,
      location: state.form.location,
      searchTerm: state.form.searchTerm,
    };
  });

  const renderedKitItems = kitItems
    .filter((item) => {
      return league !== "All Leagues" ? item.league === league : item;
    })
    .filter((item) => {
      return location !== "Home & Away" ? item.location === location : item;
    })
    .filter((item) => {
      return item.name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    })
    .map((item) => {
      return <KitItem key={`${item.name}-${item.location}`} item={item} />;
    });

  return (
    <div className="h-full">
      <h1 className="text-white text-center font-bold tracking-widest">
        Store
      </h1>
      <Form />
      <div className="grid grid-cols-2 pb-6 sm:grid-cols-3 md:grid-cols-4 gap-x-1 gap-y-4">
        {renderedKitItems}
      </div>
    </div>
  );
}

export default StorePage;
