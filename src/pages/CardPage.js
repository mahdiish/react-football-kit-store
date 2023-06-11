import CardItem from "../components/CardItem";
import Footer from "../components/Footer";

import ManchesterCityHome from "../images/ManchesterCity-Home.jpg";
import ManchesterCityAway from "../images/ManchesterCity-Away.jpg";
const cardItems = [
  {
    name: "Manchester City",
    league: "Premier League",
    location: "Home",
    src: ManchesterCityHome,
    cost: 300,
    number: 2,
  },
  {
    name: "Manchester City",
    league: "Premier League",
    location: "Away",
    src: ManchesterCityAway,
    cost: 280,
    number: 2,
  },
];
const totalCardValue = cardItems.reduce((total, item) => {
  return total + item.cost * item.number;
}, 0);

function CardPage() {
  const renderedCardItems = cardItems.map((item) => {
    return <CardItem item={item} />;
  });

  return (
    <div>
      <h1 className="text-white text-center font-bold tracking-widest mb-5">
        Card
      </h1>
      <div>{renderedCardItems}</div>
      <p className="text-white">Total Value: {totalCardValue}$</p>
      <Footer />
    </div>
  );
}

export default CardPage;
