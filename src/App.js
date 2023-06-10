import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import StorePage from "./pages/StorePage";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col sm:flex-row items-center h-full">
        <SideBar />
        <div className="w-full h-screen bg-black px-3 overflow-y-scroll sm:w-4/5 sm:ml-[20%]">
          <Routes>
            <Route path="/" element={<StorePage />} />
            <Route path="/card" element={<CardPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
