import CardComponent from "./Card";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";

type CardType = typeof CardComponent;

interface Card extends CardType {
  Image: typeof CardImage;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
}

const Card = CardComponent as Card;
Card.Image = CardImage;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
export * from "./Card";
