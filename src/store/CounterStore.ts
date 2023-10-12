import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IonicStorage } from "./ionic.storage";
export const useCounterStore = create<CounterStoreType>()(
  persist(
    (set) => ({
      asyncIonicStorage: false,
      clickCounter: 0,
      handleRefresh: () => set({ clickCounter: 0 }),
      handleIncrement: () =>
        set((state) => ({ clickCounter: state.clickCounter + 1 })),
      handleDecrement: () =>
        set((state) => ({ clickCounter: state.clickCounter - 1 })),
      setSyncIonicStorage: () => set({ asyncIonicStorage: true }),
    }),
    // { name: "counterStore" } // <-- Por defecto: usa localStorage
    {
      name: "counterStore",
      storage: IonicStorage, // <-- Creas un Custom Storage
      onRehydrateStorage: () => (state) => {
        if (state) state.setSyncIonicStorage();
      },
    }
  )
);
