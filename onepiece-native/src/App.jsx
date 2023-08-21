import Routes from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./contexts/auth";


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
