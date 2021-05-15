import * as React from "react";

interface Props {
  priceRange: number;
  value: 1 | 2 | 3 | 4;
  handlePriceRangeChange: Function;
}

export const PriceRangeButton: React.FunctionComponent<Props> = ({
  priceRange,
  value,
  handlePriceRangeChange,
}) => {
  const toggleActive = (event: any) => {
    handlePriceRangeChange(event);
  };

  return (
    <button
      type="button"
      value={value}
      onClick={toggleActive}
      className={
        priceRange >= value
          ? "price-range-button price-range-button--active"
          : "price-range-button"
      }
    >
      <span className="price-range-button__text">€</span>
    </button>
  );
};
