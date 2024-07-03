import './App.css';

import Header from './components/Header';
import InputTarefa from './components/InputTarefa';
import IAlert from './ui-react/IAlert';
import { AlertProvider } from './context/AlertContext';

function App() {
  return (
    <>
      <AlertProvider>
        <IAlert />
        <div className="container-app">
          <Header />
          <InputTarefa />
        </div>
      </AlertProvider>

    </>
  );
}

export default App;

