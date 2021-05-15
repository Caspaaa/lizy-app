import * as React from "react";
import { PriceRangeButton } from "./PriceRangeButton";

// const addOrRemove = (array: number, item: number) => {
//   const exists === item;
//   if (exists) {
//     return array.filter((element: number) => {
//       return element !== item;
//     });
//   }
//   const result = array;
//   result.push(item);
//   return result;
// };

interface Props {
  priceRange: number;
  updatePriceRange: Function;
}

export const PriceRange: React.FunctionComponent<Props> = ({
  priceRange,
  updatePriceRange,
}) => {
  const handlePriceRangeChange = (event: any) => {
    const { value } = event.currentTarget;
    updatePriceRange(value);
  };

  return (
    <div className="input-price">
      <PriceRangeButton
        priceRange={priceRange}
        value={1}
        handlePriceRangeChange={handlePriceRangeChange}
      />
      <PriceRangeButton
        priceRange={priceRange}
        value={2}
        handlePriceRangeChange={handlePriceRangeChange}
      />
      <PriceRangeButton
        priceRange={priceRange}
        value={3}
        handlePriceRangeChange={handlePriceRangeChange}
      />
      <PriceRangeButton
        priceRange={priceRange}
        value={4}
        handlePriceRangeChange={handlePriceRangeChange}
      />
    </div>
  );
};
