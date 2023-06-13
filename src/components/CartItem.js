import { useDispatch } from "react-redux";
import { removeCartItem } from "../store";
import { MdDelete } from "react-icons/md";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeCartItem(item));
  };

  return (
    <div className="flex flex-row h-14 w-full border border-white justify-between my-2 items-center pr-3">
      <img
        src={item.src}
        alt={`${item.name} - ${item.location}`}
        className="bg-white h-full"
      />
      <p className="text-white text-base font-bold">
        {item.name}-{item.location}
      </p>
      <p className="text-white text-base">
        {item.number} × {item.cost}$ = {item.number * item.cost}$
      </p>
      <MdDelete
        onClick={handleClick}
        className="text-red-500 text-2xl cursor-pointer"
      />
    </div>
  );
}

export default CartItem;
