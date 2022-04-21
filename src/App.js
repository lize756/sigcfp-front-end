import "./App.css";
import React from "react";
import MainCompany from "./config/routes/MainCompany";
import MainLocation from "./config/routes/MainLocation";
import MainDirector from "./config/routes/MainDirector";
import MainPromotion from "./config/routes/MainPromotion";

//import router to control the router of all aplication
import { BrowserRouter as Router } from "react-router-dom";

//Redu
import { Provider } from "react-redux";
import store from "../src/components/store/index";
import MainRegister from "./config/routes/MainRegister";

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/**" All app store"*/}
      <Router>
        {" "}
        {/**This tag allow keep the global state of all aplication */}
        <div>
          <MainRegister />
          <MainCompany />
          <MainLocation />
          <MainDirector />
          <MainPromotion />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
