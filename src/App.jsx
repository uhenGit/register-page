import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";

import store from "./store";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
