
import { GoogleOAuthProvider } from '@react-oauth/google';
//components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';




function App() {

  const clientId = '365023348920-n08dti2563dba9ck21d7lptefupuj70p.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
       <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
