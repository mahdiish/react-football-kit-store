import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";

const linkClassNames =
  "mt-0 p-5 w-1/2 text-base text-center sm:mt-5 sm:w-full sm:text-left";

const activeLinkClassNames =
  "text-orange-500 font-bold bg-white border-b-4 border-l-0 border-orange-500 sm:border-l-4 sm:border-b-0";

const classNamesFn = ({ isActive }) => {
  return isActive
    ? classNames(linkClassNames, activeLinkClassNames)
    : classNames(linkClassNames, "text-white");
};

function SideBar() {
  const { cartItems } = useSelector((state) => {
    return { cartItems: state.cart.cartItems };
  });

  const cartItemsNumber = cartItems.reduce((accumulator, current) => {
    return accumulator + current.number;
  }, 0);

  return (
    <div className="flex flex-row h-16 w-full pt-0 bg-black border-white border-b sm:flex-col sm:w-1/5 sm:h-full sm:pt-5 sm:border-r sm:fixed sm:top-0 sm:left-0">
      <NavLink to="/" className={classNamesFn}>
        Store
      </NavLink>
      <NavLink to="/cart" className={classNamesFn}>
        Cart{" "}
        <span className="mx-2 py-0.5 px-2 bg-orange-500 rounded-full text-center text-white font-bold">
          {cartItemsNumber}
        </span>
      </NavLink>
    </div>
  );
}

export default SideBar;
