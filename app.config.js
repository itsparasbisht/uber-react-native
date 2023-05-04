import "dotenv/config";

const GOOGLE_MAPS_APIKEY = process.env.GOOGLE_MAPS_APIKEY;

export default {
  expo: {
    name: "Uber RN",
    slug: "uber-react-native",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.parasbisht.uberreactnative",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "2ce79917-98ad-4386-97da-45ca59df1970",
      },
      googleMapApiKey: GOOGLE_MAPS_APIKEY,
    },
  },
};
