import { IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { refresh, language } from "ionicons/icons";
import { useCounterStore } from "../store/CounterStore";
import { useLanguageStore } from "../store/LanguageStore";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const handleRefresh = useCounterStore((state) => state.handleRefresh);
  const changeLanguageApp = useLanguageStore(
    (state) => state.changeLanguageApp
  );
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {title}{" "}
          <IonIcon
            icon={refresh}
            className="ion-margin-start ion-float-right"
            color="primary"
            onClick={handleRefresh}
          ></IonIcon>
          <IonIcon
            icon={language}
            className="ion-float-right"
            color="primary"
            onClick={changeLanguageApp}
          ></IonIcon>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
