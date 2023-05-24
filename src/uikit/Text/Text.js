import classNames from "classnames/bind";
import styles from "./text.module.css";

const defaultProps = {
  tag: "span",
  color: "primary",
  size: 14,
};

const cx = classNames.bind(styles);

const Text = ({
  tag: Element,
  children,
  className,
  size,
  color,
  bold,
  align,
  transform,
}) => {
  const textClassName = cx(
    {
      [`color-${color}`]: color,
      bold,
      [`text-${align}`]: align,
      [`transform-${transform}`]: transform,
      [`text-${size}`]: size,
    },
    className,
    styles.common
  );
  return <Element className={textClassName}>{children}</Element>;
};

Text.defaultProps = defaultProps;

export default Text;
