import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import SimpleBottomNavigation from "./components/bottomMenu";
import "./App.css";

function App() {
  return (
    <Provider store={store()}>
      <div className="app">
        <SimpleBottomNavigation />
      </div>
    </Provider>
  );
}

export default App;
