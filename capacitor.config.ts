import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'counter.app.zustand.persist',
  appName: 'counter-app-zustand-persist',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
