import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor',
  webDir: 'out',
  server: {
    url: 'http://10.109.84.6:3000',
    cleartext: true
  }
};

export default config;
