import React from "react";
import TabOneView from "./one.view";
import { useCounterStore } from "../../store/CounterStore";
import { useLanguageStore } from "../../store/LanguageStore";
import "./TabOne.css";

const TabOneContainer: React.FC = () => {
  const asyncIonicStorage = useCounterStore((state) => state.asyncIonicStorage);
  const clickCounter = useCounterStore((state) => state.clickCounter);
  const languageApp = useLanguageStore((state) => state.languageApp);
  const labelClick = clickCounter === 1 ? "Click" : "Clicks";
  const props = {
    isAppReady: asyncIonicStorage,
    clickCounter,
    labelClick,
    languageApp,
  };
  return <TabOneView {...props} />;
};

export default TabOneContainer;
