import React from "react";
import { Route } from "react-router";
import Main from "./pages/Main";
import { GlobalStyles } from "./components/style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyles />
      <Route exact={true} path="/" component={Main} />
    </>
  );
}

export default App;
