import { IonText } from "@ionic/react";

const Counter: React.FC<
  Omit<TabOneViewProps, "languageApp" | "isAppReady">
> = ({ clickCounter, labelClick }) => {
  return (
    <div className="container">
      <IonText color="primary">
        <h1>
          <strong>{clickCounter}</strong>
        </h1>
      </IonText>
      <p>{labelClick}</p>
    </div>
  );
};

export default Counter;
