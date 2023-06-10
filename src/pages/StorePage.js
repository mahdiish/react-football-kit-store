import Form from "../components/Form";
import KitItem from "../components/KitItem";
import { kitItems } from "../data/data";
function StorePage() {
  console.log(kitItems);
  const renderedKitItems = kitItems.map((item) => {
    return <KitItem item={item} />;
  });

  return (
    <div className="h-full">
      <h1 className="text-white text-center font-bold tracking-widest">
        Store
      </h1>
      <Form />
      <div className="grid grid-cols-4 gap-x-1 gap-y-4">{renderedKitItems}</div>
    </div>
  );
}

export default StorePage;
