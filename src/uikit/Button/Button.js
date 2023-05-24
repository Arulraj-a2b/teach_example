import classNames from "classnames/bind";
import Text from "../Text/Text";
import styles from "./button.module.css";
import { buttonHelper } from "./buttonHelper";

const cx = classNames.bind(styles);

const Button = ({
  children,
  types,
  className,
  disabled,
  onClick,
  style,
  onKeyDown,
  textSize,
  id,
  type,
}) => {
  const buttonClassName = cx(
    {
      [`buttonTypes-${types}`]: types,
      [`disabled-${types}`]: disabled,
    },
    className,
    "common"
  );

  const { textColor } = buttonHelper(types, disabled);
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={buttonClassName}
      onKeyDown={onKeyDown}
    >
      {typeof children === "string" || typeof children === "number" ? (
        <Text size={textSize} color={textColor}>
          {children}
        </Text>
      ) : (
        children
      )}
    </button>
  );
};

const defaultProps = {
  types: "primary",
  type: "button",
  textSize: 16,
};

Button.defaultProps = defaultProps;

export default Button;
