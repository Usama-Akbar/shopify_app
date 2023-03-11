import {
  NavigationMenu,
  Provider as AppBridgeProvider,
} from "@shopify/app-bridge-react";
import { AppProvider as PolarisProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import ApolloClientProvider from "./providers/ApolloClientProvider";
import "./index.css";
import "@shopify/polaris/build/esm/styles.css";
import TopBar from "./components/topbar/Topbar";
import SidebarNew from "./components/sidebar/SidebarNew";

const appBridgeConfig = {
  apiKey: process.env.SHOPIFY_API_KEY,
  host: "YWRtaW4uc2hvcGlmeS5jb20vc3RvcmUvZGlrbG91",
  // host: new URL(location).searchParams.get("host"),
  forceRedirect: false,
};

export default function App() {
  return (
    <PolarisProvider i18n={translations}>
      <AppBridgeProvider config={appBridgeConfig}>
        <NavigationMenu
          navigationLinks={[
            {
              label: "Debug Cards",
              destination: "/debug",
            },
          ]}
        />
        <ApolloClientProvider>
          <div className="root-container">
            <SidebarNew />
            <TopBar />
          </div>
        </ApolloClientProvider>
      </AppBridgeProvider>
    </PolarisProvider>
  );
}
