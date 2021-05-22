import * as React from "react";
import phoneIcon from "../../assets/images/phone-icon.png";

interface Props {
  phone: string;
}

export const RestaurantPhone: React.FunctionComponent<Props> = ({ phone }) => {
  return (
    <div className="restaurant-desc-item restaurant-phone">
      <div className="restaurant-desc-item__icon">
        <img src={phoneIcon} alt="phone-icon" className="icon icon--phone" />
      </div>
      <div className="restaurant-desc-item__text">{phone}</div>
    </div>
  );
};
