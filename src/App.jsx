import React, { useState } from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue" message="testetst" />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

export default App;
