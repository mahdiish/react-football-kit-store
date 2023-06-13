import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import StorePage from "./pages/StorePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full bg-black sm:flex-row items-center">
        <SideBar />
        <div className="w-full h-full overflow-y-scroll bg-black px-3 py-4 sm:w-4/5 sm:ml-[20%]">
          <Routes>
            <Route path="react-football-kit-store/" element={<StorePage />} />
            <Route
              path="react-football-kit-store/cart"
              element={<CartPage />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
