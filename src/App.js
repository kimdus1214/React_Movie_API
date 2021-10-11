import React from "react";
import { Route } from "react-router";
import Main from "./pages/Main";
import MovieDetail from "./pages/MovieDetail";
import { GlobalStyles } from "./components/style/GlobalStyle";
import Navi from "./pages/Navi";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navi />
      <Route exact={true} path="/" component={Main} />
      <Route path="/movie/:movieId" component={MovieDetail} />
    </>
  );
}

export default App;
