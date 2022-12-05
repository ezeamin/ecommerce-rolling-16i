import { useEffect } from "react";
import Router from "./routing/Router";

const App = () => {

  useEffect(() => {
    localStorage.setItem("user","20437063932");
    localStorage.setItem("password","123456");
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
