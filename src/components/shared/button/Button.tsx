import React from "react";
import { IonRippleEffect, IonIcon } from "@ionic/react";
import "./main.css";
import { useHistory } from "react-router-dom"; // Import useHistory hook

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
  title: string;
  icon?: string;
  width?: string;
  background?: string;
  routeTo?: string; // New prop for routeTo
}

const CustomButton: React.FC<CustomButtonProps> = ({
  rippleColor,
  title,
  icon,
  width,
  background,
  routeTo,
  ...props
}) => {
  const history = useHistory(); // Initialize useHistory

  const handleClick = () => {
    if (routeTo) {
      history.push(routeTo); // Navigate to routeTo path
    }
  };

  const buttonContent = (
    <>
      {icon && <IonIcon icon={icon} className="button-icon" />}
      {title}
      <IonRippleEffect className={rippleColor ? "custom-ripple" : ""} />
    </>
  );

  return (
    <button
      className="ion-activatable ripple-parent custom-button"
      style={{
        width: width ? width : "100%",
        background: background ? background : "",
      }}
      onClick={handleClick} // Call handleClick on click
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default CustomButton;
