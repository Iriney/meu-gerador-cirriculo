import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/route';
export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        style="light-content"

      />
      <Routes />
    </>
  );
}


