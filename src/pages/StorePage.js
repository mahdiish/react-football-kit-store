import { useSelector } from "react-redux";
import Form from "../components/Form";
import KitItem from "../components/KitItem";
import { kitItems } from "../data/data";
import { TbMoodSad } from "react-icons/tb";

function StorePage() {
  const { league, location, searchTerm } = useSelector((state) => {
    return {
      league: state.form.league,
      location: state.form.location,
      searchTerm: state.form.searchTerm,
    };
  });

  const matchedKitItems = kitItems
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
    });

  let zeroRenderedKitItems;
  let renderedKitItems;
  if (matchedKitItems.length !== 0) {
    renderedKitItems = matchedKitItems.map((item) => {
      return <KitItem key={`${item.name}-${item.location}`} item={item} />;
    });
  } else {
    zeroRenderedKitItems = (
      <div className="flex flex-col items-center pt-8">
        <TbMoodSad className="text-white text-6xl" />
        <p className="text-white text-base font-bold text-center m-3">
          Oops! There is not any item{" "}
        </p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <h1 className="text-white text-base text-center font-bold tracking-widest">
        Store
      </h1>
      <Form />
      <div>{zeroRenderedKitItems}</div>
      <div className="grid grid-cols-2 pb-6 sm:grid-cols-3 md:grid-cols-4 gap-x-1 gap-y-4">
        {renderedKitItems}
      </div>
    </div>
  );
}

export default StorePage;
