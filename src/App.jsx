import "./App.css";
import SignUp from "./components/SignUpForm";
import Authenticate from "./components/Authenitcate";
import { useState } from "react";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUp token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
};

export default App;
