interface CounterStoreType {
  asyncIonicStorage: boolean;
  clickCounter: number;
  handleRefresh: () => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
  setSyncIonicStorage: () => void;
}
