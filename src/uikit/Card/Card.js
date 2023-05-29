import classNames from "classnames/bind";
import Flex from "../Flex/Flex";
import styles from "./card.module.css";

const cx = classNames.bind(styles);

const Card = ({ children, className }) => {
  const cardClassName = cx(className, styles.common);
  return <Flex className={cardClassName}>{children}</Flex>;
};

export default Card;
