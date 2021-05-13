import * as React from "react";
import { PriceRangeButton } from "./PriceRangeButton";

const addOrRemove = (array: number[], item: number) => {
  const exists = array.includes(item);
  if (exists) {
    return array.filter((element: number) => {
      return element !== item;
    });
  }
  const result = array;
  result.push(item);
  return result;
};

interface Props {
  priceRange: number[];
  updatePriceRange: Function;
}

export const PriceRange: React.FunctionComponent<Props> = ({
  priceRange,
  updatePriceRange,
}) => {
  const handlePriceRangeChange = (event: any) => {
    const { value } = event.target;
    const newPriceRange = addOrRemove(priceRange, parseInt(value));

    updatePriceRange(newPriceRange);
  };

  return (
    <div>
      <label>Price range </label>
      <PriceRangeButton
        isActive={true}
        value={1}
        text="$"
        handlePriceRangeChange={handlePriceRangeChange}
      />
      <PriceRangeButton
        isActive={false}
        value={2}
        text="$$"
        handlePriceRangeChange={handlePriceRangeChange}
      />
      <PriceRangeButton
        isActive={false}
        value={3}
        text="$$$"
        handlePriceRangeChange={handlePriceRangeChange}
      />
      <PriceRangeButton
        isActive={false}
        value={4}
        text="$$$$"
        handlePriceRangeChange={handlePriceRangeChange}
      />
    </div>
  );
};
