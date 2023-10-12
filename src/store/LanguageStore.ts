import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create<LanguageStoreType>()(
  persist(
    (set, get) => ({
      languageApp: "es",
      changeLanguageApp: () => {
        const { languageApp } = get();
        if (languageApp === "es") {
          set({ languageApp: "en" });
        } else {
          set({ languageApp: "es" });
        }
      },
    }),
    { name: "languageStore" } // <-- Por defecto: usa localStorage
  )
);
