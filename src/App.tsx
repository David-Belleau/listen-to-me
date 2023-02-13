import "./App.css";
import Auth from "./Auth";
import Unauth from "./Unauth";

const App = () => {
  return (
    <>
    {'no user' ? <Unauth/> : <Auth/>}
    </>
  );
};

export default App;
