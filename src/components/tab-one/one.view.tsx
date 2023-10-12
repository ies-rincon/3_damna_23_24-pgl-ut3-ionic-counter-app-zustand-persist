import { IonContent, IonFab, IonLoading, IonPage } from "@ionic/react";
import { add, remove, refresh } from "ionicons/icons";
import Counter from "../Counter";
import { CustomButton } from "./one.components";
import Languages from "../../constants/Languages";
import Header from "../Headers";

const TabOneView: React.FC<TabOneViewProps> = ({
  isAppReady,
  clickCounter,
  labelClick,
  languageApp,
}) => (
  <IonPage>
    <Header title={`${Languages[languageApp].tab} 1`} />
    <IonLoading
      isOpen={!isAppReady}
      message="Loading..."
      duration={3000}
      spinner="circles"
    />
    {isAppReady && (
      <IonContent fullscreen className="ion-padding">
        <h1>{Languages[languageApp].counter}</h1>
        <Counter clickCounter={clickCounter} labelClick={labelClick} />
        <IonFab color="primary" slot="fixed" vertical="bottom" horizontal="end">
          <CustomButton icon={refresh} iconName="refresh" />
          <CustomButton icon={add} iconName="plus-one" />
          <CustomButton icon={remove} iconName="exposure-minus-1" />
        </IonFab>
      </IonContent>
    )}
  </IonPage>
);
export default TabOneView;
