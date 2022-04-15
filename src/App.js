import "./App.css";
import React from "react";
import MainCompany from "./config/routes/MainCompany";
import MainLocation from "./config/routes/MainLocation";
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
        <div>
          <MainRegister />
          <MainCompany />
          <MainLocation />
        </div>
    </Provider>
  );
}

export default App;
