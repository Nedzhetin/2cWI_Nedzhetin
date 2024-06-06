import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/header";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Menu />
      <User />
    </>
  );
}

export default App;
