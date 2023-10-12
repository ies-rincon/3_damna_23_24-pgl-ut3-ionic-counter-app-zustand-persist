import { type StateStorage, createJSONStorage } from "zustand/middleware";
import { Drivers, Storage, type StorageConfig } from "@ionic/storage";
// Init Storage
const _onCreateStorage = async (config: StorageConfig): Promise<Storage> => {
  const storage = new Storage(config);
  await storage.create();
  return storage;
};
const _storage = _onCreateStorage({
  name: "__ionicStorage",
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
});

const ionicStorageApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const storage = await _storage;
      const item = await storage.get(name);
      console.log("ionicStorageApi - getItem: ", { name, item });
      return item;
    } catch (error) {
      throw error;
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    try {
      const storage = await _storage;
      console.log("ionicStorageApi - setItem", { name, value });
      await storage.set(name, value);
    } catch (error) {
      throw error;
    }
  },
  removeItem: function (name: string): void | Promise<void> {
    console.log("ionicStorageApi - removeItem", { name });
  },
};

export const IonicStorage = createJSONStorage(() => ionicStorageApi);
