import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { SlBasket } from "react-icons/sl";

function CartPage() {
  const { cartItems } = useSelector((state) => {
    return { cartItems: state.cart.cartItems };
  });

  const totalCartValue = cartItems.reduce((total, item) => {
    return total + item.cost * item.number;
  }, 0);

  let renderedCartItems;
  if (cartItems.length !== 0) {
    renderedCartItems = cartItems.map((item) => {
      return <CartItem key={`${item.name}-${item.location}`} item={item} />;
    });
  } else {
    renderedCartItems = (
      <div className="flex flex-col items-center pt-8">
        <SlBasket className="text-white text-6xl" />
        <p className="text-white text-base font-bold text-center m-3">
          Your cart is empty!{" "}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-white text-base text-center font-bold tracking-widest mb-5">
        Cart
      </h1>
      <div>{renderedCartItems}</div>
      <p className="text-white text-base">Total Value: {totalCartValue}$</p>
    </div>
  );
}

export default CartPage;
