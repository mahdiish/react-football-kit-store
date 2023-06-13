import { useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import { SlBasket } from "react-icons/sl";

function CardPage() {
  const { cardItems } = useSelector((state) => {
    return { cardItems: state.card.cardItems };
  });

  const totalCardValue = cardItems.reduce((total, item) => {
    return total + item.cost * item.number;
  }, 0);

  let renderedCardItems;
  if (cardItems.length !== 0) {
    renderedCardItems = cardItems.map((item) => {
      return <CardItem key={`${item.name}-${item.location}`} item={item} />;
    });
  } else {
    renderedCardItems = (
      <div className="flex flex-col items-center pt-8">
        <SlBasket className="text-white text-6xl" />
        <p className="text-white font-bold text-center m-3">
          Your card is empty!{" "}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-white text-base text-center font-bold tracking-widest mb-5">
        Card
      </h1>
      <div>{renderedCardItems}</div>
      <p className="text-white text-base">Total Value: {totalCardValue}$</p>
    </div>
  );
}

export default CardPage;
