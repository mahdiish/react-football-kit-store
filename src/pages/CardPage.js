import { useSelector } from "react-redux";
import CardItem from "../components/CardItem";

function CardPage() {
  const { cardItems } = useSelector((state) => {
    return { cardItems: state.card.cardItems };
  });

  const totalCardValue = cardItems.reduce((total, item) => {
    return total + item.cost * item.number;
  }, 0);

  const renderedCardItems = cardItems.map((item) => {
    return <CardItem key={`${item.name}-${item.location}`} item={item} />;
  });

  return (
    <div>
      <h1 className="text-white text-center font-bold tracking-widest mb-5">
        Card
      </h1>
      <div>{renderedCardItems}</div>
      <p className="text-white">Total Value: {totalCardValue}$</p>
    </div>
  );
}

export default CardPage;
