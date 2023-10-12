import React from "react";
import { IonFabButton, IonIcon } from "@ionic/react";
import { useCounterStore } from "../../store/CounterStore";

export const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  iconName,
}) => {
  const clickCounter = useCounterStore((state) => state.clickCounter);
  const handleRefresh = useCounterStore((state) => state.handleRefresh);
  const handleIncrement = useCounterStore((state) => state.handleIncrement);
  const handleDecrement = useCounterStore((state) => state.handleDecrement);

  const onPressHandler = () => {
    if (iconName === "refresh") {
      handleRefresh();
    } else if (iconName === "plus-one") {
      handleIncrement();
    } else if (iconName === "exposure-minus-1") {
      handleDecrement();
    }
  };

  return (
    <IonFabButton
      disabled={iconName === "exposure-minus-1" && clickCounter === 0}
      onClick={onPressHandler}
      style={{ margin: 10 }}
    >
      <IonIcon icon={icon}></IonIcon>
    </IonFabButton>
  );
};
