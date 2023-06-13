import { useDispatch } from "react-redux";
import { addCartItem } from "../store";

function KitItem({ item }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addCartItem(item));
  };

  return (
    <div className="flex flex-col items-center border border-white rounded-lg pb-1.5">
      <img
        src={item.src}
        alt={`${item.name} - ${item.location}`}
        className="bg-white h-72 w-full rounded-t-lg"
      />
      <p className="text-white text-base font-bold">{item.name}</p>
      <p className="text-white text-base mb-1.5 mt-1">
        {item.location} <span className="text-white font-bold">|</span>{" "}
        {item.cost}$
      </p>
      <button
        onClick={handleClick}
        className="text-white text-base rounded-sm px-3.5 py-2 bg-orange-500 hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default KitItem;
