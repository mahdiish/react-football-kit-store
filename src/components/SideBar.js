import { NavLink } from "react-router-dom";
import classNames from "classnames";

const linkClassNames =
  "mt-0 p-5 w-1/2 text-center text-white sm:mt-5 sm:w-full sm:text-left";

const activeLinkClassNames =
  "text-orange-500 font-bold bg-white border-b-4 border-l-0 border-orange-500 sm:border-l-4 sm:border-b-0";

const classNamesFn = ({ isActive }) => {
  return isActive
    ? classNames(linkClassNames, activeLinkClassNames)
    : classNames(linkClassNames);
};

function SideBar() {
  return (
    <div className="flex flex-row h-16 w-full pt-0 bg-black border-white border-b sm:flex-col sm:w-1/6 sm:h-full sm:pt-5 sm:border-r">
      <NavLink to="/" className={classNamesFn}>
        Store
      </NavLink>
      <NavLink to="/card" className={classNamesFn}>
        Card
      </NavLink>
    </div>
  );
}

export default SideBar;
