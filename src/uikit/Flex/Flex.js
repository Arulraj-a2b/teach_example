import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./flex.module.css";

const cx = classNames.bind(styles);
const defaultProps = {
  column: true,
};

const Flex = ({
  children,
  className,
  between,
  column,
  around,
  evenly,
  flex,
  row,
  center,
  start,
  end,
  middle,
  top,
  bottom,
  rowReverse,
  columnReverse,
  wrap,
  wrapReverse,
  height,
  width,
  id,
}) => {
  const flexClassName = cx(
    {
      ["between"]: between,
      ["column"]: column && !row,
      ["around"]: around,
      ["evenly"]: evenly,
      ["center"]: center,
      ["start"]: start,
      ["end"]: end,
      ["middle"]: middle,
      ["top"]: top,
      ["bottom"]: bottom,
      ["rowReverse"]: rowReverse,
      ["columnReverse"]: columnReverse,
      ["wrap"]: wrap,
      ["wrapReverse"]: wrapReverse,
      ["row"]: row,
    },
    className
  );

  return (
    <div id={id} style={{ flex, height, width }} className={flexClassName}>
      {children}
    </div>
  );
};

Flex.defaultProps = defaultProps;

export default Flex;
