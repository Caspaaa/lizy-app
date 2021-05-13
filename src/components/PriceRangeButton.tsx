import * as React from "react";

interface Props {
  isActive: boolean;
  value: 1 | 2 | 3 | 4;
  text: string;
  handlePriceRangeChange: Function;
}

export const PriceRangeButton: React.FunctionComponent<Props> = ({
  isActive,
  value,
  text,
  handlePriceRangeChange,
}) => {
  const [active, setActive] = React.useState(isActive);

  const toggleActive = (event: any) => {
    handlePriceRangeChange(event);
    setActive((previous) => !previous);
  };

  return (
    <button
      type="button"
      value={value}
      onClick={toggleActive}
      className={active ? "price-range-button--active" : ""}
    >
      {text}
    </button>
  );
};
